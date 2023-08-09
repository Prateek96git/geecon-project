import React, {useState} from 'react'
import axios from 'axios'

function Signup() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function submit() {
        axios 
        .post('http://localhost:5000/api/signup', { name, email, password })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
            console.error(error.response.data);
        })
    }

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-2 text-light" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span><a href="https://accounts.google.com/" class="me-4 text-reset">Sign In With Google</a>
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span><a href="https://www.facebook.com/" class="me-4 text-reset">Sign Up With Facebook</a> 
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInput" autoComplete='off' required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='off' required/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" autoComplete='off' required/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" onClick={submit} className="btn btn-outline-primary w-100 mt-5">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
