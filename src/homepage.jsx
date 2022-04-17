import React from "react";
import "./homepage.styles.scss";

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-items">
        <div className="content">
          <h1 className="title">HATS</h1>
          <div className="subtitle">SHOP NOW</div>
        </div>
      </div>
      <div className="menu-items">
        <div className="content">
          <h1 className="title">JACKETS</h1>
          <div className="subtitle">SHOP NOW</div>
        </div>
      </div>
      <div className="menu-items">
        <div className="content">
          <h1 className="title">SNEAKERS</h1>
          <div className="subtitle">SHOP NOW</div>
        </div>
      </div>
      <div className="menu-items">
        <div className="content">
          <h1 className="title">MENS</h1>
          <div className="subtitle">SHOP NOW</div>
        </div>
      </div>
      <div className="menu-items">
        <div className="content">
          <h1 className="title">WOMENS</h1>
          <div className="subtitle">SHOP NOW</div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;