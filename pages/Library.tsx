import React from 'react';
import { BookOpen, FileText, Download, Search } from 'lucide-react';

const Library: React.FC = () => {
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
      <section className="bg-white border-b py-6 px-4 sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search documents, volumes, publications…"
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category Cards */}
            {[
              {
                title: 'Policy Compendium',
                description: '30 volumes of technical governance frameworks covering legal, diplomatic, and administrative domains.',
                count: '30 Volumes',
                href: '#/compendium',
                icon: FileText,
              },
              {
                title: 'Research Publications',
                description: 'Peer-reviewed research, field reports, and editorial analyses from the GGPA Secretariat.',
                count: 'Coming Soon',
                href: '#',
                icon: BookOpen,
              },
              {
                title: 'Technical Manuals',
                description: 'Implementation guides for e-governance, procurement workflows, and institutional compliance.',
                count: 'Coming Soon',
                href: '#',
                icon: Download,
              },
            ].map(({ title, description, count, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                className="group bg-white rounded-xl border border-slate-200 p-8 hover:shadow-lg hover:border-amber-300 transition-all"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                  <Icon className="text-amber-600" size={22} />
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{description}</p>
                <span className="inline-block text-xs font-semibold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                  {count}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;
