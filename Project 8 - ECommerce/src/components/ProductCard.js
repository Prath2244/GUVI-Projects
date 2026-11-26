import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <Col>
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text className="text-muted fs-4">
            ${product.price.toFixed(2)}
          </Card.Text>
          <Button 
            variant="primary" 
            className="mt-auto"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}