import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  baseSidebar: [
    {
      type: "category",
      label: "User Guides",
      collapsed: false,
      items: [
        "guides/system-requirements",
        "guides/surface-install-guide",
        "guides/installation-troubleshoot",
        "guides/alternate-install-guide",
        "guides/basic-usage",
        "guides/start-icon",
        "guides/software",
        "guides/layerapp",
        "guides/secondary-drives",
        "guides/gaming",
        "guides/quadlet",
        "guides/developer",
        "guides/rescue-mode",
        "guides/report-issues",       
        "guides/credits",
      ],
    },
    {
      type: "category",
      label: "References",
      collapsed: false,
      items: ["reference/example"],
    },
  ],
};

export default sidebars;
