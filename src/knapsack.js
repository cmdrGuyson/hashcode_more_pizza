let w = [
  0,
  7,
  12,
  12,
  13,
  14,
  28,
  29,
  29,
  30,
  32,
  32,
  34,
  41,
  45,
  46,
  56,
  61,
  61,
  62,
  63,
  65,
  68,
  76,
  77,
  77,
  92,
  93,
  94,
  97,
  103,
  113,
  114,
  114,
  120,
  135,
  145,
  145,
  149,
  156,
  157,
  160,
  169,
  172,
  179,
  184,
  185,
  189,
  194,
  195,
  195
];
let C = 4500;
let n = 50;
let result = 0;
const arr = new Array(C).fill(null).map(() => new Array(n).fill(null));

const KS = (n, C) => {
  if (arr[n][C] != null) {
    return arr[n][C];
  }
  if (n === 0 || C === 0) {
    result = 0;
  } else if (w[n] > C) {
    result = KS(n - 1, C);
  } else {
    let tmp1 = KS(n - 1, C);
    let tmp2 = w[n] + KS(n - 1, C - w[n]);
    result = Math.max(tmp1, tmp2);
  }
  arr[n][C] = result;
  return result;
};

console.log(KS(n, C));
