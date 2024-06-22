/**
 * 값을 고정 소수점을 가진 숫자로 변환한다.
 * @param originalValue - 원본 값
 * @param fractionDigits - 소수점 자릿수 (0 ~ 20)
 * @returns 고정 소수점을 가진 숫자. 숫자 변환 에러시 NaN.
 */
export const toFixedNumber = (
  originalValue: string | number,
  fractionDigits: number,
) => {
  const num = Number(originalValue);
  if (isNaN(num)) {
    return NaN;
  }

  const fixedNum = num.toFixed(fractionDigits);
  return Number(fixedNum);
};
