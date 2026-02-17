import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

function CartPage({ cart, onRemove }) {
    // Calculate total price
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div className="cart-page">
            <h2>Your Shopping Cart</h2>
            
            {cart.length === 0 ? (
                <p>Your cart is empty. Go buy some cool stuff!</p>
            ) : (
                <>
                    <div style={{ display: 'grid', gap: '20px' }}>
                        {cart.map(item => (
                            <Card key={item.id} title={item.name}>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Subtotal: ${item.price * item.quantity}</p>
                                <Button 
                                    label="Remove One" 
                                    onClick={() => onRemove(item.id)} 
                                />
                            </Card>
                        ))}
                    </div>
                    <div style={{ marginTop: '30px', borderTop: '2px solid #333', paddingTop: '20px' }}>
                        <h3>Total: ${total.toFixed(2)}</h3>
                        <Button label="Checkout" onClick={() => alert('Proceeding to Checkout!')} />
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;