import React from 'react';
import styled from "styled-components";
import {FilterOptionsType, FilterStatus} from "@/types/types";

type DropdownProps = {
    label: string;
    options: FilterOptionsType[];
    value: string;
    handleOnChange: (value: FilterStatus) => void;
}

export function Dropdown({label, options, value, handleOnChange}: DropdownProps) {
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('event.target.value', event.target.value)
        handleOnChange(event.target.value as FilterStatus);
    }

    return (
        <DropdownStyle>
            <SelectStyle value={value} onChange={onChange}>
                <option value="default" disabled>{label}</option>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </SelectStyle>
        </DropdownStyle>
    )
}

const DropdownStyle = styled.div`
  display: flex;
`;

const SelectStyle = styled.select`
  width: 80px;
  height: 30px;
  border: 1px solid var(--darkBlue);
  outline: none;
  border-radius: 10px;
  background-color: white;
  padding-left: 10px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;
