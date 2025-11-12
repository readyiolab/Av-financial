// src/pages/Dashboard.tsx
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import api from "@/services/api";

interface Stats {
  totalSubscribers: number;
  pendingApplications: number;
  revenue: number;
}

const Dashboard = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/newsletter/stats").then((res) => {
      setStats(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl text-[#1a2957]">
            Admin Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Welcome back! Here's your overview.</p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-[#1a2957]">Total Subscribers</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#1a2957]">
              {stats?.totalSubscribers ?? 0}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#1a2957]">Pending Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#1a2957]">
              {stats?.pendingApplications ?? 0}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-[#1a2957]">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-[#1a2957]">
              ${stats?.revenue ?? 0}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;