
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SERVICES, PHONE_NUMBER, ZALO_LINK } from '../constants';
import { AppRoute } from '../types';
import PricingTable from '../components/PricingTable';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to={AppRoute.SERVICES} replace />;
  }

  const isWebDesign = service.slug === 'thiet-ke-website';

  return (
    <div className="pt-28 pb-24 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-10">
          <ol className="flex items-center space-x-2 text-sm font-bold text-gray-500">
            <li><Link to={AppRoute.HOME} className="hover:text-blue-600">Trang chủ</Link></li>
            <li><span>/</span></li>
            <li><Link to={AppRoute.SERVICES} className="hover:text-blue-600">Dịch vụ</Link></li>
            <li><span>/</span></li>
            <li className="text-blue-600 truncate">{service.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2rem] p-6 md:p-12 shadow-sm border border-gray-100 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 shrink-0">
                  {/* Dynamic Icon Rendering */}
                  {service.icon === 'web' ? (
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                  ) : service.icon === 'google' ? (
                    <svg className="w-12 h-12 md:w-14 md:h-14" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="M371.7 34.6L143.6 477.4c-9.1 17.6-30.8 24.3-48.4 15.2-17.6-9.1-24.3-30.8-15.2-48.4L308.1 11.4c9.1-17.6 30.8-24.3 48.4-15.2 17.6 9.1 24.3 30.8 15.2 48.4z" fill="#FBBC04" />
                      <path d="M141.6 477.4L34.1 269.8c-9.1-17.6-2.4-39.3 15.2-48.4 17.6-9.1 39.3-2.4 48.4 15.2l107.5 207.6c9.1 17.6 2.4 39.3-15.2 48.4-17.6 9.1-39.3 2.4-48.4-15.2z" fill="#4285F4" />
                    </svg>
                  ) : (
                    <svg className="h-10 w-10 md:h-12 md:w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-4 text-center md:text-left">
                    {service.title}
                  </h1>
                  <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto md:mx-0"></div>
                </div>
              </div>

              <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed font-medium">
                <p className="text-lg md:text-xl text-gray-900 font-bold mb-10 leading-snug">
                  {service.shortDescription}
                </p>

                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center uppercase">
                  <span className="w-8 h-8 bg-gray-900 text-white text-xs rounded-full flex items-center justify-center mr-4 shrink-0">1</span>
                  Tổng quan giải pháp
                </h3>
                <p className="mb-10 text-base md:text-lg">{service.fullDescription}</p>

                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-8 flex items-center uppercase">
                  <span className="w-8 h-8 bg-gray-900 text-white text-xs rounded-full flex items-center justify-center mr-4 shrink-0">2</span>
                  Danh mục triển khai chi tiết
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-12">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start p-4 md:p-5 bg-blue-50/50 rounded-2xl border border-blue-100 group hover:bg-blue-600 hover:text-white transition-all duration-300">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 md:mr-4 mt-0.5 shrink-0 group-hover:bg-white group-hover:text-blue-600">
                        <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                      </div>
                      <span className="text-sm font-bold leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center uppercase">
                  <span className="w-8 h-8 bg-gray-900 text-white text-xs rounded-full flex items-center justify-center mr-4 shrink-0">3</span>
                  Cam kết chất lượng
                </h3>
                <p className="mb-8 text-sm md:text-base">
                  Mọi sản phẩm từ TEDDY Solutions đều được bảo hành kỹ thuật 12 tháng, hỗ trợ vận hành 24/7 và cam kết bàn giao đầy đủ mã nguồn (source code) cùng tài liệu hướng dẫn quản trị.
                </p>
              </div>
            </div>

            {/* Pricing Table Section - Integrated if it's Web Design service */}
            {isWebDesign && (
              <div className="mt-12">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 uppercase">Báo Giá Các Gói Thiết Kế</h2>
                  <p className="text-gray-500 font-medium text-sm md:text-base">Lựa chọn gói dịch vụ phù hợp nhất với ngân sách và quy mô doanh nghiệp.</p>
                </div>
                <PricingTable />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact Box */}
            <div className="bg-gray-900 rounded-[2rem] p-8 text-white sticky top-28 shadow-xl">
              <h4 className="text-2xl font-black mb-6">Bạn cần báo giá?</h4>
              <p className="text-gray-400 mb-8 font-medium">Để lại thông tin, chuyên gia của chúng tôi sẽ phản hồi chỉ sau 30 phút.</p>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ lại ngay.'); }}>
                <input type="text" required placeholder="Họ và tên" className="w-full bg-gray-800 border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none font-medium text-sm" />
                <input type="tel" required placeholder="Số điện thoại" className="w-full bg-gray-800 border-0 rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-600 outline-none font-medium text-sm" />
                <button type="submit" className="w-full py-4 bg-blue-600 rounded-xl font-black hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 text-sm">
                  Gửi yêu cầu ngay
                </button>
              </form>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                <p className="text-xs text-gray-400 mb-4 font-bold uppercase tracking-widest">Hoặc liên hệ qua</p>
                <a href={ZALO_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-[#0068FF] text-white rounded-xl font-bold text-base hover:bg-[#0052CC] transition-all">
                  Liên hệ qua
                  <img src="/zalo-icon.png" alt="Zalo" className="w-8 h-8 bg-white rounded-full p-1" />
                </a>
              </div>
            </div>

            {/* Other Services */}
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <h4 className="text-xl font-black mb-6 text-gray-900 uppercase">Dịch vụ khác</h4>
              <div className="space-y-4">
                {SERVICES.filter(s => s.id !== service.id).map(s => (
                  <Link
                    key={s.id}
                    to={`/dich-vu/${s.slug}`}
                    className="flex items-center p-4 bg-gray-50 rounded-xl font-bold hover:bg-blue-50 hover:text-blue-600 transition-all border border-transparent hover:border-blue-100 group"
                  >
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-4 text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm">{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
