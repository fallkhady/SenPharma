import React from "react";
import CustomTable from "../Components/layouts/CustomTable";
import Navbar from "../Components/navbar/Navbar";
import ButtonPaiement from "../Components/layouts/ButtonPaiement";

const Transaction = () => {
  return (
    <div>
      <Navbar />

      <div
        className="divtitle"
        style={{ color: "#0F0F0F", position: "absolute" }}
      >
        <p>Transaction</p>
      </div>

      {/* <div className="">
        <ButtonPaiement />
      </div> */}

      <div style={{ width: '80%', position: "relative", left: "300px", top: "-450px" }}>
        <CustomTable />
      </div>
    </div>
  );
};

export default Transaction;
