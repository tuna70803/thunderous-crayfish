import { cn, type ClassValue } from '@/lib/utils';
import TypingAnimation from '@/components/magicui/typing-animation';

interface ReferenceDateLabelProps {
  date: string;
  className?: ClassValue;
}

/**
 * 레퍼런스 날짜 라벨 컴포넌트
 * 버스 정보를 조회한 기준 날짜를 표시한다.
 * @param date - 레퍼런스 날짜
 * @param className - class name
 */
const ReferenceDateLabel = ({ date, className }: ReferenceDateLabelProps) => {
  return (
    <TypingAnimation
      className={cn('text-xs font-normal text-muted-foreground', className)}
      duration={250}
      text={`${date} 기준`}
    />
  );
};

export default ReferenceDateLabel;
