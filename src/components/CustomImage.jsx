import React, { useEffect, useState } from "react";
import { handleApiRequest } from "../services/apiHandler"; // adjust path if needed

const CustomImage = ({
  src,
  isLocal = false,
  placeholder = "Loading...",
  style = {},
  alt = "Loaded Image",
  className = "",
  ...restProps
}) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImage = async (srcPath) => {
    setLoading(true);
    try {
      const response = await handleApiRequest({
        url: `/${srcPath}`,
        method: "GET",
        responseType: "blob",
      });

      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
        setLoading(false);
      };
      reader.readAsDataURL(response.data);
    } catch (error) {
      console.error("Error fetching image:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!src) return;

    if (isLocal) {
      // Just use src directly if it's a local/static file
      setImageSrc(src);
    } else {
      // Fetch via API and convert to base64
      fetchImage(src);
    }
  }, [src, isLocal]);

  if (loading) {
    return (
      <div
        className="image-skeleton mt-0 pt-0"
        style={{ backgroundColor: "#eee", ...style }}
      />
    );
  }

  return (
    <div>
      {imageSrc ? (
        <img
          key={src}
          src={imageSrc}
          alt={alt}
          className={className}
          style={style}
          {...restProps}
        />
      ) : (
        <i className="bx bx-image-alt font-size-20" />
      )}
    </div>
  );
};

export default CustomImage;

