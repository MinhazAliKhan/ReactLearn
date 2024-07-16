import React from "react";

const Card = (props) => {
  //   const title = "Mastermind School";
  //   const desc = "English Medium School. O level and A level Examination";
  const date = new Date();
  const curDate = date.getDate();
  const curMonth = date.getMonth();
  const year = date.getFullYear();

  return (
    <>
      <div className="card">
        <h3 className="cardTitle">{props.title}</h3>
        <p className="cardDesc">{props.desc}</p>
        <p className="cardFooter">{curMonth + "/" + curDate + "/" + year}</p>
      </div>
    </>
  );
};

export default Card;
