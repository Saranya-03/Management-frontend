import "./newSalesperson.css";
import PublishIcon from '@material-ui/icons/Publish';

export default function NewUser() {
    return (
        <div className="newUser"><br></br>
            <div className="containerMain">
                <h1 className="title">Add a New Salesperson</h1>
                <form className="newUserForm">
                    <div className="container">
                        <div className="leftContainer">
                            <div className="newUserItems">
                                <label>ID Number</label>
                                <input placeholder="982738272V" type="text"></input>
                            </div>
                            <div className="newUserItems">
                                <label>First Name</label>
                                <input placeholder="John" type="text"></input>
                            </div>
                            <div className="newUserItems">
                                <label>Last Name</label>
                                <input placeholder="Michel" type="text"></input>
                            </div>
                            <div className="newUserItems">
                                <label>Email Address</label>
                                <input placeholder="johnMich45@gmail.com" type="email"></input>
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
                                <label>Phone Number</label>
                                <input placeholder="076283893" type="number"></input>
                            </div>
                            
                            <div className="newUserItems">
                                <label>Address</label>
                                <input placeholder="N0.07, 5th lane, Colombo 03, SriLanka" type="text"></input>
                            </div>
                            <div className="newUserItems">
                                <label>City</label>
                                <input placeholder="Jaffna" type="text"></input>
                            </div>
                            <button className="btt">Add</button>
                        </div>
                        <div className="rightContainer">
                            <div className="rightWrapper">
                                <img className="prImg" src="https://i7.pngguru.com/preview/831/88/865/user-profile-computer-icons-user-interface-mystique.jpg" alt=""></img>
                                <label className="uploadImg" htmlFor="file"><PublishIcon className="icon"/>Upload</label><br></br>
                                <input placeholder="img" type="file" id="file" style={{display:"none"} }></input>
                            
                                

                            </div>
                            
                                
                        </div>
                    </div>
                
                </form>
            </div>
            
        </div>
    )
}
