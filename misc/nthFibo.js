function nthFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return nthFibonacci(n - 1) + nthFibonacci(n - 2);
}