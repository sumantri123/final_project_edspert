import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { entities } = useSelector((state) => state.cart);
  
  const goDetail = (prodId) => {    
    navigate(`/detail/${prodId}`)
    
  };


  return (
    <div id="header" className="header" data-fixed-top="true">
      <div className="container">
        <div className="header-container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="header-logo">
              <a onClick={() => navigate("/")}>
                <span className="brand"></span>
                <span>STC</span>
                <small>Surabaya Trade Center</small>
              </a>
            </div>
          </div>
          <div className="header-nav">
            <div className=" collapse navbar-collapse" id="navbar-collapse">
              <ul className="nav">
                <li>
                  <a onClick={() => navigate("/")}>Home</a>
                </li>
                <li>
                  <a onClick={() => navigate("/checkout")}>Checkout Page</a>
                </li>
                <li className="dropdown dropdown-hover">
                  <a href="# " data-toggle="dropdown">
                    <i className="fa fa-search search-btn"></i>
                    <span className="arrow top"></span>
                  </a>
                  <div className="dropdown-menu p-15">
                    <form
                      action="search_results.html"
                      method="POST"
                      name="search_form"
                    >
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Search"
                          className="form-control bg-silver-lighter"
                        />
                        <span className="input-group-btn">
                          <button className="btn btn-inverse" type="submit">
                            <i className="fa fa-search"></i>
                          </button>
                        </span>
                      </div>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-nav">
            <ul className="nav pull-right">
              <li className="dropdown dropdown-hover">
                <a
                  href="#"
                  onClick={() => navigate("/checkout")}
                  className="header-cart"
                  data-toggle="dropdown"
                >
                  <i className="fa fa-shopping-bag"></i>
                  <span className="total">{entities.length}</span>
                  <span className="arrow top"></span>
                </a>

                <div className="dropdown-menu dropdown-menu-cart p-0">
                  <div className="cart-header">
                    <h4 className="cart-title">Shopping Bag ({entities.length}) </h4>
                  </div>
                  <div className="cart-body">
                    <ul className="cart-item">
                      {entities.map((item) => {
                        return (
                          <li onClick={()=>goDetail(item.id)} key={item.id}>
                            <div className="cart-item-image">
                              <img
                                src={item.image}
                                alt=""
                              />
                            </div>
                            <div className="cart-item-info">
                              <h4>{item.title}</h4>
                              <span>{item.description}</span>
                              <p className="price">{item.price}</p>
                            </div>
                            <div className="cart-item-close">
                              <a
                                href="#"
                                data-toggle="tooltip"
                                data-title="Remove"
                              >
                                &times;
                              </a>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="cart-footer">
                    <div className="row row-space-10">
                      <div className="col-xs-6">
                        <a href="# " className="btn btn-default btn-block">
                          View Cart
                        </a>
                      </div>
                      <div className="col-xs-6">
                        <a href="# " className="btn btn-inverse btn-block">
                          Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#">
                  <img
                    src="../assets/img/user/user-1.jpg"
                    className="user-img"
                    alt=""
                  />
                  <span className="hidden-md hidden-sm hidden-xs">
                    Login / Register
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
