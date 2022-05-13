import React from "react";
import { Carousel } from "antd";
import { object } from "yup";

function ImageSlider(props) {
  return (
    <div>
      <Carousel autoplay>
        {props.images.map((image, index) => (
          <div key={index}>
            <img
              style={{
                width: "100%",
                objectFit: "cover",
                maxHeight: "120px",
              }}
              src={`http://localhost:5001/${image}`}
              alt="productImage"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
