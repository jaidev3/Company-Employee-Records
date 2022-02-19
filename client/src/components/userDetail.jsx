import { useParams, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
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
    <div>
      <h1>{data.first_name}</h1>
    </div>
  );
}
