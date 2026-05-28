# 🏠 GREENIKO Cleaning - Landing Page

Premium home cleaning landing page built with React + TypeScript + Tailwind CSS.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The site will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

The production build will be in the `dist/` folder.

## 📁 Project Structure

```
greeniko-landing/
├── public/
│   └── images/           # All images (hero + before/after photos)
├── src/
│   ├── components/
│   │   └── GreenikoLanding.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## 🖼️ Images Included

✅ Hero image (luxury California interior)
✅ 10 before/after cleaning photos
- Bathroom counter
- Toilet
- Kitchen stove
- Tub/shower
- Kitchen floor

## 🎨 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## 📱 Features

✅ Fully responsive (mobile-first)
✅ Premium luxury design
✅ Working contact form
✅ Before/after gallery
✅ Sticky mobile bottom bar
✅ SEO-friendly structure
✅ Fast loading with lazy images

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
1. Build: `npm run build`
2. Upload `dist/` folder to Netlify

### Other Hosting
Upload the `dist/` folder to any static hosting service.

## 🔧 Customization

### Update Contact Info
Edit in `src/components/GreenikoLanding.tsx`:
- Phone number
- Email address
- Service areas

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  'greeniko': {
    cream: '#F5F1E8',
    green: '#1F3A34',
    charcoal: '#222222',
    beige: '#D9CFC1',
  }
}
```

### Replace Images
Place new images in `public/images/`:
- `hero.jpg` - Main hero background
- Before/after pairs (10 images total)

## 📧 Support

For questions or issues:
- Email: hello@greeniko.com
- Ready for immediate deployment

---

**Built with ❤️ for GREENIKO Cleaning**
