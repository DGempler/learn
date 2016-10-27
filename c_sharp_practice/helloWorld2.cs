using System;

public class HelloWorld2
{
	static void Main(string[] args)
	{
		for (int i = 0; i < args.Length; i++)
		{
			Console.WriteLine(args[i]);
		}
		Console.WriteLine("Hello World");
		
		Console.ReadLine();
	}
}