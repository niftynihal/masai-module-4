import React from "react";

function Image({ src, alt, className, url }) {
  return (
    <>
      <a href = {url}><img src={src} className={className} alt={alt || "alternate name"} /></a>
    </>
  );
}

export default Image;
