import { useMemo } from 'react';
import { getPreviousWeekdayOrWeekend, toDateString } from '@/utils/date';

/**
 * 레퍼런스 날짜를 사용한다.
 * 버스는 평일과 주말 배차 간격이 다르므로
 * 오늘이 평일이면 가장 최근의 평일을,
 * 오늘이 주말이면 가장 최근의 주말인 날짜를 찾아서 리턴한다.
 * @returns "년-월-일" 양식인 레퍼런스 날짜
 */
const useReferenceDate = () => {
  const referenceDate = useMemo(() => {
    const referenceTimestamp = getPreviousWeekdayOrWeekend(Date.now());
    const referenceDateString = toDateString(referenceTimestamp);

    return referenceDateString;
  }, []);

  return referenceDate;
};

export default useReferenceDate;
