// import { DownOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";
// import { Menu } from "antd";
import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";

const Whitepaper = () => {
  return (
    <div className="container-fluid whitepaper">
      <br />
      <br />
      <br />
      <div className="container rounded-5 con2">
        <div className="row">
          <div className="col-md-8">
            <h5 className="h5">
              <MdOutlineHorizontalRule size={40} className="line" />
              <MdOutlineHorizontalRule size={40} className="line2" />
              <MdOutlineHorizontalRule size={40} className="line2" />
              Whitepaper
            </h5>
            <h1>Read Our Documents</h1>
            <p className="p1">
              <AiFillCheckCircle size={60} className="check" />
              KYC
            </p>
            <p className="p1">
              <AiFillCheckCircle size={60} className="check" />
              Audit
            </p>
            <p className="p1">
              <AiFillCheckCircle size={60} className="check" />
              Whitepaper
            </p>
            <div className="dropdown">
              <button
                className="btn rounded-5  btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Download
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    KYC
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  Audit
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    whitepaper
                  </a>
                </li>
              </ul>
            </div>

            {/* <Menu
              selectable
              defaultSelectedKeys={["3"]}
              items={[
                {
                  key: "1",
                  label: "Item 1",
                },
                {
                  key: "2",
                  label: "Item 2",
                },
                {
                  key: "3",
                  label: "Item 3",
                },
              ]}
            /> */}
          </div>

          <div className="col-md-4">
            <img className="img" src="./Assists/IMG_2571-982x1024.png" alt="" />
          </div>
        </div>
      </div>
      <br /><br /><br />
    </div>
  );
};

export default Whitepaper;
