import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import BusAnimation from "./BusAnimation";
import BusInfoSection from "./BusInfoSection";

const Main = () => {
  return (
    <main className="h-screen min-h-screen flex flex-row">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="flex flex-auto justify-center items-center">
          <BusAnimation />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="flex flex-col justify-center items-center flex-auto basis-1/2 gap-8">
          <BusInfoSection />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};

export default Main;
