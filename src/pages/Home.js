import React from 'react'
import { Link } from 'react-router-dom';
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
                {/* added a # before /CreateAccount to see if it will fix the linking issue */}
                {/* <a href="#/CreateAccount" className="btn btn-warning">Create an Account</a> */}
                <Link to="/CreateAccount" className="btn btn-success">Create An Account</Link>
            </div>
        </div>
    );
};

export default Home