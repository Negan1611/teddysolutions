
import { Service, NewsPost, Project } from './types';

export const PHONE_NUMBER = '0939 367 732';
export const ZALO_LINK = 'https://zalo.me/0939367732';
export const EMAIL = 'lockull258@gmail.com';
export const ADDRESS = 'Thành phố Hồ Chí Minh, Việt Nam';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    slug: 'thiet-ke-website',
    title: 'Thiết kế website',
    shortDescription: 'Xây dựng hình ảnh doanh nghiệp trên website của riêng bạn. Tối đa hóa trải nghiệm người dùng và gia tăng tỷ lệ chuyển đổi đơn hàng.',
    fullDescription: 'Tại TEDDY Solutions, chúng tôi định nghĩa lại việc thiết kế website không chỉ là giao diện đẹp, mà là một cỗ máy bán hàng tự động. Chúng tôi tập trung vào việc nghiên cứu hành vi khách hàng (User Behavior) để tạo ra những trải nghiệm mượt mà nhất trên mọi thiết bị.',
    features: [
      'Thiết kế UI/UX độc quyền, không sử dụng mẫu có sẵn',
      'Tối ưu Core Web Vitals giúp website đạt điểm xanh Google',
      'Công nghệ Mobile-First đáp ứng mọi kích thước màn hình',
      'Tích hợp hệ quản trị nội dung (CMS) dễ dàng sử dụng',
      'Hệ thống bảo mật đa tầng, chống xâm nhập trái phép'
    ],
    icon: 'web',
    category: 'website',
    showOnHome: true
  },
  {
    id: 'google-ads',
    slug: 'quang-cao-google',
    title: 'Quảng cáo Google',
    shortDescription: 'Đưa doanh nghiệp lên vị trí top đầu của trang tìm kiếm, tiếp cận chính xác khách hàng đang có nhu cầu. Đa dạng loại hình quảng cáo.',
    fullDescription: 'Tận dụng sức mạnh của Google Search và Display Network để tiếp cận khách hàng ngay khi họ đang tìm kiếm giải pháp.',
    features: [
      'Quảng cáo Google Search (Từ khóa)',
      'Quảng cáo Google Display Network (GDN)',
      'Quảng cáo YouTube Ads',
      'Tối ưu điểm chất lượng giảm chi phí click'
    ],
    icon: 'google',
    category: 'marketing',
    showOnHome: true
  },
  {
    id: 'facebook-ads',
    slug: 'quang-cao-facebook',
    title: 'Quảng cáo Facebook',
    shortDescription: 'Khai thác tiềm năng khổng lồ từ mạng xã hội nhiều người dùng nhất Việt Nam. Xây dựng hình ảnh thương hiệu và gia tăng khách hàng.',
    fullDescription: 'Nhắm mục tiêu chính xác dựa trên nhân khẩu học, sở thích và hành vi của người dùng trên hệ sinh thái Meta.',
    features: [
      'Quảng cáo bài viết tăng tương tác',
      'Quảng cáo chuyển đổi Messenger',
      'Xây dựng nội dung Fanpage chuyên nghiệp',
      'Remarketing bám đuổi khách hàng tiềm năng'
    ],
    icon: 'facebook',
    category: 'marketing',
    showOnHome: true
  },
  {
    id: 'seo-maintenance',
    slug: 'cham-soc-website-seo',
    title: 'Chăm sóc & SEO Website',
    shortDescription: 'Kiểm soát vận hành kỹ thuật, cập nhật nội dung và tối ưu hóa thứ hạng từ khóa bền vững trên công cụ tìm kiếm.',
    fullDescription: 'Website của bạn cần một đội ngũ chuyên gia để vận hành và tối ưu mỗi ngày. Chúng tôi cung cấp giải pháp SEO tổng thể từ kỹ thuật đến nội dung.',
    features: [
      'Kiểm tra và tối ưu SEO Onpage toàn diện',
      'Content Marketing chuẩn SEO, thu hút người đọc',
      'Bảo trì định kỳ, xử lý lỗi kỹ thuật 24/7',
      'Báo cáo hiệu suất định kỳ'
    ],
    icon: 'maintenance',
    category: 'maintenance',
    showOnHome: true
  },
  {
    id: 'graphic-design',
    slug: 'thiet-ke-hinh-anh',
    title: 'Thiết Kế Hình Ảnh & Bộ Nhận Diện',
    shortDescription: 'Sáng tạo Logo, Banner và ấn phẩm truyền thông giúp thương hiệu nổi bật và nhất quán.',
    fullDescription: 'Hình ảnh là điểm chạm đầu tiên của khách hàng với doanh nghiệp. Chúng tôi cung cấp dịch vụ thiết kế chuyên nghiệp, từ logo cốt lõi đến hệ thống banner quảng cáo.',
    features: [
      'Thiết kế Logo phong thủy, hiện đại và độc bản',
      'Hệ thống Banner quảng cáo đa nền tảng',
      'Thiết kế Profile doanh nghiệp',
      'Xây dựng bộ nhận diện thương hiệu'
    ],
    icon: 'design',
    category: 'design',
    showOnHome: false
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Bất Động Sản Luxury Home',
    category: 'Thiết kế Website',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    description: 'Hệ thống giới thiệu dự án cao cấp tích hợp bản đồ 360 độ.'
  },
  {
    id: 'p2',
    title: 'Thời Trang Nữ Minimalist',
    category: 'E-commerce',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    description: 'Website bán hàng tối ưu trải nghiệm mua sắm trên di động.'
  },
  {
    id: 'p3',
    title: 'Thẩm Mỹ Viện Quốc Tế',
    category: 'Website & SEO',
    imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
    description: 'Website chuẩn SEO mang lại hàng ngàn lượt truy cập tự nhiên mỗi tháng.'
  },
  {
    id: 'p4',
    title: 'Hệ Thống Nhà Hàng Fusion',
    category: 'Website Doanh Nghiệp',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7ed9d8c47c?auto=format&fit=crop&q=80&w=800',
    description: 'Giao diện tinh tế, tích hợp đặt bàn và menu trực tuyến.'
  }
];

export const NEWS: NewsPost[] = [
  {
    id: '1',
    title: 'Tại sao doanh nghiệp cần Website trong năm 2024?',
    excerpt: 'Website không chỉ là bộ mặt thương hiệu mà còn là công cụ bán hàng hiệu quả nhất hiện nay.',
    content: 'Trong kỷ nguyên số, việc sở hữu một website chuyên nghiệp là yếu tố sống còn...',
    date: '20/05/2024',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Bí quyết tối ưu SEO Onpage cho người mới bắt đầu',
    excerpt: 'Tìm hiểu các bước cơ bản để giúp Google hiểu rõ hơn về nội dung trang web của bạn.',
    content: 'SEO Onpage là tập hợp các kỹ thuật tối ưu hóa ngay trên trang web của bạn...',
    date: '18/05/2024',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800'
  }
];

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  service: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Nguyễn Minh Tuấn',
    position: 'Giám đốc',
    company: 'Luxury Home Real Estate',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    content: 'Website mà TEDDY Solutions thiết kế cho chúng tôi thực sự vượt ngoài mong đợi. Giao diện sang trọng, tốc độ tải nhanh và tỷ lệ chuyển đổi khách hàng tăng 250% chỉ sau 3 tháng. Đội ngũ hỗ trợ rất nhiệt tình!',
    service: 'Thiết kế Website'
  },
  {
    id: 't2',
    name: 'Trần Thị Hương',
    position: 'Marketing Manager',
    company: 'Minimalist Fashion',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    content: 'Dịch vụ SEO của TEDDY Solutions giúp website shop thời trang của tôi lên top 3 Google với hơn 20 từ khóa chính. Doanh số online tăng gấp 3 lần, hoàn toàn xứng đáng với khoản đầu tư!',
    service: 'SEO & Chăm sóc Website'
  },
  {
    id: 't3',
    name: 'Lê Văn Hải',
    position: 'CEO',
    company: 'Thẩm Mỹ Viện Quốc Tế',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    content: 'Chiến dịch quảng cáo Google Ads do TEDDY Solutions triển khai mang lại hơn 500 khách hàng tiềm năng mỗi tháng với chi phí cực kỳ tối ưu. Tôi rất hài lòng với sự chuyên nghiệp của đội ngũ.',
    service: 'Quảng cáo Google'
  },
  {
    id: 't4',
    name: 'Phạm Thị Mai',
    position: 'Chủ chuỗi nhà hàng',
    company: 'Fusion Restaurant Group',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    content: 'Website đặt bàn trực tuyến được thiết kế cực kỳ tinh tế và dễ sử dụng. Khách hàng của tôi rất thích giao diện và tính năng đặt món online. TEDDY Solutions thực sự hiểu rõ nhu cầu doanh nghiệp!',
    service: 'Thiết kế Website'
  },
  {
    id: 't5',
    name: 'Hoàng Quốc Việt',
    position: 'Founder',
    company: 'Tech Startup VN',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    content: 'Là một startup công nghệ, chúng tôi cần website hiện đại và chuyên nghiệp. TEDDY Solutions đã tạo ra một sản phẩm hoàn hảo với đầy đủ tính năng mà chúng tôi cần. Highly recommended!',
    service: 'Thiết kế Website'
  },
  {
    id: 't6',
    name: 'Đỗ Thị Lan Anh',
    position: 'Giám đốc Marketing',
    company: 'Beauty & Spa Center',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    content: 'Chiến dịch Facebook Ads được TEDDY Solutions tối ưu giúp chi phí mỗi khách hàng giảm 60% so với trước đây. Đội ngũ luôn báo cáo chi tiết và tư vấn nhiệt tình. Tôi sẽ tiếp tục hợp tác lâu dài!',
    service: 'Quảng cáo Facebook'
  }
];
