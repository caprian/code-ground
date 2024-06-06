export const CODE_SNIPPETS: Record<string, string> = {
    java: `
  public class HelloWorld {
    public static void main(String[] args) {
      System.out.println("Hello World");
    }
  }
  `,
  
    javascript: `
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  greet("Alex");
  `,
  
    typescript: `
  type Params = {
    name: string;
  }
  
  function greet(data: Params) {
    console.log("Hello, " + data.name + "!");
  }
  greet({ name: "Alex" });
  `,
  
    python: `
  def greet(name):
    print("Hello, " + name + "!")
  greet("Alex")
  `,
  
    csharp: `
  using System;
  
  namespace HelloWorld
  {
    class Hello 
    {
      static void Main(string[] args) 
      {
        Console.WriteLine("Hello World in C#");
      }
    }
  }
  `,
  
    php: `
  <?php
    $name = 'Alex';
    echo $name;
  ?>
  `,
  };

  export const LANGUAGE_VERSIONS : Record<string, string> = {
		javascript: "18.15.0",
		java: "15.0.2",
	};