using System;
using System.Collections.Generic;
using System.Numerics;

namespace Distinct_powers
{
    class Program
    {
        static void Main(string[] args)
        {
            List<BigInteger> MemList = new List<BigInteger>();

            for (int varA = 2; varA <= 100; varA++)
            {
                for (int varB = 2; varB <= 100; varB++)
                {
                    BigInteger BigA = new BigInteger(varA);
                    BigInteger Result = BigInteger.Pow(BigA, varB);
                    if (!MemList.Contains(Result))
                    {
                        MemList.Add(Result);
                    }
                }
            }

        }

    }
}
