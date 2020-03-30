using System;
using System.Linq;

namespace EulerCode
{
    public static class Digit_factorials
    {
        public static int calculate()
        {
            // 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
            // Find the sum of all numbers which are equal to the sum of the factorial of their digits.
            // Note: as 1! = 1 and 2! = 2 are not sums they are not included.
            //find sum M of all Numbers where Number N = a*10^l + b*10^l-1 + c*10^0 = a!+ b!+...+c!
            // where length of N!
            // (9)=> 9! = 362880 (1/6)
            // (99)=> 9! +9! = 725760 (2/6)
            // (999)=> 9!*3= 1088640 (3/7)
            // (9999)=> 9!*4 = 1451520 (4/7)
            // (99999)=> 9!*5 (5/7)
            // (999999)=> 9!*6 (6/7)
            // (9999999)=> 9!*7 (7/7)
            // (n)= n0!+n1!+ n2! + ... + nr
            // upper limit 70000
            int number = 3;
            int sum = 0;
            while (number < 9999999)
            {
                var fN = FactorialN(number);
                if(number>fN){number++;continue;}
                if (fN == number)
                {
                    sum+=fN;
                    Console.WriteLine(fN+" "+number);
                }
                number++;
            }
            return sum;
        }
        private static int FactorialN(int value)
        {
            string jString = value.ToString();
            var valueCharacters = jString.ToCharArray();
            var numberValues = valueCharacters.Select(ch => int.Parse(ch.ToString()));
            int factorialN = 0;
            foreach (var n in numberValues)
            {
                factorialN += Factorial_Base_10(n);
            }
            return factorialN;
        }
        private static int Factorial_Base_10(int a)
        {
            if (a > 9) throw new ArgumentOutOfRangeException();
            if (a <= 0 ) return 1;
            return a * Factorial_Base_10(a - 1);
        }
    }
}