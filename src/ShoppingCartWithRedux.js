import ProductList from './redux/ProductList';
import Cart from './redux/cart';

function ShoppingCartWithRedux() {
    return (    

        <div style={{ display: 'flex', padding: '2rem' }}>
            <div style={{ flex: 1 }}>
                <h1>Redux Shopping Cart 🛒</h1>
                <ProductList />
            </div>
            <div style={{ flex: 1 }}>
                <h1>🛒</h1>
                <Cart />
            </div>
        </div>

    );
}
export default ShoppingCartWithRedux;
