import { defineConfig } from 'mobilewright';

export default defineConfig({
  testDir: './tests',
  reporter: 'html',
  platform: 'ios',
  deviceName: /iPhone 17 Pro Max/,
  bundleId: 'com.demo.SwiftAutomationDemo',
  installApps: './builds/app-sim.zip',
  autoAppLaunch: true,
  timeout: 60000
});

