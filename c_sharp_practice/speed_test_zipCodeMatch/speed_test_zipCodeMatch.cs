using System;
using System.Diagnostics.Stopwatch;
using System.Collections.Generic;

class SpeedTest
{
    static void Main()
    {
        var zipCodes = new Dictionary<string, string>()
        {
            {"98203", "Hooray"},
            {"12345", "Yes!"},
            {"35123", "no!"},
            {"12322", "maybe"},
            {"55422", "so"}
        };

        var zipCode = "35123";

        Console.WriteLine("Starting Single speed test");
        Stopwatch sw = new Stopwatch();

        sw.Start();
        for (var i = 0; i < 10000; i++)
        {
            var zipCodeMatch = zipCodes.Single(zip => zip.Key.Equals(zipCode)).Value;
        }
        sw.Stop();
        Console.WriteLine($"Speed test results: {sw.Elapsed}");

        Stopwatch sw2 = new Stopwatch();

        Console.WriteLine("Starting property accessor speed test");

        sw2.Start();
        for (var j = 0; j < 10000; j++)
        {
            var zipCodeMatch = zipCodes[zipCode];
        }
        sw2.Stop();
        Console.WriteLine($"Speed test results: {sw2.Elapsed}");
    }

}