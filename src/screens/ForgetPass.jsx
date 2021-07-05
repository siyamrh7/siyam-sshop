import React from 'react'

const ForgetPass = () => {
    return (
        <div>
            {/* <!-- forget password --> */}
            <section className="section">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">

                            <div className="card card-primary">

                                <div className="card-body">
                                    <p className="text-muted">We will send a link to reset your password</p>
                                    <form method="POST">
                                        <div className="form-group">
                                            <label for="email">Email</label>
                                            <input id="email" type="email" className="form-control" name="email" tabIndex="1" required autofocus />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4">
                                                Forgot Password
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="simple-footer text-center pt-3">
                                Copyright &copy; BD IT Care 2020
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgetPass
