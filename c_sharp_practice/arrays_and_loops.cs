using System;

class ArraysAndLoops
{
	static void Main()
	{
		double[] nums = {1.352, 4.513, 4.134, 5.2134, 123.13123};
		// string display = "";
		foreach (var num in nums)
		{
			// display += num.ToString("0.00") + " "; 
			// Console.Write("{0} ", num.ToString("N2"));
			Console.Write($"{num.ToString("N2")} ");
		}
		// Console.WriteLine(display);
		Console.ReadLine();
	}
}