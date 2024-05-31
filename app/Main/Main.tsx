import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import BusAnimation from './BusAnimation';
import BusInfoSection from './BusInfoSection';

const Main = () => {
  return (
    <main className="flex h-screen min-h-screen flex-row">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="hidden flex-auto items-center justify-center sm:flex">
          <BusAnimation />
        </ResizablePanel>
        <ResizableHandle className="hidden sm:flex" />
        <ResizablePanel className="flex flex-auto basis-1/2 flex-col items-center justify-center gap-8">
          <BusInfoSection />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};

export default Main;
