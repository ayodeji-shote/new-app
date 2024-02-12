import React from 'react';
import img1 from './property1.webp'
import img2 from './property2.avif'
import './home.css'
function HomePage() {
  return (
    <div className="home-page" >
      <header className = "PropertyBusiness">
        <h1>Welcome to our Property Business</h1>
        
      </header>
      <h1 className='propertyHeader'>
        <section className="featured-properties">
          <h2 className='FeaturesPropertes'>Featured Properties</h2>
          <div className="property-list">
           
            <div className="property">
              <img src={img1} alt="Property 1" />
              <h3 className='headertext'>Property 1</h3>
              <p className='propertytext'>A lovely 5 bedroom house with a pool</p>
            </div>
            <div className="property">
              <img src={img2} alt="Property 2" />
              <h3 className='headertext'>Property 2</h3>
              <p className='propertytext'>A Lovely 4 bedroom house</p>
            </div>
          </div>
        </section>
        <section className="about-us">
          <h2>About Us</h2>
          <p className='propertytext'>We are a leading property business specializing in buying, selling, and renting properties in the area.</p>
        </section>
      </h1>
    </div>
  );
}

export default HomePage;

