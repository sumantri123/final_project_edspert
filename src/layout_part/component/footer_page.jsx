import React from "react";

function Footer() {
  return (
    <div>    
        <div id="footer" className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h4 className="footer-header">TENTANG KITA</h4>
                        <p>
                        Usaha kecil merupakan suatu usaha ekonomi produktif yang independen atau berdiri sendiri baik yang dimiliki perorangan atau kelompok dan bukan sebagai badan usaha cabang dari perusahaan utama. Dikuasai dan dimiliki serta menjadi bagian baik langsung maupun tidak langsung dari usaha menengah.
                        </p>                        
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-header">LINKS TERHUBUNG</h4>
                        <ul className="fa-ul">
                            <li><i className="fa fa-li fa-angle-right"></i> <a href="https://www.surabaya.go.id/" target="_blank">Pemerintah Kota Surabaya</a></li>
                            <li><i className="fa fa-li fa-angle-right"></i> <a href="http://disperdagin.surabaya.go.id/katalog/" target="_blank">Dinas Perdagangan Surabaya</a></li>
                            <li><i className="fa fa-li fa-angle-right"></i> <a href="https://dinkominfo.surabaya.go.id/" target="_blank">Kominfo Surabaya</a></li>                            
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-header">DAFTAR UMKM</h4>
                        <ul className="list-unstyled list-product">
                            <li>
                                <div className="image">
                                    <img src="../assets/img/product/product-iphone-6s.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <h4 className="info-title">Iphone 6s</h4>
                                    <div className="price">$1200.00</div>
                                </div>
                            </li>
                            <li>
                                <div className="image">
                                    <img src="../assets/img/product/product-galaxy-s6.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <h4 className="info-title">Samsung Galaxy s7</h4>
                                    <div className="price">$850.00</div>
                                </div>
                            </li>                        
                            <li>
                                <div className="image">
                                    <img src="../assets/img/product/product-ipad-pro.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <h4 className="info-title">Ipad Pro</h4>
                                    <div className="price">$800.00</div>
                                </div>
                            </li>
                            <li>
                                <div className="image">
                                    <img src="../assets/img/product/product-galaxy-note5.jpg" alt="" />
                                </div>
                                <div className="info">
                                    <h4 className="info-title">Samsung Galaxy Note 5</h4>
                                    <div className="price">$1200.00</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h4 className="footer-header">KONTAK KITA</h4>
                        <address>
                            <strong>Surabaya, Jawa Timur</strong><br />
                            Jl. Raya Darmo 160<br />
                            Wonokromo, 60177<br /><br />
                            <abbr title="Phone">Telp:</abbr> (123) 123-1234<br />
                            <abbr title="Fax">Fax:</abbr> (123) 321-4321<br />
                            <abbr title="Email">Email:</abbr> <a href="umkm@gmail.com">umkm@gmail.com</a><br />                            
                        </address>
                    </div>
                </div>
            </div>
        </div>        
    </div>

  )
}

export default Footer
