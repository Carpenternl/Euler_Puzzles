/*

https://projecteuler.net/problem=37

<p>The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.</p>
<p>Find the sum of the only eleven primes that are both truncatable from left to right and right to left.</p>
<p class="smaller">NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.</p>


*/
// import { console } from "../../Euler_Puzzles/deno/lib.deno.d.ts";
const knownPrimes=[2,3,5,7,11];
function isPrime(primeCandidate:number,primes=knownPrimes) {
    if(primeCandidate<2)return false; // 1 is not a prime
    // divide by known primes (FAST)
    for (let pIndex = 0; pIndex < primes.length; pIndex++) {
        const pDivisor = primes[pIndex];
        if(primeCandidate==pDivisor)return true;
        if(primeCandidate%pDivisor===0)return false;
    }
    //divide sequentially (SLOW)
    for (let divisor = 2; divisor < primeCandidate/(divisor+2); divisor++) {
        if(primeCandidate%divisor===0)return false;
    }
    if(knownPrimes.indexOf(primeCandidate)<0)knownPrimes.push(primeCandidate);
    return true;
}

function growPrime(nrStr=0){

    if(ShrinkLeft(nrStr) && ShrinkRight(nrStr)) return true;
    return false;
}

function ShrinkLeft(number=3): boolean {
    if(isPrime(number)){
        if(number<10) return true;
        let newNumber = `${number}`.replace(/^\d/,'');
        return ShrinkLeft(newNumber as unknown as number);
    }
    return false;
}

function ShrinkRight(number=3): boolean {
    if(isPrime(number)){
        if(number<10) return true;
        let newNumber = `${number}`.replace(/\d$/,'');
        return ShrinkRight(newNumber as unknown as number);
    }
    return false;
}

let primeCount =0;
let primeSum=0;
let primeNr= 11;
let primeList=new Array<number>;
console.log('calculating...');
console.time('calculation');
while(primeCount<11){
    if(growPrime(primeNr)){
        primeCount++;
        primeSum+=primeNr;
        primeList.push(primeNr);
    }
    primeNr+=2;
}
console.timeLog('calculation');
console.log(`primes: ${primeList.join(' , ')}\nsum: ${primeSum}`);



