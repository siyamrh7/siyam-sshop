import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { RegisterAction } from '../Store/Action/RegisterAction'
const Register = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({ FirstName: "", LastName: "", Email: "", Password: "", ConfirmPassword: "" })
    const onchangeHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const onsubmitHandler = (e) => {
        e.preventDefault()
        dispatch(RegisterAction(state))
    }
    return (
        <>
            {/* <!-- register  --> */}
            <section className="section">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">

                            <div className="card card-primary">

                                <div className="card-body">
                                    <form >
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label for="frist_name">First Name</label>
                                                <input onChange={onchangeHandler} id="frist_name" type="text" className="form-control" name="frist_name" autofocus />
                                            </div>
                                            <div className="form-group col-6">
                                                <label for="last_name">Last Name</label>
                                                <input onChange={onchangeHandler} id="last_name" type="text" className="form-control" name="last_name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input onChange={onchangeHandler} id="email" type="email" className="form-control" name="email" />
                                            <div className="invalid-feedback">
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-group col-6">
                                                <label for="password" className="d-block">Password</label>
                                                <input onChange={onchangeHandler} id="password" type="password" className="form-control pwstrength" data-indicator="pwindicator" name="password" />
                                                <div id="pwindicator" className="pwindicator">
                                                    <div className="bar"></div>
                                                    <div className="label"></div>
                                                </div>
                                            </div>
                                            <div className="form-group col-6">
                                                <label for="password2" className="d-block">Password Confirmation</label>
                                                <input onChange={onchangeHandler} id="password2" type="password" className="form-control" name="password-confirm" />
                                            </div>
                                        </div>


                                        <div className="form-group">
                                            <button type="submit" onClick={onsubmitHandler} className="btn btn-primary btn-lg btn-block">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="simple-footer text-center pt-3">
                                Copyright &copy; Siyam'S
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Register
