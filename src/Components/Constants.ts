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

  //this is json data

  interface ExerciseCode {
    initial: string;
    solution: string;
  }
  
  interface Exercise {
    title: string;
    description: string;
    code: ExerciseCode;
    instructions: string[];
    hints: string[];
  }

  interface Chapter {
    title: string;
    description: string;
    exercise: Exercise;
  }

  export const CHAPTERS: Record<string, Chapter> = {
    chapter1: {
      title: "Chapter 1: Classes",
      description: "Starting with the absolute basics: Java's code is encapsulated in classes. A class is the fundamental building block of Java applications — all variables and methods belong to a class, and this will be the starting point of all your projects.",
      exercise: {
        title: "Create a BankAccount class",
        description: "To start creating our Java application, let's create a base class called BankAccount.",
        code: {
          initial: "package default;\n\n",
          solution: "package default;\n\npublic class BankAccount {\n\n}"
        },
        instructions: [
          "Make it so our class uses the default package.",
          "Create an empty class called BankAccount."
        ],
        hints: [
          "Remember to use the `public` access modifier for the class.",
          "Don't forget to include the class body with curly braces `{}`."
        ]
      }
    },
    chapter2: {
      title: "Chapter 2: Variables & Data Types",
      description: "Great job! Now that we've got a shell for our class, let's learn about how Java deals with variables.",
      exercise: {
        title: "Declare a balance variable",
        description: "Our BankAccount class needs to store the account balance.",
        code: {
          initial: "package default;\n\npublic class BankAccount {\n\n",
          solution: "package default;\n\npublic class BankAccount {\n  int balance = 0;\n}"
        },
        instructions: [
          "Declare an int named balance.",
          "Set it equal to 0."
        ],
        hints: [
          "Remember to use the `int` data type for the balance.",
          "Don't forget to initialize the balance with a value."
        ]
      }
    }
  };