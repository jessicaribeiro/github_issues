import React from 'react';
import { Dropdown } from "./Dropdown";
import styled from "styled-components";
// import { FilterType } from '../types/types';

// type FilterProps = {
//     label: string;
//     filterValue: string | undefined;
//     handleOnChange: (value: string) => void;
//     options: FilterType[];
//     clearFilter: () => void;
//     id: string;
// }

export function Filter({ label, filterValue, handleOnChange, options }) {
    const value = filterValue === undefined ? "default" : filterValue;

    return (
        <FilterStyle data-testid={`filter-by-status`}>
            <FilterTextStyle>Status:</FilterTextStyle>
            <Dropdown
                label={label}
                options={options}
                value={value}
                handleOnChange={handleOnChange}
            />
        </FilterStyle>
    )
}

const FilterStyle = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

const FilterTextStyle = styled.span`
  color: var(--darkBlue);
  font-weight: bold;
`;
