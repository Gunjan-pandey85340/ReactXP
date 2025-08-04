# 🛍️ Mini Activity - Basic Product Card UI using React

This mini project demonstrates how to create and display **simple, reusable product cards** using **React.js**. Each card includes a product title, description, and pricing information with both old and discounted prices styled appropriately.

---

## 🚀 Features

- 📦 Reusable React components (`Product`, `Price`)
- 💡 Dynamic data rendering using props
- 🎨 Styled product cards with CSS and inline styles
- 🧱 Flexbox layout for responsive alignment

---

## 📂 Project Structure

src/
│
├── App.jsx # Entry point component
├── ProductTab.jsx # Displays all product cards
├── Product.jsx # Single card component
├── Price.jsx # Handles price display and styling
├── Product.css # Styles for the product cards
├── App.css # Global styles


---

## 🧩 Components Overview

### `ProductTab.jsx`
Renders multiple `Product` components inside a flex container. It passes dynamic props like `title` and `idx` to each card.

### `Product.jsx`
Displays product title and a small description based on the `idx`. Integrates the `Price` component to show old and new prices.

### `Price.jsx`
Displays pricing info:
- Old price with `line-through`
- New price in **bold**
- Stylish background with rounded corners

---

## 💻 How to Run

```bash
# Clone the repository
git clone https://github.com/your-username/basic-product-card-ui.git

# Navigate into the folder
cd basic-product-card-ui

# Install dependencies
npm install

# Start the development server
npm start
