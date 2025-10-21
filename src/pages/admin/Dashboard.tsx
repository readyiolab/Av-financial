import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-[#1a2957]">
            Admin Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Welcome to the admin panel. Overview stats will be displayed here.
          </p>
        </CardContent>
      </Card>
      {/* Placeholder for stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-[#1a2957]">Total Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#1a2957]">0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-[#1a2957]">Pending Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#1a2957]">0</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-[#1a2957]">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#1a2957]">$0</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;