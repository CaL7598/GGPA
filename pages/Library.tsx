import React, { useState, useEffect } from 'react';
import { BookOpen, FileText, Download, Search, Eye, X, Calendar, ArrowLeft, ExternalLink, Hash } from 'lucide-react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabaseService } from '../lib/supabaseService';
import { LibraryDocument } from '../types';

const Library: React.FC = () => {
  const [documents, setDocuments] = useState<LibraryDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [viewer, setViewer] = useState<LibraryDocument | null>(null);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const categoryFilter = searchParams.get('category') || '';

  useEffect(() => {
    supabaseService.getDocuments()
      .then(setDocuments)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = documents
    .filter(d => !categoryFilter || d.category_name === categoryFilter)
    .filter(d =>
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

      {/* Category filter banner */}
      {categoryFilter && (
        <section className="bg-amber-50 border-b border-amber-200 py-4 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Filtering by:</span>
              <span className="px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-full">{categoryFilter}</span>
            </div>
            <button
              onClick={() => navigate('/library')}
              className="flex items-center gap-2 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors"
            >
              <ArrowLeft size={14} /> View all documents
            </button>
          </div>
        </section>
      )}

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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((doc, index) => (
                <div key={doc.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-amber-300 transition-all duration-300 flex flex-col">
                  {/* Coloured top bar */}
                  <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-600 w-full" />

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Icon + index */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                        <FileText className="text-amber-600" size={18} />
                      </div>
                      <span className="text-3xl font-black text-slate-100 font-serif select-none leading-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-slate-900 font-serif text-base leading-snug mb-2 group-hover:text-amber-700 transition-colors">
                      {doc.title}
                    </h3>

                    {/* Description */}
                    {doc.description && (
                      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow line-clamp-2">{doc.description}</p>
                    )}

                    {/* Reference code + DOI */}
                    {(doc.reference_code || doc.doi_url) && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {doc.reference_code && (
                          <span className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded-full">
                            <Hash size={9} />{doc.reference_code}
                          </span>
                        )}
                        {doc.doi_url && (
                          <a href={doc.doi_url} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1 text-[10px] font-bold px-2 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full hover:bg-amber-100 transition-colors">
                            <ExternalLink size={9} />DOI
                          </a>
                        )}
                      </div>
                    )}

                    {/* Date */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-auto mb-5">
                      <Calendar size={11} />
                      <span>{new Date(doc.uploaded_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4 border-t border-slate-100">
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
                        <Download size={13} />
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
