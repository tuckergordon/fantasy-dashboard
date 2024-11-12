<p align="center">
  <img src="web/static/images/mmish.png" height="96">
  <h1 align="center">'mmish</h3>
</p>

<p align="center">
A website for fantasy football leagues to view recaps, statistics, and other league-specific content.
</p>

<br />

## Repository Structure

- [web/](./web/README.md)
  - The user interface for the application, written with [SvelteKit](https://svelte.dev/)
- [python](./python/)
  - FastAPI endpoints for use by the web application. Built to be used as Vercel serveless functions

## Prerequisites

- A [Contenful](https://www.contentful.com/) account and access to our Contenful [space](https://app.contentful.com/spaces/u8rkbtuumsz9/)
- conda (recommend [miniconda](https://docs.anaconda.com/miniconda/))

## Setup

### Contentful

In order for the app to load and show posts, you'll need to add the Contentful API keys to your local dev environment:

1. Make a copy of the `web/.env.example` file and call it `web/.env.local`
2. Go to the the [APIs page](https://app.contentful.com/spaces/u8rkbtuumsz9/api/keys) in Contentful settings
3. Copy the corresponding API keys into the `web/.env.local` file

### Dependencies

Create the conda environment:

```bash
conda env create -f environment.yml
```

Then activate it:

```bash
conda activate mmish
```

The conda environment includes all of the Python dependencies and NodeJS, which you'll need in order to be able to run the web app. You'll need to have it activated in order to run the application, and you can make VSCode [automatically activate it](https://code.visualstudio.com/docs/python/environments).

Next, install the JS dependencies:

```bash
cd web
npm clean-install
```

### Running the application

Activate the conda environment

```bash
conda activate mmish
```

The easiest way to start the full application is to run:

```bash
cd web
npm run dev
```

This will run a script that starts both the back-end and the front-end. If you would instead prefer to launch them separately (e.g. if you're developing one or the other), you can run these two commands in two terminals

```bash
cd web
npm run dev:vite
```

```bash
cd python
uvicorn api.index:app --reload
```

Note that when running in development mode, you will see both published and unpublished (i.e. draft) content from contentful.

## Building

To create a production version of the web app:

```bash
cd web
npm run build
```

You can preview the production build with `npm run preview`. This will only show published content.

## Contributors

- Tucker Gordon
- Joe Seibert
- Max Fierke
