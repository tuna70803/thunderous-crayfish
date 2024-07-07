import { RotateCw as ReSearchIcon } from 'lucide-react';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { cn, type ClassValue } from '@/lib/utils';

interface ReSearchButtonProps {
  className?: ClassValue;
  onClick: () => void;
}

/**
 * 재검색 버튼 컴포넌트
 * 현재 위치에서 다시 재검색을 실행하는 버튼을 표시한다.
 * 정류장 재검색에대한 툴팁도 같이 표시한다.
 * @param className - class name
 * @param onClick - 버튼 클릭 이벤트 핸들러
 */
const ReSearchButton = ({ className, onClick }: ReSearchButtonProps) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={cn('rounded-full', className)}
            onClick={onClick}
          >
            <ReSearchIcon size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="text-sm text-muted-foreground">
          이 위치에서 정류장을 다시 검색하기 🔍
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ReSearchButton;
