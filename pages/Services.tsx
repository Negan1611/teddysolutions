
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import PricingTable from '../components/PricingTable';

const Services: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">Danh Mục Dịch Vụ</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium">
            Chúng tôi cung cấp hệ sinh thái giải pháp kỹ thuật số toàn diện, giúp doanh nghiệp tối ưu hóa vận hành và bùng nổ doanh thu trên internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col bg-white border border-gray-100 rounded-[2.5rem] p-10 hover:shadow-2xl transition-all group">
              <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-black mb-6 leading-tight">{service.title}</h3>
              <p className="text-gray-500 mb-10 flex-grow leading-relaxed font-medium">
                {service.shortDescription}
              </p>
              <Link
                to={`/dich-vu/${service.slug}`}
                className="w-full py-4 bg-gray-900 text-white rounded-2xl text-center font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-colors shadow-lg shadow-gray-200"
              >
                Xem chi tiết
              </Link>
            </div>
          ))}
        </div>

        {/* Pricing Table Integration */}
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-gray-100">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Chi Phí Thiết Kế Website</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">So sánh các gói dịch vụ thiết kế website chuyên nghiệp tại TEDDY Solutions.</p>
          </div>
          <PricingTable />
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-blue-600 rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 relative z-10">Bạn cần một giải pháp tùy chỉnh?</h2>
          <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto relative z-10 font-medium">
            Mỗi doanh nghiệp đều có những đặc thù riêng. Liên hệ ngay với đội ngũ kỹ thuật của TEDDY Solutions để được tư vấn chiến lược phù hợp nhất.
          </p>
          <Link
            to="/lien-he"
            className="inline-block px-12 py-5 bg-white text-blue-600 rounded-2xl font-black hover:bg-gray-100 transition-all shadow-xl text-lg relative z-10"
          >
            Nhận báo giá ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
