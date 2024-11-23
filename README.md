<p align="center">
  <img src="web/static/images/mmish.png" height="96">
  <h1 align="center">'mmish</h3>
</p>

<p align="center">
A website for fantasy football leagues to view recaps, statistics, and other league-specific content.
</p>

<br />

## Prerequisites

- A [Contenful](https://www.contentful.com/) account and access to our Contenful [space](https://app.contentful.com/spaces/u8rkbtuumsz9/)
- (Optional) Install [pnpm](https://pnpm.io/), which is a more performant extension of npm

## Setup

### Contentful

In order for the app to load and show posts, you'll need to add the Contentful API keys to your local dev environment:

1. Make a copy of the `web/.env.example` file and call it `web/.env.local`
2. Go to the the [APIs page](https://app.contentful.com/spaces/u8rkbtuumsz9/api/keys) in Contentful settings
3. Copy the corresponding API keys into the `web/.env.local` file

### Install JS dependencies

```bash
cd web
npm clean-install
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
cd web
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Note that when running in development mode, you will see both published and unpublished (i.e. draft) content from contentful.

## Building

To create a production version of the app:

```bash
cd web
npm run build
```

You can preview the production build with `npm run preview`. This will only show published content.

## Repository Structure

- [web/](./web/README.md)
  - The user interface for the application, written with [SvelteKit](https://svelte.dev/)

## Contributors

- Tucker Gordon
- Joe Seibert
- Max Fierke
