


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AddToCartModal from './components/AddToCartModal';
import ThankYouPage from './components/pages/ThankYouPage';
import { products } from './components/data/products';
import Pagination from './components/Pagination';
import Front from './components/front';
import Sidebar from './components/sidebar';
import './App.css'
import Sort from './components/sort';
import Footer from './components/Footer';


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const navigate = useNavigate();

  const handleView = (productName) => {
    navigate(`/thank-you/${productName}`);
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const confirmAddToCart = () => {
    if (selectedProduct) {
      setCart((prevCart) => [...prevCart, selectedProduct]);
      setSelectedProduct(null);
      setModalOpen(false);
    }
  };
  

  

  

  return (
    <div>
     
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} cartCount={cart.length} />

      <Front />
      <div className="product-list">
        <Sidebar />
        <div>
          <Sort />
        <div className='products-total'>
         
        {currentProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onView={handleView}
            onAddToCart={handleAddToCart}
          />
        ))}
        {currentProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onView={handleView}
            onAddToCart={handleAddToCart}
          />
        ))}
        {currentProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onView={handleView}
            onAddToCart={handleAddToCart}
          />
        ))} 
        </div>
        <div className='view-more-total'><button className='buttons-view-more'>View More</button></div>
        </div>

      </div>

        <Footer />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
      
      <AddToCartModal
  product={selectedProduct}
  isOpen={isModalOpen}
  onClose={() => setModalOpen(false)}
  onConfirm={confirmAddToCart}
/>

    </div>
  );
};

const ThankYouPageWrapper = () => {
  const { pathname } = useLocation();
  const productName = pathname.split('/').pop();

  return <ThankYouPage productName={productName} />;
};

const Main = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/thank-you/:productName" element={<ThankYouPageWrapper />} />
    </Routes>
  </Router>
);

export default Main;
