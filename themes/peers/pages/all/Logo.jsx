import React from "react";

function Logo() {
  return (
    <div>
      <a href="/">
        <img src="/peers.svg" alt="peers" />
      </a>
    </div>
  );
}

export default Logo;

export const layout = {
  areaId: "header",
  sortOrder: 5,
};
