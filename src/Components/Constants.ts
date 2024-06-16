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

  export const JAVA_CODE_SNIPPETS: Record<string, Record<number, string>> = {
    java: {
      1: `
        public class BankAccount {
          public static void main(String[] args) {
            // Code for Chapter 1 Exercise
            // Write your code here
          }
        }
      `,
      2: `
        public class BankAccount {
          private int balance = _____;
  
          public BankAccount() {
            // Constructor
          }
  
          public int getBalance() {
            return balance;
          }
  
          public void setBalance(int balance) {
            this.balance = balance;
          }
  
          public static void main(String[] args) {
            // Code for Chapter 2 Exercise
            // Create an instance of BankAccount and perform operations
            BankAccount account = new BankAccount();
            // Example: account.setBalance(100);
            System.out.println("Balance: " + account.getBalance());
          }
        }
      `,
      3: `
        public class BankAccount {
          private int balance = 0;
  
          public BankAccount() {
            // Constructor
          }
  
          public int getBalance() {
            return balance;
          }
  
          public void deposit(int amount) {
            balance += amount;
          }
  
          public void withdraw(int amount) {
            balance -= amount;
          }
  
          public static void main(String[] args) {
            // Code for Chapter 3 Exercise
            // Create an instance of BankAccount and perform deposit and withdrawal
            BankAccount account = new BankAccount();
            // Example: account.deposit(100);
            System.out.println("Balance after operations: " + account.getBalance());
          }
        }
      `,
      4: `
        public class BankAccount {
          private int balance;
  
          public BankAccount(int initialBalance) {
            balance = initialBalance;
          }
  
          public int getBalance() {
            return balance;
          }
  
          public static void main(String[] args) {
            // Code for Chapter 4 Exercise
            // Create an instance of BankAccount with initial balance and perform operations
            BankAccount account = new BankAccount(_____); // Replace _____ with initial balance
            System.out.println("Initial balance: " + account.getBalance());
          }
        }
      `,
      5: `
        public class BankAccount {
          private int balance;
  
          public BankAccount(int initialBalance) {
            balance = initialBalance;
          }
  
          public int getBalance() {
            return balance;
          }
  
          public void setBalance(int balance) {
            this.balance = balance;
          }
  
          public static void main(String[] args) {
            // Code for Chapter 5 Exercise
            // Create an instance of BankAccount and perform operations with setBalance
            BankAccount account = new BankAccount(_____); // Replace _____ with initial balance
            // Example: account.setBalance(300);
            System.out.println("Updated balance: " + account.getBalance());
          }
        }
      `,
      6: `
        public class BankAccount {
          private int balance;
  
          public BankAccount(int initialBalance) {
            balance = initialBalance;
          }
  
          public int getBalance() {
            return balance;
          }
  
          public void setBalance(int balance) {
            this.balance = balance;
          }
  
          @Override
          public String toString() {
            return "BankAccount balance: " + balance;
          }
  
          public static void main(String[] args) {
            // Code for Chapter 6 Exercise
            // Create an instance of BankAccount and print its state
            BankAccount account = new BankAccount(_____); // Replace _____ with initial balance
            System.out.println(account);
          }
        }
      `,
      7: `
        public class BankAccount {
          private int balance;
  
          public BankAccount(int initialBalance) {
            balance = initialBalance;
          }
  
          public int getBalance() {
            return balance;
          }
  
          public void setBalance(int balance) {
            this.balance = balance;
          }
  
          public void deposit(int amount) {
            balance += amount;
          }
  
          public void withdraw(int amount) {
            balance -= amount;
          }
  
          @Override
          public String toString() {
            return "BankAccount balance: " + balance;
          }
  
          public static void main(String[] args) {
            // Code for Chapter 7 Exercise (BankAccount)
            // Create an instance of BankAccount and perform deposit, withdrawal, and print state
            BankAccount account = new BankAccount(_____); // Replace _____ with initial balance
            // Example: account.deposit(200);
            System.out.println(account);
          }
        }
  
        public class SavingsAccount extends BankAccount {
          private double interestRate;
  
          public SavingsAccount(int initialBalance, double interestRate) {
            super(initialBalance);
            this.interestRate = interestRate;
          }
  
          public void addInterest() {
            int balance = getBalance();
            balance += balance * interestRate;
            setBalance(balance);
          }
  
          @Override
          public String toString() {
            return "SavingsAccount balance: " + getBalance() + ", interest rate: " + interestRate;
          }
  
          public static void main(String[] args) {
            // Code for Chapter 7 Exercise (SavingsAccount)
            // Create an instance of SavingsAccount, add interest, and print state
            SavingsAccount savingsAccount = new SavingsAccount(_____); // Replace _____ with initial balance
            savingsAccount.addInterest();
            System.out.println(savingsAccount);
          }
        }
      `,
      8: `
        public class ArrayExample {
          public static void main(String[] args) {
            int[] numbers = { 1, 2, 3, 4, 5 };
            int sum = 0;
  
            for (int number : numbers) {
              sum += number;
            }
  
            System.out.println("Sum of numbers: " + sum);
          }
        }
      `,
      9: `
        public class Palindrome {
          public static void main(String[] args) {
            String str = "______"; // Replace ______ with a string to check palindrome
            boolean isPalindrome = true;
  
            for (int i = 0; i < str.length() / 2; i++) {
              if (str.charAt(i) != str.charAt(str.length() - 1 - i)) {
                isPalindrome = false;
                break;
              }
            }
  
            if (isPalindrome) {
              System.out.println(str + " is a palindrome.");
            } else {
              System.out.println(str + " is not a palindrome.");
            }
          }
        }
      `,
      10: `
        public class PrimeNumber {
          public static void main(String[] args) {
            int num = _____; // Replace _____ with a number to check if it's prime
            boolean isPrime = true;
  
            if (num <= 1) {
              isPrime = false;
            } else {
              for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                  isPrime = false;
                  break;
                }
              }
            }
  
            if (isPrime) {
              System.out.println(num + " is a prime number.");
            } else {
              System.out.println(num + " is not a prime number.");
            }
          }
        }
      `,
    },
  };
  
  
  
  
  export function getCodeSnippets(chapterNumber: number) {
    return JAVA_CODE_SNIPPETS.java[chapterNumber] || '';
  }
  

  