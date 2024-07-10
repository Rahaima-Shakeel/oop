#! /usr/bin/env node
import readlinesync from "readline-sync";
class Person {
    personality;
    constructor() {
        this.personality = "mystery";
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extrovert";
        }
        else {
            this.personality = "Introvert";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    name;
    constructor(name) {
        super();
        this.name = name;
    }
    getName() {
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
