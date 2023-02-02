import Issues from "@/components/Issues";
import styled from "styled-components";
import GitHubIcon from '@mui/icons-material/GitHub';
import {Filter} from "@/components/Filter";
import {useEffect, useState} from "react";
import {FilterState, QueryResultType} from "@/types/types";
import {useLazyQuery} from "@apollo/client";
import {ALL_ISSUES_QUERY} from "@/queries/queries";
import {StateEnum} from "@/enums/enums";
import ErrorMessage from "@/components/ErrorMessage";
import {CircularProgress} from "@mui/material";
import LoadMore from "@/components/LoadMore";

// @ts-ignore
const updateQuery = (previousResult: QueryResultType, {fetchMoreResult}) => {
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

export default function IssuesPage() {
    const [filteredState, setFilteredState] = useState<FilterState>(undefined);

    const [getAllIssues, {data, error, loading, fetchMore}] = useLazyQuery(
        ALL_ISSUES_QUERY
    );

    useEffect(() => {
        getAllIssues({
            variables: {
                repositoryOwner: "reactjs",
                repositoryName: "reactjs.org",
                issueState: filteredState,
            }
        });
    }, [filteredState]);

    const allStatusOptions = Object.values(StateEnum).map(state => {
        return {
            label: state.toLowerCase(),
            value: state
        }
    });

    if (error) {
        return <ErrorMessage error={error}/>;
    }

    return (
        <PageStyle>
            <PageHeaderStyle>
                <GitHubIcon/>
                <span style={{fontWeight: 'bold'}}>Issues from
                    <span style={{color: 'var(--blue)'}}> react / react.org </span>
                </span>
            </PageHeaderStyle>

            <Filter
                label="Status"
                filterValue={filteredState}
                handleOnChange={setFilteredState}
                options={allStatusOptions}
                clearFilter={() => setFilteredState(undefined)}
            />

            {loading && (<CircularProgress style={{alignSelf: 'center'}}/>)}

            {data && (
                <>
                    <Issues
                        issues={data.repository.issues?.edges}
                        filteredState={filteredState}
                        totalCount={data.repository.issues?.totalCount || 0}
                    />

                    <LoadMore
                        loading={loading}
                        fetchMore={fetchMore}
                        updateQuery={updateQuery}
                        data={data.repository.issues}
                    />
                </>
            )}
        </PageStyle>
    );
}

const PageStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 30px;
`;

const PageHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 5px;
`;
