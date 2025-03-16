import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const BasicBars = () => {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Sem 1:GPA', 'Sem 2:GPA', 'Sem 3:GPA'] }]}
      series={[{ data: [ 3.49,'' ,''] }, { data: ['',3.61] }, { data: ['','',3.62] }]}
      width={420} 
      height={300}
    />
  );
}

export default BasicBars;
