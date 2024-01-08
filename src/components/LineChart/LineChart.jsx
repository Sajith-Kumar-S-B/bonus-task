import React from 'react'
import { Line } from 'react-chartjs-2'
function LineChart({chartData,handleLineChart}) {
  return (

    <div>

       <h5 onClick={handleLineChart}>LineChart</h5>
       {chartData?.labels && chartData.labels?.length > 0 ? <Line  data={chartData}
    options={{
        responsive:true,
        title: { text: "THICCNESS SCALE", display: true },
        scales:{
            yAxes:{
                ticks:{
                    beginAtZero: true
                }
            }
        }
    }}/>:<p>loading..</p>}
   

</div>
  )
}

export default LineChart