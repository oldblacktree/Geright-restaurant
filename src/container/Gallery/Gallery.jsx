import "./Gallery.css";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import { useRef } from "react";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;

    switch (direction) {
      case "left":
        current.scrollLeft -= 310;
        break;
      case "right":
        current.scrollLeft += 310;
        break;
      default:
        break;
    }
  };

  return (
    <div className="gallery">
      <div className="gallery__content">
        <SubHeading title="Instagram" />
        <h2 className="p-headtext">Photo gallery</h2>
        <p className="gallery__content-description p-cormorant">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button className="custom-button" type="button">
          View more
        </button>
      </div>
      <div className="gallery__images">
        <div className="gallery__images-container" ref={scrollRef}>
          {galleryImages.map((image, i) => (
            <div className="gallery__images-slide">
              <img src={image} alt="gallery image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="gallery__images-arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => {
              scroll("left");
            }}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => {
              scroll("right");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
 