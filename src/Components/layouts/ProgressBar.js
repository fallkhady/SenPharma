import React from "react";

const ProgressBar = (props) => {
  const { bgcolor, completed, tittle } = props;

  const containerStyles = {
    height: 10,
    width: "50%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginTop: 30,
    marginLeft: "80px",
    justifyContent: "center",
    // textAlign: "justify"
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}% `,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    marginTop: "-20px",
    // textAlign: 'right'
  };

  const labelStyles = {
    // padding: 5,
    marginLeft: "250px",
    color: "red",
    marginRight: "20px",
    fontWeight: "bold",
  };
  const test = {
    display: "flex",
    // alignItem: "center",
    height: "30px",
  };
  const titre = {
    // marginTop: "50px",
    textAlign: "center",
    right: "130px",
    bottom: "5px",
    position: "relative",
  };

  return (
    <div style={test}>
      <div style={containerStyles}>
        <div style={titre}>{`${tittle}`}</div>
        <div style={fillerStyles}>

          <span style={labelStyles}>{`${completed}`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
