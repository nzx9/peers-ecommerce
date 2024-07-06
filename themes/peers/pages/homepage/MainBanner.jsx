import React from "react";
import "./MainBanner.scss";

function MainBanner() {
  return (
    <div className="main-banner-home flex items-center">
      <div className="page-width grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="text-center md:text-left px-2 ">
          <h2 className="h1 ">Unleash Your Tech</h2>
          <p>
            Discover the Latest Tech and Effortless Tech Shopping Starts Here
            Today
          </p>
          <p></p>
          <a className="button button-primary" href="/mobile">
            SHOW NOW
          </a>
        </div>
        <div />
      </div>
    </div>
  );
}

export default MainBanner;

export const layout = {
  areaId: "content",
  sortOrder: 1,
};
