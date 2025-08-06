import React from "react";

const Footer = ({ footer = {} }) => {
  return (
    <footer style={{ display: "flex", justifyContent: "space-around", padding: "2rem", background: "#f8f8f8" }}>
      {/* SUPPORT */}
      {footer.support?.length > 0 && (
        <div>
          <h3>Support</h3>
          {footer.support.map((item) => (
            <div key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </div>
          ))}
        </div>
      )}

      {/* SHOP AND LEARN */}
      {footer.shopAndLearn?.length > 0 && (
        <div>
          <h3>Shop and Learn</h3>
          {footer.shopAndLearn.map((item) => (
            <div key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </div>
          ))}
        </div>
      )}

      {/* RETAIL STORE */}
      {footer.retailStore?.length > 0 && (
        <div>
          <h3>Retail Store</h3>
          {footer.retailStore.map((item) => (
            <div key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </div>
          ))}
        </div>
      )}

      {/* ABOUT US */}
      {footer.aboutUS?.length > 0 && (
        <div>
          <h3>About Us</h3>
          {footer.aboutUS.map((item) => (
            <div key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </div>
          ))}
        </div>
      )}

      {/* CONTACT US */}
      {footer.contactUs?.length > 0 && (
        <div>
          <h3>Contact Us</h3>
          {footer.contactUs.map((item) => (
            <div key={item.url}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </div>
          ))}
        </div>
      )}
    </footer>
  );
};

export default Footer;
