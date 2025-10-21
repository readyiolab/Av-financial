import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Applications = () => {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl text-[#1a2957]">
          Applications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">List of applications will be displayed here.</p>
        {/* Add table or list component here later */}
      </CardContent>
    </Card>
  );
};

export default Applications;