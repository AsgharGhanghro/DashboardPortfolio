import * as React from 'react';

import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Semester 1', value: 73, color: '#0088FE' },
  { label: 'Semester 2', value: 80, color: '#00C49F' },
  { label: 'Semester 3', value: 90, color: '#FFBB28' },

];

const sizing = {
  margin: { right: 5 },
  width: 240,
  height: 240,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 250).toFixed(0)}%`;
};

export default function PieChartWithCustomizedLabel() {
  return (
    <div className='md:ml-32 ml-20 md:pt-10'>
    <PieChart
      series={[
        {
          outerRadius: 80,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 16,
        },
      }}
      {...sizing}
    />
    </div>
  );
}
