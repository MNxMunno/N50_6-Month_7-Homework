// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Product = () => {
  const data = [
    {
      id: 1,
      img: "https://i.postimg.cc/90NtgWNt/product-img.png",
      title: "Why you have to digitalize in 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
    },
    {
      id: 2,
      img: "https://i.postimg.cc/cLTYF1gK/product-img-2.png",
      title: "Our internal process and longerm vision",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
    },
    {
      id: 3,
      img: "https://i.postimg.cc/W3qkpM9r/product-img-3.png",
      title: "Helping the next generation of leaders",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et.",
    },
  ];
  let card = data?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.img} alt="img" />
      <div className="card__content">
        <h2>{el.title}</h2>
        <p>{el.description}</p>
        <a href="#">
          Learn More
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  ));
  return <div className="product__cards">{card}</div>;
};

export default Product;
