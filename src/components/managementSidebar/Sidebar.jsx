import React from 'react';
import"./sidebar.css";
import {LineStyle,Timeline,TrendingUp,Assessment,ShoppingCart,Storefront,PeopleAlt,LocalOffer,LocationOn} from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    
                    <ul className="sidebarList">
                        <Link to="/management" className="link">
                            <li className="item active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        
                        <Link to="/management/SalesPerson" className="link">
                            <li className="item">
                                <PeopleAlt className="sidebarIcon" />
                                Salesperson
                            </li>
                        </Link>
                        <Link to="/management/Products" className="link">
                            <li className="item">
                                <LocalOffer className="sidebarIcon" />
                                Products
                            </li>
                        </Link>
                        <Link to="/management/Orders" className="link">
                            <li className="item">
                                <ShoppingCart className="sidebarIcon" />
                                Orders
                            </li>
                        </Link>
                        <Link to="/management/Shops" className="link">
                            <li className="item">
                                <Storefront className="sidebarIcon" />
                                Shops
                            </li>
                        </Link>
                        <Link to="/management/Routes" className="link">
                            <li className="item">
                                <LocationOn className="sidebarIcon" />
                                Routes
                            </li>
                        </Link>
                        <Link to="/management/Reports" className="link">
                            <li className="item">
                                <Assessment className="sidebarIcon" />
                                Reports
                            </li>
                        </Link>                  
                    </ul>
                </div>
            </div>
                        
        </div>
    )
}
