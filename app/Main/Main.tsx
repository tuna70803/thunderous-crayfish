import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';
import { Card, CardContent } from '@/components/ui/card';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { cn } from '@/lib/utils';
import AnimationSection from './AnimationSection';
import InformationSection from './InformationSection';
import { BorderBeam } from '@/components/magicui/border-beam';

/**
 * 메인 화면 컴포넌트
 */
const Main = () => {
  return (
    <main className="relative flex h-screen min-h-screen flex-row items-center justify-center overflow-hidden">
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(farthest-corner,white,transparent)]',
        )}
      />
      <Card className="relative z-10 h-full w-full border-0 bg-background sm:h-[70%] sm:min-h-[640px] sm:w-[70%] sm:min-w-[1200px] sm:border">
        <BorderBeam className="hidden sm:block" size={500} duration={30} />
        <CardContent className="relative h-full w-full p-0">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel className="hidden flex-auto items-center justify-center sm:flex">
              <AnimationSection />
            </ResizablePanel>
            <ResizableHandle className="hidden sm:flex" />
            <ResizablePanel className="flex flex-auto basis-1/2 flex-col items-center justify-center gap-8">
              <InformationSection />
            </ResizablePanel>
          </ResizablePanelGroup>
        </CardContent>
      </Card>
    </main>
  );
};

export default Main;
