function sumPair(arr, target) {
  const numFreq = new Map();
  const result = [];

  for (const num of arr) {
    const complement = target - num;
    
    if (numFreq.has(complement) && numFreq.get(complement) > 0) {
      result.push([Math.min(num, complement), Math.max(num, complement)]);
      numFreq.set(complement, numFreq.get(complement) - 1);
    } else {
      numFreq.set(num, (numFreq.get(num) || 0) + 1);
    }
  }

  return result;
}

module.exports = { sumPair };
