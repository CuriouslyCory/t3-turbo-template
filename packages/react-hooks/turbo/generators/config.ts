import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

// eslint-disable-next-line import/no-default-export -- Turbo generators require default export
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("sudo-hook", {
    description: "Adds a new sudoswap react hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the hook (i.e. PoolInfo)?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/use-{{kabobCase name}}.tsx",
        templateFile: "templates/hook.hbs",
      },
      {
        type: "append",
        path: "index.tsx",
        pattern: /(?<insertion>\/\/ hook exports)/g,
        template:
          'export { use{{pascalCase name}} } from "./src/use-{{kabobCase name}}";',
      },
    ],
  });
}
