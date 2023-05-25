/*

https://projecteuler.net/problem=37

<p>The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.</p>
<p>Find the sum of the only eleven primes that are both truncatable from left to right and right to left.</p>
<p class="smaller">NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.</p>


*/
// import { console } from "../../Euler_Puzzles/deno/lib.deno.d.ts";
var knownPrimes = [2, 3, 5, 7, 11];
function isPrime(primeCandidate, primes) {
    if (primes === void 0) { primes = knownPrimes; }
    if (primeCandidate < 2)
        return false; // 1 is not a prime
    // divide by known primes (FAST)
    for (var pIndex = 0; pIndex < primes.length; pIndex++) {
        var pDivisor = primes[pIndex];
        if (primeCandidate == pDivisor)
            return true;
        if (primeCandidate % pDivisor === 0)
            return false;
    }
    //divide sequentially (SLOW)
    for (var divisor = 2; divisor < primeCandidate / (divisor + 2); divisor++) {
        if (primeCandidate % divisor === 0)
            return false;
    }
    if (knownPrimes.indexOf(primeCandidate) < 0)
        knownPrimes.push(primeCandidate);
    return true;
}
function growPrime(nrStr) {
    if (nrStr === void 0) { nrStr = 0; }
    if (ShrinkLeft(nrStr) && ShrinkRight(nrStr))
        return true;
    return false;
}
function ShrinkLeft(number) {
    if (number === void 0) { number = 3; }
    if (isPrime(number)) {
        if (number < 10)
            return true;
        var newNumber = "".concat(number).replace(/^\d/, '');
        return ShrinkLeft(newNumber);
    }
    return false;
}
function ShrinkRight(number) {
    if (number === void 0) { number = 3; }
    if (isPrime(number)) {
        if (number < 10)
            return true;
        var newNumber = "".concat(number).replace(/\d$/, '');
        return ShrinkRight(newNumber);
    }
    return false;
}
var primeCount = 0;
var primeSum = 0;
var primeNr = 11;
var primeList = new Array;
console.log('calculating...');
console.time('calculation');
while (primeCount < 11) {
    if (growPrime(primeNr)) {
        primeCount++;
        primeSum += primeNr;
        primeList.push(primeNr);
    }
    primeNr += 2;
}
console.timeLog('calculation');
console.log("primes: ".concat(primeList.join(' , '), "\nsum: ").concat(primeSum));
