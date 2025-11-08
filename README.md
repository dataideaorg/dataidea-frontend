# DATAIDEA - Modern Landing Page

A stunning, responsive landing page for DATAIDEA, a leading Data Science and AI education platform in Uganda. Built with Next.js 16, Tailwind CSS, and Framer Motion for smooth animations.

## Features

✨ **Modern Design**
- Clean, professional UI with teal and white color scheme
- Smooth animations and transitions using Framer Motion
- Mobile-first responsive design
- Custom styled components

🎯 **Sections**
- **Hero**: Eye-catching headline with animated background and CTA buttons
- **About**: Mission overview and key features (6 value propositions)
- **Courses**: 6 course cards showcasing Python, Data Analysis, ML, AI, Big Data, and Business Analytics
- **Testimonials**: 6 success stories from alumni with 5-star ratings
- **Call-to-Action**: Email subscription form and contact information
- **Navbar**: Fixed navigation with smooth scroll to sections
- **Footer**: Comprehensive footer with links, social media, and company info

🔧 **Technical Stack**
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Font**: Geist (optimized via Next.js)

## Project Structure

```
app/
├── components/
│   ├── Button.tsx          # Reusable button component
│   ├── Card.tsx            # Card components (Card, CardTitle, CardDescription, CardFooter)
│   ├── Navbar.tsx          # Fixed navigation with mobile menu
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section with features
│   ├── Courses.tsx         # Course cards grid
│   ├── Testimonials.tsx    # Testimonial cards
│   ├── CTA.tsx            # Call-to-action with email form
│   └── Footer.tsx          # Footer with links and social
├── layout.tsx              # Root layout with SEO metadata
├── page.tsx                # Main landing page
├── globals.css             # Global styles
├── favicon.ico
└── next.config.ts          # Next.js configuration
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors
The site uses a teal and white color palette. To customize:
- Edit Tailwind classes in components (search for `teal-600`, `cyan-600`)
- Common colors: `teal-600`, `teal-700`, `teal-100`, `cyan-600`, `gray-900`, `gray-600`

### Content
- **Hero**: Edit `app/components/Hero.tsx`
- **About**: Edit `app/components/About.tsx` - update features array
- **Courses**: Edit `app/components/Courses.tsx` - modify courses array
- **Testimonials**: Edit `app/components/Testimonials.tsx` - update testimonials array
- **Contact Info**: Edit `app/components/CTA.tsx` and `app/components/Footer.tsx`

### Images & Icons
- Replace course icons (emoji) with actual images
- Add logo to navbar in `app/components/Navbar.tsx`
- Place images in `public/` directory

## SEO Optimization

The site includes:
- ✅ Meta titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Twitter card tags
- ✅ Canonical URLs
- ✅ Semantic HTML structure
- ✅ Alt attributes (ready for images)
- ✅ JSON-LD structured data (can be added)

Metadata is configured in `app/layout.tsx`.

## Performance

- Static generation for optimal performance
- Image optimization ready (using Next.js Image component)
- CSS minification via Tailwind
- Code splitting with Next.js App Router
- Custom scrollbar styling
- Smooth scroll behavior

## Animations

Framer Motion animations include:
- Staggered entry animations on sections
- Hover effects on cards
- Floating background elements
- Smooth transitions throughout
- Scroll-triggered animations (whileInView)

## Future Enhancements

1. **Newsletter Integration**
   - Connect CTA form to email service (Mailchimp, SendGrid, Brevo)
   - Add confirmation email flow

2. **Course Pages**
   - Create dedicated pages for each course (`/courses/[slug]`)
   - Add detailed curriculum and pricing

3. **Blog**
   - Add blog section (`/blog`)
   - MDX support for content

4. **Student Dashboard**
   - User authentication
   - Course enrollment and progress tracking

5. **Analytics**
   - Google Analytics integration
   - Conversion tracking for CTAs

6. **Dark Mode**
   - Toggle for dark theme
   - Use Tailwind's dark mode utilities

7. **Dynamic Content**
   - CMS integration (Contentful, Strapi, Sanity)
   - Admin dashboard for content management

8. **Forms**
   - Contact form with validation
   - Course inquiry form
   - Newsletter signup with backend

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Digital Ocean

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2024 DATAIDEA. All rights reserved.

## Support

For questions or issues:
- Email: hello@dataidea.io
- Website: https://dataidea.io
- Twitter: @dataidea

---

Made with ❤️ for Africa's Data Science Community
