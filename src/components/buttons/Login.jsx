import React,{useState} from 'react'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

     function signin() {
        axios.post('http://localhost:5000/api/login', { email, password })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error.response.data);
        })
     }
     
    return (
        <div>
            <button type="button" className="btn btn-outline-primary text-light ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
               <span className="fa fa-sign-in me-1"></span> Login
            </button>

            
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-google me-2"></span><a href="https://accounts.google.com/" class="me-4 text-reset"> Sign in With Google
                               </a>
                               </button>
                            <button className="btn btn-primary w-100 mb-4">
                               <span className="fa fa-facebook me-2"></span><a href="https://www.facebook.com/" class="me-4 text-reset">
                              Sign in With Facebook
                              </a>
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" onClick={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='email' autoComplete='off' required/>
                                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" onClick={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='password' required/>
  </div>
                                        <div className="mb-3 form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
                                            <button type="submit" onClick={signin} className="btn btn-outline-primary w-100 mt-5">Submit</button>
</form>
                                    </div>
                                </div>
                </div>
                        </div>
        </div>
                    )
}

                    export default Login
