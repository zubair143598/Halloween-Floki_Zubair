import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const data = {
  title: "FAQ (How it works)",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What is the package version",
      content: <p>current version is 1.2.1</p>,
    },
  ],
};

const styles = {
  bgColor: "black",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "grey",
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
