import "antd/dist/antd.css";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { Button, Dropdown, Menu, message, Space, Tooltip } from "antd";
import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const menu = (
  <Menu className="lin rounded-3"
    onClick={handleMenuClick}
    items={[
      {
        className:"items",
        label: "KYC",
      
      },
      {
        className:"items",
        label: "Audit",
        
      },
      {
        className:"items",
        label: "Whitepaper",
        
      },
    ]}
  />
);
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

            <Dropdown className="btn rounded-5" overlay={menu}>
              <Button>
                <Space>
                  Download
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>
          </div>

          <div className="col-md-4">
            <img className="img" src="./Assists/IMG_2571-982x1024.png" alt="" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Whitepaper;
