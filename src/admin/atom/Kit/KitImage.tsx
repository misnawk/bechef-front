import React from "react";

// 키트의 이미지를 보여주는 타입을 지정
type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image = ({ src, alt, className }: ImageProps) => {
  return <img src={src} alt={alt} className={className} />;
};

export default Image;
