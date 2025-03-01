

// import React from 'react'
// import "./Home.css";
// import logo from"./amazon.png"; 



// const Home = () => {
//   return (
//     <div className="navBar">
//       <img src={logo} alt="" />
//       <div className="menuContainer">
//         <p>Home</p>
//         <p>About</p>
//         <p>Blog</p>
//         <p>Contact</p>
//         <button>Login</button>
//       </div>
//     </div>
//   )
// }

// export default Home;

import React from "react";
import "./Home.css";
import tshirt1 from"./img12.jpg";
import tshirt2 from"./img13.jpg";
import tshirt3 from"./img14.jpg";
import tshirt4 from"./img15.jpg";
import img from "./imgl.jpg";

const Navbar = () => (
  <nav className="navbar">
    <img src={img}/>
    <div className="menuContainer"> 
      <p >Home</p>
      <p>About</p>
      <p>Contact Us</p>
      <button>Login</button>
    </div>
  </nav>
);

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="card">
          <img src={tshirt1} alt="Dolman Frock" />
          <h3>Dolman Frock</h3>
          <p>$120</p>
          <button>Add to Cart</button> 
        </div>

        <div className="card">
          <img src={tshirt2} alt="Maxi Frock" />
          <h3>Maxi Frock</h3>
          <p>$200</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img src={tshirt3} alt="Baby Doll Frock" />
          <h3>Baby Doll Frock</h3>
          <p>$150</p>
          <button>Add to Cart</button>
        </div>

        <div className="card">
          <img src={tshirt4} alt="Bustier Frock" />
          <h3>Bustier Frock</h3>
          <p>$250 </p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
