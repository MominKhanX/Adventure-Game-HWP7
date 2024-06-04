#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
// Print welcome message
console.log(chalk.bold.rgb(73, 158, 255)(`${chalk.bold.hex('#499EFF')(`\n  \t\t <<<======================================>>>`)}`));
console.log(chalk.rgb(0, 255, 51).bold("\n \t<================ Welcome To My Adventure Game!! ================>\n"));
console.log(chalk.bold.rgb(73, 158, 255)(`${chalk.bold.hex('#499EFF')(`\t\t <<<======================================>>>\n`)}`));
// Made class for Player and Opponent
class Player {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
    fuelIncrease() {
        this.health = 100;
    }
}
class Opponent {
    name;
    health = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let health = this.health - 25;
        this.health = health;
    }
}
// Players Name & Selecting Opponent
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please Enter Your Name:"
    }
]);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select Your Opponent:",
        choices: ["Skeleton", "Assasin", "Zombie"]
    }
]);
// Gather Data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // For Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "operation",
                message: "Select Your Opponent:",
                choices: ["Attack!", "Drink Potion!", "Run For Your Life..."]
            }
        ]);
        if (ask.operation == "Attack!") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(`${p1.name}'s Health: ${p1.health}`)}`);
                console.log(`${chalk.bold.green(`${o1.name}'s Health: ${o1.health}`)}`);
                if (p1.health <= 0) {
                    console.log(chalk.red.bold.italic("You Lost... Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.green(`${p1.name}'s Health: ${p1.health}`)}`);
                console.log(`${chalk.bold.red(`${o1.name}'s Health: ${o1.health}`)}`);
                if (o1.health <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.operation == "Drink Potion!") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink The  Health Potion. Your Health is ${p1.health} Now!`));
        }
        if (ask.operation == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Lost... Better Luck Next Time!"));
            process.exit();
        }
    }
    // For Assasin
    if (opponent.select == "Assasin") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "operation",
                message: "Select Your Opponent:",
                choices: ["Attack!", "Drink Potion!", "Run For Your Life..."]
            }
        ]);
        if (ask.operation == "Attack!") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(`${p1.name}'s Health: ${p1.health}`)}`);
                console.log(`${chalk.bold.green(`${o1.name}'s Health: ${o1.health}`)}`);
                if (p1.health <= 0) {
                    console.log(chalk.red.bold.italic("You Lost... Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.green(`${p1.name}'s Health: ${p1.health}`)}`);
                console.log(`${chalk.bold.red(`${o1.name}'s Health: ${o1.health}`)}`);
                if (o1.health <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.operation == "Drink Potion!") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink The  Health Potion. Your Health is ${p1.health} Now!`));
        }
        if (ask.operation == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Lost... Better Luck Next Time!"));
            process.exit();
        }
    }
    // For Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "operation",
                message: "Select Your Opponent:",
                choices: ["Attack!", "Drink Potion!", "Run For Your Life..."]
            }
        ]);
        if (ask.operation == "Attack!") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${chalk.bold.red(`${p1.name}'s Health: ${p1.health}`)}`);
                console.log(`${chalk.bold.green(`${o1.name}'s Health: ${o1.health}`)}`);
                if (p1.health <= 0) {
                    console.log(chalk.red.bold.italic("You Lost... Better Luck Next Time!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${chalk.bold.green(`${p1.name}'s Health: ${p1.health}`)}`);
                console.log(`${chalk.bold.red(`${o1.name}'s Health: ${o1.health}`)}`);
                if (o1.health <= 0) {
                    console.log(chalk.green.bold.italic("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.operation == "Drink Potion!") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You Drink The  Health Potion. Your Health is ${p1.health} Now!`));
        }
        if (ask.operation == "Run For Your Life...") {
            console.log(chalk.red.bold.italic("You Lost... Better Luck Next Time!"));
            process.exit();
        }
    }
} while (true);
