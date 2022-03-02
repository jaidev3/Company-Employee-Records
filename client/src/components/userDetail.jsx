import { useParams } from "react-router-dom";
import "./userDetail.css";
import { useEffect, useState } from "react";
export default function UserDetai() {
  const { _id } = useParams();
  const [data, setData] = useState("");
  useEffect(() => {
    fetch(`http://localhost:1234/user/${_id}`)
      .then((d) => d.json())
      .then(
        (d) => {
          setData(d.user);
        },
        [_id]
      );
  });

  return (
    <div className="detail">
      <div className="user-detail">
        <h3>
          {data.first_name} {data.last_name}
        </h3>
        <h3>{data.gender}</h3>
        <h3>{data.email}</h3>
        <button>Edit</button>
      </div>
      <div className="user-salary">
        <h3>Salary : Rs {data.salary}</h3>
      </div>
    </div>
  );
}
