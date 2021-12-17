function kangaroo(x1, v1, x2, v2) {
  // The kangoroo ahead is moving faster, return no
  if((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) return "NO"
  const diffCalculator = (lastDiff = 99999, step = 1) => {
      console.log("step ", step)
      const k1 = x1+v1*step;
      const k2 = x2+v2*step;
      const diff = Math.abs(k1 - k2);
      step++
      if(diff === 0) return "YES"
      if(diff >= lastDiff) return "NO"
      return diffCalculator(diff, step)
  }
  return diffCalculator();
}