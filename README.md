# FooDSee  

![FooDSee Platform Screenshot](https://i.ibb.co.com/PshvRVfC/r1.png) 

---

## Table of Contents  

- [Project Overview](#project-overview)  
- [Screenshot](#screenshot)  
- [Technologies Used](#technologies-used)  
- [Core Features](#core-features)  
- [Dependencies](#dependencies)  
- [Environment Configuration](#environment-configuration)  
- [Installation and Running Locally](#installation-and-running-locally)  
- [Live Project](#live-project)  
- [Relevant Resources](#relevant-resources)  

---

## Project Overview  

**FooDSee** is a feature-rich online food delivery platform designed for restaurants. It offers separate user and admin dashboards to manage food items, orders, and users efficiently.  

### Key Highlights:
- **Admin Features:**  
  - Add, edit, and delete food items  
  - View and analyze order statistics using visual reports (pie charts for revenue)  
  - Manage user accounts, including deletions  

- **User Features:**  
  - Browse restaurant menus and place orders  
  - Choose from multiple payment options (SSLCommerz, Stripe)  
  - Provide reviews and ratings  
  - Cancel orders when necessary  

---

## Screenshot  
**Admin Dashboard:**
(https://i.ibb.co.com/Xkj0X2R6/foodadmin.png)
**User Dashboard:**
(https://i.ibb.co.com/yBfPtvBx/fooduser.png)

---

## Technologies Used  

- **Frontend:** React, React Router DOM, Firebase 
- **Backend Services:**  Express.js, MongoDB
- **Styling:** Tailwind CSS, DaisyUI  
- **Payment Integration:** Stripe, SSLCommerz  
- **Utilities:** Axios, Recharts, React Hook Form, Swiper  

---

## Core Features  

- **User Features:**  
  - Browse menus, place orders, and make payments  
  - Cancel orders and leave reviews  
  - Choose from multiple secure payment methods  

- **Admin Features:**  
  - Manage food menus and user accounts  
  - Analyze revenue with visual charts  
  - Comprehensive dashboard management  

---

## Dependencies  

### Production Dependencies  

```json
{
  "@smastrom/react-rating": "^1.5.0",
  "@stripe/react-stripe-js": "^3.1.1",
  "@stripe/stripe-js": "^5.5.0",
  "@tanstack/react-query": "^5.62.11",
  "axios": "^1.7.9",
  "firebase": "^11.1.0",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-helmet-async": "^2.0.5",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.4.0",
  "react-parallax": "^3.5.1",
  "react-responsive-carousel": "^3.2.23",
  "react-router-dom": "^7.1.1",
  "react-simple-captcha": "^9.3.1",
  "react-tabs": "^6.1.0",
  "recharts": "^2.15.0",
  "sort-by": "^1.2.0",
  "stripe": "^17.5.0",
  "sweetalert2": "^11.15.9",
  "swiper": "^11.1.15"
}
```

### Development Dependencies  

```json
{
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.18",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.23",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.14.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.17",
  "vite": "^6.0.5"
}
```

---

## Environment Configuration  

Create a `.env.local` file in the root directory and include the following environment variables:  

```env.local
VITE_apiKey=<Your Firebase API Key>
VITE_authDomain=<Your Firebase Auth Domain>
VITE_projectId=<Your Firebase Project ID>
VITE_storageBucket=<Your Firebase Storage Bucket>
VITE_messagingSenderId=<Your Firebase Messaging Sender ID>
VITE_appId=<Your Firebase App ID>
VITE_IMAGE_HOST_KEY=<Your Image Host Key>
VITE_Payment_Gateway_PK=<Your Stripe Public Key>
```

### Important Notes  
- Keep these keys secure and do not share them publicly.  
- Replace `<Your ...>` placeholders with actual values obtained from your Firebase and Stripe accounts.  

---

## Installation and Running Locally  

1. **Clone the repository:**  
   ```bash
   git clone <repository-link>
   cd foodsee
   ```  

2. **Install dependencies:**  
   ```bash
   npm install
   ```  

3. **Set up environment variables:**  
   Create a `.env` file as described in the Environment Configuration section.  

4. **Start the development server:**  
   ```bash
   npm run dev
   ```  

5. **Access the project:**  
   Navigate to `http://localhost:5000` in your browser.  

---

## Live Project  

Visit the live platform here: [FooDSee](https://bristo-boss-c8712.web.app)  

---

## Relevant Resources  

- [Firebase Documentation](https://firebase.google.com/docs)  
- [Stripe API Documentation](https://stripe.com/docs/api)  
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)  
- [Vite Documentation](https://vitejs.dev/guide/)  
