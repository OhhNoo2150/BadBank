import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import CreateAccount from './pages/CreateAccount';
import Withdraw from './pages/Withdraw';
import Deposit from './pages/Deposit';
import AllData from './pages/AllData';
import { Container, Row } from 'react-bootstrap';

function App() {
  const [users, setUsers] = useState([]);
  const addUser = (name, email, password) => {
    setUsers([
      ...users,
      {
        name: name,
        email: email,
        password: password,
        balance: 0,
      }
    ])
  }
  const adjustUserBalance = (value) => {
    const loggedInUser = users[users.length - 1]
    setUsers([
      ...users.slice(0, users.length - 1),
      {
        ...loggedInUser,
        balance: loggedInUser.balance + value
      }
    ])
  }
  return (
    <Router>
      <Navbar user={users[users.length - 1]} />
      <Container>
        <Row className="justify-content-center">
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/CreateAccount' element={<CreateAccount addUser={addUser} />} />
            <Route path='/Withdraw' element={<Withdraw onAdjust={adjustUserBalance} user={users[users.length - 1]} />} />
            <Route path='/Deposits' element={<Deposit onAdjust={adjustUserBalance} user={users[users.length - 1]} />} />
            <Route path='/AllData' element={<AllData users={users} />} />
          </Routes>
        </Row>
      </Container>
    </Router>
  );
}

export default App;