
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Registration() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const [designation, setDesignation] = useState("");
    const [gender, setGender] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate(); // Initialize useNavigate hook


    return (
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
            <div className="bg-white p-3 rounded w-25 position-relative">
                <h2>Registration</h2>
                
                <form >
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <small className="text-danger">{errors.name}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile">
                            <strong>Mobile No</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Mobile No"
                            autoComplete="off"
                            name="mobile"
                            className="form-control rounded-0"
                            onChange={(e) => setMobile(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="designation">
                            <strong>Designation</strong>
                        </label>
                        <select
                            className="form-control rounded-0"
                            name="designation"
                            onChange={(e) => setDesignation(e.target.value)}
                        >
                            <option value="">Select Designation</option>
                            <option value="HR Manager">HR Manager</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>
                            <strong>Gender</strong>
                        </label>
                        <div>
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="ms-2">Male</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="ms-2">Female</label>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Submit
                    </button>
                    <p style={{textAlign:"center"}}>Already have Account</p>
                   <p style={{textAlign:"center"}}><a href="/login" style={{ color:"blue"}}>login</a></p>
                </form>
            </div>
        </div>
    );
}

export default Registration;

