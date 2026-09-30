import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

interface DataPoint {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data:  DataPoint[] = [
  { name: 'A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'C', uv: 2000, pv: 1238, amt: 1210 },
  { name: 'D', uv: 1900, pv: 1398, amt: 1010 },
];

export const GraficoRechart = () => (
  <LineChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
  </LineChart>
);
