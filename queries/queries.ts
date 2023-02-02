import {gql} from "@apollo/client";

export const ALL_ISSUES_QUERY = gql`
    query ALL_ISSUES_QUERY($repositoryOwner: String!, $repositoryName: String!, $cursor: String, $issueState: [IssueState!]) {
        repository(owner: $repositoryOwner, name: $repositoryName) {
            issues(
                first: 5
                after: $cursor
                filterBy: { states: $issueState }
                orderBy: {direction: DESC, field: CREATED_AT}
            ){
                edges {
                    cursor
                    node {
                        id
                        title
                        url
                        state
                        number
                        createdAt
                        author {
                            login
                        }
                    }
                }
                totalCount
                pageInfo {
                    endCursor
                    hasNextPage
                }
            }
        }
    }
`;