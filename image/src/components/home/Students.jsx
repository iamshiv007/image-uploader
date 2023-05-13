import React from "react";
import Ashutosh from "../../assets/images/Ashutosh.png";

const Students = () => {
  return (
    <div className="row gap-3 mb-4">
      <h2>Students</h2>
      <div className="card col-md-3">
        <img className="card-img-top" src={Ashutosh} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Ashutos Negi</h5>
          <p className="card-text">12 Feb</p>
        </div>
      </div>
    </div>
  );
};

export default Students;
