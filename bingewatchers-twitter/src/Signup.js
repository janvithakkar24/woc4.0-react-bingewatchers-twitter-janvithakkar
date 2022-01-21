import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signup extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group mt-3">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group mt-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group mt-3">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group mt-3">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block mt-3">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                </p>
            </form>
        );
    }
}