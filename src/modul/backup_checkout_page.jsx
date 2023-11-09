import React from "react";

function CheckoutPage(){
    return(
        <div className="section-container" id="checkout-cart">
            <div className="container">                
                <div className="checkout">
                    <form action="#" method="POST" name="form_checkout">                        
                        <div className="checkout-header">                            
                            <div className="row">                                
                                <div className="col-md-3 col-sm-3">
                                    <div className="step active">
                                        <a href="#">
                                            <div className="number">1</div>
                                            <div className="info">
                                                <div className="title">Delivery Options</div>
                                                <div className="desc">Lorem ipsum dolor sit amet.</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>                                
                                <div className="col-md-3 col-sm-3">
                                    <div className="step">
                                        <a href="#">
                                            <div className="number">2</div>
                                            <div className="info">
                                                <div className="title">Shipping Address</div>
                                                <div className="desc">Vivamus eleifend euismod.</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>                                
                                <div className="col-md-3 col-sm-3">
                                    <div className="step">
                                        <a href="#">
                                            <div className="number">3</div>
                                            <div className="info">
                                                <div className="title">Payment</div>
                                                <div className="desc">Aenean ut pretium ipsum. </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>                                
                                <div className="col-md-3 col-sm-3">
                                    <div className="step">
                                        <a href="#">
                                            <div className="number">4</div>
                                            <div className="info">
                                                <div className="title">Complete Payment</div>
                                                <div className="desc">Curabitur interdum libero.</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>                                
                            </div>                        
                        </div>
                        
                        <div className="checkout-body">
                            <div className="table-responsive">
                                <table className="table table-cart">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center">Quantity</th>
                                            <th className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="cart-product">
                                                <div className="product-img">
                                                    <img src="../assets/img/product/product-iphone-6s-plus.png" alt=""/>
                                                </div>
                                                <div className="product-info">
                                                    <div className="title">iPhone 6s Plus 16GB (Silver)</div>
                                                    <div className="desc">Delivers Tue 26/04/2016 - Free</div>
                                                </div>
                                            </td>
                                            <td className="cart-price text-center">$999.00</td>
                                            <td className="cart-qty text-center">
                                                <div className="cart-qty-input">
                                                    <a href="#" className="qty-control left disabled" data-click="decrease-qty" data-target="#qty"><i className="fa fa-minus"></i></a>
                                                    <input type="text" name="qty" value="1" className="form-control" id="qty"/>
                                                    <a href="#" className="qty-control right disabled" data-click="increase-qty" data-target="#qty"><i className="fa fa-plus"></i></a>
                                                </div>
                                                <div className="qty-desc">1 to max order</div>
                                            </td>
                                            <td className="cart-total text-center">
                                                $999.00
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="cart-summary" colSpan="4">
                                                <div className="summary-container">
                                                    <div className="summary-row">
                                                        <div className="field">Cart Subtotal</div>
                                                        <div className="value">$999.00</div>
                                                    </div>
                                                    <div className="summary-row text-danger">
                                                        <div className="field">Free Shipping</div>
                                                        <div className="value">$0.00</div>
                                                    </div>
                                                    <div className="summary-row total">
                                                        <div className="field">Total</div>
                                                        <div className="value">$999.00</div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>                      
                        <div className="checkout-footer">
                            <a href="#" className="btn btn-white btn-lg pull-left">Continue Shopping</a>
                            <button type="submit" className="btn btn-inverse btn-lg p-l-30 p-r-30 m-l-10">Checkout</button>
                        </div>
                      
                    </form>
                </div>                
            </div>
        </div>
    )
}

export default CheckoutPage;