import React, { useEffect, useState } from "react";
import Ashutosh from "../../assets/images/Ashutosh.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:12000/api/students")
      .then((res) => setStudents(res.data.students))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="row gap-3 mb-4">
      <div className="d-flex justify-content-between">
        <h2>Students</h2>
        <Link to="/student/new" className="btn btn-primary">
          New Student
        </Link>
      </div>
      {students.map((student, key) => (
        <div className="card col-md-3" key={key}>
          <img className="card-img-top" src={Ashutosh} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{student.name}</h5>
            <p className="card-text">{student.birthday}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Students;
