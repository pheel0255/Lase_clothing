import React from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="image-container">
            <img src={smallImage} className="img-responsive" alt={title} />
          </div>
        </a>
      </div>
    </div>
  );
};
