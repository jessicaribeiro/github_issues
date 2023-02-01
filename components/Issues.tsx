import {gql, useQuery} from "@apollo/client";
import styled from "styled-components"
import Issue from "@/components/Issue";
import LoadMore from "@/components/LoadMore";
import {Filter} from "./Filter";
import {useState} from "react";
import ErrorMessage from "@/components/ErrorMessage";
import {CircularProgress} from "@mui/material";

export const ALL_ISSUES_QUERY = gql`
    query ALL_ISSUES_QUERY($repositoryOwner: String!, $repositoryName: String!, $cursor: String, $issueState: IssueState!) {
        repository(owner: $repositoryOwner, name: $repositoryName) {
            issues(
                first: 5
                after: $cursor
                filterBy: { states: [$issueState] }
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

const updateQuery = (previousResult, {fetchMoreResult}) => {
    if (!fetchMoreResult) {
        return previousResult;
    }

    return {
        ...previousResult,
        repository: {
            ...previousResult.repository,
            issues: {
                ...previousResult.repository.issues,
                ...fetchMoreResult.repository.issues,
                edges: [
                    ...previousResult.repository.issues.edges,
                    ...fetchMoreResult.repository.issues.edges,
                ],
            },
        }
    };
};

// TODO add type Issue
export default function Issues({status}) {

    const {data, error, loading, fetchMore} = useQuery(ALL_ISSUES_QUERY, {
        variables: {
            repositoryOwner: "reactjs",
            repositoryName: "reactjs.org",
            issueState: status
        }
    });

    if (error) {
        return <ErrorMessage error={error}/>;
    }

    // TODO spinner
    if (loading) {
        return <CircularProgress style={{alignSelf: 'center'}}/>;
    }

    const {issues} = data.repository;

    // TODO if there is no data
    return (
        <>
            <IssuesTableStyle>
                {/*TODO header*/}
                <IssuesTableBodyStyle>
                    {issues.edges.map((issue) => (
                        <Issue key={issue.node.id} issue={issue}/>
                    ))}
                </IssuesTableBodyStyle>
            </IssuesTableStyle>

            <LoadMore
                loading={loading}
                fetchMore={fetchMore}
                updateQuery={updateQuery}
                data={issues}
            />
        </>
    )
}

const IssuesTableStyle = styled.table`
  position: relative;
  width: 96vw;
  margin-bottom: 40px;
  border-spacing: 0;
  border-collapse: collapse;
`;

const IssuesTableBodyStyle = styled.tbody`
  padding: 0 1px;
`;

