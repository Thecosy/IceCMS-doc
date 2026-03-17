const { spawn } = require("child_process");

const isWindows = process.platform === "win32";
const yarnCommand = isWindows ? "yarn.cmd" : "yarn";

const processes = [
    spawn(process.execPath, ["back/icecms-doc-auth/index.js"], {
        cwd: process.cwd(),
        stdio: "inherit",
        env: {
            ...process.env,
            AUTH_PORT: process.env.AUTH_PORT || "3001",
        },
    }),
    spawn(yarnCommand, ["start", "--host", "0.0.0.0"], {
        cwd: process.cwd(),
        stdio: "inherit",
        env: {
            ...process.env,
            BROWSER: "none",
        },
    }),
];

const shutdown = (code = 0) => {
    processes.forEach((child) => {
        if (!child.killed) {
            child.kill("SIGTERM");
        }
    });
    process.exit(code);
};

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));

processes.forEach((child) => {
    child.on("exit", (code) => {
        if (code && code !== 0) {
            shutdown(code);
        }
    });
});
