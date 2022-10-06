import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container-fluid text-center  hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <h1 className="hd1">Halloween Floki</h1>
          </div>
          <div className="col-md-6 col-12 rounded-3 col2">
            <h3>$FLOH Live Now!</h3>
            <button type="submit" className="buy">
              Buy
            </button>
            <p>
              <FaTwitter className="twitter" size={50} />
              <FaTelegramPlane className="telegram" size={50} />
            </p>
            <p className="para2">
              Contract : 0x2c0e76dade015bc390a13c1b80cc1bafd
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
