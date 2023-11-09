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
    navigate(`/detail/${prodId}`)
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
            {loading ? (
              <Loader />
            ) : (
              entities.map((item) => {
                return (
                  <div className="col-md-2 col-sm-4" onClick={()=>goDetail(item.id)} key={item.id} style={{marginBottom: "10px"}}>
                    <div className="item item-thumbnail" >
                      <a className="item-image">
                        <img src={item.image} alt=""/>
                        <div className="discount">15% OFF</div>
                      </a>
                      <div className="item-info">
                        <h4 className="item-title">
                          {item.title}
                        </h4>
                        <p className="item-desc">{item.description}</p>
                        <div className="item-price">${item.price}</div>                        
                      </div>
                    </div>
                  </div>
                );
              })
            )}
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
