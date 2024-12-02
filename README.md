This repository contains JavaScript solutions for the coding challenges provided in Week 1. Each challenge is designed to enhance problem-solving skills by implementing simple yet practical solutions.

Challenges Overview

1. Student Grade Generator
This program converts a student's marks into a corresponding grade.

Description
Input: Student marks ranging from 0 to 100.
Output: Grade based on the marks:
A: Marks greater than 79.
B: Marks between 60 and 79 (inclusive).
C: Marks between 50 and 59 (inclusive).
D: Marks between 40 and 49 (inclusive).
E: Marks below 40.


2. Speed Detector
This program calculates demerit points based on a car's speed and provides feedback regarding the driver's license status.

Description
Input: The speed of the car in km/h.
Output:
Prints "Ok" if the speed is 70 km/h or below.
Adds 1 demerit point for every 5 km/h above 70 km/h.
Prints "License suspended" if the total demerit points exceed 12.


3. Net Salary Calculator
This program calculates the net salary of an individual by considering deductions such as PAYE, NHIF, and NSSF.

Description
Input: Basic salary and benefits.
Output:
Gross Salary: The sum of basic salary and benefits.
PAYE (Tax): Income tax based on the applicable tax brackets.
NHIF Deduction: Health insurance deduction as per NHIF rates.
NSSF Deduction: Pension fund deduction as per NSSF rates.
Net Salary: Gross salary after deducting PAYE, NHIF, and NSSF.
Usage
Clone this repository:

git clone https://github.com/your-username/week1-code-challenges.git
Navigate to the project directory:

cd week1-code-challenges
Run the programs using Node.js:

node studentGradeGenerator.js
node speedDetector.js
node netSalaryCalculator.js


Files
studentGradeGenerator.js: Solution for the Student Grade Generator.
speedDetector.js: Solution for the Speed Detector.
netSalaryCalculator.js: Solution for the Net Salary Calculator.


Author
Written by Faith, as part of the Week 1 coding challenges.
