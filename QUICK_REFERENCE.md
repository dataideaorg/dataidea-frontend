# DATAIDEA Landing Page - Quick Reference

Quick snippets and commands for common tasks.

## 🚀 Quick Commands

```bash
# Development
npm run dev                    # Start dev server on localhost:3000

# Production
npm run build                  # Build for production
npm start                      # Start production server
npm run lint                   # Run ESLint

# Cleanup
rm -rf .next node_modules      # Clean build cache
npm install                    # Reinstall dependencies
```

## 🎨 Common Customizations

### Change Primary Color (Teal to Blue)
Find and replace in all `.tsx` files:
- `teal-600` → `blue-600`
- `teal-700` → `blue-700`
- `teal-100` → `blue-100`
- `cyan-600` → `blue-500`

### Update Company Email
Search for `hello@dataidea.io` and replace in:
- `app/components/CTA.tsx` (line 98)
- `app/components/Footer.tsx` (line 151)

### Update Company Website
Search for `dataidea.io` and replace in:
- `app/layout.tsx` (lines 23, 44)
- `app/components/CTA.tsx` (line 109)
- `app/components/Footer.tsx` (line 152)

### Add New Course

1. Open `app/components/Courses.tsx`
2. Find the `courses` array (line 91)
3. Add new course object:

```tsx
{
  icon: '🔧',
  title: 'Your Course Title',
  description: 'Brief description of what students will learn.',
  skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'],
  duration: '10 weeks',
  level: 'Beginner', // or 'Intermediate' or 'Advanced'
}
```

### Add New Feature in About Section

1. Open `app/components/About.tsx`
2. Find the `features` array (line 61)
3. Add new feature:

```tsx
{
  icon: '🎓',
  title: 'Feature Title',
  description: 'Description of this feature.',
}
```

### Add New Testimonial

1. Open `app/components/Testimonials.tsx`
2. Find the `testimonials` array (line 83)
3. Add new testimonial:

```tsx
{
  quote: 'What student said about their experience.',
  author: 'Student Name',
  role: 'Current Job Title',
  company: 'Company Name',
}
```

### Update Social Media Links

In `app/components/Footer.tsx`, update these URLs:

```tsx
<a href="https://twitter.com/YOUR_HANDLE" target="_blank">
<a href="https://linkedin.com/company/YOUR_COMPANY" target="_blank">
<a href="https://instagram.com/YOUR_HANDLE" target="_blank">
<a href="https://youtube.com/@YOUR_CHANNEL" target="_blank">
```

## 🎨 Tailwind CSS Classes Reference

### Text Sizing
```
text-sm    → 14px
text-base  → 16px
text-lg    → 18px
text-xl    → 20px
text-2xl   → 24px
text-3xl   → 30px
text-4xl   → 36px
text-5xl   → 48px
text-6xl   → 60px
text-7xl   → 72px
```

### Font Weight
```
font-light    → 300
font-normal   → 400
font-medium   → 500
font-semibold → 600
font-bold     → 700
```

### Spacing (Padding/Margin)
```
p-0 to p-96  → 0px to 384px (4px increments)
m-0 to m-96  → 0px to 384px
px-4         → padding left & right: 16px
py-3         → padding top & bottom: 12px
gap-4        → gap between flex/grid items: 16px
```

### Colors (Teal Palette)
```
teal-50      → #f0fdfa
teal-100     → #ccfbf1
teal-200     → #99f6e4
teal-300     → #5ee7df
teal-400     → #2dd4bf
teal-500     → #14b8a6
teal-600     → #0d9488    ← Primary
teal-700     → #0f766e
teal-800     → #155e75
teal-900     → #134e4a
```

### Display & Layout
```
flex           → display: flex
grid           → display: grid
hidden         → display: none
block          → display: block
inline         → display: inline
inline-flex    → display: inline-flex
flex-col       → flex-direction: column
flex-row       → flex-direction: row
gap-4          → gap: 16px
```

### Responsive Prefixes
```
sm:  → @media (min-width: 640px)
md:  → @media (min-width: 768px)
lg:  → @media (min-width: 1024px)
xl:  → @media (min-width: 1280px)
2xl: → @media (min-width: 1536px)
```

Example: `md:text-lg lg:flex` applies on medium and large screens

### Hover & States
```
hover:bg-teal-700      → Change bg color on hover
active:scale-95        → Shrink to 95% when active
focus:outline-none     → Remove focus outline
focus:ring-2           → Add focus ring
transition             → Smooth transitions
duration-300           → Transition duration
```

## 🎬 Framer Motion Snippets

### Simple Fade In
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Slide In from Left
```tsx
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Hover Animation
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Scroll Trigger
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Stagger Animation
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  <motion.div variants={itemVariants}>Item 1</motion.div>
  <motion.div variants={itemVariants}>Item 2</motion.div>
  <motion.div variants={itemVariants}>Item 3</motion.div>
</motion.div>
```

## 🔗 Creating New Pages

### Create Course Page
1. Create `app/courses/page.tsx`
2. Create `app/courses/[slug]/page.tsx` for dynamic routes

```tsx
'use client';
import { Navbar } from '@/app/components/Navbar';
import { Footer } from '@/app/components/Footer';

export default function CoursePage() {
  return (
    <main>
      <Navbar />
      {/* Course content */}
      <Footer />
    </main>
  );
}
```

### Create Blog Page
1. Create `app/blog/page.tsx`
2. Create `app/blog/[slug]/page.tsx` for individual posts

## 📝 Adding Images

### Using Next.js Image Component
```tsx
import Image from 'next/image';

<Image
  src="/images/course-python.jpg"
  alt="Python course cover"
  width={400}
  height={300}
  priority={true}  // For above-fold images
/>
```

### File Organization
```
public/
├── images/
│   ├── courses/
│   │   ├── python.jpg
│   │   ├── data-analysis.jpg
│   │   └── ...
│   ├── testimonials/
│   │   └── avatar-1.jpg
│   └── logo.png
```

## 🔐 Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://dataidea.org
NEXT_PUBLIC_API_URL=https://api.dataidea.org

# Secrets (not exposed to client)
DATABASE_URL=postgresql://...
API_SECRET_KEY=...
```

Access in code:
```tsx
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const apiSecret = process.env.API_SECRET_KEY; // Server-side only
```

## 🚀 Deployment Checklist

- [ ] Update metadata in `layout.tsx`
- [ ] Replace placeholder content
- [ ] Add logo and images
- [ ] Test on mobile devices
- [ ] Check lighthouse score
- [ ] Set up custom domain
- [ ] Configure email service
- [ ] Test all links and forms
- [ ] Enable analytics
- [ ] Set up monitoring
- [ ] Create sitemap.xml
- [ ] Submit to Google Search Console

## 📱 Testing on Mobile

```bash
# Get your local IP
ipconfig getifaddr en0    # macOS
hostname -I                # Linux
ipconfig                   # Windows

# Open in mobile browser on same network
# http://YOUR_IP:3000
```

Or use:
- Chrome DevTools (F12 → Toggle device toolbar)
- Firefox Mobile
- Physical device on same WiFi

## 🐛 Common Issues & Fixes

### Navbar not fixed
Check `.fixed`, `top-0`, `left-0`, `right-0`, and `z-50` classes

### Animations not smooth
Add `'use client'` at top of component and verify Framer Motion import

### Layout shifted on scroll
Add `will-change: transform` or ensure consistent scrollbar width

### Images not loading
- Check file exists in `public/` folder
- Verify path starts with `/`
- Use `next/image` component

### Build fails with TypeScript error
Run `npm run build` to see full error, or check type definitions

### Styles not applying
- Clear browser cache
- Rebuild: `npm run dev`
- Check class names are exact
- Verify Tailwind config includes files

## 📊 File Size Reference

Typical component sizes:
```
Button.tsx       ~ 1 KB
Card.tsx         ~ 1.5 KB
Navbar.tsx       ~ 3 KB
Hero.tsx         ~ 5 KB
Courses.tsx      ~ 8 KB
Footer.tsx       ~ 7 KB
Testimonials.tsx ~ 7 KB
```

Total bundle (gzipped): ~30-40 KB

## 🔗 Useful Links

- [Tailwind Color Names](https://tailwindcss.com/docs/customizing-colors)
- [Tailwind Spacing](https://tailwindcss.com/docs/padding)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/api-reference/components/image)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Last Updated**: October 31, 2024
**Made with ❤️ for DATAIDEA**