import React from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { HiSpeakerphone } from "react-icons/hi";
import { MdOutlineWaves } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";



const Banner1 = () => { 
  return (
    <div className="container-fluid banner1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="h5">
              <MdOutlineHorizontalRule size={40} className="line" />
              <MdOutlineHorizontalRule size={40} className="line2" />
              <MdOutlineHorizontalRule size={40} className="line2" />
              WHAT IS HALLOWEEN FLOKI
            </h5>
            <p>
              WHAT IS OUR TOKENOMICS At Halloween Floki, we are designing a
              project based on definitive market rules and fundamental economic
              principles. Halloween Floki reconciles a high-performance protocol
              with integral price stability features.
            </p>
            <br />
            <p>Total Sudopply: 1 000 000 000 000 FLOH</p>
            <br />
            <p>8% Buy and Sell Tax:</p>
            <br />
            <p>
              4% holders rewards: Dividend tax on all transactions that will be
              distributed every 24 hours to holders in BUSD.
            </p>
            <p>
              1% liquidity: Liquidity tax on all transactions to prevent major
              price fluctuation after a large trade by filling the liquidity
              pool.
            </p>
            <p>
              3% marketing: Marketing tax on all transactions allows the
              Halloween Floki marketing team to reinvest and grow the project to
              its maximum potential.
            </p>
            <h5 className="h5">
              <MdOutlineHorizontalRule size={40} className="line" />
              <MdOutlineHorizontalRule size={40} className="line2" />
              <MdOutlineHorizontalRule size={40} className="line2" />
              WHAT ARE OUR FEATURES
            </h5>
          </div>
          <div className="col-md-3 col1">
            <BiDollar size={70} />
            <h3>$BUSD Rewards</h3>
            <p>
              Earn automatic Binance pegged USD ($BUSD), rewards by holding your
              Halloween Floki Coin – 4% of every buy, transfer and sell
              transaction is redistributed automatically to $FLOH holders. You
              will receive the rewards automatically in your wallet or claim
              your rewards manually in our upcoming reward app tracker.
            </p>
          </div>
          <div className="col-md-3 col1">
            <HiSpeakerphone size={70} />
            <h3>$BUSD Rewards</h3>
            <p>
              Earn automatic Binance pegged USD ($BUSD), rewards by holding your
              Halloween Floki Coin – 4% of every buy, transfer and sell
              transaction is redistributed automatically to $FLOH holders. You
              will receive the rewards automatically in your wallet or claim
              your rewards manually in our upcoming reward app tracker.
            </p>
          </div>
          <div className="col-md-3 col1">
            <MdOutlineWaves size={70} />
            <h3>$BUSD Rewards</h3>
            <p>
              Earn automatic Binance pegged USD ($BUSD), rewards by holding your
              Halloween Floki Coin – 4% of every buy, transfer and sell
              transaction is redistributed automatically to $FLOH holders. You
              will receive the rewards automatically in your wallet or claim
              your rewards manually in our upcoming reward app tracker.
            </p>
          </div>
          <div className="col-md-3 col1">
            <FaUserShield size={70} />
            <h3>$BUSD Rewards</h3>
            <p>
              Earn automatic Binance pegged USD ($BUSD), rewards by holding your
              Halloween Floki Coin – 4% of every buy, transfer and sell
              transaction is redistributed automatically to $FLOH holders. You
              will receive the rewards automatically in your wallet or claim
              your rewards manually in our upcoming reward app tracker.
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Banner1;
