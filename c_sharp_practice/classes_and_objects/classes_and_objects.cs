using System;

class Program
{
    static void Main() 
    {
        var car = new Car("slayer");
        car.Start();
        Console.WriteLine(car.GetName());
    }
}