# Shoply — React E-commerce SPA

A responsive demo storefront built with React + JavaScript, Vite, React Router, Axios, Tailwind CSS v4, Font Awesome, and the DummyJSON Products API.

## Requirements
- Node.js 20.19+ or 22.12+ recommended (Vite 7 requirement)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Features
- SPA routes for home, product list, category, search, product details, cart, wishlist, checkout, and 404
- DummyJSON API integration with Axios, loading and error states, retry, category/search endpoints, and load more
- Price/rating filters and sorting
- Persistent cart and wishlist using localStorage
- Quantity changes, cart totals, wishlist-to-cart workflow, simulated checkout and validation
- Responsive UI, keyboard focus styles, accessible labels, loading skeletons, toast feedback

## Important demo notes
- DummyJSON is a demonstration API. Checkout only creates a local, simulated confirmation; it does not charge a payment method or submit an actual order.
- Newsletter signup is also a local UI demo and does not send email.
- Product catalog, prices, ratings, and availability are provided by DummyJSON.

## Main structure
```text
src/
├── api/productService.js
├── components/{Header,Footer,ProductCard,ProductGrid,Feedback}.jsx
├── context/{CartContext,WishlistContext}.jsx
├── layouts/MainLayout.jsx
├── pages/{Home,Products,ProductDetails,Cart,Wishlist,Checkout,NotFound}.jsx
├── App.jsx
├── main.jsx
└── index.css
```
