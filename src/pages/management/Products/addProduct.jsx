import "./addProduct.css";
import React from 'react';
import PublishIcon from '@material-ui/icons/Publish';

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="title">Add a New Product</h1>
            <form className="newProductForm">
                <div className="newProductItems">
                    <div className="leftItemContainer">
                        <div className="leftItems">
                            <label>Product Name</label><br></br>
                            <input placeholder="huwavie nova 2i" type="text"></input>
                        </div>
                        <div className="leftItems">
                            <label>Catergory</label><br></br>
                            <select name="cars" id="cars" className="select">
                                <option value="volvo">Phone</option>
                                <option value="saab">Charger</option>
                                <option value="mercedes">Earphone</option>
                                <option value="audi">HeadPhone</option>
                            </select>
                        </div>
                        <div className="leftItems">
                            <label>Unit Price </label><br></br>
                            <input placeholder="30000" type="number"></input>
                        </div>
                    </div>
            
                    <div className="rightItemContainer">
                        <div>
                            <div className="image">
                                <img src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt=""></img>
                                <br></br><label htmlFor="file" className="upload"><PublishIcon />Upload Image</label><br></br>
                                <input placeholder="img" type="file" id="file" style={{display:"none"} }></input>
                            </div>
                            <button>Add Product</button>
                        </div>
                    </div>
                </div>

                
            </form>
        </div>
    )
}
