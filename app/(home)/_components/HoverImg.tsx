import Image from "next/image";
import React from "react";

const HoverImg = () => {
  return (
    <div className="py-4 w-full h-auto flex mx-auto justify-center">
      <div className="w-full h-auto bg-black flex flex-row mx-auto">
        <Image src={"/img1.png"} width={100} height={100} alt="img-1" />
        <Image src={"/img2.png"} width={1000} height={1000} alt="img-1" />
        <Image src={"/img3.png"} width={1000} height={1000} alt="img-1" />
      </div>
    </div>
  );
};

export default HoverImg;
