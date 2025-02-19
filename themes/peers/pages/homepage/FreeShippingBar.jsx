import React from "react";

function FreeShippingBar() {
  return (
    <div className="page-width">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border-divider border my-3">
        <div className="p-2 border-divider">
          <h2>10% OFF</h2>
          <p>Get 10% OFF on orders above 100,000LKR </p>
        </div>
        <div className="p-2 border-divider">
          <h2>Best Price</h2>
          <p>We offer the best prices on all our products.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Great Service</h2>
          <p>Our customer service is available 24/7.</p>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
