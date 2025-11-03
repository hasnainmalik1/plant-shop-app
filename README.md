# Plant Paradise - Online Plant Shop

A React-based e-commerce application for purchasing houseplants. The application features a landing page, product listing, and shopping cart functionality.

## Features

- Landing page with background image and company information
- Product listing page with categorized plants
- Shopping cart with add, remove, and quantity adjustment functionality
- Responsive design for various screen sizes
- State management using Redux Toolkit
- Client-side routing with React Router

## Project Structure

- `/src`
  - `/assets` - Images and other static assets
  - `/components` - Reusable React components
  - `/pages` - Main page components
  - `/redux` - Redux store and slices
- `/scripts` - Utility scripts for project setup

## Getting Started

1. Clone the repository
2. Install dependencies and set up the project:
   ```bash
   npm run setup
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Requirements

- Display 6 unique houseplants for sale
- Group plants into at least 3 categories
- Shopping cart functionality
  - Add to cart with quantity tracking
  - Increase/decrease quantities
  - Remove items
  - Display total items and cost
- Navigation between pages
- Responsive header with cart icon and total items

## Technologies Used

- React
- Redux Toolkit
- React Router DOM
- Vite
- CSS Modules

## Build and Deployment

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```
