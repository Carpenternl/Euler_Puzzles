// See https://aka.ms/new-console-template for more information
using System.Text;

Console.WriteLine("Hello, World!");


List<int> pans = [];
for (int i = 1; i < 10000; i++)
{
    StringBuilder concatDigits = new();
    var multiplier = 1;
    while (concatDigits.Length < 9)
    {
        concatDigits.Append(i * multiplier);
        multiplier++;
    }
    if (concatDigits.Length == 9)
    {
        var isPandigital = true;
        var digits = concatDigits.ToString();
        for (char digit = '1'; digit < '9'; digit++)
        {
            if (!digits.Contains(digit))
            {
                isPandigital = false;
                break;
            }
        }
        if (isPandigital==true)
            pans.Add(int.Parse(digits));
    }
}
var outValue = pans.Aggregate(0, (acc, next) => next > acc ? next : acc);
Console.WriteLine(outValue);

