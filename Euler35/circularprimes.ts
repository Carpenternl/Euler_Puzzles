// The number, 197 is called a circular prime because all rotations of the digits: 197, 971 and 719, are themselves prime.
// There are thirteen such primes below 100: 2,3,5,7,11,13,17,31,37,71,73,79,97
// How many circular primes are there below one million
// P < 1000000
let P: number = 2;
let Primes: number[] = [];
let RotationPrimes: number[] = [];

while (P < 1000000) {
    let isPrime: boolean = verifyPrime(P);
    if (isPrime) {
        // console.log("Prime "+P);
        if(RotationPrimes.indexOf(P)>0){
            P++;
            continue;
        }
        // setup 
        // convert number to string
        let pString = P.toString();
        //check for 0 and 2
        if (pString.indexOf("0") > 0 || pString.indexOf("2") > 0){
            P++;
            continue;
        }
        let rotationCache:number[] = [];
        let pStrRotation: string = pString;
        let rotIsPrime:boolean = false;
        //run
        do {
            //rotate characters: 123 -> 231
            pStrRotation = pStrRotation.substring(1, pStrRotation.length) + pStrRotation.substring(0, 1);
            // console.log("rot:"+pStrRotation);
            //convert to number
            var pNrRotation = parseInt(pStrRotation);
            //check prime
            rotIsPrime = verifyPrime(pNrRotation);
            if(rotIsPrime){
                rotationCache.push(pNrRotation);
            } else{
                //single false prime;
                // console.log("ABORT");
                break;
            }
        } while (pStrRotation != pString);
        //cleanup
        //will always be the latest result
        if(rotIsPrime){
            //Added To Cache
            rotationCache.forEach(rotationvalue => {
                if(RotationPrimes.indexOf(rotationvalue)<0)RotationPrimes.push(rotationvalue);
            });
            console.log("Cache: "+RotationPrimes.length);
        }
    }
    P++;
}
let primesBelow100 = 13;
console.log("Total: "+RotationPrimes.length);

// while (P < 1000000) {
//     let isPrime = verifyPrime(P);
//     if (isPrime) {
//         //store prime
//         if (Primes.find(e => e == P) == undefined)
//             Primes.push(P);
//         // don't rotate single digits
//         if (P < 10) {
//             RotationPrimes.push(P);
//             P++;
//             continue;
//         }
//         // Rotate: 21=>12   11=>11
//         let rotateValue = Rotate(P);
//         let currentRotations: number[] = [];
//         while (rotateValue != P) {
//             //check prime
//             isPrime = verifyPrime(rotateValue);
//             if (isPrime) {
//                 //store rotation
//                 if (currentRotations.find(x => x == rotateValue) == undefined)
//                     currentRotations.push(rotateValue);
//             } else {
//                 //break on non-prime rotation
//                 break;
//             }
//             rotateValue = Rotate(rotateValue);
//         }
//         //use stored primeResult (bool) for rotatevalue
//         if (isPrime) {
//             //rotation completed => value is a rotation
//             //rotationPrimes = rotationPrimes.concat(currentRotations);
//             currentRotations.forEach(rotationPrime => {
//                 if (RotationPrimes.find(element => element == rotationPrime) == undefined)
//                     RotationPrimes.push(rotationPrime);
//                 if (Primes.find(element => element == rotationPrime) == undefined)
//                     Primes.push(rotationPrime);
//             });
//             if (RotationPrimes.find(x => x == P) == undefined)
//                 RotationPrimes.push(P);
//             Primes = Primes.sort((a, b) => a - b);
//         }

//     }
//     P++;
// }
// RotationPrimes = RotationPrimes.sort((a, b) => a - b);
// RotationPrimes.forEach(rPrime => {
//     console.log(rPrime);
// });
// console.log("total: " + RotationPrimes.length);

function verifyPrime(value: number) {
    if (value * value == value) return false;// value = 0 | 1
    if (Primes.length <= 0) {
        //no stored primes
        for (let index = 2; index < value; index++) {
            const element = index;
            if (value % element == 0) {
                //not a prime
                return false;
            }
        }
        //loop finished? => prime found
        Primes.push(value);
        return true;
    }
    if (Primes.length > 0) {
        //use stored primes
        //any non-prime can be compromized of two primes: 2*3=6, therefor if a number is devidable by a prime, it must be non-prime
        for (let index = 0; index < Primes.length; index++) {
            const storedPrime = Primes[index];
            //can value be devided by prime?
            if (storedPrime < value && value % storedPrime == 0) {
                //it is a non-prime
                return false;
            }
        }
        //loop ended: prime number
        Primes.push(value);
        return true;
    }
}
function Rotate(value: number) {
    if (value < 10) return value;
    var valueString = value.toString();
    var firstLetter = valueString.substr(0, 1);
    var restString = valueString.substring(1, valueString.length);
    var rotatedValueString = restString + firstLetter;
    return parseInt(rotatedValueString);
}