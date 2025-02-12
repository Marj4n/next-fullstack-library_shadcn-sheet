#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute: ${command}`, e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Marj4nts/next_prisma_library-shadcn ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning repository...`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  process.exit(-1);
}

console.log(`Installing dependencies...`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) {
  process.exit(-1);
}

console.log(`Congratulations! You have successfully created a new project!`);
console.log(`To get started, run the following commands:`);
console.log(`cd ${repoName}`);
console.log(`npm run dev`);
