import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/dist/client/link';
import Head from 'next/head';
// import ErrorMessage from './ErrorMessage';
import { perPage } from '../config';
import styled from "styled-components";

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    _repository {
      _issues {
        totalCount
      }
    }
  }
`;

export default function Pagination({ page }) {
    const { data, error, loading } = useQuery(PAGINATION_QUERY);

    if (loading) return <p>Loading...</p>;
    // if (error) return <ErrorMessage error={error} />;

    console.log('DATAAAA', data);

    const { count } = data._repository;
    const pageCount = Math.ceil(count / perPage);

    return (
        <PaginationStyles>
            <Head>
                <title>
                    Decathlon - Page {page} of {pageCount}
                </title>
            </Head>

            <Link href={`/products/${page - 1}`}>
                <a aria-disabled={page <= 1}>Prev</a>
            </Link>

            <p>
                Page {page} of {pageCount}
            </p>
            <p>{count} Items total</p>

            <Link href={`/products/${page + 1}`}>
                <a aria-disabled={page >= pageCount}>Next</a>
            </Link>
        </PaginationStyles>
    );
}

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid var(--lightGrey);
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightGrey);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }
`;
