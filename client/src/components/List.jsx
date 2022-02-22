import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./list.css";
function List() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("");
  const [p, setP] = useState(1);
  // const [salary, setSalary] = useState([]);
  useEffect(() => {
    getData();
    // getSalary();
  }, [p]);
  const getData = () => {
    fetch(`http://localhost:1234/user?page=${p}`)
      .then((response) => response.json())
      .then((res) => {
        setData(res.user);
        setPage(res.totalPages);
      });
  };

  //   const getSalary = () => {
  //     fetch("http://localhost:1234/salary")
  //       .then((response) => response.json())
  //       .then((res) => {setSalary(res.salary)
  //     });
  //   };
  console.log(data, page);
  //   console.log(salary);

  return (
    <>
      {data.map((e) => {
        return (
          <>
            <Link to={`./${e._id}`}>
              <div className="userBox">
                <div style={{ display: "flex", gap: "10px" }}>
                  <h2>{e.first_name}</h2>
                  <h2>{e.last_name}</h2>
                </div>
                <h2>Rs.{e.salary}</h2>
              </div>
            </Link>
          </>
        );
      })}
      <div className="pagination">
        <button className="paginationBox" onClick={()=>{setP(1)}} >1</button>
        <button className="paginationBox" onClick={()=>{setP(2)}} >2</button>
        <button className="paginationBox" onClick={()=>{setP(3)}}>3</button>
        <button className="paginationBox" onClick={()=>{setP(4)}}>4</button>
        <button className="paginationBox" onClick={()=>{setP(5)}}>5</button>
        <button className="paginationBox" onClick={()=>{setP(6)}}>6</button>
        <button className="paginationBox" onClick={()=>{setP(7)}}>7</button>
        <button className="paginationBox" onClick={()=>{setP(8)}}>8</button>
        <button className="paginationBox" onClick={()=>{setP(9)}}>9</button>
        <button className="paginationBox" onClick={()=>{setP(10)}}>10</button>
      </div>
    </>
  );
}

export default List;
