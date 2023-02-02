import React from 'react';
import styled from "styled-components";
import {FilterOptionsType, FilterState} from "@/types/types";

type DropdownProps = {
    label: string;
    options: FilterOptionsType[];
    value: string;
    handleOnChange: (value: FilterState) => void;
    clearFilter: () => void;
}

export function Dropdown({label, options, value, handleOnChange, clearFilter}: DropdownProps) {
    function onChange(event: React.ChangeEvent<HTMLSelectElement>) {
        handleOnChange(event.target.value as FilterState);
    }

    function capitalize(value: String): String {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    return (
        <DropdownStyle>
            <SelectStyle value={value} onChange={onChange}>
                <option value="default" disabled>{label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{capitalize(option.label)}</option>
                ))}
            </SelectStyle>
            <ButtonStyle onClick={clearFilter}>x</ButtonStyle>
        </DropdownStyle>
    )
}

const DropdownStyle = styled.div`
  display: flex;
`;

const SelectStyle = styled.select`
  width: 80px;
  height: 30px;
  border: none;
  border-bottom: 1px solid var(--blue);
  outline: none;
  background-color: white;
  padding-left: 8px;
  font-size: 14px;
  font-weight: bold;
  color: var(--darkBlue);

  &:hover {
    cursor: pointer;
    background-color: var(--lightGrey);
  }
`;

const ButtonStyle = styled.button`
  border: none;
  border-bottom: 1px solid var(--blue);
  background-color: transparent;
  padding-left: 10px;
  padding-right: 10px;
  color: var(--darkBlue);
  
  &:hover {
    cursor: pointer;
    background-color: var(--lightGrey);
  }
`;
