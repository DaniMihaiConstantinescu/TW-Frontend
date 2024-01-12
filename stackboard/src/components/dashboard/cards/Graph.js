"use client"

import styles from "@/css/mainframe.module.css"
import { LineChart } from "@mui/x-charts"

function extractXYValues(data) {
    const xValues = [];
    const yValues = [];
  
    data.forEach((item) => {
      if (item.x !== undefined) {
        xValues.push(item.x);
      }
  
      if (item.y !== undefined) {
        yValues.push(item.y);
      }
    });
  
    return [xValues, yValues];
  }

export default function Graph({content}) {

    const [xValues, yValues] = extractXYValues(content.keyFrames)

    return (
        <div className={styles.lineChart}>
            <LineChart
                xAxis={[{ data: xValues }]}
                series={[
                    {
                        // curve: "linear",
                        label: 'KeyFrames',
                        data: yValues,
                        area: false
                    },
                ]}
                width={500}
                height={350}
            />

        </div>
    )
}
