import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const BusSearchContent = () => {
  return (
    <div className="flex flex-col gap-6 mt-8">
      <div className="flex flex-col items-start gap-1.5">
        <Label htmlFor="bus-stop-id">정류소 ID</Label>
        <Input id="bus-stop-id" value="12345" />
      </div>
      <div className="flex flex-col items-start gap-1.5">
        <Label htmlFor="bus-number">버스 번호</Label>
        <Input id="bus-number" value="66" />
      </div>
      <div className="flex flex-col items-start gap-1.5">
        <Label htmlFor="api-key">API Key</Label>
        <Input id="api-key" value="1234567890" />
      </div>
    </div>
  );
};

export default BusSearchContent;
