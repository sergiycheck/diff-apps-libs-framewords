export function getRandomInt(min, max) {
  let ceilMin = Math.ceil(min);

  let floorMax = Math.floor(max);

  let maxMinDiffPlus1 = floorMax - ceilMin + 1;

  let btwZeroAndMaxMinDffPlus1 = Math.random() * maxMinDiffPlus1;

  let sumOfBtwAndMaxMinDiffPlus1AndCeilMin = btwZeroAndMaxMinDffPlus1 + ceilMin;

  return Math.floor(sumOfBtwAndMaxMinDiffPlus1AndCeilMin);
}
