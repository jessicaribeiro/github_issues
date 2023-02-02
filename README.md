# Homelike

The project goal is to implement a small client application using Nextjs
and Github GraphQL API. 
The data is obtained from [Github React](https://github.com/reactjs/reactjs.org) using the [Github GraphQL API](https://docs.github.com/en/graphql), and it allows users to see a list of Github issues and filter this list by issue State (Open/Close).

## Project Set-up
For security reasons and to avoid exposing sensitive data, the NEXT_PUBLIC_GITHUB_ACCESS_TOKEN is set in a .env.local file, so to run the project locally you have to:

1. Create your personal access [Github token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

2. Create the .env.local file in the root folder and set the values as follows:

```bash
NEXT_PUBLIC_GITHUB_ACCESS_TOKEN=<your_github_token>
```

## Steps to run Locally
1. Clone repo to local machine 
2. Run `npm install` to install dependencies
3. Create `.env.local` file on the root folder and add value for NEXT_PUBLIC_GITHUB_ACCESS_TOKEN
4. Run `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result


## To run Cypress tests
1. Run `npm run cypress:open`. It will launch the cypress app (check https://www.cypress.io/ for more details)
2. Select E2E testing
3. Start testing in Chrome
4. Select `applications.cy.ts` spec to open and run tests

## Tech stack

- NextJS: [Next.js](https://nextjs.org/)
- Apollo GraplQL: [GraphQL](https://www.apollographql.com/)
- JS Framework : [React](https://reactjs.org/)
- E2E Test: [Cypress](https://www.cypress.io/)
- Material UI icons: [Material UI](https://mui.com/material-ui/material-icons/)
- MomentJS: [MomentJS](https://momentjs.com/)
- Typescript: [Typescript](https://www.typescriptlang.org/)
- Styled Components: [StyledComponents](https://styled-components.com/)


### Improvements
- Change pagination strategy 
    - Use Router  
- Handle errors
- Improve UI 
- Improve flaky tests
