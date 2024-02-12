import React from "react";
import "./homebanner.css";
import GradiantBox from "../../components/Elements/GradiantBox";

function HomeBanner() {
  return (
    <GradiantBox className="mainHeading">
      <div className="mainHeading__content">
        <article className="mainHeading__text">
          <p className="mainHeading__preTitle">DRJ</p>
          <h2 className="mainHeading__title">Dibya Ranjan Jena</h2>
          <p className="mainHeading__description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus ante
            velit nunc morbi pretium ut nullam dolor pulvinar proin viverra
            ullamcorper aceget.
          </p>
          <button className="cta">Get In Touch</button>
        </article>
        <figure className="mainHeading__image">
          <img src="images/slider1.jpg" alt="" />
        </figure>
      </div>
    </GradiantBox>
  );
}

export default HomeBanner;
