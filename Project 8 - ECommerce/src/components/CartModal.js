import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

export default function CartModal({ show, onClose, cart, onRemoveFromCart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart.length === 0 ? (
          <p className="text-center text-muted my-4">Your cart is currently empty.</p>
        ) : (
          <ListGroup variant="flush">
            {cart.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '15px' }} 
                  />
                  <div>
                    <h6 className="mb-0">{item.name}</h6>
                    <small className="text-muted">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <strong className="me-4">${(item.price * item.quantity).toFixed(2)}</strong>
                  <Button 
                    variant="danger" 
                    size="sm" 
                    onClick={() => onRemoveFromCart(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <h5 className="mb-0">Total: ${calculateTotal()}</h5>
        <div>
          <Button variant="secondary" className="me-2" onClick={onClose}>
            Continue Shopping
          </Button>
          <Button variant="success" disabled={cart.length === 0}>
            Checkout
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}