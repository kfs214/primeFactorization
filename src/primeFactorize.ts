/**
 * @file 素因数分解関数。number[] として返却
 *
 */

/**
 * 素因数分解を実施
 *
 * @param number 素因数分解対象の数値
 * @return 約数の配列
 */
export const primeFactorize = (number: number) => {
  // 確認対象の数値 `number` の平方根までチェック
  const sqrtNum = Math.floor(Math.sqrt(number));

  // 2以上の自然数について検証
  const testNums = [...new Array(sqrtNum)]
    .map((_, index) => index + 1)
    .slice(1);

  // 割り切れた結果を暫定的に保存
  let dividedNum = number;

  // 約数を格納
  const divisors: number[] = [];

  testNums.forEach((testNum) => {
    // 割り切れなくなるまで繰り返し割り算
    while (dividedNum % testNum === 0) {
      // 約数を格納し割り算
      divisors.push(testNum);
      dividedNum /= testNum;
    }
  });

  // 平方数の場合は dividedNum === 1 のため終了
  if (dividedNum > 1) {
    divisors.push(dividedNum);
  }

  return divisors;
};
