from PIL import Image
import os

# Input logo
logo_path = "public/logo.png"
output_dir = "public"

# Load the logo
try:
    logo = Image.open(logo_path)
    print(f"✅ Loaded logo: {logo.size}")
    
    # Convert RGBA to RGB for ICO format
    if logo.mode == 'RGBA':
        # Create white background
        background = Image.new('RGB', logo.size, (255, 255, 255))
        background.paste(logo, mask=logo.split()[3])  # Use alpha channel as mask
        logo_rgb = background
    else:
        logo_rgb = logo.convert('RGB')
    
    # Generate favicons
    sizes = {
        'favicon-16x16.png': (16, 16),
        'favicon-32x32.png': (32, 32),
        'apple-touch-icon.png': (180, 180),
        'android-chrome-192x192.png': (192, 192),
        'android-chrome-512x512.png': (512, 512),
    }
    
    for filename, size in sizes.items():
        output_path = os.path.join(output_dir, filename)
        resized = logo.resize(size, Image.Resampling.LANCZOS)
        resized.save(output_path, 'PNG')
        print(f"✅ Created: {filename} ({size[0]}x{size[1]})")
    
    # Create favicon.ico with multiple sizes
    ico_sizes = [(16, 16), (32, 32), (48, 48)]
    ico_images = []
    for size in ico_sizes:
        resized = logo_rgb.resize(size, Image.Resampling.LANCZOS)
        ico_images.append(resized)
    
    ico_path = os.path.join(output_dir, 'favicon.ico')
    ico_images[0].save(ico_path, format='ICO', sizes=[(img.width, img.height) for img in ico_images])
    print(f"✅ Created: favicon.ico (16x16, 32x32, 48x48)")
    
    print("\n🎉 All favicons created successfully!")
    print(f"\nFiles created in '{output_dir}':")
    for filename in list(sizes.keys()) + ['favicon.ico']:
        filepath = os.path.join(output_dir, filename)
        if os.path.exists(filepath):
            file_size = os.path.getsize(filepath)
            print(f"  - {filename} ({file_size} bytes)")

except FileNotFoundError:
    print(f"❌ Error: Logo file not found at '{logo_path}'")
except Exception as e:
    print(f"❌ Error: {str(e)}")
