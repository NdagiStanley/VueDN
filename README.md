# VueDN

Vuepress-DecapCMS-Netlify

- Built using VuePress
- Managed using DecapCMS
- Hosted on Netlify

## Use template

[![Deploy to Netlify](docs/.vuepress/public/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/NdagiStanley/VueDN)

Follow the steps [here](https://vuedn.netlify.app/template/#continue-setup) to complete setup.

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
