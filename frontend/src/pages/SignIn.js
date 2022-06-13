import React, { useState } from 'react'

const CreateAccount = ({ signInUser }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        signInUser(email, password)
        setSubmitted(true)
    }
    return (
        <div className='card' style={{ width: "36rem" }}>
            <div className='card-body'>
                {!submitted ?
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 row">
                            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input required type="email" className="form-control" id="staticEmail" placeholder="email@example.com" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input required type="password" className="form-control" id="inputPassword" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                            </div>
                        </div>
                        <button className='btn btn-success'>Sign In</button>
                    </form> : <div>
                        <p>You're Logged In!</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default CreateAccount