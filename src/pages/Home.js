import React from 'react'
import Bankimage from '../img/bankblue.png'

const Home = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={Bankimage} alt="bad bank" />
            <div className="card-body">
                <h5 className="card-title">Banking Made Difficult</h5>
                <p className="card-text">Welcome to Bad Bank: </p>
                <p>Where Security is our last priority</p>
                <h6>Please click the button below to:</h6>
                <a href="/CreateAccount" className="btn btn-primary">Create an Account</a>
            </div>
        </div>
    );
};

export default Home