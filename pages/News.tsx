
import React from 'react';
import { NEWS } from '../constants';

const News: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tin Tức & Kiến Thức</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chia sẻ các bài viết chuyên sâu về công nghệ, marketing và phát triển doanh nghiệp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all">
              <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs text-blue-600 font-bold uppercase tracking-widest mb-3">{post.date}</span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight hover:text-blue-600 cursor-pointer transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-blue-600 font-bold text-sm inline-flex items-center group">
                  Đọc thêm 
                  <svg className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
          {/* Mock extra cards to fill grid */}
          {[3,4,5].map(i => (
             <article key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 opacity-60 flex flex-col grayscale">
                <div className="w-full h-56 bg-gray-200"></div>
                <div className="p-8">
                   <div className="h-4 w-20 bg-gray-100 mb-4 rounded"></div>
                   <div className="h-6 w-full bg-gray-100 mb-4 rounded"></div>
                   <div className="h-20 w-full bg-gray-100 rounded"></div>
                </div>
             </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
