import React from "react"; 

function TopHeader() {  

    return (              
            <div id="top-nav" className="top-nav">            
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Kemudahan Belanja Online Untuk Semua</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">                            
                            <li><a href="#"><i className="fa fa-facebook f-s-14"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter f-s-14"></i></a></li>
                            <li><a href="#"><i className="fa fa-instagram f-s-14"></i></a></li>                            
                        </ul>
                    </div>
                </div>            
            </div>        
    )
  }
  
  export default TopHeader
  