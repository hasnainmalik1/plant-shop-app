import snakePlant from '../assets/snake-plant.jpg';
import monstera from '../assets/monstera.jpg';
import peaceLily from '../assets/peace-lily.jpg';
import fiddleLeaf from '../assets/fiddle-leaf.jpg';
import spiderPlant from '../assets/spider-plant.jpg';
import zzPlant from '../assets/zz-plant.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../redux/cartSlice';
import './ProductsPage.css';

// Create an image map for direct access
const imageMap = {
  'Snake Plant': snakePlant,
  'Monstera Deliciosa': monstera,
  'Peace Lily': peaceLily,
  'Fiddle Leaf Fig': fiddleLeaf,
  'Spider Plant': spiderPlant,
  'ZZ Plant': zzPlant
};

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 29.99,
    category: "Low Maintenance",
    image: snakePlant
  },
  {
    id: 2,
    name: "Monstera Deliciosa",
    price: 49.99,
    category: "Tropical",
    image: monstera
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 24.99,
    category: "Air Purifying",
    image: peaceLily
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 59.99,
    category: "Tropical",
    image: fiddleLeaf
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 19.99,
    category: "Air Purifying",
    image: spiderPlant
  },
  {
    id: 6,
    name: "ZZ Plant",
    price: 34.99,
    category: "Low Maintenance",
    image: zzPlant
  }
];

const ProductsPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="products-page">
      <h2>Our Plants</h2>
      
      {categories.map(category => (
        <div key={category} className="category-section">
          <h3>{category}</h3>
          <div className="products-grid">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <div key={product.id} className="product-card">
                  <img src={imageMap[product.name]} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>${product.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart(product.id)}
                  >
                    {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;