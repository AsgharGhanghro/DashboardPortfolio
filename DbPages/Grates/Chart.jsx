import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const sData = [0, 1, 2, 4];

const xLabels = [
  'Sem 1',
  'Sem 2',
  'Sem 3',
  'Sem 4',
 
];

export default function SimpleLineChart() {
  return (
   
    <LineChart
      width={300}
      height={260}
      series={[
       
        { data: sData},
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
   
  );
}
