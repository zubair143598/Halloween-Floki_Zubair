import React from 'react';
import { MdOutlineHorizontalRule } from "react-icons/md";
import {AiFillCheckCircle} from "react-icons/ai"

const Whitepaper = () => {
  return (
    <div className="container-fluid whitepaper">
        <br /><br /><br />
        <div className="container con2">
            <div className="row">
                <div className="col-md-8">
                <h5 className="h5">
              <MdOutlineHorizontalRule size={40} className="line" />
              <MdOutlineHorizontalRule size={40} className="line2" />
              <MdOutlineHorizontalRule size={40} className="line2" />
              Whitepaper
            </h5>
            <h1>Read Our Documents</h1>
            <p><AiFillCheckCircle size={40} className="check"/>KYC</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whitepaper