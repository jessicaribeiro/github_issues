import React from 'react';
import styled from "styled-components";
// import { FilterType } from "../types/types";

// type DropdownProps = {
//     label: string;
//     options: FilterType[];
//     value: string;
//     handleOnChange: (value: string) => void;
//     clearFilter: () => void;
// }

export function Dropdown({label, options, value, handleOnChange}) {
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleOnChange(event.target.value);
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


