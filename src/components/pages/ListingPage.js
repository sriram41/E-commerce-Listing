import React, { useState } from 'react';
import products from '../data/products';
import Header from '../Header';
import ProductCard from '../ProductCard';
import AddToCartModal from '../AddToCartModal';
import Pagination from '../Pagination';





const ListingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalProduct, setModalProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handleAddToCart = (product) => {
    setModalProduct(product);
    setModalOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const displayedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      <Header />
      <div className="product-list">
        {displayedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <AddToCartModal
        product={modalProduct}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
     
    </div>
  );
};

export default ListingPage;
