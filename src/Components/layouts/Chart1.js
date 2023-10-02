import React from 'react';
import { PieChart, Pie, Cell } from "recharts";

const data = [{}, {}, {},
{ name: "Group D", value: 200 }];
const COLORS = ["#f9942e"];

const Chart1 = () => {
    return (
        <div>


            <PieChart width={200} height={200}>

                <Pie
                    data={data}
                    cx={100}
                    cy={100}
                    startAngle={280}
                    endAngle={0}
                    innerRadius={30}
                    outerRadius={50}
                    fill="#f9942e"
                    paddingAngle={60}
                    dataKey="value"
                    stroke="none"


                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}
                            style={{
                                filter: `drop-shadow(0px 9px 14px rgba(54, 183, 255, 0.23)`
                            }}
                        />
                    ))}
                </Pie>
            </PieChart>

            <p> 22/80 <br />
                <span>  salons disponible </span>
            </p>

        </div>
    );
};

export default Chart1;