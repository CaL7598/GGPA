
import React, { useState, useRef } from 'react';
import { Search, Loader2, BookOpen, AlertCircle, ExternalLink, Filter, Shield, FileUp, X, CheckCircle, Cpu, FileText, Eye, AlertTriangle, Layers, Target } from 'lucide-react';
import { AppPillar } from '../types';

// Lazy load Tesseract to avoid blocking app initialization
const getTesseract = async () => {
  const Tesseract = await import('tesseract.js');
  return Tesseract.default;
};

// Lazy load pdfjs-dist to avoid blocking app initialization
let pdfjsLib: any = null;
const getPdfjsLib = async () => {
  if (!pdfjsLib) {
    pdfjsLib = await import('pdfjs-dist');
    // Configure pdf.js worker
    pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
  }
  return pdfjsLib;
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;

const DeepSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [pillar, setPillar] = useState<string>('All Pillars');
  const [mandate, setMandate] = useState<string>('General Mandate');
  const [loading, setLoading] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [ocrStatus, setOcrStatus] = useState('');
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<{ data: string, mimeType: string, extractedText?: string, name?: string } | null>(null);
  const [showRawOcr, setShowRawOcr] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const performOcrOnImage = async (imageSource: string | HTMLCanvasElement): Promise<string> => {
    try {
      const Tesseract = await getTesseract();
      const { data: { text } } = await Tesseract.recognize(
        imageSource,
        'eng',
        { 
          logger: m => {
            if (m.status === 'recognizing text') {
              setOcrProgress(Math.floor(m.progress * 100));
            }
          } 
        }
      );
      return text;
    } catch (err) {
      console.error("[GGPA OCR Error]", err);
      throw new Error("OCR extraction failed. Ensure document clarity.");
    }
  };

  const processPdfFile = async (dataArray: Uint8Array): Promise<string> => {
    try {
      setOcrStatus('Initializing PDF Engine...');
      const pdfjs = await getPdfjsLib();
      const loadingTask = pdfjs.getDocument({ data: dataArray });
      const pdf = await loadingTask.promise;
      let fullText = '';
      const pageLimit = Math.min(pdf.numPages, 5); 

      for (let i = 1; i <= pageLimit; i++) {
        setOcrStatus(`Rendering Page ${i} of ${pageLimit}...`);
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) throw new Error("Canvas initialization failed.");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        await page.render({ canvasContext: context, viewport }).promise;
        setOcrStatus(`OCR Extraction (Page ${i})...`);
        const pageText = await performOcrOnImage(canvas);
        fullText += `--- PAGE ${i} ---\n${pageText}\n\n`;
      }
      return fullText;
    } catch (err) {
      console.error("[GGPA PDF Error]", err);
      throw new Error("PDF rendering failed. Verify file integrity.");
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
    setError(null);
    setFile(null);

    const isImage = selectedFile.type.startsWith('image/');
    const isPdf = selectedFile.type === 'application/pdf';

    if (!isImage && !isPdf) {
      setError("Protocol Exception: Only PDF, JPG, PNG, and WebP documents are accepted.");
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError("Capacity Alert: File exceeds the 10MB diagnostic limit.");
      return;
    }

    setLoading(true);
    setOcrStatus('Ingesting Document...');
    const reader = new FileReader();
    reader.onloadend = async () => {
      const dataUrl = reader.result as string;
      const base64String = dataUrl.split(',')[1];
      try {
        if (isPdf) {
          const response = await fetch(dataUrl);
          const buffer = await response.arrayBuffer();
          const extractedText = await processPdfFile(new Uint8Array(buffer));
          setFile({ data: base64String, mimeType: selectedFile.type, extractedText, name: selectedFile.name });
        } else {
          setOcrStatus('Scanning Image...');
          const extractedText = await performOcrOnImage(dataUrl);
          setFile({ data: base64String, mimeType: selectedFile.type, extractedText, name: selectedFile.name });
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
        setOcrStatus('');
      }
    };
    reader.readAsDataURL(selectedFile);
  };

  const clearFile = () => {
    setFile(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() && !file) return;
    setLoading(true);
    setError(null);
    setOcrStatus('Processing...');
    try {
      // Simple local search - just display OCR results and search query
      const searchResults = {
        summary: file?.extractedText 
          ? `Document analysis complete. Found ${file.extractedText.length} characters of extracted text.${query.trim() ? ` Searching for: "${query}"` : ''}`
          : `Search query: "${query}"`,
        relevantVolumes: pillar !== 'All Pillars' ? [pillar] : ['All Volumes'],
        legalBasis: mandate !== 'General Mandate' ? mandate : 'General Governance Framework',
        suggestedAction: file?.extractedText 
          ? 'Review the extracted text below for relevant information.'
          : 'Upload a document to extract text, or refine your search query.',
        ocrFindings: file?.extractedText || 'No document uploaded. Upload a PDF or image to extract text.'
      };
      setResult(searchResults);
    } catch (err) {
      setError("Search processing failed. Please try again.");
    } finally {
      setLoading(false);
      setOcrStatus('');
    }
  };

  return (
    <section className="py-24 bg-white" id="search">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-amber-50 text-amber-600 rounded-3xl mb-6 shadow-sm border border-amber-100">
            <Cpu size={32} />
          </div>
          <h2 className="text-4xl font-bold font-serif mb-4 text-slate-900">Deep-Search & OCR Engine</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Audit institutional protocols against the 5,000-page GGPA framework. Refine by technical pillar and global mandate.
          </p>
        </div>

        {error && (
          <div className="mb-8 p-5 bg-red-50 border border-red-100 rounded-3xl flex items-start gap-4 shadow-sm">
            <AlertTriangle className="text-red-600 shrink-0" size={20} />
            <div className="flex-grow">
              <h5 className="text-red-900 font-bold text-sm uppercase mb-1 tracking-widest">System Diagnostic Alert</h5>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
            <button onClick={() => setError(null)} className="text-red-400 hover:text-red-600"><X size={20} /></button>
          </div>
        )}

        <div className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 mb-12 shadow-inner">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search technical volumes or specific document clauses..."
                className="w-full pl-12 pr-4 py-5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-amber-500 bg-white shadow-sm font-medium"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Layers className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                <select 
                  value={pillar}
                  onChange={(e) => setPillar(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 appearance-none rounded-2xl border border-slate-200 bg-white focus:ring-2 focus:ring-amber-500 font-bold text-xs cursor-pointer"
                >
                  <option>All Pillars</option>
                  {Object.values(AppPillar).map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div className="relative">
                <Target className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                <select 
                  value={mandate}
                  onChange={(e) => setMandate(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 appearance-none rounded-2xl border border-slate-200 bg-white focus:ring-2 focus:ring-amber-500 font-bold text-xs cursor-pointer"
                >
                  <option>General Mandate</option>
                  <option value="UN SDG 16">UN SDG 16 (Peace & Justice)</option>
                  <option value="AU Aspiration 3">AU Aspiration 3 (Good Governance)</option>
                  <option value="Commonwealth Charter">Commonwealth Charter</option>
                  <option value="Act 992">Ghana Act 992 Compliance</option>
                </select>
              </div>

              <button 
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={loading}
                className={`flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border-2 border-dashed transition-all ${
                  file ? 'bg-amber-50 border-amber-300 text-amber-700' : 'bg-white border-slate-200 text-slate-500'
                }`}
              >
                {file ? <CheckCircle size={18} /> : <FileUp size={18} />}
                <span className="truncate max-w-[120px] font-bold text-xs">{file ? file.name : 'Upload File'}</span>
              </button>
            </div>

            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*,application/pdf" className="hidden" />

            <button 
              type="submit" 
              disabled={loading || (!query.trim() && !file)}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 flex items-center justify-center gap-3 shadow-lg disabled:opacity-50"
            >
              {loading ? <><Loader2 className="animate-spin" size={20} /> <span className="text-xs uppercase tracking-widest">{ocrStatus || 'Analyzing...'}</span></> : <><Shield size={20} className="text-amber-400" /> Execute Audit</>}
            </button>
          </form>
        </div>

        {result && !error && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="bg-slate-900 p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5"><Cpu size={160} /></div>
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <BookOpen size={28} className="text-amber-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Policy Synthesis</span>
              </div>
              <p className="text-2xl leading-relaxed text-slate-100 font-serif italic relative z-10">{result.summary}</p>
            </div>
            
            <div className="p-10 space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">
                    <ExternalLink size={16} className="text-amber-600" /> References (Vols)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.relevantVolumes.map((vol: string) => (
                      <span key={vol} className="px-3 py-1.5 bg-white text-slate-800 rounded-lg text-[10px] font-bold border border-slate-200 shadow-sm">{vol}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <h4 className="flex items-center gap-2 font-bold text-slate-900 mb-4 uppercase tracking-wider text-xs">
                    <Shield size={16} className="text-amber-600" /> Basis of Authority
                  </h4>
                  <p className="text-[11px] text-slate-700 leading-relaxed font-medium italic">"{result.legalBasis}"</p>
                </div>
              </div>

              {result.ocrFindings && (
                <div className="bg-slate-900 p-8 rounded-[2rem] text-slate-300 relative">
                  <button onClick={() => setShowRawOcr(!showRawOcr)} className="absolute top-8 right-8 text-slate-500 hover:text-amber-400"><Eye size={18} /></button>
                  <h4 className="text-white mb-4 uppercase tracking-widest text-[9px] font-bold">Diagnostic Report</h4>
                  <div className="text-xs leading-relaxed whitespace-pre-wrap max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">{result.ocrFindings}</div>
                  {showRawOcr && file?.extractedText && (
                    <div className="mt-8 pt-8 border-t border-slate-800">
                      <h5 className="text-[8px] uppercase tracking-widest text-slate-500 mb-4">Raw OCR Audit Trail</h5>
                      <div className="bg-black/20 p-4 rounded-xl text-[9px] font-mono text-slate-600 max-h-[100px] overflow-y-auto">{file.extractedText}</div>
                    </div>
                  )}
                </div>
              )}

              {result.suggestedAction && (
                <div className="bg-amber-50 p-8 rounded-[2rem] border border-amber-100 flex items-start gap-4 shadow-sm animate-pulse-subtle">
                  <AlertCircle size={24} className="text-amber-600 shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-amber-900 mb-2 uppercase tracking-widest text-[10px]">Policy Directive</h5>
                    <p className="text-amber-800 text-sm leading-relaxed">{result.suggestedAction}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 2px; }
        @keyframes pulse-subtle { 0%, 100% { opacity: 1; } 50% { opacity: 0.9; } }
        .animate-pulse-subtle { animation: pulse-subtle 4s infinite ease-in-out; }
      `}</style>
    </section>
  );
};

export default DeepSearch;
