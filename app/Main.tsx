import Bus from "./Bus";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import BusInfoSection from "./BusInfoSection";
import BusSearch from "./BusSearch";

const Main = () => {
  return (
    <main className="h-screen min-h-screen flex flex-row">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="flex flex-auto justify-center items-center">
          <Bus />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="flex flex-col justify-center items-center flex-auto basis-1/2 gap-8">
          <BusInfoSection />
          <BusSearch buttonClass="mt-20" />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};

export default Main;
