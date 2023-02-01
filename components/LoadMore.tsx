import {useCallback, useState} from "react";
import styled from "styled-components";

export default function LoadMore({data, fetchMore, loading, updateQuery}) {
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const getNextPage = useCallback(async () => {
        if (isLoadingMore) return;

        setIsLoadingMore(true);

        await fetchMore({
            variables: {
                cursor: data?.pageInfo?.endCursor,
            },
            updateQuery,
        });

        setIsLoadingMore(false);

    }, [data, fetchMore, isLoadingMore, updateQuery]);

    const hasNextPage = data?.pageInfo?.hasNextPage;

    if (!hasNextPage) {
        return null;
    }

    return (
        <div>
            <Button
                disabled={isLoadingMore}
                onClick={getNextPage}
            >
                Load more
            </Button>
        </div>
    );
};

const Button = styled.button`
  width: 200px;
  color: #fff;
  display: block;
  text-align: center;
  margin: 20px auto;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--blue);
  background-color: var(--blue);
  transition: .3s;
  font-weight: bold;

  &:hover {
    background: white;
    color: var(--blue);
    cursor: pointer;
  }
`;




