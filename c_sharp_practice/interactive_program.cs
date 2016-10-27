using System;

class Interactive_Program
{
	static void Main()
	{
		Console.WriteLine("Please enter an integer");
		
		string answer = Console.ReadLine();
		int num_answer;
		if(int.TryParse(answer, out num_answer))
		{
			if (num_answer < 10){
				Console.WriteLine("This number is too small");
				Main();
			}
			else
			{
				Console.WriteLine("This answer is big enough");
			}
		}
		else
		{
			Main();
		}
		
	}
}