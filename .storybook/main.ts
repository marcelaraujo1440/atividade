//@ts-nocheck
import type { StorybookConfig } from "@storybook/react-webpack5";
import React from "react";
const React = require("react");
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/preset-scss",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  }, 
    webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[2].exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/]

    // Use correct react-dom depending on React version.
    if (parseInt(React.version) <= 18) {
      config.externals = ["react-dom/client"];
    }

    // Remove core-js to prevent issues with Storybook
    config.module.rules[2].exclude= [/core-js/]
    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[2].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    )

    config.resolve.mainFields=["browser", "module", "main"]
    return config
  },
};
export default config;