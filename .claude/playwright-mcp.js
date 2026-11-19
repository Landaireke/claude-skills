#!/usr/bin/env node
// Starts the Playwright MCP server on any machine.
// Cloud sessions: headless, using the Chromium preinstalled at /opt/pw-browsers.
// Your own computer: a visible window in your installed Google Chrome.
const { spawn } = require('child_process');
const fs = require('fs');

const CLOUD_CHROMIUM = '/opt/pw-browsers/chromium';
const args = ['-y', '@playwright/mcp@0.0.86'];

if (fs.existsSync(CLOUD_CHROMIUM)) {
  args.push('--headless', '--no-sandbox', '--executable-path', CLOUD_CHROMIUM);
}
args.push(...process.argv.slice(2));

const isWindows = process.platform === 'win32';
const child = spawn(isWindows ? 'npx.cmd' : 'npx', args, { stdio: 'inherit', shell: isWindows });
child.on('exit', (code) => process.exit(code ?? 0));
for (const sig of ['SIGINT', 'SIGTERM']) process.on(sig, () => child.kill(sig));
