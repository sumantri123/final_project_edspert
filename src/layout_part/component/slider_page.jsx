import React from "react";

function Slider() {
  return (
    <div id="slider" className="section-container p-0 bg-black-darker">
      <div id="main-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item active">
            <img
              src="../assets/img/slider/slider-1-cover.jpg"
              className="bg-cover-img"
              alt=""
            />
            <div className="container">
              <img
                src="../assets/img/slider/slider-1-product.png"
                className="product-img right bottom fadeInRight animated"
                alt=""
              />
            </div>
            <div className="carousel-caption carousel-caption-left">
              <div className="container">
                <h3 className="title m-b-5 fadeInLeftBig animated">iMac</h3>
                <p className="m-b-15 fadeInLeftBig animated">
                  Retina. Now in colossal and ginormous.
                </p>
                <div className="price m-b-30 fadeInLeftBig animated">
                  <small>from</small> <span>$649.00</span>
                </div>
                <a
                  href="#"
                  className="btn btn-outline btn-lg fadeInLeftBig animated"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div className="item">
            <img
              src="../assets/img/slider/slider-2-cover.jpg"
              className="bg-cover-img"
              alt=""
            />
            <div className="container">
              <img
                src="../assets/img/slider/slider-2-product.png"
                className="product-img left bottom fadeInLeft animated"
                alt=""
              />
            </div>
            <div className="carousel-caption carousel-caption-right">
              <div className="container">
                <h3 className="title m-b-5 fadeInRightBig animated">iPhone 6s</h3>
                <p className="m-b-15 fadeInRightBig animated">
                  The only thing that’s changed is everything
                </p>
                <div className="price m-b-30 fadeInRightBig animated">
                  <small>from</small> <span>$1,299.00</span>
                </div>
                <a
                  href="#"
                  className="btn btn-outline btn-lg fadeInRightBig animated"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>

          <div className="item">
            <img
              src="../assets/img/slider/slider-3-cover.jpg"
              className="bg-cover-img"
              alt=""
            />
            <div className="carousel-caption">
              <div className="container">
                <h3 className="title m-b-5 fadeInDownBig animated">Macbook Air</h3>
                <p className="m-b-15 fadeInDownBig animated">
                  Thin.Light.Powerful.
                  <br />
                  And ready for anything
                </p>
                <div className="price fadeInDownBig animated">
                  <small>from</small> <span>$999.00</span>
                </div>
                <a href="#" className="btn btn-outline btn-lg fadeInUpBig animated">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#main-carousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left"></i>
        </a>
        <a
          className="right carousel-control"
          href="#main-carousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Slider;
