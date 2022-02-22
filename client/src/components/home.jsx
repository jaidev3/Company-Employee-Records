// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
  return (
    <>
      <div className="home">
        <h1>Welcome to Employee Salary Management System</h1>
        <h3>
          Please go to List tab to see list of all employees and salary paid to
          them.
        </h3>
        <Link to="/list">
          <button className="letgo">Let's Go</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
