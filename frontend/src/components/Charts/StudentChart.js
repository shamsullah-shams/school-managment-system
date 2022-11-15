import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "../Root.css";



const StudentChart = () => {

    const ChartData = {
        labels: [
            "Kabul", "Herat", "Kandahar", "Balkh", "Mazar", "Laghamn"
        ],
        datasets: [
            {
                label: "Students",
                data: [
                    454353, 1345534, 2453453, 945345, 6453453, 235434,
                ],
                backgroundColor: [
                    "rgba(255,99,132,0.6)",
                    "rgba(54,162,235,0.6)",
                    "rgba(255,206,86,0.6)",
                    "rgba(75,192,192,0.6)",
                    "rgba(153, 102,255,0.6)",
                    "rgba(255,159,64,0.6)",
                    "rgba(255,99,132,0.6)",
                ],

            }
        ]
    }


    return (
        <React.Fragment>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Chart />
                </Paper>
            </Grid>

            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                >
                    <Deposits />
                </Paper>
            </Grid>
            <Bar
                className="Chart"
                data={ChartData}
                options={{

                }}

            />
        </React.Fragment>
    );
}



export default StudentChart;