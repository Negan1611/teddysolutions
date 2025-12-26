
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, NEWS, PHONE_NUMBER, PROJECTS, TESTIMONIALS, ZALO_LINK } from '../constants';
import { AppRoute } from '../types';
import PricingTable from '../components/PricingTable';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  const primaryService = SERVICES.find(s => s.id === 'web-design');
  const homeServices = SERVICES.filter(s => s.showOnHome);

  const stats = [
    { label: 'Dự án hoàn thành', value: '500+' },
    { label: 'Khách hàng hài lòng', value: '98%' },
    { label: 'Năm kinh nghiệm', value: '8+' },
    { label: 'Chuyên gia hỗ trợ', value: '25+' },
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'google':
        return (
          <div className="relative w-16 h-16 flex items-center justify-center">
            {/* Google Ads Ribbon Logo Representation */}
            <svg className="w-14 h-14" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M371.7 34.6L143.6 477.4c-9.1 17.6-30.8 24.3-48.4 15.2-17.6-9.1-24.3-30.8-15.2-48.4L308.1 11.4c9.1-17.6 30.8-24.3 48.4-15.2 17.6 9.1 24.3 30.8 15.2 48.4z" fill="#FBBC04" />
              <path d="M141.6 477.4L34.1 269.8c-9.1-17.6-2.4-39.3 15.2-48.4 17.6-9.1 39.3-2.4 48.4 15.2l107.5 207.6c9.1 17.6 2.4 39.3-15.2 48.4-17.6 9.1-39.3 2.4-48.4-15.2z" fill="#4285F4" />
            </svg>
          </div>
        );
      case 'facebook':
        return (
          <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="11" fill="#1877F2" />
            <path d="M15 12H13V19H10V12H8.5V9.5H10V8.1C10 6.6 11 4.5 13.5 4.5H15.5V7H14.5C14.1 7 13.5 7.2 13.5 8V9.5H15.5L15 12Z" fill="white" />
          </svg>
        );
      case 'web':
        return (
          <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-inner">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative bg-white pt-16 pb-24 md:pt-28 md:pb-40 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-blue-50 rounded-full border border-blue-100">
            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse mr-3"></span>
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">TEDDY Solutions Digital Agency</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Xây Dựng Website <br className="hidden md:block" />
            <span className="text-blue-600">Đẳng Cấp Chuyên Gia</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl leading-relaxed font-medium">
            Chúng tôi không chỉ làm website, chúng tôi tạo ra giải pháp kinh doanh đột phá bằng sự kết hợp giữa kỹ thuật đỉnh cao và tư duy Marketing hiện đại.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              to={AppRoute.CONTACT}
              className="px-10 py-5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 text-lg"
            >
              Bắt đầu dự án ngay
            </Link>
            <Link
              to={AppRoute.PROJECTS}
              className="px-10 py-5 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl font-bold hover:bg-white transition-all text-lg"
            >
              Xem kho dự án
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center text-white border-r last:border-0 border-blue-400">
                <div className="text-3xl md:text-5xl font-black mb-2">{stat.value}</div>
                <div className="text-sm md:text-base font-medium opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NEW SOLUTIONS SECTION */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#FFB800] mb-6 drop-shadow-sm uppercase">Các giải pháp của TEDDY Solutions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-medium">
              TEDDY Solutions giúp bạn triển khai Dịch vụ Marketing Tổng thể cho doanh nghiệp. <br className="hidden md:block" />
              Tối giản – Thiết thực – Hiệu Quả
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {homeServices.map((service) => (
              <div key={service.id} className="bg-white rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 border border-transparent hover:border-gray-100 group">
                <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {getServiceIcon(service.icon)}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-5 leading-tight">{service.title}</h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium mb-8">
                  {service.shortDescription}
                </p>
                <Link
                  to={`/ dich - vu / ${service.slug} `}
                  className="mt-auto inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors"
                >
                  Xem chi tiết giải pháp
                  <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRIMARY SERVICE: Highlight Section */}
      {primaryService && (
        <section className="py-24 bg-white px-4 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform"></div>
                <img
                  src="https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1000"
                  alt="Thiết kế website chuyên nghiệp"
                  className="relative rounded-2xl shadow-2xl z-10 w-full"
                />
              </div>
              <div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm block mb-4">Dịch vụ trọng điểm</span>
                <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 leading-tight">
                  {primaryService.title}
                </h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                  {primaryService.fullDescription}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {primaryService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700 font-semibold">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 shrink-0">
                        <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/ dich - vu / ${primaryService.slug} `}
                  className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all group"
                >
                  Chi tiết giải pháp website
                  <svg className="h-5 w-5 ml-3 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. PROJECTS SECTION */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm block mb-4">Danh mục dự án</span>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">Dự Án Đã Triển Khai</h2>
              <p className="text-gray-500 mt-4 text-lg">Khám phá cách chúng tôi giúp các thương hiệu bứt phá doanh thu qua các sản phẩm website độc bản.</p>
            </div>
            <Link to={AppRoute.PROJECTS} className="group flex items-center text-gray-900 font-black text-sm uppercase tracking-widest bg-white px-8 py-4 rounded-xl shadow-sm border border-gray-100 hover:bg-blue-600 hover:text-white transition-all">
              Tất cả dự án
              <svg className="h-5 w-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
                <div className="relative overflow-hidden h-64">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all duration-300"></div>
                </div>
                <div className="p-8">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-black mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS SECTION */}
      <Testimonials testimonials={TESTIMONIALS} />

      {/* 7. PRICING SECTION */}
      <section className="py-24 bg-white px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm block mb-4">Báo giá minh bạch</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Gói Thiết Kế Linh Hoạt</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Chúng tôi cung cấp các gói dịch vụ rõ ràng, phù hợp với mọi quy mô doanh nghiệp.</p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* 8. WORKFLOW SECTION */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase">Quy Trình Làm Việc Bài Bản</h2>
            <p className="text-gray-500 text-lg">Hành trình biến ý tưởng thành sản phẩm website triệu đô cùng TEDDY Solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Phân tích & Tư vấn', desc: 'Nghiên cứu thị trường và đối thủ cạnh tranh để ra chiến lược.' },
              { step: '02', title: 'UI/UX Design', desc: 'Thiết kế giao diện hiện đại, độc bản và cá nhân hóa thương hiệu.' },
              { step: '03', title: 'Development', desc: 'Lập trình hệ thống mượt mà, tối ưu tốc độ và bảo mật tuyệt đối.' },
              { step: '04', title: 'Go-Live & Support', desc: 'Bàn giao, vận hành thực tế và bảo trì hệ thống trọn đời.' },
            ].map((item, idx) => (
              <div key={idx} className="relative p-8 bg-white rounded-2xl group overflow-hidden shadow-sm border border-gray-100">
                <div className="text-6xl font-black text-gray-50 absolute -right-2 -top-2 transition-colors group-hover:text-blue-50">{item.step}</div>
                <h4 className="text-xl font-black mb-4 relative z-10">{item.title}</h4>
                <p className="text-sm text-gray-500 relative z-10 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NEWS SECTION */}
      <section className="py-24 bg-white px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase">Digital Insights</h2>
              <p className="text-gray-500 mt-4 font-medium italic">Cập nhật xu hướng công nghệ & marketing mới nhất.</p>
            </div>
            <Link to={AppRoute.NEWS} className="hidden md:flex items-center text-blue-600 font-black hover:gap-2 transition-all">
              Tất cả bài viết
              <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {NEWS.map((post) => (
              <div key={post.id} className="group bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100">
                <div className="overflow-hidden h-64">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-xs text-gray-400 font-bold mb-4 uppercase tracking-widest">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md mr-4">Blog</span>
                    {post.date}
                  </div>
                  <h3 className="text-2xl font-black mt-2 mb-4 leading-tight group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-gray-500 mb-6 leading-relaxed font-medium">{post.excerpt}</p>
                  <Link to={AppRoute.NEWS} className="text-gray-900 font-black text-sm uppercase tracking-wider border-b-2 border-gray-900 hover:text-blue-600 hover:border-blue-600 transition-all">
                    Xem bài viết
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <h2 className="text-3xl md:text-6xl font-black text-white mb-8 relative z-10 leading-tight">
              Sẵn Sàng Bùng Nổ <br /> Doanh Số Cùng TEDDY?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10 font-medium">
              Để lại thông tin hoặc gọi trực tiếp cho chúng tôi để nhận bản phác thảo kế hoạch Digital Marketing miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <a
                href={ZALO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-blue-500/20 text-lg inline-flex items-center justify-center gap-3"
              >
                <img src="/zalo-icon.png" alt="Zalo" className="w-7 h-7" />
                Liên hệ qua Zalo
              </a>
              <Link
                to={AppRoute.CONTACT}
                className="px-12 py-5 bg-white text-gray-900 rounded-2xl font-black hover:bg-gray-100 transition-all text-lg"
              >
                Gửi yêu cầu báo giá
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
