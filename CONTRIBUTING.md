# Contributing Guide

## Code Quality

We use linting, auto-formatting, and type-checking to ensure our code is well-structured and (mostly) functional. All of these checks can (and should) be run locally and will also be enforced as part of our GitHub Action workflow.

### Web Checks

To run all the checks in the web repo:

```bash
npm run check
```

Or to run a specific check:

- `npm run check:format` - prettier
- `npm run check:lint` - eslint
- `npm run check:svelte` - svelte/typescript

Note that the format and lint checks both run in "fix" mode, meaning they will make changes to your code wherever possible to fix errors (e.g. removing extra spaces, adding missing semi-colons, etc.).

### Tests

TODO:

## Making Changes

This project follows a standard GitHub flow - please read [this guide](https://docs.github.com/en/get-started/using-github/github-flow) if you are unfamiliar.

Some other things to keep in mind:

### Commit Messages

Strive for concise but descriptive commit messages. This usually means avoiding the `-m` flag for `git commit`. This is a great guide to writing good commit messages: [https://cbea.ms/git-commit/].

Writing long commit messages is [easy](https://stackoverflow.com/questions/16122234/how-to-commit-a-change-with-both-message-and-description-from-the-command-li) and VSCode makes [even easier](https://code.visualstudio.com/docs/sourcecontrol/overview#_vs-code-as-git-editor).
