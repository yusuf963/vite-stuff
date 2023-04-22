import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    // "../src/components/**/docs/*.mdx",
    "../src/components/**/docs/**/*stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/preset-scss",

    {
      name: path.dirname(require.resolve("@storybook/addon-docs/package.json")),
      options: { transcludeMarkdown: true },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
    defaultName: "Documentation",
  },
};

export default config;
