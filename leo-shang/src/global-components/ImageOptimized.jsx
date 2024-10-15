import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import Loading from "./Loading";

const ImageOptimized = ({ name, src, hash, styles, animationClass }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      {imageLoaded && (
        <img
          className={`${animationClass} ${styles}`}
          src={src}
          alt={`${name}`}
          loading="lazy"
          fetchPriority="low"
        />
      )}
      {!imageLoaded && <Loading />}
    </>
  );
};

export default ImageOptimized;
