import { BUS_COLORS, BUS_TYPES } from '@/constants';

const DEFAULT_BUS_TYPE_INDEX = '13';

/**
 * 버스 타입 인덱스에 맞는 버스 타입을 리턴한다.
 * @param busTypeIndex - 버스 타입 인덱스
 * @returns 인덱스에 맞는 버스 타입, 인덱스가 유효하지 않으면 '일반버스' 타입으로 리턴
 */
export const getBusType = (busTypeIndex: string) => {
  const busTypeName = BUS_TYPES[busTypeIndex];
  if (!busTypeName) {
    return BUS_TYPES[DEFAULT_BUS_TYPE_INDEX];
  }

  return busTypeName;
};

/**
 * 버스 타입 인덱스에 맞는 버스 컬러를 리턴한다.
 * @param busTypeIndex - 버스 타입 인덱스
 * @returns 인덱스에 맞는 버스 컬러, 인덱스가 유효하지 않으면 '일반버스' 컬러를 리턴
 */
export const getBusColor = (busTypeIndex: string) => {
  const busColor = BUS_COLORS[busTypeIndex];
  if (!busColor) {
    return BUS_COLORS[DEFAULT_BUS_TYPE_INDEX];
  }

  return busColor;
};
