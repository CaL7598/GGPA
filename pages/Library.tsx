import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Download, Search, Eye, X, Calendar } from 'lucide-react';
import { supabaseService } from '../lib/supabaseService';
import { LibraryDocument } from '../types';

const Library: React.FC = () => {
  const [documents, setDocuments] = useState<LibraryDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [viewer, setViewer] = useState<LibraryDocument | null>(null);

  useEffect(() => {
    supabaseService.getDocuments()
      .then(setDocuments)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = documents.filter(d =>
    d.title.toLowerCase().includes(query.toLowerCase()) ||
    (d.description || '').toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-amber-400" size={32} />
            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">Knowledge Hub</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">Library &amp; Repository</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Access GGPA's full collection of policy frameworks, technical manuals, research publications, and governance documentation.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="bg-white border-b py-5 px-4 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search documents…"
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Document List */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex justify-center py-24">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-amber-600" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24 text-slate-400">
              <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
              <p className="font-semibold text-lg">{query ? 'No documents match your search.' : 'No documents available yet.'}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(doc => (
                <div key={doc.id} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md hover:border-amber-200 transition-all flex flex-col">
                  <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4 shrink-0">
                    <FileText className="text-amber-600" size={20} />
                  </div>
                  <h3 className="font-bold text-slate-900 font-serif mb-2 leading-snug">{doc.title}</h3>
                  {doc.description && (
                    <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">{doc.description}</p>
                  )}
                  <div className="flex items-center gap-1 text-xs text-slate-400 mb-5 mt-auto">
                    <Calendar size={12} />
                    <span>{new Date(doc.uploaded_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewer(doc)}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-700 transition-colors"
                    >
                      <Eye size={14} /> View
                    </button>
                    <a
                      href={doc.file_url}
                      download={doc.file_name}
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg text-xs font-bold hover:bg-amber-100 transition-colors"
                    >
                      <Download size={14} /> Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {viewer && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setViewer(null)}>
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b shrink-0">
              <div className="min-w-0 mr-4">
                <p className="font-bold text-slate-900 truncate">{viewer.title}</p>
                <p className="text-xs text-slate-400">{viewer.file_name}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={viewer.file_url}
                  download={viewer.file_name}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg text-xs font-bold hover:bg-amber-100 transition-colors"
                >
                  <Download size={14} /> Download
                </a>
                <button onClick={() => setViewer(null)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                  <X size={20} className="text-slate-600" />
                </button>
              </div>
            </div>
            <iframe
              src={viewer.file_url}
              title={viewer.title}
              className="flex-grow w-full rounded-b-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;
