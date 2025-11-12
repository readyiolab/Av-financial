import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import api from "@/services/api";

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  api.get("/newsletter")
    .then((res) => {
    
      setSubscribers(Array.isArray(res.data) ? res.data : res.data.subscribers || []);
    })
    .catch(() => setSubscribers([]))
    .finally(() => setLoading(false));
}, []);


  if (loading) return <p>Loading subscribers...</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-[#1a2957]">
          Subscribers
        </CardTitle>
      </CardHeader>
      <CardContent>
        {subscribers.length === 0 ? (
          <p className="text-gray-600">No subscribers yet.</p>
        ) : (
          <ul className="space-y-2">
            {subscribers.map((sub) => (
              <li key={sub._id} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span>{sub.email}</span>
                <span className="text-sm text-gray-500">
                  {new Date(sub.subscribedAt).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default Subscribers;