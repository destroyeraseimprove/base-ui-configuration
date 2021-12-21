export const sortArrayByObjectKey = (arr, keyName) => {
  arr.sort(function (a, b) {
    const keyA = new Date(a[keyName]);
    const keyB = new Date(b[keyName]);
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
  });
};

export const findInArrayByObjectKey = (arr, key, value) =>
  arr.filter((obj) => obj[key] === value);
