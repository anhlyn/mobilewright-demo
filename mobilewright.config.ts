import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  platform: 'ios',
  deviceName: /iPhone 16/,
  bundleId: 'com.demo.SwiftAutomationDemo',
  installApps: './builds/app-sim.zip',
  autoAppLaunch: true,
  timeout: 300_000
});