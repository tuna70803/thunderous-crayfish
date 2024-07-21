import { expect, describe, it } from 'vitest';
import type { BusRoute } from '@/types';
import { makeFavoriteBusKey } from './utils';

describe('makeFavoriteBusKey() 는', () => {
  it('즐겨찾기로 등록할 키를 만들어 리턴한다.', () => {
    expect(makeFavoriteBusKey(dummyBusRoute)).toBe('204000299-241255002');
  });

  it('버스 정보가 없으면 null을 리턴한다.', () => {
    expect(makeFavoriteBusKey(null)).toBeNull();
  });

  it('버스 정보가 있어도 내부에 키가 될 내용이 없으면 null을 리턴한다.', () => {
    expect(makeFavoriteBusKey({ routeName: '66' } as BusRoute)).toBeNull();
    expect(makeFavoriteBusKey({ routeId: '241255002' } as BusRoute)).toBeNull();
    expect(
      makeFavoriteBusKey({ stationId: '204000299' } as BusRoute),
    ).toBeNull();
  });
});

/**
 * 더미 버스 데이터
 */
const dummyBusRoute = {
  districtCd: '2',
  regionName: '성남',
  routeId: '241255002',
  routeName: '66',
  routeTypeCd: '30',
  routeTypeName: '마을버스',
  staOrder: '2',
  stationId: '204000299',
};
