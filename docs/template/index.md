---
contributors: false
lastUpdated: false
---

# Using this template

## Prerequisites

- [GitHub account](https://github.com/join)
- [Netlify account](https://app.netlify.com/)

## Setup

1. Fork the [repository](https://github.com/NdagiStanley/VueDN)
2. Add a site and link the repository on Netlify
3. Deploy

To do the three steps above click this button:

<div>
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/NdagiStanley/VueDN"><img src="/button.svg" alt="Deploy to Netlify" /></a>
</div>

### Continue setup

1. [Enable Identity integration](https://docs.netlify.com/visitor-access/identity/#enable-identity-in-the-ui) for your site, to enable Authentication for the CMS

    - Go to **Netlify Identity** integration in your netlify site:
    <br>Path: Your netlify site's path with `/integrations/identity/netlify` appended
    <br>e.g.: `https://app.netlify.com/sites/vuedn/integrations/identity/netlify` if your site's name is `vuedn`
    - and click **Enable**

2. **Enable Git Gateway** in Identity settings

    - Go to **Identity** settings
    <br>Path: Your netlify site's path with `/settings/identity#services` appended
    - and click **Enable Git Gateway**

3. In the live site, go to `/admin` path of your site and sign up
    <br>Please note; due to browser extensions, the sign-up modal or Social Auth may not appear. If this happens, set up on an incognito tab.
4. You're set!
5. Bonus: Update *Registration preferences* and *External providers* in Identity settings, Registration section
    <br>Path: Your netlify site's path with `/settings/identity#registration` appended

## Reference

- [VuePress Frontmatter](https://vuepress.github.io/reference/frontmatter.html)
- [DecapCMS](https://decapcms.org/)
- [DecapCMS Configuration Options](https://decapcms.org/docs/configuration-options)
- [DecapCMS Git Gateway backend](https://decapcms.org/docs/git-gateway-backend/)
- [Git-gateway](https://docs.netlify.com/visitor-access/git-gateway/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
