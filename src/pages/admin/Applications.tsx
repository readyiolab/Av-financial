import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import api from "@/services/api";

const Applications = () => {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/applications/").then((res) => {
      setApplications(res.data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading applications...</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-[#1a2957]">
          Applications
        </CardTitle>
      </CardHeader>
      <CardContent>
        {applications.length === 0 ? (
          <p className="text-gray-600">No applications yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Name</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Phone</th>
                  <th className="py-2">Type</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app._id} className="border-b">
                    <td className="py-2">{app.name}</td>
                    <td className="py-2">{app.email}</td>
                    <td className="py-2">{app.phone}</td>
                    <td className="py-2">{app.inquiry_type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Applications;