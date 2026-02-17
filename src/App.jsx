import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProfilePage from './pages/ProfilePage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cart, setCart] = useState([]);

    const removeFromCart = (productId) => {
        const item = cart.find(item => item.id === productId);
        if (!item) return;

        if (item.quantity > 1) {
            setCart(cart.map(item =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            ));
        } else {
            setCart(cart.filter(item => item.id !== productId));
        }
    };

    const handleNavigate = (pageId) => {
        setCurrentPage(pageId);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'products':
                // CHANGE 1: Pass cart and setCart to the products page
                return <ProductsPage cart={cart} setCart={setCart} />;
            case 'profile':
                return <ProfilePage />;
            case 'home':
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <Header
                currentPage={currentPage}
                onNavigate={handleNavigate}
                // CHANGE 2: Pass the cart and remove function to the Header
                cart={cart}
                onRemove={removeFromCart}
            />
            <main>
                {renderPage()}
            </main>
            <footer style={{
                marginTop: '50px',
                padding: '20px',
                borderTop: '1px solid #eee',
                textAlign: 'center',
                color: '#666'
            }}>
                <p>React Multi-Page Application</p>
            </footer>
        </div>
    );
}

export default App;