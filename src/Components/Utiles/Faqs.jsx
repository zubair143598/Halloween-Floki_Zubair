import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const data = {
  
  rows: [
    {
      title: "Why is the payout in BUSD, not in $FLOH?",
      content: `This is a massive advantage of FLOH compared to other crypto projects. Halloween Floki, like every coin on the market, might fluctuate in value a lot. In contrast, BUSD is very stable, almost 1:1 to USD, which in result, reduces the risk of your investment. With decent volume, your investment will pay for itself over time.`,
    },
    {
      title: "What is slippage for?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Why 8% tax and when is it applied?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "Why am I not receiving rewards?",
      content: <p>current version is 1.2.1</p>,
    },
    {
      title: "What is AMA and when do they happen?",
      content: <p>Ask Me Anything, (AMA) is an open space where investors can talk to the developers and ask questions. The Halloween Floki team will be holding AMA’s on a regular schedule. Make sure to join our telegram to learn more about the schedule!</p>,
    },
  ],
};

const styles = {
  bgColor: "black",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

const Faqs = () => {
  return (
    <div className="container-fluid faqs">
      <div className="container">
        <div className="row">
          <h5 className="h5">
            <MdOutlineHorizontalRule size={40} className="line" />
            <MdOutlineHorizontalRule size={40} className="line2" />
            <MdOutlineHorizontalRule size={40} className="line2" />
            Whitepaper
          </h5>
          <h1>Frequently Asked Questions</h1>
          <div className="col-md-6 faqmar">
            <Faq data={data} styles={styles} config={config} />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <img className="img" src="./Assists/question.png" alt="" />
          </div>
        </div>
        <div className="row row2">
          <div className="col-md-12 text-center col1">
            <p>
              <FaTwitter className="twitter" size={50} />
              <FaTelegramPlane className="telegram" size={50} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
