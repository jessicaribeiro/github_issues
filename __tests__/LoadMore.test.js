import {render} from "@testing-library/react";
import {MockedProvider} from "@apollo/react-testing";
import LoadMore from "../components/LoadMore";
import {fakeLoadMore} from "../lib/testUtils";

describe('<LoadMore/>', () => {
    const loadMore = fakeLoadMore();
    const {data, loading, fetchMore, updateQuery} = loadMore;

    it('Should render load more button', () => {
        const {container, debug} = render(
            <MockedProvider>
                <LoadMore data={data} loading={loading} fetchMore={fetchMore} updateQuery={updateQuery}/>
            </MockedProvider>
        );

        expect(container).toHaveTextContent('Load more');
    });

    it('Should render and match snapshot', () => {
        const {container, debug} = render(
            <MockedProvider>
                <LoadMore data={data} loading={loading} fetchMore={fetchMore} updateQuery={updateQuery}/>
            </MockedProvider>
        );

        expect(container).toMatchSnapshot();
    });

});
