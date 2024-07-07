import { Locate as UserLocationIcon } from 'lucide-react';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { cn, type ClassValue } from '@/lib/utils';

interface RefreshUserLocationButtonProps {
  className?: ClassValue;
  onClick: () => void;
}

/**
 * 사용자 위치 갱신 버튼 컴포넌트
 * @param className - class name
 * @param onClick - 버튼 클릭 이벤트 핸들러
 */
const RefreshUseLocationButton = ({
  className,
  onClick,
}: RefreshUserLocationButtonProps) => {
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
            <UserLocationIcon size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="text-sm text-muted-foreground">
          지금 위치로 지도를 이동할게요 🏃
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RefreshUseLocationButton;
