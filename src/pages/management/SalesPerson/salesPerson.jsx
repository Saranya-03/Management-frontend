import "./salesPerson.css";
import React from 'react'
import {rows} from "../../../dataCollection";
import { Box } from '@material-ui/core';
import SalesPersonList from "../../../components/salesPersonComp/salesPesonListComp";
import SalesPersonToolBar from '../../../components/salesPersonComp/salesPersonToolbar';


export default function SalesPerson() {
    return (
      <div className="salesPerson" >
        <SalesPersonToolBar className="contain"/>
            <Box sx={{ pt: 3 }} className="contain">
                <SalesPersonList salesPerson={rows} />
            </Box>
      </div>
    
    )
}
