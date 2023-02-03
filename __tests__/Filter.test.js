import {render, screen} from "@testing-library/react";
import {MockedProvider} from "@apollo/react-testing";
import Filter from "../components/Filter";
import {fakeFilterState, fakeIssue} from "../lib/testUtils";

describe('<Filter/>', () => {
    const filter = fakeFilterState();
    const {label, filterValue, handleOnChange, options, clearFilter} = filter;

    it('Should render dropdown filter options', () => {
        const {container, debug} = render(
            <MockedProvider>
                <Filter label={label} filterValue={filterValue} handleOnChange={handleOnChange} options={options}
                        clearFilter={clearFilter}/>
            </MockedProvider>
        );

        const selectFilter = screen.getByRole('combobox');
        expect(selectFilter).toHaveValue('OPEN');
    });

    it('Should render and match snapshot', () => {
        const {container, debug} = render(
            <MockedProvider>
                <Filter label={label} filterValue={filterValue} handleOnChange={handleOnChange} options={options}
                        clearFilter={clearFilter}/>
            </MockedProvider>
        );

        expect(container).toMatchSnapshot();
    });
});

// {label, filterValue, handleOnChange, options, clearFilter}