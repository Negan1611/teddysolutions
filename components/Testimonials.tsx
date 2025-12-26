
import React from 'react';
import { Testimonial } from '../constants';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm block mb-4">
            Khách hàng nói gì về chúng tôi
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Phản Hồi Từ Khách Hàng
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto font-medium">
            Hơn 500 doanh nghiệp đã tin tưởng và đồng hành cùng TEDDY Solutions. 
            Đọc những chia sẻ chân thực từ khách hàng của chúng tôi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              {renderStars(testimonial.rating)}

              {/* Content */}
              <p className="text-gray-700 mb-8 leading-relaxed font-medium text-sm md:text-base italic">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100 group-hover:ring-blue-300 transition-all"
                />
                <div className="flex-1">
                  <h4 className="font-black text-gray-900 text-sm mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-semibold">
                    {testimonial.position}
                  </p>
                  <p className="text-xs text-gray-400 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Service Tag */}
              <div className="mt-6">
                <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-wider">
                  {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">500+</div>
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Dự án thành công</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">98%</div>
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Khách hài lòng</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">8+</div>
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Năm kinh nghiệm</div>
          </div>
          <div className="p-6">
            <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">4.9/5</div>
            <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Đánh giá trung bình</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
