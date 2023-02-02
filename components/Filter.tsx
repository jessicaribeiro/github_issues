import React from 'react';
import {Dropdown} from "./Dropdown";
import styled from "styled-components";
import {FilterOptionsType, FilterState} from "@/types/types";

type FilterProps = {
    label: string;
    filterValue: string | undefined;
    handleOnChange: (value: FilterState) => void;
    options: FilterOptionsType[];
    clearFilter: () => void;
}

export function Filter({label, filterValue, handleOnChange, options, clearFilter}: FilterProps) {
    const value = filterValue === undefined ? "default" : filterValue;

    return (
        <FilterStyle data-testid={`filter-by-status`}>
            <Dropdown
                label={label}
                options={options}
                value={value}
                handleOnChange={handleOnChange}
                clearFilter={clearFilter}
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
