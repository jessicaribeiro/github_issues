export const fakeIssue = () => ({
    // __typename: 'node',
    node: {
        id: '123',
        title: 'This is a Issue',
        url: 'https://github.com',
        state: 'OPEN',
        number: '123',
        createdAt: '2010-10-10T10:10:10Z',
        author: {
            login: 'Jane Doe',
        },
    }
});

export const fakeIssue2 = () => ({
    // __typename: 'node',
    node: {
        id: '321',
        title: 'This is a Issue 2',
        url: 'https://github.com',
        state: 'OPEM',
        number: '321',
        createdAt: '2010-10-10T10:10:10Z',
        author: {
            login: 'John Doe',
        },
    }
});

export const fakeOptionOpen = () => ({
    label: 'Open',
    value: 'OPEN',
});

export const fakeOptionClosed = () => ({
    label: 'Closed',
    value: 'CLOSED',
});

export const fakeFilterState = () => ({
    label: "Status",
    filterValue: "open",
    handleOnChange: () => {},
    options: [fakeOptionOpen(), fakeOptionClosed()],
    clearFilter: () => {},
});

export const fakeRepository = () => ({
    issues: {
        edges: [fakeIssue(), fakeIssue2()]
    },
    totalCount: 2,
    pageInfo: {
        endCursor: '321',
        hasNextPage: true,
    }
});

export const fakeLoadMore = () => ({
    data: fakeRepository(),
    loading: false,
    fetchMore: () => {},
    updateQuery: () => {}
});
