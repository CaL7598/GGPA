import React, { useEffect, useState } from 'react';
import { FileText, Download, Eye, ExternalLink, Hash, BookOpen } from 'lucide-react';
import { supabaseService } from '../lib/supabaseService';
import { LibraryDocument } from '../types';

interface Props {
  category: string;
  heading?: string;
}

const PageDocs: React.FC<Props> = ({ category, heading = 'Publications' }) => {
  const [docs, setDocs] = useState<LibraryDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewer, setViewer] = useState<LibraryDocument | null>(null);

  useEffect(() => {
    supabaseService.getDocuments()
      .then(all => setDocs(all.filter(d => d.category_name === category)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return (
    <div className="flex justify-center py-16">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600" />
    </div>
  );

  if (docs.length === 0) return (
    <div className="text-center py-16 border-2 border-dashed border-slate-200 rounded-2xl">
      <BookOpen size={40} className="mx-auto mb-3 text-slate-300" />
      <p className="text-slate-400 font-medium">Documents for this section will appear here once uploaded.</p>
      <p className="text-slate-300 text-sm mt-1">Use the Admin panel → Library tab to upload.</p>
    </div>
  );

  return (
    <>
      <h2 className="text-2xl font-bold font-serif text-slate-900 mb-6">{heading}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {docs.map(doc => (
          <div key={doc.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-amber-300 transition-all flex flex-col">
            <div className="h-1 bg-gradient-to-r from-amber-400 to-amber-600 w-full" />
            <div className="p-5 flex flex-col flex-grow">
              {/* Reference code */}
              {doc.reference_code && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full mb-3 w-fit">
                  <Hash size={9} />{doc.reference_code}
                </span>
              )}

              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors mt-0.5">
                  <FileText className="text-amber-600" size={16} />
                </div>
                <h3 className="font-bold text-slate-900 font-serif text-sm leading-snug group-hover:text-amber-700 transition-colors">
                  {doc.title}
                </h3>
              </div>

              {doc.description && (
                <p className="text-xs text-slate-500 leading-relaxed mb-3 flex-grow line-clamp-3">{doc.description}</p>
              )}

              {/* DOI */}
              {doc.doi_url && (
                <a href={doc.doi_url} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 hover:text-amber-800 mb-4 transition-colors">
                  <ExternalLink size={11} />
                  View DOI / Zenodo Record
                </a>
              )}

              {/* Actions */}
              <div className="flex gap-2 pt-3 border-t border-slate-100 mt-auto">
                <button
                  onClick={() => setViewer(doc)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-amber-600 transition-colors"
                >
                  <Eye size={12} /> View
                </button>
                <a
                  href={doc.file_url}
                  download={doc.file_name}
                  className="flex items-center justify-center gap-1.5 px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:border-amber-400 hover:text-amber-600 transition-colors"
                >
                  <Download size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PDF Viewer Modal */}
      {viewer && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setViewer(null)}>
          <div className="bg-white rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b shrink-0">
              <div className="min-w-0 mr-4">
                <p className="font-bold text-slate-900 truncate">{viewer.title}</p>
                {viewer.reference_code && <p className="text-xs text-amber-600 font-bold">{viewer.reference_code}</p>}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {viewer.doi_url && (
                  <a href={viewer.doi_url} target="_blank" rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg text-xs font-bold hover:bg-amber-100 transition-colors">
                    <ExternalLink size={13} /> DOI
                  </a>
                )}
                <a href={viewer.file_url} download={viewer.file_name}
                  className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors">
                  <Download size={13} /> Download
                </a>
                <button onClick={() => setViewer(null)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                  <span className="text-slate-500 text-lg leading-none">✕</span>
                </button>
              </div>
            </div>
            <iframe src={viewer.file_url} title={viewer.title} className="flex-grow w-full rounded-b-2xl" />
          </div>
        </div>
      )}
    </>
  );
};

export default PageDocs;
