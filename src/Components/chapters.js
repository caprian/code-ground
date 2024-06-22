export const chapters = {
	1: {
		title: "Chapter 1: Classes",
		description:
			"Starting with the absolute basics: Java's code is encapsulated in classes. A class is the fundamental building block of Java applications — all variables and methods belong to a class, and this will be the starting point of all your projects.",
		exercise: {
			title: "Create a BankAccount class",
			description:
				"To start creating our Java application, let's create a base class called BankAccount.",
			code: {
				initial: "package default;\n\n",
				solution: "package default;\n\npublic class CodeGround {\n\n}",
			},
			instructions: [
				"Make it so our class uses the default package.",
				"Create an empty class called BankAccount.",
			],
			hints: [
				"Remember to use the `public` access modifier for the class.",
				"Don't forget to include the class body with curly braces `{}`.",
			],
		},
	},
	2: {
		title: "Chapter 2: Variables & Data Types",
		description:
			"Great job! Now that we've got a shell for our class, let's learn about how Java deals with variables.",
		exercise: {
			title: "Declare a balance variable",
			description: "Our BankAccount class needs to store the account balance.",
			code: {
				initial: "package default;\n\npublic class CodeGround {\n\n",
				solution:
					"package default;\n\npublic class BankAccount {\n  int balance = 0;\n}",
			},
			instructions: ["Declare an int named balance.", "Set it equal to 0."],
			hints: [
				"Remember to use the `int` data type for the balance.",
				"Don't forget to initialize the balance with a value.",
			],
		},
	},
	3: {
		title: "Chapter 3: Methods",
		description:
			"Methods define the behavior of a class. Let's add some methods to our BankAccount class.",
		exercise: {
			title: "Add deposit and withdraw methods",
			description:
				"Add methods to deposit and withdraw money from the account.",
			code: {
				initial:
					"package default;\n\npublic class BankAccount {\n  int balance = 0;\n\n",
				solution:
					"package default;\n\npublic class BankAccount {\n  int balance = 0;\n\n  public void deposit(int amount) {\n    balance += amount;\n  }\n\n  public void withdraw(int amount) {\n    balance -= amount;\n  }\n}",
			},
			instructions: [
				"Add a deposit method that takes an int amount and adds it to the balance.",
				"Add a withdraw method that takes an int amount and subtracts it from the balance.",
			],
			hints: [
				"Use the `public` access modifier for both methods.",
				"Make sure to update the balance variable appropriately.",
			],
		},
	},
	4: {
		title: "Chapter 4: Constructors",
		description:
			"A constructor initializes an object when it's created. Let's add a constructor to our BankAccount class.",
		exercise: {
			title: "Create a constructor",
			description:
				"Create a constructor that initializes the balance to a specified value.",
			code: {
				initial:
					"package default;\n\npublic class BankAccount {\n  int balance;\n\n",
				solution:
					"package default;\n\npublic class BankAccount {\n  int balance;\n\n  public BankAccount(int initialBalance) {\n    balance = initialBalance;\n  }\n}",
			},
			instructions: [
				"Create a constructor that takes an int initialBalance and sets the balance to this value.",
			],
			hints: [
				"Use the `public` access modifier for the constructor.",
				"Assign the initialBalance parameter to the balance field.",
			],
		},
	},
	5: {
		title: "Chapter 5: Access Modifiers",
		description:
			"Access modifiers determine the visibility of class members. Let's use private access modifier for our balance.",
		exercise: {
			title: "Make balance private",
			description:
				"Change the balance field to be private and add getter and setter methods.",
			code: {
				initial:
					"package default;\n\npublic class BankAccount {\n  private int balance;\n\n",
				solution:
					"package default;\n\npublic class BankAccount {\n  private int balance;\n\n  public BankAccount(int initialBalance) {\n    balance = initialBalance;\n  }\n\n  public int getBalance() {\n    return balance;\n  }\n\n  public void setBalance(int balance) {\n    this.balance = balance;\n  }\n}",
			},
			instructions: [
				"Change the balance field to be private.",
				"Add a public getter method for balance.",
				"Add a public setter method for balance.",
			],
			hints: [
				"Use the `private` access modifier for the balance field.",
				"Use the `public` access modifier for the getter and setter methods.",
			],
		},
	},
	6: {
		title: "Chapter 6: Inheritance",
		description:
			"Java supports inheritance, allowing a class to inherit fields and methods from another class. Let's create a subclass of BankAccount.",
		exercise: {
			title: "Create a SavingsAccount class",
			description:
				"Create a SavingsAccount class that extends BankAccount and adds interest functionality.",
			code: {
				initial:
					"package default;\n\npublic class BankAccount {\n  private int balance;\n\n  public BankAccount(int initialBalance) {\n    balance = initialBalance;\n  }\n\n  public int getBalance() {\n    return balance;\n  }\n\n  public void setBalance(int balance) {\n    this.balance = balance;\n  }\n}\n\n",
				solution:
					"package default;\n\npublic class BankAccount {\n  private int balance;\n\n  public BankAccount(int initialBalance) {\n    balance = initialBalance;\n  }\n\n  public int getBalance() {\n    return balance;\n  }\n\n  public void setBalance(int balance) {\n    this.balance = balance;\n  }\n}\n\npublic class SavingsAccount extends BankAccount {\n  private double interestRate;\n\n  public SavingsAccount(int initialBalance, double interestRate) {\n    super(initialBalance);\n    this.interestRate = interestRate;\n  }\n\n  public void addInterest() {\n    int balance = getBalance();\n    balance += balance * interestRate;\n    setBalance(balance);\n  }\n}",
			},
			instructions: [
				"Create a SavingsAccount class that extends BankAccount.",
				"Add a private double field interestRate.",
				"Create a constructor that takes initialBalance and interestRate, and passes initialBalance to the superclass constructor.",
				"Add a method addInterest that increases the balance by the interest rate.",
			],
			hints: [
				"Use the `extends` keyword to indicate inheritance.",
				"Use `super(initialBalance)` to call the superclass constructor.",
			],
		},
	},
	7: {
		title: "Chapter 7: Polymorphism",
		description:
			"Polymorphism allows methods to do different things based on the object it is acting upon. Let's see it in action.",
		exercise: {
			title: "Override the toString method",
			description:
				"Override the toString method in the BankAccount and SavingsAccount classes.",
			code: {
				initial:
					"package default;\n\npublic class BankAccount {\n  private int balance;\n\n  public BankAccount(int initialBalance) {\n    balance = initialBalance;\n  }\n\n  public int getBalance() {\n    return balance;\n  }\n\n  public void setBalance(int balance) {\n    this.balance = balance;\n  }\n\n",
				solution:
					'package default;\n\npublic class BankAccount {\n  private int balance;\n\n  public BankAccount(int initialBalance) {\n    balance = initialBalance;\n  }\n\n  public int getBalance() {\n    return balance;\n  }\n\n  public void setBalance(int balance) {\n    this.balance = balance;\n  }\n\n  @Override\n  public String toString() {\n    return "BankAccount balance: " + balance;\n  }\n}\n\npublic class SavingsAccount extends BankAccount {\n  private double interestRate;\n\n  public SavingsAccount(int initialBalance, double interestRate) {\n    super(initialBalance);\n    this.interestRate = interestRate;\n  }\n\n  public void addInterest() {\n    int balance = getBalance();\n    balance += balance * interestRate;\n    setBalance(balance);\n  }\n\n  @Override\n  public String toString() {\n    return "SavingsAccount balance: " + getBalance() + ", interest rate: " + interestRate;\n  }\n}',
			},
			instructions: [
				"Override the toString method in BankAccount to return the balance.",
				"Override the toString method in SavingsAccount to return the balance and interest rate.",
			],
			hints: [
				"Use the @Override annotation to indicate method overriding.",
				"Ensure the toString method returns a meaningful string representation of the object.",
			],
		},
	},
	8: {
		title: "Chapter 8: Arrays",
		description:
			"Arrays are used to store multiple values in a single variable. Let's learn how to use arrays in Java.",
		exercise: {
			title: "Create an array of integers",
			description:
				"Create an array of integers and calculate the sum of its elements.",
			code: {
				initial: "package default;\n\npublic class ArrayExample {\n\n",
				solution:
					"package default;\n\npublic class ArrayExample {\n  public static void main(String[] args) {\n    int[] numbers = { 1, 2, 3, 4, 5 };\n    int sum = 0;\n\n    for (int number : numbers) {\n      sum += number;\n    }\n\n    System.out.println('Sum of numbers: ' + sum);\n  }\n}",
			},
			instructions: [
				"Create an array of integers named numbers with values { 1, 2, 3, 4, 5 }.",
				"Initialize an int variable named sum to 0.",
				"Use a for-each loop to iterate through the array and add each element to sum.",
				"Print the sum of the numbers.",
			],
			hints: [
				"Use the `int[]` syntax to declare an array of integers.",
				"Use a for-each loop to iterate through the array elements.",
			],
		},
	},
	9: {
		title: "Chapter 9: Strings",
		description:
			"Strings are sequences of characters and are used extensively in Java. Let's work with strings.",
		exercise: {
			title: "Check if a string is a palindrome",
			description:
				"Check if a given string is a palindrome (reads the same forward and backward).",
			code: {
				initial:
					"package default;\n\npublic class Palindrome {\n  public static void main(String[] args) {\n    String str = 'madam';\n    boolean isPalindrome = true;\n\n",
				solution:
					"package default;\n\npublic class Palindrome {\n  public static void main(String[] args) {\n    String str = 'madam';\n    boolean isPalindrome = true;\n\n    for (int i = 0; i < str.length() / 2; i++) {\n      if (str.charAt(i) != str.charAt(str.length() - 1 - i)) {\n        isPalindrome = false;\n        break;\n      }\n    }\n\n    if (isPalindrome) {\n      System.out.println(str + ' is a palindrome.');\n    } else {\n      System.out.println(str + ' is not a palindrome.');\n    }\n  }\n}",
			},
			instructions: [
				"Use a for loop to check if the string is a palindrome.",
				"Compare characters from the beginning and end of the string.",
				"Print if the string is a palindrome or not.",
			],
			hints: [
				"Use the `charAt` method to access characters in the string.",
				"Compare characters from the start and end of the string moving towards the center.",
			],
		},
	},
	10: {
		title: "Chapter 10: Conditionals",
		description:
			"Conditionals are used to perform different actions based on different conditions. Let's write a program to check for prime numbers.",
		exercise: {
			title: "Check if a number is prime",
			description: "Check if a given number is a prime number.",
			code: {
				initial: "package default;\n\npublic class PrimeNumber {\n\n",
				solution:
					"package default;\n\npublic class PrimeNumber {\n  public static void main(String[] args) {\n    int num = 29;\n    boolean isPrime = true;\n\n    for (int i = 2; i <= num / 2; ++i) {\n      if (num % i == 0) {\n        isPrime = false;\n        break;\n      }\n    }\n\n    if (isPrime) {\n      System.out.println(num + ' is a prime number.');\n    } else {\n      System.out.println(num + ' is not a prime number.');\n    }\n  }\n}",
			},
			instructions: [
				"Use a for loop to check if the number is divisible by any number other than 1 and itself.",
				"Set isPrime to false if the number is divisible by any other number.",
				"Print if the number is prime or not.",
			],
			hints: [
				"Use the `%` operator to check for divisibility.",
				"Iterate from 2 to num / 2 to check for factors.",
			],
		},
	},
};

export function getChapters(chapterNumber) {
	return chapters[chapterNumber];
}
