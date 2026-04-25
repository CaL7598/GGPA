import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Download, Search, Eye, X, Calendar, Library as LibraryIcon, ArrowRight } from 'lucide-react';
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

      {/* Hero */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)'
        }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-8">
              <BookOpen size={14} className="text-amber-400" />
              <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Knowledge Repository</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-white leading-none mb-6">
              Library &amp;<br />
              <span className="text-amber-400">Repository</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-10">
              Access GGPA's complete collection of policy frameworks, governance briefs, technical manuals, and institutional documentation.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-white font-serif">{documents.length}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Documents</p>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white font-serif">PDF</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Format</p>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white font-serif">Free</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest mt-1">Access</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      </section>

      {/* Search bar */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search documents by title or description…"
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
            />
          </div>
          {!loading && (
            <p className="text-sm text-slate-400 shrink-0">
              <span className="font-bold text-slate-700">{filtered.length}</span> {filtered.length === 1 ? 'document' : 'documents'}
            </p>
          )}
        </div>
      </section>

      {/* Documents */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32 gap-4">
              <div className="w-10 h-10 border-2 border-amber-200 border-t-amber-600 rounded-full animate-spin" />
              <p className="text-slate-400 text-sm font-medium">Loading repository…</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen size={32} className="text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 font-serif mb-2">
                {query ? 'No documents found' : 'Repository is empty'}
              </h3>
              <p className="text-slate-400 text-sm max-w-sm">
                {query ? `No documents match "${query}". Try a different search term.` : 'Documents uploaded by the Secretariat will appear here.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((doc, index) => (
                <div
                  key={doc.id}
                  className="group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Card top accent */}
                  <div className="h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300" />

                  <div className="p-7 flex flex-col flex-grow">
                    {/* Index + icon row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                        <FileText size={20} className="text-amber-600" />
                      </div>
                      <span className="text-4xl font-black text-slate-100 font-serif leading-none select-none">
                        {String(index + 1).padStart(3, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold font-serif text-slate-900 leading-snug mb-3 group-hover:text-amber-700 transition-colors">
                      {doc.title}
                    </h3>

                    {/* Description */}
                    {doc.description ? (
                      <p className="text-sm text-slate-500 leading-relaxed flex-grow mb-5 line-clamp-2">
                        {doc.description}
                      </p>
                    ) : (
                      <div className="flex-grow mb-5" />
                    )}

                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
                      <Calendar size={11} />
                      <span>{new Date(doc.uploaded_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-slate-100 pt-5 flex gap-2.5">
                      <button
                        onClick={() => setViewer(doc)}
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-amber-600 transition-colors"
                      >
                        <Eye size={13} /> View
                      </button>
                      <a
                        href={doc.file_url}
                        download={doc.file_name}
                        className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:border-amber-400 hover:text-amber-600 transition-colors"
                      >
                        <Download size={13} /> Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {viewer && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setViewer(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-5xl h-[92vh] flex flex-col shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 shrink-0" />
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 shrink-0 bg-white">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 bg-amber-50 rounded-lg flex items-center justify-center shrink-0">
                  <FileText size={16} className="text-amber-600" />
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-slate-900 text-sm truncate">{viewer.title}</p>
                  <p className="text-xs text-slate-400 truncate">{viewer.file_name}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <a
                  href={viewer.file_url}
                  download={viewer.file_name}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg text-xs font-bold hover:bg-amber-700 transition-colors"
                >
                  <Download size={13} /> Download
                </a>
                <button
                  onClick={() => setViewer(null)}
                  className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X size={18} className="text-slate-500" />
                </button>
              </div>
            </div>
            <iframe
              src={viewer.file_url}
              title={viewer.title}
              className="flex-grow w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;
