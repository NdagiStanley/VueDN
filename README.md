# VueDN

Vuepress-DecapCMS-Netlify

- Built using VuePress
- Managed using DecapCMS
- Hosted on Netlify

## Run

Use node version: 18

- Install dependencies:

  ```bash
  yarn
  ```

- Run locally:

  ```bash
  yarn docs:dev
  ```

- Build:

  ```bash
  yarn docs:build
  cd site/.vuepress/dist && hs
  ```

\*hs - `http-server` ([npm package](https://www.npmjs.com/package/http-server))
