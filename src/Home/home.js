import React from 'react';
import './home.css'
function HomePage() {
  return (
    <div className="home-page" >
      <header>
        <h1>Welcome to our Property Business</h1>
        
      </header>
      <h1>
        <section className="featured-properties">
          <h2>Featured Properties</h2>
          <div className="property-list">
            {/* Display featured properties */}
            <div className="property">
              <img src="property1.jpg" alt="Property 1" />
              <h3>Property 1</h3>
              <p>Description of property 1</p>
            </div>
            <div className="property">
              <img src="property2.jpg" alt="Property 2" />
              <h3>Property 2</h3>
              <p>Description of property 2</p>
            </div>
            {/* Add more properties as needed */}
          </div>
        </section>
        <section className="about-us">
          <h2>About Us</h2>
          <p>We are a leading property business specializing in buying, selling, and renting properties in the area.</p>
        </section>
      </h1>
      <footer>
        <p>&copy; 2024 Property Business. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;

