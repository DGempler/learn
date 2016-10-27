using System;

class Car
{

    private string name { get; set; }

    public Car(string name)
    {
        this.name = name;
    }

    public string GetName()
    {
        return name;
    }

    public void Start()
    {
        Console.WriteLine("Car started!");
    }

}