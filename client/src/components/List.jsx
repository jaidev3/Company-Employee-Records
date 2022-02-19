import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import "./list.css";
function List() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState("");
  const [salary, setSalary] = useState([]);
  useEffect(() => {
    getData();
    // getSalary();
  }, []);
  const getData = () => {
    fetch("http://localhost:1234/user")
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
   console.log(data,page);
  //   console.log(salary);

  return (
    <>
      {data.map((e) => {
        return  <>
        <Link to={`./${e._id}`}><div className="userBox" >
        <div style={{display: 'flex',gap:"10px"}}><h2>{e.first_name}</h2><h2>{e.last_name}</h2></div>
        <h2>Rs.{e.salary}</h2>
        </div></Link>
        </>
      })}
       <div className="pagination">
<div className="paginationBox">1</div>
<div className="paginationBox">2</div>
<div className="paginationBox">3</div>
<div className="paginationBox">4</div>
<div className="paginationBox">1</div>
<div className="paginationBox">2</div>
<div className="paginationBox">3</div>
<div className="paginationBox">4</div>
<div className="paginationBox">1</div>
<div className="paginationBox">2</div>
<div className="paginationBox">3</div>
<div className="paginationBox">4</div>

</div>
    {page}
    </>
  );
}

export default List;
