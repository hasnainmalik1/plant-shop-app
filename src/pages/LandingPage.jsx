import { Link } from 'react-router-dom';
import landingBg from '../assets/landing-bg.jpg';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${landingBg})` }}>
      <div className="landing-content">
        <h1>Welcome to Plant Paradise</h1>
        <p>
          Transform your space into a green sanctuary with our carefully curated collection
          of beautiful houseplants. Whether you're a seasoned plant parent or just starting
          your plant journey, we have the perfect green companion for you.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;