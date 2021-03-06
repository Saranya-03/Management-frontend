import React from 'react';
import "./viewProducts.css";
import PublishIcon from '@material-ui/icons/Publish';

export default function viewProducts() {
    return (
        <div className="viewProduct">
        <br></br>
            <h1 className="title">Huawei nova 3i</h1>      
            <div className="Container">
                <div className="detailsContainer">
                    <div className="detailMain">
                        <img className="im" src="https://c0.wallpaperflare.com/preview/507/68/44/iphone-headphone-technology-product.jpg" alt=""></img>
                        <div className="idName">
                            <h3 className="name">Huawei  nova 3i</h3>
                            <p className="id">Id : <span className="value">01 </span></p>
                        </div>
                    </div>
                    <div className="detailSub">
                        <p className="detail">Unit Price : <span className="value">LKR 45000.00 </span></p>
                        <p className="detail">Stock Amount : <span className="value"> 25</span></p>
                        <p className="detail"> Category : <span className="value">Phone</span></p>
                        <p className="detail">Active : <span className="value">Yes </span></p>
                        <p className="detail">Specifications:<span className="value">Mobile phone - Huwavie</span></p>
                        
                    </div>
                    
                </div>
                <div className="editContainer">
                    <h1 className="editTitle">Edit</h1>
                        <form action="" className="form">
                            <div className="editItems">
                                <div className="leftItemContainer">
                                    <label>Product Name</label><br></br>
                                    <input placeholder="huwavie nova 2i" type="text"></input><br></br>
                                    <label>Catergory</label><br></br>
                                    <select name="cars" id="cars" className="select">
                                        <option value="volvo">Phone</option>
                                        <option value="saab">Charger</option>
                                        <option value="mercedes">Earphone</option>
                                        <option value="audi">HeadPhone</option>
                                    </select><br></br>
                                    <label>Unit Price </label><br></br>
                                    <input placeholder="30000.00" type="number"></input><br></br>
                                    <label>Stock Amount</label><br></br>
                                    <input placeholder="25" type="number"></input><br></br>
                                    <label>Specifications</label><br></br>
                                    <input placeholder="huwavie nova 2i" type="text" ></input><br></br>
                                </div>
                                
                                <div className="rightItemContainer">
                                    <div className="upload">
                                        <img className="prImg" src="https://c0.wallpaperflare.com/preview/507/68/44/iphone-headphone-technology-product.jpg" alt=""></img>
                                        <br></br><label htmlFor="file"><PublishIcon />Upload</label><br></br>
                                        <input placeholder="img" type="file" id="file" style={{display:"none"} }></input>
                                        <br></br><button className="update">Update</button>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </form>
                    
                </div>
            </div>          
                  
        </div>
        
    )
}
