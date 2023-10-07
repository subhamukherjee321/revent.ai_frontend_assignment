import "./ComponentsCSS/Loading.css";
import React from "react";

const Loading = () => {
  return (
    <div class="cssload-container">
      <ul class="cssload-flex-container">
        <li>
          <span class="cssload-loading cssload-one"></span>
          <span class="cssload-loading cssload-two"></span>
          <span class="cssload-loading-center"></span>
        </li>
      </ul>
    </div>
  );
};

export default Loading;
