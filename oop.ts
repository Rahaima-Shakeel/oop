#! /usr/bin/env node
import inquirer from "inquirer";
import readlinesync from "readline-sync";
class Person{
    private personality: string;

    constructor(){
        this.personality = "mystery";
    }
    askQuestion(answer: number){
        if (answer===1){
            this.personality = "Extrovert";
        } else {
            this.personality = "Introvert";
        }
    }
    getPersonality(): string {
        return this.personality;
    }
}
class Student extends Person {
    private name: string;

    constructor(name: string){
        super();
        this.name = name;
    }

    getName(): string{
        return this.name;
    }
}
function main() {
    const answer = parseInt(readlinesync.question("Type 1 if you like to talk to others, Type 2 if you would rather keep to yourself:"));
    const person = new Person();
    person.askQuestion(answer);
    const name = readlinesync.question("What is your name?");
    const student = new Student(name);
    console.log(`Your name is ${student.getName()} and your personality type is ${person.getPersonality()}.`);
}
main();