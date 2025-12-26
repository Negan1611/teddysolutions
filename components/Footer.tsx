
import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../types';
import { PHONE_NUMBER, EMAIL, ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">TEDDY Solutions</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Đơn vị tiên phong cung cấp giải pháp Website & Truyền thông Marketing tổng thể cho doanh nghiệp vừa và nhỏ.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Dịch vụ</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/dich-vu/thiet-ke-website" className="hover:text-white transition-colors">Thiết kế Website</Link></li>
              <li><Link to="/dich-vu/cham-soc-website-seo" className="hover:text-white transition-colors">SEO Onpage & Offpage</Link></li>
              <li><Link to="/dich-vu/quang-cao-google-facebook" className="hover:text-white transition-colors">Quảng cáo Ads</Link></li>
              <li><Link to={AppRoute.SERVICES} className="hover:text-white transition-colors">Tất cả dịch vụ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Liên kết</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to={AppRoute.HOME} className="hover:text-white transition-colors">Trang chủ</Link></li>
              <li><Link to={AppRoute.NEWS} className="hover:text-white transition-colors">Tin tức & Blog</Link></li>
              <li><Link to={AppRoute.CONTACT} className="hover:text-white transition-colors">Liên hệ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Liên hệ</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <span className="mr-3 font-semibold text-blue-400">P:</span> {PHONE_NUMBER}
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-semibold text-blue-400">E:</span> {EMAIL}
              </li>
              <li className="flex items-start">
                <span className="mr-3 font-semibold text-blue-400">A:</span> {ADDRESS}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} TEDDY Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
