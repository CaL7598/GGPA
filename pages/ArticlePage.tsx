import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const ArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useContent();
  const article = state.news.find(item => item.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-serif mb-4">Article Not Found</h1>
          <p className="text-slate-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link 
            to="/news" 
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
          >
            <ArrowLeft size={18} />
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Article Header */}
      <div className="bg-slate-900 text-white py-24 mb-12 relative overflow-hidden">
        {article.image && (
          <div className="absolute inset-0 opacity-10">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            to="/news"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 font-bold text-sm transition-colors"
          >
            <ArrowLeft size={18} />
            Back to News
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-lg text-[10px] font-bold uppercase tracking-wider border border-amber-500/20">
              {article.category}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Calendar size={14} />
              {article.date}
            </div>
          </div>
          
          <h1 className="text-5xl font-bold font-serif mb-6 leading-tight">
            {article.title}
          </h1>
          
          {article.author && (
            <div className="flex items-center gap-2 text-slate-300">
              <User size={18} />
              <span className="font-medium">{article.author}</span>
            </div>
          )}
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {article.image && (
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-[500px] object-cover"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-sm border border-slate-100">
            <div className="text-slate-700 leading-relaxed whitespace-pre-line text-base">
              {article.content || article.excerpt}
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-12 border-t border-slate-200">
          <div className="flex items-center justify-between">
            <Link 
              to="/news"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold transition-colors"
            >
              <ArrowLeft size={18} />
              View All Articles
            </Link>
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-all"
            >
              <Share2 size={18} />
              Share Article
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;
