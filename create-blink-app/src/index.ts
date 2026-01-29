#!/usr/bin/env node

import { Command } from "commander";
import prompts from "prompts";
import fs from "fs-extra";
import path from "path";
import pc from "picocolors";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.join(__dirname, "..", "template");

const BLINK_ASCII = `
${pc.yellow("  ____  _ _       _    ")}
${pc.yellow(" | __ )| (_)_ __ | | __")}
${pc.yellow(" |  _ \\| | | '_ \\| |/ /")}
${pc.yellow(" | |_) | | | | | |   < ")}
${pc.yellow(" |____/|_|_|_| |_|_|\\_\\")}

${pc.dim("Edit. Blink. Live.")}
`;

async function main() {
  console.log(BLINK_ASCII);

  const program = new Command();

  program
    .name("create-blink-app")
    .description("Create a new Blink CMS project - Notion + Convex + Next.js")
    .version("0.1.0")
    .argument("[project-name]", "Name of the project")
    .option("--no-install", "Skip installing dependencies")
    .option("--use-npm", "Use npm as package manager")
    .option("--use-pnpm", "Use pnpm as package manager")
    .option("--use-bun", "Use bun as package manager")
    .parse(process.argv);

  const options = program.opts();
  let projectName = program.args[0];

  // Prompt for project name if not provided
  if (!projectName) {
    const response = await prompts({
      type: "text",
      name: "projectName",
      message: "What is your project named?",
      initial: "my-blink-app",
    });

    if (!response.projectName) {
      console.log(pc.red("\n✖ Project name is required"));
      process.exit(1);
    }
    projectName = response.projectName;
  }

  // Sanitize project name
  projectName = projectName.trim().replace(/\s+/g, "-").toLowerCase();
  const projectPath = path.resolve(process.cwd(), projectName);

  // Check if directory exists
  if (fs.existsSync(projectPath)) {
    const { overwrite } = await prompts({
      type: "confirm",
      name: "overwrite",
      message: `Directory ${pc.cyan(projectName)} already exists. Overwrite?`,
      initial: false,
    });

    if (!overwrite) {
      console.log(pc.red("\n✖ Operation cancelled"));
      process.exit(1);
    }
    console.log(pc.dim(`\nRemoving existing directory...`));
    await fs.remove(projectPath);
  }

  console.log();
  console.log(`Creating a new Blink app in ${pc.cyan(projectPath)}`);
  console.log();

  // Create project directory
  await fs.ensureDir(projectPath);

  // Copy template files
  console.log(pc.dim("📦 Copying template files..."));

  if (fs.existsSync(templateDir)) {
    await fs.copy(templateDir, projectPath);
  } else {
    console.log(pc.red("\n✖ Template directory not found. Please reinstall create-blink-app."));
    process.exit(1);
  }

  // Update package.json name
  const pkgPath = path.join(projectPath, "package.json");
  if (fs.existsSync(pkgPath)) {
    const pkg = await fs.readJson(pkgPath);
    pkg.name = projectName;
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });
  }

  // Rename gitignore (npm ignores .gitignore in published packages)
  const gitignorePath = path.join(projectPath, "gitignore");
  const dotGitignorePath = path.join(projectPath, ".gitignore");
  if (fs.existsSync(gitignorePath)) {
    await fs.rename(gitignorePath, dotGitignorePath);
  }

  // Rename env.local.example
  const envExamplePath = path.join(projectPath, "env.local.example");
  const dotEnvExamplePath = path.join(projectPath, ".env.local.example");
  if (fs.existsSync(envExamplePath)) {
    await fs.rename(envExamplePath, dotEnvExamplePath);
  }

  // Determine package manager
  let pkgManager = "npm";
  if (options.usePnpm) {
    pkgManager = "pnpm";
  } else if (options.useBun) {
    pkgManager = "bun";
  } else if (options.useNpm) {
    pkgManager = "npm";
  } else {
    // Auto-detect based on lockfiles in parent directories or user agent
    const userAgent = process.env.npm_config_user_agent || "";
    if (userAgent.includes("pnpm")) {
      pkgManager = "pnpm";
    } else if (userAgent.includes("bun")) {
      pkgManager = "bun";
    }
  }

  // Install dependencies
  if (options.install !== false) {
    console.log();
    console.log(pc.dim(`📥 Installing dependencies with ${pkgManager}...`));
    console.log();

    try {
      execSync(`${pkgManager} install`, {
        cwd: projectPath,
        stdio: "inherit",
      });
    } catch {
      console.log(pc.yellow(`\n⚠ Failed to install dependencies. Run '${pkgManager} install' manually.`));
    }
  }

  // Initialize git
  console.log();
  console.log(pc.dim("📁 Initializing git repository..."));
  try {
    execSync("git init", { cwd: projectPath, stdio: "ignore" });
    execSync("git add -A", { cwd: projectPath, stdio: "ignore" });
    execSync('git commit -m "Initial commit from create-blink-app"', {
      cwd: projectPath,
      stdio: "ignore",
    });
  } catch {
    // Git init is optional, ignore errors
  }

  // Success message
  console.log();
  console.log(pc.green("✔ Success!") + ` Created ${pc.cyan(projectName)} at ${projectPath}`);
  console.log();
  console.log(pc.bold("Next steps:"));
  console.log();
  console.log(`  ${pc.cyan("cd")} ${projectName}`);
  console.log();
  console.log(`  ${pc.dim("# 1. Copy environment template and add your Notion API key")}`);
  console.log(`  ${pc.cyan("cp")} .env.local.example .env.local`);
  console.log(`  ${pc.dim("# Edit .env.local with your NOTION_API_KEY and NOTION_PARENT_PAGE_ID")}`);
  console.log();
  console.log(`  ${pc.dim("# 2. Create Notion databases")}`);
  console.log(`  ${pc.cyan(pkgManager)} run blink:setup`);
  console.log();
  console.log(`  ${pc.dim("# 3. Set up Convex")}`);
  console.log(`  ${pc.cyan("npx")} convex dev`);
  console.log();
  console.log(`  ${pc.dim("# 4. Sync content and start dev server")}`);
  console.log(`  ${pc.cyan(pkgManager)} run blink:sync`);
  console.log(`  ${pc.cyan(pkgManager)} run dev`);
  console.log();
  console.log(pc.dim("─".repeat(50)));
  console.log();
  console.log(`${pc.yellow("⚡")} Edit in Notion. See it live. ${pc.dim("That's Blink.")}`);
  console.log();
}

main().catch((error) => {
  console.error(pc.red("Error:"), error.message);
  process.exit(1);
});
