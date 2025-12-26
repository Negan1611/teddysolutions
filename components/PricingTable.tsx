
import React from 'react';
import { PHONE_NUMBER } from '../constants';

const PricingTable: React.FC = () => {
  const plans = [
    {
      name: 'TIẾT KIỆM',
      price: '2.800.000đ',
      desc: 'Mẫu web kho giao diện có sẵn',
      target: '(Phù hợp cho khách hàng đã biết quản lý website)',
      features: [
        'Đầy đủ chức năng website cơ bản',
        '300+ Giao diện có sẵn để lựa chọn',
        'Tương thích phiên bản mobile',
        'Thiết kế chuẩn SEO',
        'Hỗ trợ trọn đời'
      ],
      colorClass: 'bg-white border-gray-200 text-gray-900 shadow-sm',
      headerColor: 'text-gray-500',
      priceColor: 'text-red-600',
      highlight: false
    },
    {
      name: 'CƠ BẢN',
      price: '4.800.000đ',
      desc: 'Thiết kế giao diện website theo yêu cầu',
      target: '(Phù hợp cho hầu hết khách hàng, *ưu tiên chọn*)',
      features: [
        'Đầy đủ chức năng website cơ bản',
        'Giao diện bản quyền, thiết kế riêng biệt',
        'Tương thích phiên bản mobile',
        'Thiết kế chuẩn SEO',
        'Miễn phí hosting & tên miền 1 năm',
        'Miễn phí SSL bảo mật',
        'Tư vấn Marketing miễn phí',
        'Hỗ trợ trọn đời'
      ],
      colorClass: 'bg-blue-50 border-blue-200 text-gray-900 shadow-xl lg:-mt-4 lg:mb-4',
      headerColor: 'text-blue-700',
      priceColor: 'text-blue-700',
      highlight: true
    },
    {
      name: 'CHUYÊN NGHIỆP',
      price: 'Liên hệ tư vấn',
      desc: 'Lập trình tính năng website nâng cao',
      target: '(Phù hợp cho doanh nghiệp lớn, yêu cầu phức tạp)',
      features: [
        'Lập trình tính năng nâng cao theo yêu cầu',
        'Tương thích mobile tối ưu nhất',
        'Thiết kế chuẩn SEO chuyên sâu',
        'Miễn phí hosting (SSD cao cấp) & tên miền',
        'Tư vấn Marketing chuyên sâu',
        'Đa ngôn ngữ, tự động dịch',
        'Cài đặt Analytics, Sitemap, Search Console',
        'Tối ưu SEO ban đầu bài bản',
        'Hỗ trợ trọn đời'
      ],
      colorClass: 'bg-gray-900 border-gray-800 text-white shadow-lg',
      headerColor: 'text-blue-400',
      priceColor: 'text-white',
      highlight: false
    }
  ];

  return (
    <div className="py-4 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 items-stretch max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col h-full rounded-[2rem] border p-6 sm:p-8 md:p-10 transition-all duration-500 hover:translate-y-[-8px] ${plan.colorClass} relative overflow-hidden`}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-red-600 text-white text-[9px] font-black px-4 py-1.5 rounded-bl-xl uppercase tracking-widest shadow-lg">
                Phổ biến nhất
              </div>
            )}
            
            <div className="mb-6 md:mb-8">
              <h3 className={`text-xl md:text-2xl font-black mb-2 tracking-tighter ${plan.headerColor}`}>{plan.name}</h3>
              <p className="text-xs md:text-sm font-bold mb-3 opacity-80 leading-snug">{plan.desc}</p>
              <div className={`text-2xl md:text-3xl font-black mb-2 ${plan.priceColor}`}>
                {plan.price === 'Liên hệ tư vấn' ? plan.price : `${plan.price}`}
              </div>
              <p className="text-[10px] md:text-xs italic opacity-70 leading-relaxed font-medium">{plan.target}</p>
            </div>

            <div className="flex-grow space-y-3 md:space-y-4 mb-8 md:mb-12">
              <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-4 border-b border-current pb-2 inline-block">Chi tiết gói</div>
              {plan.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3">
                  <div className={`mt-1 shrink-0 ${plan.highlight ? 'text-blue-600' : 'text-red-500'}`}>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[13px] md:text-sm font-semibold leading-tight opacity-90">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="w-full py-4 md:py-5 rounded-2xl text-center font-black text-white text-xs md:text-sm uppercase tracking-widest transition-all shadow-xl hover:shadow-red-500/30 flex items-center justify-center gap-2 md:gap-3 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 hover:scale-[1.02] active:scale-95"
            >
              <svg className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Tư vấn: {PHONE_NUMBER}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
