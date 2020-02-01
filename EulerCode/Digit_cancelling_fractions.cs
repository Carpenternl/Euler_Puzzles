using System;
using System.Collections;
using System.Linq;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace EulerCode
{
    static class Digit_cancelling_fractions
    {
        /* The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.
                49/98= A/B = (K*10+L)/(M*10+N) = K/N = 4/8 L=M
        *  We shall consider fractions like, 30/50 = 3/5, to be trivial examples. => N%10!=0
        *  There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.
        *  If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
        */
        public static int calculate()
        {
            double alpha = 10;
            double beta = 12;
            //find A and B for A<B B<100 B%10!=0 B/(B%10)!=11
            while (beta < 100) // B<100
            {
                while (beta % 10 == 0 || beta / (beta % 10) == 11) beta++;
                alpha = 12;
                while (alpha < beta) // A<B
                {
                    alpha++;
                    if (alpha % 10 == 0 || alpha / (alpha % 10) == 11) continue;
                    if (alpha == beta) continue;

                    var a0 = alpha % 10;
                    var a1 = (alpha - alpha % 10) / 10;
                    var b0 = beta % 10;
                    var b1 = (beta - beta % 10) / 10;
                    // if((a0/b1) != alpha/beta) continue;
                    var a1b0 = a1 / b0;
                    var a0b1 = a0 / b1;
                    var r1 = a1b0 == alpha / beta && a0==b1;
                    if (r1)
                    {
                        Console.Write($"({alpha}/{beta})={alpha / beta}| {a1}/{b0}={a1b0} \n");
                    }
                    var r2 = a0b1 == alpha / beta && a1==b0;
                    if (r2)
                    {
                        Console.Write($"({alpha}/{beta})={alpha / beta}| {a0}/{b1}={a0b1} \n");
                    }



                }
                beta++;
                // Console.WriteLine($"{beta}");
            }
            return 0;
        }
    }
}