﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Digit_fifth_powers
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            //  Problem 30:
            //  Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
            //  1634 = 1^4 + 6^4 + 3^4 + 4^4
            //  8208 = 8^4 + 2^4 + 0^4 + 8^4
            //  9474 = 9^4 + 4^4 + 7^4 + 4^4
            //  As 1 = 1^4 is not a sum it is not included.
            //  The sum of these numbers is 1634 + 8208 + 9474 = 19316.
            //// number = ?????

            //List<int> Results = getResults(5);
            //int sum = 0;
            //foreach (var item in Results)
            //{
            //    sum += item;
            //}
            List<int> Results = new List<int>();
            for (int i = 2; i < 300000; i++)
            {
                if (i == getSum(i,5))
                {
                    Results.Add(i);
                }
            }
            int sum = 0;
            foreach (var item in Results)
            {
                sum += item;
            }
        }

        private static int getSum(int j,int p)
        {
            string s = j.ToString();
            char[] schars = s.ToCharArray();
            int[] buffer = new int[schars.Length];
            for (int i = 0; i < buffer.Length; i++)
            {
                buffer[i] = int.Parse($"{schars[i]}");
            }
            int sum = 0;
            for (int i = 0; i < buffer.Length; i++)
            {
                sum += (int)Math.Pow(buffer[i],p);
            }
            return sum;
        }

        private static List<int> getResults(int n, int[] buffer = null, int j = 1)
        {
            if (n == 0) return new List<int>();
            if (buffer == null)
            {
                buffer = new int[n];
                for (int i = 0; i < buffer.Length; i++)
                {
                    buffer[i] = 0;
                }
            }
            //  Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
            List<int> results = new List<int>();
            for (int i = 0; i < 10; i++)
            {
                buffer[n - 1] = i;
                int nummer = getNumber(buffer);
                int sum = getSum(buffer);
                if (sum == nummer)
                {
                    results.Add(nummer);
                }
                else
                {
                    int[] innerArr = new int[buffer.Length];
                    Array.Copy(buffer, innerArr, buffer.Length);
                    List<int> innerResults = getResults(n - 1, innerArr, 0);
                    results.AddRange(innerResults);
                }
            }
            return results;
        }

        private static int getSum(int[] buffer)
        {
            int sum = 0;
            for (int i = 0; i < buffer.Length; i++)
            {
                sum += (int)Math.Pow(buffer[i], buffer.Length);
            }
            return sum;
        }

        private static int getNumber(int[] buffer)
        {
            StringBuilder builder = new StringBuilder();
            for (int i = buffer.Length - 1; i >= 0; i--)
            {
                builder.Append($"{buffer[i]}");
            }
            string numberString = builder.ToString();
            int number = int.Parse(numberString);
            return number;
        }
    }
}
