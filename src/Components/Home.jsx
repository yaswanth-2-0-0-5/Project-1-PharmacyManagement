// Home.js
import './Home.css';
import Login from './Login';
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      
<div class="menu-btn">
<i class="fas fa-bars fa-2x"></i>
</div>

<div class="container">
{/* <!-- Nav --> */}
<nav class="main-nav">
  <img src="https://www.codester.com/static/uploads/items/000/013/13552/icon.png" alt="Pharmacy Management System" class="logo"></img>

  <ul class="main-menu">
    <li><b>Products</b></li>
    <li><b>Orders</b></li>
    <li><b>Users</b></li>
    <li><b>Support</b></li>
  </ul>

  <ul class="left-menu">
    <li><Link to='/login'><b class="btn">Login</b></Link></li>
  </ul>
  <ul class="left-menu">
    <li><Link to='/signup'><b class="btn">Signup</b></Link></li>
  </ul>

  <ul class="right-menu">
    <li>
      <b>
        <i class="fas fa-search"></i>
      </b>
    </li>
    <li>
      <b>
        <i class="fas fa-shopping-cart"></i>
      </b>
    </li>
  </ul>
</nav>

{/* <!-- Showcase --> */}
<header class="showcase">
  <h2><b>20% off</b></h2>
  <p><b>
  Pharmacy Perks Alert: Dive into wellness with our exclusive offer! 🌟 Enjoy special discounts on prescriptions and health essentials</b>
  </p>
  <b class="btn">
    Order now <i class="fas fa-chevron-right"></i>
  </b>
</header>

{/* <!-- Xbox --> */}
<section class="xbox">
  <div class="content">
    <h2>Benifits of our Products</h2>
    <b><p>Pain Reliever Tablets:

"Relief at Your Fingertips: Fast-Acting Pain Relief Tablets for Instant Comfort!"
Allergy Relief Syrup:

"Breathe Easy: Our Allergy Relief Syrup - Your Solution to Seasonal Allergies!"
Vitamin C Capsules:

"Boost Your Immunity: Unleash the Power of Vitamin C Capsules for a Healthier You!"
Feel free to tailor these catch-up lines to better fit the specific features and benefits of each product in your Pharmacy Management System.</p></b>
      <b class="btn">
        View Products <i class="fas fa-chevron-right"></i>
      </b>
  </div>
</section>

  {/* <!-- Carbon --> */}
  <section class="carbon dark">
    <div class="content">
      <h2>user-centric features of our Pharmacy Management System</h2>
      <p>Effortless User Management:

"User-friendly controls, because managing your pharmacy should be as easy as 1-2-3!"
Tailored User Profiles:

"Customize your experience with personalized user profiles for each pharmacy team member."
Secure Access Controls:

"Your pharmacy, your rules! Set access controls and ensure data security effortlessly."
Streamlined Registration:

"Join us in a few clicks! Register and start managing your pharmacy with simplicity."
Real-time User Updates:

"Stay informed with real-time updates on user activities for a transparent workflow."</p>
        <b class="btn">
          Learn More <i class="fas fa-chevron-right"></i>
        </b>
    </div>
  </section>

  
</div>
 

  {/* <!-- Footer --> */}
  <footer>
  <div class="footer-content">
    <div class="footer-section about">
      <h3>About Us</h3>
      <p>"Elevate pharmacy operations with [Your Pharmacy Management System Name]. From inventory management to user efficiency, we're your one-stop solution for success."</p>
    </div>

    <div class="footer-section contact">
      <h3>Contact Us</h3>
      <p>Email: info@pharmatrackpro.com</p>
      <p>Phone: (555) 123-4567</p>
    </div>

    <div class="footer-section social">
      <h3>Follow Us</h3>
      <p><a href="#" target="_blank">Facebook</a></p>
      <p><a href="#" target="_blank">Twitter</a></p>
      <p><a href="#" target="_blank">Instagram</a></p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2023 PharmaTrack Pro. All rights reserved.</p>
  </div>
</footer>

    </div>
  );
};

export default Home;
