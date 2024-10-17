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
          decoding="async"
          fetchPriority="high"
          sizes="100%"
        />
      )}
      {!imageLoaded && (
        <Blurhash
          hash={hash} // Use the provided blurhash string
          width={"100%"} // Set the width and height as needed
          height={"100%"}
          resolutionX={32} // Optional: increase for higher resolution
          resolutionY={32} // Optional: increase for higher resolution
          punch={1} // Optional: controls the intensity of the blur effect
        />
      )}
    </>
  );
};

export default ImageOptimized;
