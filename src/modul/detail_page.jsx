import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../util/store_redux/product/action";
import { useEffect } from "react";
import { addItem } from "../util/store_redux/cart/slice";

const DetailPage = () => {
    
  const {id} = useParams();
  
  const dispatch = useDispatch();
  const {entity} = useSelector((state) => state.product);  
  const {entities} = useSelector((state) =>state.product);

  const fetchDetailProduct = async(productId)=>{
    await dispatch(getDetail(productId))
  }

  useEffect(()=>{
    fetchDetailProduct(id)
  }, [])

  const addToCart = (product) => {
    dispatch(addItem(product))
  }

  return (
    <div id="product" className="section-container p-t-20">
      <div className="container">
        <ul className="breadcrumb m-b-10 f-s-12">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Mobile Phone</a>
          </li>
          <li>
            <a href="#">Apple</a>
          </li>
          <li className="active">iPhone 6S Plus</li>
        </ul>

        <div className="product">
          <div className="product-detail">
            <div className="product-image">
              
              <div className="product-main-image" data-id="main-image">
                <img src={entity.image} alt="" />
              </div>
            </div>
            <div className="product-info">
              <div className="product-info-header">
                <h1 className="product-title">
                  <span className="label label-success">41% OFF</span> {entity.title}
                </h1>
                <ul className="product-category">
                  <li>
                    <a href="#">iPhone</a>
                  </li>
                  <li>/</li>
                  <li>
                    <a href="#">mobile phone</a>
                  </li>
                  <li>/</li>
                  <li>
                    <a href="#">electronics</a>
                  </li>
                  <li>/</li>
                  <li>
                    <a href="#">lifestyle</a>
                  </li>
                </ul>
              </div>
              <div className="product-warranty">
                <div className="pull-right">Availability: In stock</div>
                <div>
                  <b>1 Year</b> Local Manufacturer Warranty
                </div>
              </div>
              <ul className="product-info-list">
                <li>
                  <i className="fa fa-circle"></i>{entity.description}
                </li>                
              </ul>
              <div className="product-social">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="facebook"
                      data-toggle="tooltip"
                      data-trigger="hover"
                      data-title="Facebook"
                      data-placement="top"
                      data-original-title=""
                      title=""
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="twitter"
                      data-toggle="tooltip"
                      data-trigger="hover"
                      data-title="Twitter"
                      data-placement="top"
                      data-original-title=""
                      title=""
                    >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="google-plus"
                      data-toggle="tooltip"
                      data-trigger="hover"
                      data-title="Google Plus"
                      data-placement="top"
                      data-original-title=""
                      title=""
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="whatsapp"
                      data-toggle="tooltip"
                      data-trigger="hover"
                      data-title="Whatsapp"
                      data-placement="top"
                      data-original-title=""
                      title=""
                    >
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="tumblr"
                      data-toggle="tooltip"
                      data-trigger="hover"
                      data-title="Tumblr"
                      data-placement="top"
                      data-original-title=""
                      title=""
                    >
                      <i className="fa fa-tumblr"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="product-purchase-container">
                <div className="product-discount">
                  <span className="discount">$869.00</span>
                </div>
                <div className="product-price">
                  <div className="price">${entity.price}</div>
                </div>
                <button onClick={() => addToCart(entity)} className="btn btn-inverse btn-lg">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
          <div className="product-tab">
            <ul id="product-tab" className="nav nav-tabs">
              <li className="">
                <a href="#product-desc" data-toggle="tab" aria-expanded="false">
                  Product Description
                </a>
              </li>
              <li className="">
                <a href="#product-info" data-toggle="tab" aria-expanded="false">
                  Additional Information
                </a>
              </li>
              <li className="active">
                <a
                  href="#product-reviews"
                  data-toggle="tab"
                  aria-expanded="true"
                >
                  Rating &amp; Reviews (5)
                </a>
              </li>
            </ul>
            <div id="product-tab-content" className="tab-content">
              <div className="tab-pane fade" id="product-desc">
                <div className="product-desc">
                  <div className="image">
                    <img src="../assets/img/product/product-main.jpg" alt="" />
                  </div>
                  <div className="desc">
                    <h4>iPhone 6s</h4>
                    <p>
                      The moment you use iPhone 6s, you know you’ve never felt
                      anything like it. With a single press, 3D Touch lets you
                      do more than ever before. Live Photos bring your memories
                      to life in a powerfully vivid way. And that’s just the
                      beginning. Take a deeper look at iPhone 6s, and you’ll
                      find innovation on every level.
                    </p>
                  </div>
                </div>
                <div className="product-desc right">
                  <div className="image">
                    <img
                      src="../assets/img/product/product-3dtouch.jpg"
                      alt=""
                    />
                  </div>
                  <div className="desc">
                    <h4>3D Touch</h4>
                    <p>
                      The original iPhone introduced the world to Multi-Touch,
                      forever changing the way people experience technology.
                      With 3D Touch, you can do things that were never possible
                      before. It senses how deeply you press the display,
                      letting you do all kinds of essential things more quickly
                      and simply. And it gives you real-time feedback in the
                      form of subtle taps from the all-new Taptic Engine.
                    </p>
                  </div>
                </div>
                <div className="product-desc">
                  <div className="image">
                    <img
                      src="../assets/img/product/product-cameras.jpg"
                      alt=""
                    />
                  </div>
                  <div className="desc">
                    <h4>Cameras</h4>
                    <p>
                      The 12-megapixel iSight camera captures sharp, detailed
                      photos. It takes brilliant 4K video, up to four times the
                      resolution of 1080p HD video. iPhone 6s also takes selfies
                      worthy of a self-portrait with the new 5-megapixel
                      FaceTime HD camera. And it introduces Live Photos, a new
                      way to relive your favorite memories. It captures the
                      moments just before and after your picture and sets it in
                      motion with just the press of a finger.
                    </p>
                  </div>
                </div>
                <div className="product-desc right">
                  <div className="image">
                    <img
                      src="../assets/img/product/product-technology.jpg"
                      alt=""
                    />
                  </div>
                  <div className="desc">
                    <h4>Technology</h4>
                    <p>
                      iPhone 6s is powered by the custom-designed 64-bit A9
                      chip. It delivers performance once found only in desktop
                      computers. You’ll experience up to 70 percent faster CPU
                      performance, and up to 90 percent faster GPU performance
                      for all your favorite graphics-intensive games and apps.
                    </p>
                  </div>
                </div>
                <div className="product-desc">
                  <div className="image">
                    <img
                      src="../assets/img/product/product-design.jpg"
                      alt=""
                    />
                  </div>
                  <div className="desc">
                    <h4>Design</h4>
                    <p>
                      Innovation isn’t always obvious to the eye, but look a
                      little closer at iPhone 6s and you’ll find it’s been
                      fundamentally improved. The enclosure is made from a new
                      alloy of 7000 Series aluminum — the same grade used in the
                      aerospace industry. The cover glass is the strongest, most
                      durable glass used in any smartphone. And a new rose gold
                      finish joins space gray, silver, and gold.
                    </p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="product-info">
                <div className="table-responsive">
                  <table className="table table-product table-striped">
                    <thead>
                      <tr>
                        <th></th>
                        <th>iPhone 6s</th>
                        <th>iPhone 6s Plus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="field">Capacity</td>
                        <td>
                          16GB
                          <br />
                          64GB
                          <br />
                          128GB
                        </td>
                        <td>
                          16GB
                          <br />
                          64GB
                          <br />
                          128GB
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Weight and Dimensions</td>
                        <td>
                          5.44 inches (138.3 mm) x 2.64 inches (67.1 mm) x 0.28
                          inch (7.1 mm)
                          <br />
                          Weight: 5.04 ounces (143 grams)
                        </td>
                        <td>
                          6.23 inches (158.2 mm) x 3.07 inches (77.9 mm) x 0.29
                          inch (7.3 mm)
                          <br />
                          Weight: 6.77 ounces (192 grams)
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Display</td>
                        <td>
                          Retina HD display with 3D Touch
                          <br />
                          4.7-inch (diagonal) LED-backlit widescreen
                          <br />
                          1334-by-750-pixel resolution at 326 ppi
                          <br />
                          1400:1 contrast ratio (typical)
                          <br />
                          <br />
                          <b>Both models:</b>
                          <br />
                          500 cd/m2 max brightness (typical)
                          <br />
                          Full sRGB standard
                          <br />
                          Dual-domain pixels for wide viewing angles
                          <br />
                          Fingerprint-resistant oleophobic coating on front
                          <br />
                          Support for display of multiple languages and
                          characters simultaneously
                          <br />
                          Display Zoom
                          <br />
                          Reachability
                        </td>
                        <td>
                          Retina HD display with 3D Touch
                          <br />
                          5.5-inch (diagonal) LED-backlit widescreen
                          <br />
                          1920-by-1080-pixel resolution at 401 ppi
                          <br />
                          1300:1 contrast ratio (typical)
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Chip</td>
                        <td colSpan="2">
                          A9 chip with 64-bit architecture Embedded M9 motion
                          coprocessor
                        </td>
                      </tr>
                      <tr>
                        <td className="field">iSight Camera</td>
                        <td colSpan="2">
                          New 12-megapixel iSight camera with 1.22µ pixels
                          <br />
                          Live Photos
                          <br />
                          Autofocus with Focus Pixels
                          <br />
                          Optical image stabilization (iPhone 6s Plus only)
                          <br />
                          True Tone flash
                          <br />
                          Panorama (up to 63 megapixels)
                          <br />
                          Auto HDR for photos
                          <br />
                          Exposure control
                          <br />
                          Burst mode
                          <br />
                          Timer mode
                          <br />
                          ƒ/2.2 aperture
                          <br />
                          Five-element lens
                          <br />
                          Hybrid IR filter
                          <br />
                          Backside illumination sensor
                          <br />
                          Sapphire crystal lens cover
                          <br />
                          Auto image stabilization
                          <br />
                          Improved local tone mapping
                          <br />
                          Improved noise reduction
                          <br />
                          Face detection
                          <br />
                          Photo geotagging
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Video Recording</td>
                        <td colSpan="2">
                          4K video recording (3840 by 2160) at 30 fps
                          <br />
                          1080p HD video recording at 30 fps or 60 fps
                          <br />
                          720p HD video recording at 30 fps
                          <br />
                          Optical image stabilization for video (iPhone 6s Plus
                          only)
                          <br />
                          True Tone flash
                          <br />
                          Slo-mo video support for 1080p at 120 fps and 720p at
                          240 fps
                          <br />
                          Time-lapse video with stabilization
                          <br />
                          Cinematic video stabilization (1080p and 720p)
                          <br />
                          Continuous autofocus video
                          <br />
                          Improved noise reduction
                          <br />
                          Take 8MP still photos while recording 4K video
                          <br />
                          Playback zoom
                          <br />
                          3x zoom
                          <br />
                          Face detection
                          <br />
                          Video geotagging
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade active in" id="product-reviews">
                <div className="row row-space-30">
                  <div className="col-md-7">
                    <div className="review">
                      <div className="review-info">
                        <div className="review-icon">
                          <img src="../assets/img/user/user-1.jpg" alt="" />
                        </div>
                        <div className="review-rate">
                          <ul className="review-star">
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                          (4/5)
                        </div>
                        <div className="review-name">Terry</div>
                        <div className="review-date">24/05/2016 7:40am</div>
                      </div>
                      <div className="review-title">What does “SIM-free” mean?</div>
                      <div className="review-message">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi in imperdiet augue. Integer non aliquam eros. Cras
                        vehicula nec sapien pretium sagittis. Pellentesque
                        feugiat lectus non malesuada aliquam. Etiam id tortor
                        pretium, dictum leo at, malesuada tortor.
                      </div>
                    </div>
                    <div className="review">
                      <div className="review-info">
                        <div className="review-icon">
                          <img src="../assets/img/user/user-2.jpg" alt="" />
                        </div>
                        <div className="review-rate">
                          <ul className="review-star">
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="">
                              <i className="fa fa-star-o"></i>
                            </li>
                            <li className="">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                          (3/5)
                        </div>
                        <div className="review-name">George</div>
                        <div className="review-date">24/05/2016 8:40am</div>
                      </div>
                      <div className="review-title">
                        When I buy iPhone from apple.com, is it tied to a
                        carrier or does it come “unlocked”?
                      </div>
                      <div className="review-message">
                        In mauris leo, maximus at pellentesque vel, pharetra vel
                        risus. Aenean in semper velit. Pellentesque habitant
                        morbi tristique senectus et netus et malesuada fames ac
                        turpis egestas. Morbi volutpat mattis neque, at molestie
                        tellus ultricies quis. Ut lobortis odio nec nunc
                        ullamcorper, vitae faucibus augue semper. Sed luctus
                        lobortis nulla ac volutpat. Mauris blandit scelerisque
                        sem.
                      </div>
                    </div>
                    <div className="review">
                      <div className="review-info">
                        <div className="review-icon">
                          <img src="../assets/img/user/user-3.jpg" alt="" />
                        </div>
                        <div className="review-rate">
                          <ul className="review-star">
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          (5/5)
                        </div>
                        <div className="review-name">Steve</div>
                        <div className="review-date">23/05/2016 8:40am</div>
                      </div>
                      <div className="review-title">
                        Where is the iPhone Upgrade Program available?
                      </div>
                      <div className="review-message">
                        Duis ut nunc sem. Integer efficitur, justo sit amet
                        feugiat hendrerit, arcu nisl elementum dui, in ultricies
                        erat quam at mauris. className aptent taciti sociosqu ad
                        litora torquent per conubia nostra, per inceptos
                        himenaeos. Donec nec ultrices tellus. Mauris elementum
                        venenatis volutpat.
                      </div>
                    </div>
                    <div className="review">
                      <div className="review-info">
                        <div className="review-icon">
                          <img src="../assets/img/user/user-4.jpg" alt="" />
                        </div>
                        <div className="review-rate">
                          <ul className="review-star">
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="">
                              <i className="fa fa-star-o"></i>
                            </li>
                            <li className="">
                              <i className="fa fa-star-o"></i>
                            </li>
                            <li className="">
                              <i className="fa fa-star-o"></i>
                            </li>
                          </ul>
                          (2/5)
                        </div>
                        <div className="review-name">Alfred</div>
                        <div className="review-date">23/05/2016 10.02am</div>
                      </div>
                      <div className="review-title">
                        Can I keep my current service plan if I choose the
                        iPhone Upgrade Program?
                      </div>
                      <div className="review-message">
                        Donec vel fermentum quam. Vivamus scelerisque enim eget
                        tristique auctor. Vivamus tempus, turpis iaculis tempus
                        egestas, leo augue hendrerit tellus, et efficitur neque
                        massa at neque. Aenean efficitur eleifend orci at
                        ornare.
                      </div>
                    </div>
                    <div className="review">
                      <div className="review-info">
                        <div className="review-icon">
                          <img src="../assets/img/user/user-5.jpg" alt="" />
                        </div>
                        <div className="review-rate">
                          <ul className="review-star">
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                            <li className="active">
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                          (5/5)
                        </div>
                        <div className="review-name">Edward</div>
                        <div className="review-date">22/05/2016 9.30pm</div>
                      </div>
                      <div className="review-title">
                        I have an existing carrier contract or installment plan.
                        Can I purchase with the iPhone Upgrade Program
                      </div>
                      <div className="review-message">
                        Aliquam consequat ut turpis non interdum. Integer
                        blandit erat nec sapien sollicitudin, a fermentum dui
                        venenatis. Nullam consequat at enim et aliquet. Cras
                        mattis turpis quis eros volutpat tristique vel a ligula.
                        Proin aliquet leo mi, et euismod metus placerat sit
                        amet.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="review-form">
                      <form
                        action="product_detail.html"
                        name="review_form"
                        method="POST"
                      >
                        <h2>Write a review</h2>
                        <div className="form-group">
                          <label>
                            Name <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                          <label >
                            Title <span className="text-danger">*</span>
                          </label>
                          <input type="text" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                          <label >
                            Review <span className="text-danger">*</span>
                          </label>
                          <textarea
                            className="form-control"
                            rows="8"
                            id="review"
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label >
                            Rating <span className="text-danger">*</span>
                          </label>
                          <div
                            className="rating rating-selection"
                            data-rating="true"
                            data-target="rating"
                          >
                            <i className="fa fa-star-o" data-value="2"></i>
                            <i className="fa fa-star-o" data-value="4"></i>
                            <i className="fa fa-star-o" data-value="6"></i>
                            <i className="fa fa-star-o" data-value="8"></i>
                            <i className="fa fa-star-o" data-value="10"></i>
                            <span className="rating-comment">
                              <span className="rating-comment-tooltip">
                                Click to rate
                              </span>
                            </span>
                          </div>
                          <select name="rating" className="hide">
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                          </select>
                        </div>
                        <button type="submit" className="btn btn-inverse btn-lg">
                          Submit Review
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 className="m-b-15 m-t-30">You Might Also Like</h4>
        <div className="row row-space-10">
          <div className="col-md-2 col-sm-4">
            <div className="item item-thumbnail">
              <a href="product_detail.html" className="item-image">
                <img src="../assets/img/product/product-iphone.png" alt="" />
                <div className="discount">15% OFF</div>
              </a>
              <div className="item-info">
                <h4 className="item-title">
                  <a href="product_detail.html">
                    iPhone 6s Plus
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
              <a href="product_detail.html" className="item-image">
                <img
                  src="../assets/img/product/product-samsung-note5.png"
                  alt=""
                />
                <div className="discount">32% OFF</div>
              </a>
              <div className="item-info">
                <h4 className="item-title">
                  <a href="product.html">
                    Samsung Galaxy Note 5<br />
                    Black
                  </a>
                </h4>
                <p className="item-desc">Super. Computer. Now in two sizes.</p>
                <div className="item-price">$599.00</div>
                <div className="item-discount-price">$799.00</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="item item-thumbnail">
              <a href="product_detail.html" className="item-image">
                <img src="../assets/img/product/product-iphone-se.png" alt="" />
                <div className="discount">20% OFF</div>
              </a>
              <div className="item-info">
                <h4 className="item-title">
                  <a href="product.html">
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
          <div className="col-md-2 col-sm-4">
            <div className="item item-thumbnail">
              <a href="product_detail.html" className="item-image">
                <img src="../assets/img/product/product-zenfone2.png" alt="" />
                <div className="discount">15% OFF</div>
              </a>
              <div className="item-info">
                <h4 className="item-title">
                  <a href="product_detail.html">
                    Assus ZenFone 2<br />
                    &rlm;(ZE550ML)
                  </a>
                </h4>
                <p className="item-desc">See What Others Can’t See</p>
                <div className="item-price">$399.00</div>
                <div className="item-discount-price">$453.00</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="item item-thumbnail">
              <a href="product_detail.html" className="item-image">
                <img src="../assets/img/product/product-xperia-z.png" alt="" />
                <div className="discount">32% OFF</div>
              </a>
              <div className="item-info">
                <h4 className="item-title">
                  <a href="product.html">
                    Sony Xperia Z<br />
                    Black Color
                  </a>
                </h4>
                <p className="item-desc">For unexpectedly beautiful moments</p>
                <div className="item-price">$599.00</div>
                <div className="item-discount-price">$799.00</div>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="item item-thumbnail">
              <a href="product_detail.html" className="item-image">
                <img src="../assets/img/product/product-lumia-532.png" alt="" />
                <div className="discount">20% OFF</div>
              </a>
              <div className="item-info">
                <h4 className="item-title">
                  <a href="product.html">
                    Microsoft Lumia 531
                    <br />
                    Smartphone Orange
                  </a>
                </h4>
                <p className="item-desc">1 Year Local Manufacturer Warranty</p>
                <div className="item-price">$99.00</div>
                <div className="item-discount-price">$199.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
