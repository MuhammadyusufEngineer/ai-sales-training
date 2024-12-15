import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const mockData = [
//   { date: '2024-01', score: 75 },
//   { date: '2024-02', score: 82 },
//   { date: '2024-03', score: 88 },
//   { date: '2024-04', score: 85 },
//   { date: '2024-05', score: 92 }
// ];

export default function Dashboard() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Performance Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Scenarios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">15</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">84.4%</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Time Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12.5 hrs</div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Progress Over Time</CardTitle>
        </CardHeader>
        {/* <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#2563eb" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent> */}
      </Card>
    </div>
  );
}