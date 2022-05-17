import React from 'react'
import Bankimage from '../img/BadBankLogo4.gif'

const Home = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={Bankimage} alt="bad bank" />
            <div className="card-body">
                <h5 className="card-title">Banking Made Difficult</h5>
                <p className="card-text">hours of operation:  </p>
                <p>M W F from 1pm to 3pm  </p>
                <h6>Please click the button below to:</h6>
                <a href="/CreateAccount" className="btn btn-warning">Create an Account</a>
            </div>
        </div>
    );
};

export default Home