
import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter">Kho Dự Án</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Chúng tôi tự hào khi đồng hành cùng hàng trăm doanh nghiệp trong hành trình chuyển đổi số. Dưới đây là những sản phẩm tiêu biểu chúng tôi đã thực hiện.
          </p>
        </div>

        {/* Categories Filter (Visual only for now) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['Tất cả', 'Thiết kế Website', 'E-commerce', 'SEO', 'Landing Page'].map((cat, i) => (
            <button 
              key={i} 
              className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${
                i === 0 ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-10">
                   <span className="text-white text-xs font-black uppercase tracking-[0.3em] border-l-2 border-blue-500 pl-4">Xem dự án</span>
                </div>
              </div>
              <div className="p-10">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600 mb-3 block">{project.category}</span>
                <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
          {/* Filler projects for UI grid */}
          {[1, 2].map(i => (
            <div key={i} className="group bg-gray-50 rounded-[2.5rem] overflow-hidden border border-gray-200 opacity-60">
              <div className="h-80 bg-gray-200"></div>
              <div className="p-10">
                <div className="h-2 w-20 bg-gray-300 mb-4 rounded"></div>
                <div className="h-6 w-full bg-gray-300 mb-4 rounded"></div>
                <div className="h-12 w-full bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gray-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 relative z-10 leading-tight">Muốn Website Đỉnh Như Thế Này?</h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10 font-medium">
            Liên hệ ngay để nhận giải pháp thiết kế website chuyên biệt, giúp nâng tầm thương hiệu và tăng trưởng doanh thu vượt bậc.
          </p>
          <a 
            href="tel:0939367732"
            className="inline-block px-12 py-5 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-red-500/30 text-lg relative z-10"
          >
            Bắt đầu dự án của bạn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
