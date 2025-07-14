# Nicole & Philip Wedding RSVP Website

A beautiful, modern wedding website built with Next.js 14, TypeScript, and Tailwind CSS for Nicole Sarfo and Philip Dogbe's wedding on August 17th, 2025.

## 🎉 Features

- **Responsive Design**: Mobile-first design that looks great on all devices
- **Modern UI**: Elegant design with teal, lilac, and white color scheme
- **Countdown Timer**: Real-time countdown to the wedding day
- **RSVP System**: Google Forms integration for easy RSVP management
- **Photo Gallery**: Responsive image gallery with zoom functionality
- **Our Story**: Timeline-based story section
- **Admin Panel**: Protected admin area to view RSVP responses
- **SEO Optimized**: Proper metadata and structured content

## 📋 Pages

1. **Homepage** (`/`) - Welcome message, countdown timer, and wedding details
2. **RSVP** (`/rsvp`) - Google Form embed for RSVP submissions
3. **Thank You** (`/thanks`) - Confirmation page after RSVP
4. **Our Story** (`/our-story`) - Timeline of the couple's journey
5. **Gallery** (`/gallery`) - Photo gallery with modal view
6. **Admin** (`/admin`) - Protected area to view RSVP responses

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd wedding-rsvp
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Google Forms Integration

1. Create a Google Form for RSVP responses
2. Get the form embed URL
3. Update the iframe src in `src/app/rsvp/page.tsx`:
```tsx
src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
```

### Google Sheets Integration

1. Create a Google Sheet to collect RSVP responses
2. Update the sheet URL in `src/app/admin/page.tsx`:
```tsx
href="https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit"
```

### Admin Access

- **URL Method**: Access `/admin?pass=wedding2025`
- **Form Method**: Enter passcode `wedding2025` on the admin page

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Teal: Primary brand color
- Lilac: Secondary brand color
- White: Background and text

### Fonts
- **Playfair Display**: Elegant serif font for headings
- **Inter**: Clean sans-serif font for body text

### Images
Replace placeholder images in the gallery with actual photos:
1. Update image URLs in `src/app/gallery/page.tsx`
2. Add your own images to the `public` folder
3. Update image paths accordingly

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🛠️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 📝 Content Updates

### Wedding Details
Update wedding information in the following files:
- `src/app/page.tsx` - Main wedding details
- `src/app/rsvp/page.tsx` - RSVP page details
- `src/app/thanks/page.tsx` - Thank you page details

### Story Content
Update the couple's story in `src/app/our-story/page.tsx`:
- How we met
- First date
- Proposal story
- Future plans

### Gallery Images
Replace placeholder images in `src/app/gallery/page.tsx` with actual photos.

## 🔒 Security

- Admin panel is protected with a passcode
- No sensitive data is stored in the frontend
- Google Forms handles all RSVP data securely

## 📄 License

This project is private and created specifically for Nicole and Philip's wedding.

## 🤝 Support

For any questions or issues, please contact the development team.

---

**Made with ❤️ for Nicole & Philip's special day** 