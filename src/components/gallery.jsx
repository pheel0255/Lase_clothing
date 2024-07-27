import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";

export const Gallery = (props) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // Array of image data with small thumbnails
  const data = [
    { thumb: "img/portfolio/01-small.jpg", title: "My Works" },
    { thumb: "img/portfolio/02-small.jpg", title: "My Works" },
    { thumb: "img/portfolio/03-small.jpg", title: "My Works" },
    { thumb: "img/portfolio/04-small.jpg", title: "My Works" },
    { thumb: "img/portfolio/05-small.jpg", title: "My Works" },
    { thumb: "img/portfolio/06-small.jpg", title: "My Works" },
  ];

  // Generate large image paths from small image paths
  const images = data.map((obj) => obj.thumb.replace("-small", "-large"));

  // Function to open the image viewer
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  // Function to close the image viewer
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Explore our curated gallery showcasing the latest fashion designs.
            <br />
            Each piece is a blend of elegance and creativity, <br />
            contemporary trends and timeless style. From vibrant prints to{" "}
            <br />
            classic silhouettes, our collection highlights the artistry and{" "}
            <br />
            craftsmanship behind every garment.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {data.map(({ title, thumb }, index) => (
              <div
                key={index}
                onClick={() => openImageViewer(index)}
                className="col-sm-6 col-md-4 col-lg-4"
              >
                <div className="portfolio-item cursor">
                  <div className="hover-bg">
                    <img
                      src={thumb}
                      className="img-responsive" // Apply responsive styling
                      alt={title} // Improve accessibility
                    />
                    <div className="hover-text">
                      <h4>{title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </div>
  );
};
