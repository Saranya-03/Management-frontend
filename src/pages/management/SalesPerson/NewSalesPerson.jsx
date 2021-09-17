import "./newSalesperson.css";
import React from 'react';

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="title">Add a New Salesperson</h1>
            <form className="newUserForm">
                <div className="newUserItems">
                    <label>FullName</label>
                    <input placeholder="John Michel" type="text"></input>
                </div>
                <div className="newUserItems">
                    <label>Email Address</label>
                    <input placeholder="johnMich45@gmail.com" type="email"></input>
                </div>
                <div className="newUserItems">
                    <label>UserName</label>
                    <input placeholder="john78#" type="text"></input>
                </div>
                <div className="newUserItems">
                    <label>Password</label>
                    <input placeholder="password" type="password"></input>
                </div>
                <div className="newUserItems">
                    <label>Confirm Password</label>
                    <input placeholder="confirm password" type="password"></input>
                </div>
                
                <div className="newUserItems">
                    <label>Date of Birth</label>
                    <input placeholder="02/07/1994" type="date"></input>
                </div>
                <div className="newUserItems">
                    <label>Phone Number</label>
                    <input placeholder="+9476283893" type="text"></input>
                </div>
                
                <div className="newUserItems">
                    <label>Address</label>
                    <input placeholder="N0.07, 5th lane, Colombo 03, SriLanka" type="text"></input>
                </div>
                <div className="newUserItems">
                    <label>Gender</label>
                    <div className="row">
                        <input type="radio" value="male" name="gender"></input>
                        <label>Male</label>
                        <input type="radio" value="female" name="gender"></input>
                        <label>Female</label>
                    </div>
                    
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}
