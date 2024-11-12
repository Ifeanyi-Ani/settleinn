# Universal Settling Package 🏠

A comprehensive relocation management system built with React TypeScript that helps newcomers and movers transition smoothly to their new location with customizable service packages.

## Overview
Universal Settling Package is a web application that streamlines the relocation process by offering tiered service packages ranging from essential settling assistance to VIP full-service support. The platform manages everything from airport pickups to accommodation searches and local orientation services.

## Features
- 🚗 Transportation coordination system
- 🏘️ Housing search and recommendation engine
- 📍 Interactive orientation tour planning
- 🏦 Banking assistance management
- 📱 Utility setup tracking
- 💬 Customer support ticketing system (powered by Tawto.io)
- 📊 Package management dashboard
- 📧 Automated email notifications (EmailJS)

## Technology Stack
- **Frontend Framework**: React with TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Customer Support**: Tawto.io
- **Email Service**: EmailJS

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/universal-settling-package
cd universal-settling-package
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory:
```env
# EmailJS Configuration
VITE_SERVICE_ID=your_service_id
VITE_CONTACT_TEMPLATE_ID=your_template_id
VITE_NEWS_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key

# Tawto.io Configuration
VITE_TAWTO_PROPERTYID=your_property_id
VITE_TAWTO_WIDGETID=your_widget_id
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Configuration Guide

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Get your service ID, template ID, and public key
5. Add them to your `.env` file

### Tawto.io Setup
1. Sign up for an account at [Tawto.io](https://tawto.io)
2. Get your API key from the dashboard
3. Add it to your `.env` file

## Building for Production
```bash
npm run build
# or
yarn build
```

## Deployment
The project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

```bash
npm run build
# Your build files will be in the dist directory
```


## Acknowledgments
- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [EmailJS](https://www.emailjs.com/)
- [Tawto.io](https://tawto.io)
