# Hướng Dẫn Tạo Images Cho Website

## 1. Favicon

### Option A: Sử dụng Favicon Generator (Khuyến nghị)

**Tool:** https://favicon.io/favicon-converter/

**Bước thực hiện:**
1. Tạo logo đơn giản (chữ "T" hoặc icon gấu) bằng Canva/Figma
2. Upload lên favicon.io
3. Download package (bao gồm nhiều sizes)
4. Copy files vào thư mục `public/`:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

### Option B: Tạo Thủ Công

**Tool:** Canva (https://canva.com)

**Specs:**
- Size: 512x512px (sẽ resize sau)
- Background: White hoặc transparent
- Icon: Chữ "T" màu xanh (#3B82F6)
- Style: Minimalist, modern

**Export:**
- PNG 512x512
- Dùng tool resize: https://www.iloveimg.com/resize-image
- Tạo sizes: 16x16, 32x32, 180x180

---

## 2. Open Graph Image

### Specs
- **Size:** 1200x630px (chính xác)
- **Format:** JPG hoặc PNG
- **File size:** < 1MB

### Content
**Text:**
- Tiêu đề: "TEDDY Solutions"
- Tagline: "Marketing & Website Experts"
- Subtitle: "Thiết kế Website | SEO | Quảng cáo"

**Design:**
- Background: Gradient xanh-tím
- Logo/Icon: Ở góc
- Text: Bold, dễ đọc
- Icons: Web, SEO, Marketing

### Tools

**Option 1: Canva**
1. Tạo design 1200x630px
2. Template: "Facebook Post" hoặc "Twitter Post"
3. Customize với brand colors
4. Export as JPG

**Option 2: Figma**
1. Frame 1200x630
2. Design theo brand
3. Export as PNG

**Option 3: Online Tools**
- https://www.opengraph.xyz/
- https://www.bannerbear.com/

### Placement
Save as: `public/og-image.jpg`

---

## 3. Apple Touch Icon

### Specs
- **Size:** 180x180px
- **Format:** PNG
- **Background:** Không transparent (dùng màu brand)

### Content
- Logo hoặc icon đơn giản
- Màu nền: Xanh (#3B82F6)
- Icon: Trắng hoặc vàng

### Placement
Save as: `public/apple-touch-icon.png`

---

## 4. Update index.html

Sau khi tạo xong images, cập nhật `index.html`:

```html
<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<!-- Open Graph -->
<meta property="og:image" content="https://teddysolutions.pages.dev/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">

<!-- Twitter -->
<meta name="twitter:image" content="https://teddysolutions.pages.dev/og-image.jpg">
```

---

## 5. Checklist

- [ ] Tạo favicon.ico
- [ ] Tạo favicon-16x16.png
- [ ] Tạo favicon-32x32.png
- [ ] Tạo apple-touch-icon.png (180x180)
- [ ] Tạo og-image.jpg (1200x630)
- [ ] Copy tất cả vào thư mục `public/`
- [ ] Update index.html với links
- [ ] Commit và push
- [ ] Test trên Facebook Debugger
- [ ] Test trên Twitter Card Validator

---

## 6. Testing

### Facebook Debugger
URL: https://developers.facebook.com/tools/debug/

1. Nhập URL: https://teddysolutions.pages.dev
2. Click "Debug"
3. Xem preview OG image
4. Click "Scrape Again" nếu cần update

### Twitter Card Validator
URL: https://cards-dev.twitter.com/validator

1. Nhập URL
2. Preview card
3. Verify image hiển thị đúng

---

## Quick Start

**Nếu muốn nhanh:**
1. Vào Canva: https://canva.com
2. Search "Favicon" → Chọn template
3. Customize với text "T" màu xanh
4. Download PNG 512x512
5. Upload lên favicon.io để convert
6. Download và copy vào `public/`

**Cho OG Image:**
1. Canva → "Facebook Post"
2. Resize 1200x630
3. Add text "TEDDY Solutions"
4. Download JPG
5. Save as `og-image.jpg` trong `public/`

Done! 🎉
