import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Subscribers = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-[#1a2957]">
          Subscribers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">List of subscribers will be displayed here.</p>
        {/* Add table or list component here later */}
      </CardContent>
    </Card>
  );
};

export default Subscribers;