import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
import { useEffect } from "react";
const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMsg(e.message);
    }
  }
  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);
  console.log(images);
  if (loading) {
    return <div>Please Wait data is loading!!</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Occurred!! {errorMsg}</div>;
  }
  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((item, index) => (
            <img
              key={item.id}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
              alt={item.download_url}
              src={item.download_url}
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicators"
                    : "current-indicators inactive-indicator"
                }
              onClick={()=>setCurrentSlide(index)}></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
