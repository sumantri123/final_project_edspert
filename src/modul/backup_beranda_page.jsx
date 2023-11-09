import React from "react";
import { useEffect } from "react";
import { httpService } from "../util/http/service";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduk } from "../util/store_redux/product/action";
import Loader from "../layout_part/component/loader";
import { useNavigate } from "react-router-dom";

const Beranda = () => {
  const { entities, loading } = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    dispatch(getAllProduk());
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const goDetail = (prodId) => {
    navigate("detail/${prodId}");
  };
  return (
    <div>
      <div id="trending-items" className="section-container bg-silver">
        <div className="container">
          <h4 className="section-title clearfix">
            Flash Sale
            <small>Promo Terbatas, Silahkan Pesan Sekarang.</small>
          </h4>

          <div className="row row-space-10">
            <div className="col-md-2 col-sm-4">
              <div className="item item-thumbnail">
                <a onClick={() => navigate("/detail")} className="item-image">
                  <img src="../assets/img/product/product-iphone.png" alt="" />
                  <div className="discount">15% OFF</div>
                </a>
                <div className="item-info">
                  <h4 className="item-title">
                    <a onClick={() => navigate("/detail")}>
                      iPhone 6s Plus11
                      <br />
                      16GB
                    </a>
                  </h4>
                  <p className="item-desc">3D Touch. 12MP photos. 4K video.</p>
                  <div className="item-price">$649.00</div>
                  <div className="item-discount-price">$739.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="item item-thumbnail">
                <a onClick={() => navigate("/detail")} className="item-image">
                  <img
                    src="../assets/img/product/product-ipad-pro.png"
                    alt=""
                  />
                  <div className="discount">32% OFF</div>
                </a>
                <div className="item-info">
                  <h4 className="item-title">
                    <a onClick={() => navigate("/detail")}>
                      {" "}
                      9.7-inch iPad Pro <br />
                      32GB
                    </a>
                  </h4>
                  <p className="item-desc">
                    Super. Computer. Now in two sizes.
                  </p>
                  <div className="item-price">$599.00</div>
                  <div className="item-discount-price">$799.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="item item-thumbnail">
                <a onClick={() => navigate("/detail")} className="item-image">
                  <img src="../assets/img/product/product-imac.png" alt="" />
                  <div className="discount">20% OFF</div>
                </a>
                <div className="item-info">
                  <h4 className="item-title">
                    <a onClick={() => navigate("/detail")}>
                      21.5-inch iMac
                      <br />
                      with Retina Display
                    </a>
                  </h4>
                  <p className="item-desc">
                    Retina. Now in colossal and ginormous.
                  </p>
                  <div className="item-price">$1,099.00</div>
                  <div className="item-discount-price">$1,299.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="item item-thumbnail">
                <a onClick={() => navigate("/detail")} className="item-image">
                  <img
                    src="../assets/img/product/product-apple-watch.png"
                    alt=""
                  />
                  <div className="discount">13% OFF</div>
                </a>
                <div className="item-info">
                  <h4 className="item-title">
                    <a onClick={() => navigate("/detail")}>
                      Apple Watch
                      <br />
                      Stainless steel cases
                    </a>
                  </h4>
                  <p className="item-desc">You. At a glance.</p>
                  <div className="item-price">$599.00</div>
                  <div className="item-discount-price">$799.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="item item-thumbnail">
                <a onClick={() => navigate("/detail")} className="item-image">
                  <img
                    src="../assets/img/product/product-macbook-pro.png"
                    alt=""
                  />
                  <div className="discount">30% OFF</div>
                </a>
                <div className="item-info">
                  <h4 className="item-title">
                    <a onClick={() => navigate("/detail")}>
                      MacBook Pro
                      <br />
                      with Retina Display
                    </a>
                  </h4>
                  <p className="item-desc">Stunning Retina Display</p>
                  <div className="item-price">$1299.00</div>
                  <div className="item-discount-price">$1499.00</div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="item item-thumbnail">
                <a onClick={() => navigate("/detail")} className="item-image">
                  <img
                    src="../assets/img/product/product-apple-tv.png"
                    alt=""
                  />
                  <div className="discount">40% OFF</div>
                </a>
                <div className="item-info">
                  <h4 className="item-title">
                    <a onClick={() => navigate("/detail")}>
                      Apple Tv
                      <br />
                      32GB
                    </a>
                  </h4>
                  <p className="item-desc">The future of television is here.</p>
                  <div className="item-price">$149.00</div>
                  <div className="item-discount-price">$249.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="mobile-list" className="section-container bg-silver p-t-0">
        <div className="container">
          <h4 className="section-title clearfix">
            <a href="#" className="pull-right">
              SHOW ALL
            </a>
            Mobile Phone
            <small>
              Belanja Dan Dapatkan Gadget Favorite Dengan Harga Yang Luar Biasa
            </small>
          </h4>
          <div className="category-container">
            <div className="category-sidebar">
              <ul className="category-list">
                <li className="list-header">TOP CATEGORIES</li>
                <li>
                  <a href="#">Microsoft</a>
                </li>
                <li>
                  <a href="#">Samsung</a>
                </li>
                <li>
                  <a href="#">Apple</a>
                </li>
                <li>
                  <a href="#">Sony</a>
                </li>
                <li>
                  <a href="#">Asus</a>
                </li>
                <li>
                  <a href="#">Nokia</a>
                </li>
                <li>
                  <a href="#">Blackberry</a>
                </li>
                <li>
                  <a href="#">Oppo</a>
                </li>
                <li>
                  <a href="#">Vivo</a>
                </li>
                <li>
                  <a href="#">LG</a>
                </li>
                <li>
                  <a href="#">Huawei</a>
                </li>
                <li>
                  <a href="#">All Brand</a>
                </li>
              </ul>
            </div>
            <div className="category-detail">
              <a href="#" className="category-item full">
                <div className="item">
                  <div className="item-cover">
                    <img
                      src="../assets/img/product/product-samsung-s7-edge.jpg"
                      alt=""
                    />
                  </div>
                  <div className="item-info bottom">
                    <h4 className="item-title">
                      Samsung Galaxy s7 Edge + Geat 360 + Gear VR
                    </h4>
                    <p className="item-desc">Redefine what a phone can do</p>
                    <div className="item-price">$799.00</div>
                  </div>
                </div>
              </a>
              <div className="category-item list">
                <div className="item-row">
                  <div className="item item-thumbnail">
                    <a
                      onClick={() => navigate("/detail")}
                      className="item-image"
                    >
                      <img
                        src="../assets/img/product/product-iphone.png"
                        alt=""
                      />
                      <div className="discount">15% OFF</div>
                    </a>
                    <div className="item-info">
                      <h4 className="item-title">
                        <a onClick={() => navigate("/detail")}>
                          iPhone 6s Plus
                          <br />
                          16GB
                        </a>
                      </h4>
                      <p className="item-desc">
                        3D Touch. 12MP photos. 4K video.
                      </p>
                      <div className="item-price">$649.00</div>
                      <div className="item-discount-price">$739.00</div>
                    </div>
                  </div>
                  <div className="item item-thumbnail">
                    <a
                      onClick={() => navigate("/detail")}
                      className="item-image"
                    >
                      <img
                        src="../assets/img/product/product-samsung-note5.png"
                        alt=""
                      />
                      <div className="discount">32% OFF</div>
                    </a>
                    <div className="item-info">
                      <h4 className="item-title">
                        <a onClick={() => navigate("/detail")}>
                          Samsung Galaxy Note 5<br />
                          Black
                        </a>
                      </h4>
                      <p className="item-desc">
                        Super. Computer. Now in two sizes.
                      </p>
                      <div className="item-price">$599.00</div>
                      <div className="item-discount-price">$799.00</div>
                    </div>
                  </div>
                  <div className="item item-thumbnail">
                    <a href="/detail" className="item-image">
                      <img
                        src="../assets/img/product/product-iphone-se.png"
                        alt=""
                      />
                      <div className="discount">20% OFF</div>
                    </a>
                    <div className="item-info">
                      <h4 className="item-title">
                        <a href="/detail">
                          iPhone SE
                          <br />
                          32/64Gb
                        </a>
                      </h4>
                      <p className="item-desc">A big step for small.</p>
                      <div className="item-price">$499.00</div>
                      <div className="item-discount-price">$599.00</div>
                    </div>
                  </div>
                </div>
                <div className="item-row">
                  <div className="item item-thumbnail">
                    <a href="/detail" className="item-image">
                      <img
                        src="../assets/img/product/product-zenfone2.png"
                        alt=""
                      />
                      <div className="discount">15% OFF</div>
                    </a>
                    <div className="item-info">
                      <h4 className="item-title">
                        <a href="/detail">
                          Assus ZenFone 2<br />
                          ‏(ZE550ML)
                        </a>
                      </h4>
                      <p className="item-desc">See What Others Can’t See</p>
                      <div className="item-price">$399.00</div>
                      <div className="item-discount-price">$453.00</div>
                    </div>
                  </div>
                  <div className="item item-thumbnail">
                    <a href="/detail" className="item-image">
                      <img
                        src="../assets/img/product/product-xperia-z.png"
                        alt=""
                      />
                      <div className="discount">32% OFF</div>
                    </a>
                    <div className="item-info">
                      <h4 className="item-title">
                        <a href="/detail">
                          Sony Xperia Z<br />
                          Black Color
                        </a>
                      </h4>
                      <p className="item-desc">
                        For unexpectedly beautiful moments
                      </p>
                      <div className="item-price">$599.00</div>
                      <div className="item-discount-price">$799.00</div>
                    </div>
                  </div>
                  <div className="item item-thumbnail">
                    <a href="/detail" className="item-image">
                      <img
                        src="../assets/img/product/product-lumia-532.png"
                        alt=""
                      />
                      <div className="discount">20% OFF</div>
                    </a>
                    <div className="item-info">
                      <h4 className="item-title">
                        <a href="/detail">
                          Microsoft Lumia 531
                          <br />
                          Smartphone Orange
                        </a>
                      </h4>
                      <p className="item-desc">
                        1 Year Local Manufacturer Warranty
                      </p>
                      <div className="item-price">$99.00</div>
                      <div className="item-discount-price">$199.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="policy" className="section-container p-t-30 p-b-30">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <div className="policy">
                <div className="policy-icon">
                  <i className="fa fa-truck"></i>
                </div>
                <div className="policy-info">
                  <h4>Gratis Pengiriman</h4>
                  <p>
                    Gratis Pengiriman Wilayah Surabaya{" "}
                    <small>S&K Berlaku</small>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="policy">
                <div className="policy-icon">
                  <i className="fa fa-shield"></i>
                </div>
                <div className="policy-info">
                  <h4>Harga Bersahabat</h4>
                  <p>Harga Bersahabat, Ramah Dikantong & Barang Berkwalitas</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="policy">
                <div className="policy-icon">
                  <i className="fa fa-user-md"></i>
                </div>
                <div className="policy-info">
                  <h4>Industri Rumahan</h4>
                  <p>
                    Industri rumahan ini dibuat oleh tenaga-tenaga yang ahli
                    dalam bidangnya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
