# Sudoswap React Library

## Install

Published on npm
`npm i @sudoswap/react --save`

## Basic Usage

Add a collection to your page

```tsx
// Add the .css if you want to use our out of box styles.
import "@sudoswap/react-components/dist/index.css";
import { Collection } from '@sudoswap/react';

const App = (): JSX.Element => {
  const collectionConfig = {
    address: "0x0427743df720801825a5c82e0582b1e915e0f750",
  };

  return (
    <Collection config={config} />
  )
```

## Contributing

### Overview

- We're using pnpm for speed and effeciency. You can install it with `npm i -g pnpm`.
- With [pnpm](https://pnpm.io/) installed you can run `pnpm i` to install all dependencies.
- Run `pnpm dev:web` to start the example app. See below for generator scripts for adding new components.
- Components should be tailwind compatable but should not use tailwind classes directly.

Example new component workflow:

```bash
# Create your new component
turbo gen sudo-component
# Follow the prompts

# Add your new component to the example app
turbo gen sudo-example
# Follow the prompts
# Start the example app
pnpm dev:web
```

- Open your new component in your IDE `/packages/components/src/<kabob-case-name>.tsx`
- Open the example app in your web-browser `http://localhost:3000`

Workspace names:

- Primary
  - `web` - The nextjs web app for examples
  - `docs` - The astrojs (starlight) docs site
  - `@sudoswap/react-components` - The react components package
  - `@sudoswap/react-hooks` - The react hooks package
- Dev deps
  - `eslint-config-custom` - Shared eslint configs
  - `tailwind-config` - Shared tailwind config for tailwind apps
  - `tsconfig` - Shared tsconfigs
  - `utils` - Shared non-react utility functions

### Adding new components

There's a code generator that you can use to generate new components.

1. From the root directory run: `turbo gen sudo-component`
2. Follow the prompts
3. A new component will be added to `/packages/components/src/<kabob-case-name>.tsx`
4. The component will automatically be added to the package exports

### Adding new hooks

There's a code generator that you can use to generate new components.

1. From the root directory run: `turbo gen sudo-hook`
2. Follow the prompts
3. A new component will be added to `/packages/hooks/src/<kabob-case-name>.tsx`
4. The component will automatically be added to the package exports

### Testing components

The web project is primarily for creating examples for component usage and already imports the packages.
You can generate a component to list your example using a code generator.

1. From the root directory run: `turbo gen sudo-example`
2. Follow the prompts
3. A new component will be added to `/app/web/app/examples/<kabob-case-name>-example.tsx`
4. The component will be imported and inserted in the main example page `/app/web/app/page.tsx`
5. The component will automatically be added to the package exports

### Add library to app or package

1. Add <package-name> to the "web" app `pnpm add <package-name> --filter=web`
2. Add <package-name> as a dev dep to the components package `pnpm add <package-name> --filter=@sudoswap/react-components -D`
