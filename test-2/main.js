function areAnagrams(str1, str2) {
  const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
  const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();

  return normalizedStr1.split('').sort().join('') === normalizedStr2.split('').sort().join('');
}

module.exports = { areAnagrams };
