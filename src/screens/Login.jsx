import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoginAction } from '../Store/Action/LoginAction'
const Login = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({ Email: "", Password: "" })
    const onchangeHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const onsubmitHandler = (e) => {
        e.preventDefault()
        dispatch(LoginAction(state))
    }
    return (
        <>
            {/* <!-- loing --> */}
            <section className="section">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">

                            <div className="card card-primary">

                                <div className="card-body">
                                    <form className="needs-validation" novalidate="">
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input onChange={onchangeHandler} id="email" type="email" className="form-control" name="email" tabIndex="1" required autofocus />
                                            <div className="invalid-feedback">
                                                Please fill in your email
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="d-block">
                                                <label for="password" className="control-label">Password</label>
                                                <div className="float-right">
                                                    <a href="forgetpassword.html" className="text-small">
                                                        Forgot Password?
                                                    </a>
                                                </div>
                                            </div>
                                            <input onChange={onchangeHandler} id="password" type="password" className="form-control" name="password" tabIndex="2" required />
                                            <div className="invalid-feedback">
                                                please fill in your password
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <button type="submit" onClick={onsubmitHandler} className="btn btn-primary btn-lg btn-block" tabIndex="4">
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <div className="text-center mt-4 mb-3">
                                        <div className="text-job text-muted">Login With Social</div>
                                    </div>
                                    <div className="row sm-gutters">
                                        <div className="col-6">
                                            <a className="btn btn-block btn-social btn-facebook"><span className="fab fa-facebook"></span> Facebook</a>
                                        </div>
                                        <div className="col-6">
                                            <a className="btn btn-block btn-social btn-twitter"><span className="fab fa-twitter"></span> Twitter</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 text-muted text-center">
                                Don't have an account? <a href="auth-register.html">Create One</a>
                            </div>
                            <div className="simple-footer text-center">
                                Copyright &copy; Siyam's
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Login
