import "./home.css";
import React from 'react';
import Info from "../../../components/InformationHome/Info";
import Chart from "..//..//..//components/Chart/Chart";
import {chartData} from "../../../dataCollection";

export default function Home() {
    return (
        <div className="home">
            <Info />
            <Chart data={chartData} title="Total Profit Analysis" dataKey="month"/>
        </div>
    )
}
