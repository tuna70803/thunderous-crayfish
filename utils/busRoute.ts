import { BUS_TYPES } from '@/constants';

/**
 * 버스 타입 인덱스에 맞는 버스 타입을 리턴한다.
 * @param busTypeIndex - 버스 타입 인덱스
 * @returns 인덱스에 맞는 버스 타입, 인덱스가 유효하지 않으면 '일반버스' 타입으로 리턴
 */
export const getBusType = (busTypeIndex: string) => {
  const busTypeName = BUS_TYPES[busTypeIndex];
  if (!busTypeName) {
    return '일반버스';
  }

  return busTypeName;
};
