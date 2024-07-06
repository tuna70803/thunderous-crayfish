import { expect, describe, it } from 'vitest';
import { getBusType } from './busRoute';

describe('getBusType() 는', () => {
  it('전달받은 버스 타입 인덱스에 맞는 버스 타입 이름을 리턴한다.', () => {
    expect(getBusType('11')).toBe('직행버스');
    expect(getBusType('13')).toBe('일반버스');
    expect(getBusType('30')).toBe('마을버스');
    expect(getBusType('51')).toBe('공항버스');
  });

  it('유효하지 않은 인덱스를 전달하면 기본 값인 "일반버스"를 리턴한다.', () => {
    expect(getBusType('')).toBe('일반버스');
    expect(getBusType('버스인덱스?')).toBe('일반버스');
  });

  it('목록에 없는 인덱스를 전달하면 기본 값인 "일반버스"를 리턴한다.', () => {
    expect(getBusType('100')).toBe('일반버스');
    expect(getBusType('-1')).toBe('일반버스');
  });
});
