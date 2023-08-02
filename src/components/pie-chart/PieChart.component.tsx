import React from 'react';
import { PieChart as Chart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const PieChart = () => {
  return (
    <Chart
      series={[
        {
          data: [
            {
              id: 0,
              value: 10,
              label: 'Dried Nigerian Ginger',
              color: '#E63F07',
            },
            { id: 1, value: 15, label: 'Sesame Seed', color: '#86B817' },
            { id: 2, value: 20, label: 'sPalm Kernel', color: '#1071FF' },
          ],
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          startAngle: -90,
          endAngle: 180,
          cx: 150,
          cy: 150,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
          fontSize: '13px'
        },
      }}
      width={400}
      height={150}
    />
  );
};

export default PieChart;
