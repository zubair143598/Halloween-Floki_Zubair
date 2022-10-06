import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const WhatHF = () => {
  return (
    <div className="container-fluid whatHF">
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col1">
            <h5 className="h5">
              <MdOutlineHorizontalRule size={40} className="line" />
              <MdOutlineHorizontalRule size={40} className="line2" />
              <MdOutlineHorizontalRule size={40} className="line2" />
              WHAT IS HALLOWEEN FLOKI
            </h5>
            <h1>From the Team That Brought You Valentine Floki</h1>
            <p>Halloween Floki (FLOH) is a meme cryptocurrency token operating on the BEP-20 Blockchain technology (Binance Smart Chain). With the great experience, knowledge and wisdom of the core team, FLOH will attempt to peak at the highest market cap a Floki sub-project has ever reached, all while distributing BUSD rewards every day to its holders.</p>
            <p>We are taking advantage of the upcoming Holiday to gain the crypto community’s attention but as the weeks go by, this project will gain its reputation through continuous communication with its investors, aggressive marketing campaigns, listings and constant deliveries from the leadership team. Backed by cryptocurrency and stock market whales, we invite you on this journey to the double-digits millions market cap!</p>
            <p>
              <FaTwitter className="twitter" size={50} />
              <FaTelegramPlane className="telegram" size={50}/>
            </p>
          </div>
          <div className="col-md-6 col-12 text-center">
            <img className="img1" src="./Assists/FLOH_Logo-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatHF;
