import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import AnimationSection from './AnimationSection';
import InformationSection from './InformationSection';

/**
 * 메인 화면 컴포넌트
 */
const Main = () => {
  return (
    <main className="flex h-screen min-h-screen flex-row">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="hidden flex-auto items-center justify-center sm:flex">
          <AnimationSection />
        </ResizablePanel>
        <ResizableHandle className="hidden sm:flex" />
        <ResizablePanel className="flex flex-auto basis-1/2 flex-col items-center justify-center gap-8">
          <InformationSection />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
};

export default Main;
