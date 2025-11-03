import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartActions } from '../redux/cartSlice';
import './CartPage.css';

// Import all plant images
import snakePlant from '../assets/snake-plant.jpg';
import monstera from '../assets/monstera.jpg';
import peaceLily from '../assets/peace-lily.jpg';
import fiddleLeaf from '../assets/fiddle-leaf.jpg';
import spiderPlant from '../assets/spider-plant.jpg';
import zzPlant from '../assets/zz-plant.jpg';

// Create an image map for easy lookup
const imageMap = {
  'Snake Plant': snakePlant,
  'Monstera Deliciosa': monstera,
  'Peace Lily': peaceLily,
  'Fiddle Leaf Fig': fiddleLeaf,
  'Spider Plant': spiderPlant,
  'ZZ Plant': zzPlant
};

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleIncrease = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const handleDecrease = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const handleDelete = (id) => {
    dispatch(cartActions.deleteFromCart(id));
  };

  const totalCost = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-summary">
        <p>Total Items: {cart.totalQuantity}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
      </div>
      
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={imageMap[item.name]} alt={item.name} />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)} each</p>
              </div>
              <div className="item-controls">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item)}>+</button>
                <button 
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="cart-actions">
        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
        <button 
          className="checkout-btn"
          onClick={() => alert('Checkout coming soon!')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;