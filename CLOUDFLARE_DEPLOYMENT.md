# TEDDY Solutions - Cloudflare Deployment Guide

## 🌐 Deploy lên Cloudflare Pages

### Bước 1: Tạo tài khoản Cloudflare
1. Truy cập: https://dash.cloudflare.com/sign-up
2. Đăng ký tài khoản miễn phí
3. Xác thực email

### Bước 2: Cài đặt Git (nếu chưa có)
1. Tải Git: https://git-scm.com/downloads
2. Cài đặt với các tùy chọn mặc định

### Bước 3: Khởi tạo Git Repository

```bash
# Di chuyển vào thư mục dự án
cd "c:\Users\PC\Downloads\teddy-solutions---marketing-&-website-experts"

# Khởi tạo git
git init

# Thêm tất cả files
git add .

# Commit đầu tiên
git commit -m "Initial commit - TEDDY Solutions website"
```

### Bước 4: Push lên GitHub

**Option 1: Sử dụng GitHub Desktop (Dễ nhất)**
1. Tải GitHub Desktop: https://desktop.github.com/
2. Đăng nhập GitHub
3. File → Add Local Repository → Chọn thư mục dự án
4. Publish repository → Chọn tên "teddy-solutions"

**Option 2: Sử dụng Command Line**
```bash
# Tạo repo mới trên GitHub: https://github.com/new

# Thêm remote
git remote add origin https://github.com/YOUR_USERNAME/teddy-solutions.git

# Push code
git branch -M main
git push -u origin main
```

### Bước 5: Deploy lên Cloudflare Pages

1. **Truy cập Cloudflare Dashboard**
   - Đăng nhập: https://dash.cloudflare.com/
   - Chọn "Workers & Pages" từ sidebar

2. **Tạo Project mới**
   - Click "Create application"
   - Chọn tab "Pages"
   - Click "Connect to Git"

3. **Kết nối GitHub**
   - Authorize Cloudflare
   - Chọn repository "teddy-solutions"

4. **Cấu hình Build**
   ```
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   ```

5. **Environment Variables**
   - Thêm biến môi trường nếu cần:
   ```
   GEMINI_API_KEY = your_api_key_here
   ```

6. **Deploy**
   - Click "Save and Deploy"
   - Đợi 2-3 phút để build

### Bước 6: Tên Miền Tùy Chỉnh

**Option 1: Sử dụng subdomain miễn phí của Cloudflare**
- Bạn sẽ nhận được: `teddy-solutions.pages.dev`
- Hoàn toàn miễn phí, SSL tự động

**Option 2: Sử dụng tên miền riêng**

1. **Nếu chưa có tên miền:**
   - Mua tên miền tại: Namecheap, GoDaddy, hoặc Google Domains
   - Giá: ~$10-15/năm cho .com
   - Hoặc dùng .vn tại: https://nhanhoa.com/

2. **Thêm tên miền vào Cloudflare:**
   - Dashboard → "Websites" → "Add a site"
   - Nhập tên miền của bạn (vd: teddysolutions.vn)
   - Chọn plan "Free"
   - Cloudflare sẽ cung cấp nameservers

3. **Cập nhật Nameservers:**
   - Đăng nhập vào nhà cung cấp tên miền
   - Thay đổi nameservers thành nameservers của Cloudflare
   - Đợi 24-48h để DNS propagate

4. **Kết nối với Pages:**
   - Vào Pages project → "Custom domains"
   - Click "Set up a custom domain"
   - Nhập tên miền: `teddysolutions.vn` hoặc `www.teddysolutions.vn`
   - Cloudflare tự động cấu hình DNS

---

## 💾 Sử dụng Cloudflare D1 Database

### Bước 1: Tạo D1 Database

```bash
# Cài đặt Wrangler CLI
npm install -g wrangler

# Đăng nhập Cloudflare
wrangler login

# Tạo database
wrangler d1 create teddy-solutions-db
```

### Bước 2: Tạo Schema

Tạo file `schema.sql`:
```sql
-- Bảng liên hệ
CREATE TABLE contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT,
  message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Bảng testimonials (nếu muốn lưu động)
CREATE TABLE testimonials (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  position TEXT,
  company TEXT,
  avatar TEXT,
  rating INTEGER,
  content TEXT,
  service TEXT,
  approved BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Bước 3: Import Schema

```bash
wrangler d1 execute teddy-solutions-db --file=./schema.sql
```

### Bước 4: Tạo Cloudflare Worker (API)

Tạo file `functions/api/contact.ts`:
```typescript
export async function onRequestPost(context) {
  const { request, env } = context;
  const data = await request.json();
  
  const { name, phone, email, service, message } = data;
  
  // Lưu vào D1
  const result = await env.DB.prepare(
    'INSERT INTO contacts (name, phone, email, service, message) VALUES (?, ?, ?, ?, ?)'
  ).bind(name, phone, email, service, message).run();
  
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

---

## 🔧 Cấu Hình Tự Động Deploy

Mỗi khi bạn push code lên GitHub, Cloudflare Pages sẽ tự động:
1. Build lại website
2. Deploy phiên bản mới
3. Cập nhật lên domain

```bash
# Workflow thông thường
git add .
git commit -m "Update content"
git push

# Cloudflare tự động deploy sau 2-3 phút
```

---

## 📊 Monitoring & Analytics

Cloudflare cung cấp miễn phí:
- **Web Analytics** - Thống kê traffic
- **Performance Insights** - Tốc độ tải trang
- **Security Events** - Bảo mật
- **Bandwidth Usage** - Băng thông sử dụng

Truy cập: Dashboard → Analytics

---

## 💰 Chi Phí

| Dịch vụ | Miễn phí | Giới hạn |
|---------|----------|----------|
| Cloudflare Pages | ✅ | 500 builds/tháng, Unlimited bandwidth |
| Cloudflare D1 | ✅ | 10GB storage, 5M reads/ngày |
| Cloudflare Workers | ✅ | 100k requests/ngày |
| SSL Certificate | ✅ | Không giới hạn |
| DDoS Protection | ✅ | Không giới hạn |
| **Tên miền** | ❌ | ~$10-15/năm (.com) hoặc ~200k-500k VNĐ/năm (.vn) |

**Tổng chi phí:** Chỉ tốn tiền mua tên miền (~$10-15/năm), còn lại hoàn toàn miễn phí!

---

## 🎯 Lợi Ích Cloudflare

✅ **Tốc độ cực nhanh** - CDN toàn cầu 300+ locations  
✅ **Bảo mật cao** - DDoS protection, SSL miễn phí  
✅ **Không giới hạn bandwidth** - Không lo traffic cao  
✅ **Auto scaling** - Tự động scale khi traffic tăng  
✅ **Git integration** - Deploy tự động khi push code  
✅ **Preview deployments** - Xem trước mỗi commit  

---

## 🆘 Hỗ Trợ

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Community**: https://community.cloudflare.com/
- **Discord**: https://discord.gg/cloudflaredev

---

**Lưu ý:** Nếu bạn cần hỗ trợ setup, tôi có thể hướng dẫn chi tiết từng bước!
