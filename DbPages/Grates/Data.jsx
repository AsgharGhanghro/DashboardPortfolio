import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3,4] }]}
      series={[
        {
          data: [1, 1.7, 3.3,4],
        },
      ]}
      width={400}
      height={300}
    />
  );
}
