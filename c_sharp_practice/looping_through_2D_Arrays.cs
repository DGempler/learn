using System;

class Looping
{
	static void Main()
	{
		int[,] array = { {1, 2, 3}, {4, 5, 6}};
		
		for (int i = 0; i < array.Rank; i++)
		{
			for (int j = 0; j < array.GetLength(1); j++) 
			{
				Console.Write($"{array[i,j].ToString()} \t");
			}
			Console.WriteLine();

		}
		
	}
}