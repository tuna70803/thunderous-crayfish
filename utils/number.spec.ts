import { expect, describe, it } from 'vitest';
import { toFixedNumber } from './number';

describe('toFixedNumber() 는', () => {
  it('값을 고정 소수점을 가진 숫자로 변환해서 리턴한다.', () => {
    const fixedNumber = toFixedNumber(0.12345, 3);

    expect(fixedNumber).toBeCloseTo(0.123, 3);
  });

  it('원래 값이 string이라도 숫자로 변환해서 리턴한다.', () => {
    const fixedNumber = toFixedNumber('0.12345', 3);

    expect(fixedNumber).toBeCloseTo(0.123, 3);
  });

  it('숫자로 변환이 불가능한 값은 NaN을 리턴한다.', () => {
    const fixedNumber = toFixedNumber('영점일이삼', 3);

    expect(fixedNumber).toBeNaN();
  });
});
