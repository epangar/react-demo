import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import { type DataPoint } from './datapoint';

type GraficoRechartProps = {
  input: DataPoint[];
};

export const GraficoRechart = ({ input }: GraficoRechartProps) => {

  return (
    <LineChart width={500} height={300} data={input}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line 
        type="monotone" 
        dataKey="uv" 
        stroke="#8884d8"
        isAnimationActive={true} />
    </LineChart>
  );
};
