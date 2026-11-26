import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAddToCart }) {
  return (
    <Container className="my-5 flex-grow-1" id="products">
      <h2 className="mb-4 text-center">Featured Products</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </Row>
    </Container>
  );
}