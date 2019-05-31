# Phoenix Analytics 

This project's objective is to show more or less relevant metrics for the [Phoenix Project](https://github.com/burst-apps-team/phoenix)

[Go to App](https://ohager.github.io/phoenix-analytics/)

> Based on [Material React Dashboard]("git+https://github.com/creativetimofficial/material-dashboard-react.git")
---

## Development

Run `yarn` for frontend and backend (`./bff`)

To run you need a valid [Github Access Token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line) with repo scope.

Then run `GH_TOKEN=<your_token> yarn start`

## Deployment

The project is splitted into two parts:

- Frontend App (deployed to github-pages)
- Backend for Frontend (deployed to Zeit/Now)


For frontend run:

`yarn run deploy`


For backend go to `./bff` and run:

`yarn run deploy`

