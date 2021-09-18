import React from 'react';
import "./products.css";
import {useState} from "react";
import { Link } from 'react-router-dom';
import { DataGrid } from '@material-ui/data-grid';
import {productRows} from "../../../dataCollection";
import {Delete} from '@material-ui/icons';


export default function Products() {
  const [data,setData]=useState(productRows);

  const handleDelete=(id)=>{
    setData(data.filter((item)=>item.id !== id))
  };

const columns = [
    { 
    field: 'id', 
    headerName: 'ID', 
    width: 100 },
    {
      field: 'productName',
      headerName: 'pName',
      width: 300,
         
    },
    { 
      field: 'avatar', 
      headerName: 'Image', 
      width: 100 ,
      renderCell:(params)=>{
        return(
          <img className="imag" src={params.row.avatar} alt=""></img>
        )
      }
    },
    {
      field: 'amount',
      headerName: 'Stock Amount',
      width: 100,
      
    },
    {
      field: 'unitPrice',
      headerName: 'Email',
      width: 120,
      
    },
    {
      field: 'active',
      headerName: 'Active',
      width: 120,
    
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell : (params)=>{
          return (
              <div className="actionButton">
                
                <Link to={"/management/products/"+params.row.productName}>
                    <button className="editButton">View</button>
                </Link>
                
                         
                <Delete className="deleteButton" onClick={()=>handleDelete(params.row.id)} />
              </div>
          )
      }
      
    },
  ];

    return (
        <div className="product">
            <div className="container">
              <h1 className="heading">Product Details</h1>
              <Link to="/management/products/addProduct">
                <button className="addProduct">Add New Product</button>
              </Link>
            </div>
            
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
            
  
        </div>
    )
}

