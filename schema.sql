-- TEDDY Solutions Database Schema
-- Cloudflare D1 Database

-- Bảng liên hệ từ form contact
CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT DEFAULT 'new' -- new, contacted, converted
);

-- Index để tìm kiếm nhanh
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);

-- Bảng testimonials (nếu muốn quản lý động)
CREATE TABLE IF NOT EXISTS testimonials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  position TEXT,
  company TEXT,
  avatar TEXT,
  rating INTEGER CHECK(rating >= 1 AND rating <= 5),
  content TEXT NOT NULL,
  service TEXT,
  approved BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index cho testimonials
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(approved);

-- Bảng theo dõi analytics (optional)
CREATE TABLE IF NOT EXISTS page_views (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  page_url TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  ip_address TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Index cho analytics
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_page_url ON page_views(page_url);
