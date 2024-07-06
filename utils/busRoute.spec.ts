import { expect, describe, it } from 'vitest';
import { getBusType, getBusColor } from './busRoute';

describe('getBusType() 는', () => {
  it('전달받은 버스 타입 인덱스에 맞는 버스 타입 이름을 리턴한다.', () => {
    expect(getBusType('11')).toBe('직행버스');
    expect(getBusType('13')).toBe('일반버스');
    expect(getBusType('30')).toBe('마을버스');
    expect(getBusType('51')).toBe('공항버스');
  });

  it('인덱스가 유효하지 않으면 기본 값인 "일반버스"를 리턴한다.', () => {
    expect(getBusType('')).toBe('일반버스');
    expect(getBusType('버스인덱스?')).toBe('일반버스');
  });

  it('목록에 없는 인덱스라면 기본 값인 "일반버스"를 리턴한다.', () => {
    expect(getBusType('9999')).toBe('일반버스');
    expect(getBusType('-1')).toBe('일반버스');
  });
});

describe('getBusColor() 는', () => {
  it('전달받은 버스 타입 인덱스에 맞는 버스 컬러 값을 리턴한다.', () => {
    expect(getBusColor('11')).toBe('#EE2737');
    expect(getBusColor('13')).toBe('#009775');
    expect(getBusColor('30')).toBe('#F2A000');
    expect(getBusColor('51')).toBe('#85714D');
  });

  it('인덱스가 유효하지 않으면 기본 값으로 "일번버스" 컬러 값을 리턴한다.', () => {
    expect(getBusColor('')).toBe('#009775');
    expect(getBusColor('버스인덱스?')).toBe('#009775');
  });

  it('목록에 없는 인덱스라면 기본 값으로 "일번버스" 컬러 값을 리턴한다.', () => {
    expect(getBusColor('9999')).toBe('#009775');
    expect(getBusColor('-1')).toBe('#009775');
  });
});
