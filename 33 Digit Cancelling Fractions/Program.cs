using System;
using EulerCode;
internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("The fraction 49/98 is a curious fraction, as an inexperienced mathematician\n"+
        "in attempting to simplify it may incorrectly believe that 49/98 = 4/98 , which is correct, is obtained by cancelling the 9s.\n"+
        "We shall consider fractions like, 30/50 = 3/5, to be trivial examples. There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.\n"+
        "If the product of these four fractions is given in its lowest common terms, find the value of the denominator.");
        Console.WriteLine(Digit_cancelling_fractions.calculate());
    }
}