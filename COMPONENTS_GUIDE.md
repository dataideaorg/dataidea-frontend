# DATAIDEA Components Guide

Complete visual and functional guide to all components.

---

## 🎯 Component Overview

### Component Dependency Tree

```
App (page.tsx)
├── Navbar
├── Hero
├── About
├── Courses
│   └── CourseCard
│       └── Card (CardTitle, CardDescription, CardFooter)
│           └── Button
├── Testimonials
│   └── TestimonialCard
│       └── Card
├── CTA
│   └── Button
└── Footer
```

---

## 🧩 Button Component

**File**: `app/components/Button.tsx`

### Variants

#### Primary (Default)
```tsx
<Button variant="primary" size="md">
  Join Our Next Cohort
</Button>
```
- Background: Teal (`teal-600`)
- Text: White
- Hover: Dark teal (`teal-700`)
- Shadow: Yes
- Use for: Main CTAs

#### Secondary
```tsx
<Button variant="secondary" size="md">
  Learn More
</Button>
```
- Background: Light gray (`gray-200`)
- Text: Dark gray (`gray-900`)
- Hover: Gray (`gray-300`)
- Shadow: No
- Use for: Secondary actions

#### Outline
```tsx
<Button variant="outline" size="md">
  Explore Courses
</Button>
```
- Background: Transparent
- Border: Teal (`teal-600`)
- Text: Teal
- Hover: Light teal background (`teal-50`)
- Shadow: No
- Use for: Tertiary actions

### Sizes

| Size | Padding | Font Size | Best For |
|------|---------|-----------|----------|
| sm | `px-4 py-2` | text-sm | Inline actions |
| md | `px-6 py-3` | text-base | Regular buttons |
| lg | `px-8 py-4` | text-lg | Hero CTA |

### Implementation

```tsx
import Button from '@/app/components/Button';

export default function MyComponent() {
  return (
    <div>
      <Button variant="primary" size="lg" onClick={() => {}}>
        Click Me
      </Button>
    </div>
  );
}
```

### Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

---

## 🃏 Card Components

**File**: `app/components/Card.tsx`

### Basic Card

```tsx
<Card>
  <CardTitle>Course Title</CardTitle>
  <CardDescription>Course description goes here</CardDescription>
  <CardFooter>
    <Button>Learn More</Button>
  </CardFooter>
</Card>
```

### Features
- White background
- Rounded corners (`rounded-xl`)
- Shadow on normal state (`shadow-lg`)
- Enhanced shadow on hover (`hover:shadow-2xl`)
- Transition animation

### Composition

#### Card (Container)
```tsx
<Card className="h-full">
  {/* Content */}
</Card>
```
- Main wrapper component
- Accepts additional className
- Flex column with space-between by default

#### CardTitle
```tsx
<CardTitle>Your Title Here</CardTitle>
```
- Large font (`text-xl md:text-2xl`)
- Bold weight (`font-bold`)
- Dark gray text (`text-gray-900`)
- Bottom margin (`mb-3`)

#### CardDescription
```tsx
<CardDescription>Description text</CardDescription>
```
- Regular font size (`text-sm md:text-base`)
- Gray text (`text-gray-600`)
- Line height for readability (`leading-relaxed`)
- Bottom margin (`mb-4`)

#### CardFooter
```tsx
<CardFooter>
  <Button>Action</Button>
</CardFooter>
```
- Top margin spacing (`mt-6`)
- Flex layout with gap (`flex gap-4`)
- Accepts additional className

### Usage Example

```tsx
<Card className="h-full flex flex-col justify-between">
  <div>
    <CardTitle>Machine Learning</CardTitle>
    <CardDescription>
      Master supervised and unsupervised learning.
    </CardDescription>
  </div>
  <CardFooter>
    <Button variant="primary" className="w-full">
      Enroll Now
    </Button>
  </CardFooter>
</Card>
```

---

## 🧭 Navbar Component

**File**: `app/components/Navbar.tsx`

### Features
- Fixed positioning (stays at top on scroll)
- Responsive (collapses to mobile menu on small screens)
- Semi-transparent white background with blur effect
- Smooth animations
- Logo with gradient text

### Desktop Layout (≥768px)
```
DATAIDEA    About  Courses  Testimonials  Contact
```

### Mobile Layout (<768px)
```
DATAIDEA    ☰ (hamburger menu)
About
Courses
Testimonials
Contact
```

### Customization

Add new navigation link:
```tsx
// Find navigation links section (line ~20)
<Link href="#your-section" className="...">
  Your Link
</Link>
```

Update logo:
```tsx
// Replace the gradient text with image
<Link href="/">
  <Image src="/logo.png" alt="DATAIDEA" width={150} height={40} />
</Link>
```

### CSS Classes
- Fixed: `fixed top-0 left-0 right-0`
- Backdrop blur: `backdrop-blur-md`
- Z-index: `z-50` (above all content)
- Height: `h-16` (64px)

---

## 🎯 Hero Component

**File**: `app/components/Hero.tsx`

### Sections

#### Background
- Gradient: `from-white via-teal-50 to-white`
- Floating animated blobs
- Blur effect (`blur-3xl`)
- Low opacity for subtlety

#### Badge
```
Learn Data Science in Uganda
```
- Small pill-shaped badge
- Teal background (`bg-teal-100`)
- Teal text (`text-teal-700`)

#### Headline
```
Master Data Science, Shape Your Future
```
- Large text (`text-4xl md:text-6xl lg:text-7xl`)
- Bold weight (`font-bold`)
- Gradient text effect (teal to cyan)

#### Subheading
Short description of DATAIDEA's value proposition.
- Larger paragraph (`text-lg md:text-xl`)
- Gray text (`text-gray-600`)
- Max width container for readability

#### CTA Buttons
Two main buttons:
1. "Join Our Next Cohort" (Primary)
2. "Explore Courses" (Outline)

Smooth scroll to respective sections on click.

#### Statistics Grid
```
500+                 95%
Students Trained     Success Rate

8+                   100%
Programs             Hands-on
```
- Responsive: 2 columns mobile, 4 desktop
- Large bold numbers (`text-2xl md:text-3xl`)
- Smaller labels below
- Teal numbers for emphasis

### Animations
- Staggered fade-in on page load
- Floating background elements (continuous)
- Smooth transitions between states

---

## 💡 About Component

**File**: `app/components/About.tsx`

### Section Header
- Badge: "About DATAIDEA"
- Headline: "Why Choose DATAIDEA?"
- Subheading: Mission statement

### Feature Cards (6 total)

Each card contains:
- Icon (emoji): Large (`text-4xl`)
- Title: Bold, dark text
- Description: Gray text, readable length

#### Default Features
1. **🎯 Career-Focused** - Industry-aligned programs
2. **👨‍🏫 Expert Instructors** - Industry professionals
3. **🤝 Supportive Community** - Network of learners
4. **💼 Job Placement** - Career support
5. **⏱️ Flexible Learning** - Self-paced options
6. **🏆 Certification** - Recognized credentials

### Customization

Add new feature:
```tsx
{
  icon: '🚀',
  title: 'Your Feature',
  description: 'Description of this feature and its benefits.',
}
```

### Layout
- Grid: 1 column mobile, 2 tablet, 3 desktop
- Gap: `gap-8`
- Card styling: White with shadow
- Hover: Smooth shadow increase

---

## 📚 Courses Component

**File**: `app/components/Courses.tsx`

### Section Header
- Badge: "Our Programs"
- Headline: "Choose Your Learning Path"
- Subheading: Course selection message

### Course Cards (6 total)

Each card contains:
1. **Icon** - Large emoji (`text-5xl`)
2. **Title** - Course name
3. **Description** - What students learn
4. **Skills** - 4 key skills as tags
   - Tag style: `bg-teal-100 text-teal-700`
5. **Duration** - Course length (e.g., "8 weeks")
6. **Level** - Beginner/Intermediate/Advanced
7. **CTA Button** - "Learn More"

### Default Courses

| Icon | Title | Duration | Level |
|------|-------|----------|-------|
| 🐍 | Python Fundamentals | 8 weeks | Beginner |
| 📊 | Data Analysis & Visualization | 10 weeks | Intermediate |
| 🤖 | Machine Learning | 12 weeks | Intermediate |
| 🧠 | Deep Learning & AI | 14 weeks | Advanced |
| 💾 | Big Data & SQL | 10 weeks | Intermediate |
| 📈 | Business Analytics | 8 weeks | Intermediate |

### Card Hover Effect
- Lifts up slightly (`y: -8`)
- Smooth animation (300ms)

### Customization

Add new course:
```tsx
{
  icon: '⚙️',
  title: 'DevOps & Cloud',
  description: 'Learn cloud deployment and DevOps practices.',
  skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
  duration: '10 weeks',
  level: 'Intermediate',
}
```

---

## 💬 Testimonials Component

**File**: `app/components/Testimonials.tsx`

### Section Header
- Badge: "Success Stories"
- Headline: "Learn From Our Alumni"
- Subheading: Alumni testimonial message

### Testimonial Cards (6 total)

Each card contains:
1. **5-Star Rating** - Yellow stars (★★★★★)
2. **Quote** - Student's testimonial (italicized)
3. **Author Name** - Bold text
4. **Role** - Job title
5. **Company** - Company name (optional)

### Default Testimonials
Include stories from:
- Data Analysts
- Data Engineers
- Data Scientists
- ML Engineers
- Analytics Managers
- Business Analysts

From companies across East Africa (Uganda, Kenya, Nigeria, etc.)

### Card Features
- White background
- Subtle shadow
- Hover effect: lifts slightly
- Border-top separator after quote
- Professional typography

### Customization

Add new testimonial:
```tsx
{
  quote: 'Describe your experience and transformation.',
  author: 'Your Name',
  role: 'Your Current Role',
  company: 'Company Name',
}
```

---

## 📢 CTA Component

**File**: `app/components/CTA.tsx`

### Section Elements

#### Background
- Gradient: `from-teal-600 to-cyan-600`
- Floating animated background blobs
- Full width, high visibility

#### Headline
"Ready to Transform Your Career?"
- Large text (`text-4xl md:text-5xl`)
- White color
- Bold weight

#### Subheading
Description of benefits and CTA
- White text with slight transparency (`text-white/90`)
- Readable length

#### Email Subscription Form
```
[Email Input] [Subscribe Button]
```
- Responsive: Stack on mobile, row on desktop
- Input: Gray background, dark placeholder
- Button: Secondary (gray) variant
- Confirmation: "✓ Welcome! Check your email..."

#### Contact Information
Three columns:
1. **📧 Email** - hello@dataidea.io
2. **📍 Location** - Kampala, Uganda
3. **🌐 Website** - dataidea.io

### Customization

Update contact info:
```tsx
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>
```

---

## 🔗 Footer Component

**File**: `app/components/Footer.tsx`

### Layout (4 Columns)

#### 1. Brand Section
- Logo/name (gradient text)
- Tagline
- Social media icons with links
  - Twitter
  - LinkedIn
  - Instagram
  - YouTube

#### 2. Programs
Links to:
- Python Fundamentals
- Data Analysis
- Machine Learning
- Deep Learning & AI

#### 3. Resources
- Blog
- Documentation
- Community Forum
- FAQ

#### 4. Company
- About Us
- Privacy Policy
- Terms of Service
- Contact

### Bottom Section
- Divider line
- Copyright notice with current year
- Tagline: "Made with ❤️ in Uganda for Africa"

### Social Icons
- Hover color change (gray to teal)
- SVG icons
- Properly sized (w-5 h-5)

### Customization

Update social links:
```tsx
<a href="https://twitter.com/your-handle" target="_blank">
  {/* Twitter icon */}
</a>
```

Update copyright year (auto-updates):
```tsx
const currentYear = new Date().getFullYear();
<p>© {currentYear} DATAIDEA. All rights reserved.</p>
```

---

## 🎨 Reusable Patterns

### Pattern 1: Section Container
```tsx
<section className="w-full py-20 md:py-32 bg-white">
  <div className="max-w-6xl mx-auto px-4 md:px-8">
    {/* Content */}
  </div>
</section>
```

### Pattern 2: Section Header
```tsx
<motion.div className="text-center mb-16">
  <motion.span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4">
    Badge Text
  </motion.span>
  <motion.h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
    Headline
  </motion.h2>
  <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto">
    Description
  </motion.p>
</motion.div>
```

### Pattern 3: Card Grid
```tsx
<motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item, index) => (
    <motion.div key={index} variants={itemVariants}>
      <Card>{/* Content */}</Card>
    </motion.div>
  ))}
</motion.div>
```

### Pattern 4: Staggered Animation
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
```

---

## 🔄 Component Communication

### Data Flow
```
page.tsx
  ↓
Layout (provides metadata)
  ↓
Individual Sections (Hero, About, Courses, etc.)
  ↓
Child Components (Cards, Buttons)
```

### Props Usage
- Button: variant, size, onClick
- Card: className
- All: children prop for content

### State Management
- Navbar: Local state for mobile menu toggle
- CTA: Local state for form submission
- No global state management needed (simple site)

---

## 📊 Component Checklist

When using components:
- [ ] Import component at top
- [ ] Use proper TypeScript types
- [ ] Pass required props
- [ ] Add alt text for images
- [ ] Test responsive behavior
- [ ] Verify animations smooth
- [ ] Check accessibility
- [ ] Review on mobile device

---

## 🎯 Quick Copy-Paste Templates

### New Section
```tsx
'use client';

import { motion } from 'framer-motion';

export const MySection: React.FC = () => {
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

  return (
    <section className="w-full py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="text-4xl font-bold text-gray-900"
          variants={itemVariants}
        >
          Section Title
        </motion.h2>
      </div>
    </section>
  );
};
```

### New Card Component
```tsx
import { Card, CardTitle, CardDescription } from '@/app/components/Card';
import Button from '@/app/components/Button';

<Card>
  <CardTitle>Title</CardTitle>
  <CardDescription>Description text</CardDescription>
  <Button variant="primary">Action</Button>
</Card>
```

---

## 📖 Component Documentation Standards

All components include:
- TypeScript interfaces
- JSDoc comments
- Usage examples
- Customization notes
- Accessibility considerations

---

**Last Updated**: October 31, 2024
**Component Count**: 9 total components
**Lines of Code**: 1,500+
