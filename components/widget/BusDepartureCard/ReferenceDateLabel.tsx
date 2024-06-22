import { cn, type ClassValue } from '@/lib/utils';

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
    <p className={cn('text-xs text-muted-foreground', className)}>
      {date} 기준
    </p>
  );
};

export default ReferenceDateLabel;
