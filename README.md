# Homelike

The project goal is to implement a small client application using Nextjs
and GitHub GraphQL API. 

The data is obtained from [Github React](https://github.com/reactjs/reactjs.org/issues) using the [Github GraphQL API](https://docs.github.com/en/graphql), and it allows users to see a list of Github issues and filter this list by State (Open/Closed).

Used [GraphQL API Explored](https://docs.github.com/en/graphql/overview/explorer) to see Schema and run Queries.

<img width="1248" alt="Screenshot 2023-02-03 at 12 31 57" src="https://user-images.githubusercontent.com/6878126/216604678-07db3295-997d-4d85-9979-6e119b436e62.png">


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


## To run Jest tests
1. Run `npm run test`

## Tech stack

- [Next.js](https://nextjs.org/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [React](https://reactjs.org/)
- [Material UI icons](https://mui.com/material-ui/material-icons/)
- [MomentJS](https://momentjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Improvements
- Change pagination strategy 
    - Use Router  
- Handle errors
- Improve UI 
- Improve flaky tests
- Store in cache
- Add Cypress E2E tests
