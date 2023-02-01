import styled from "styled-components";

export default function ErrorMessage({error} : any) {
    return (
        <ErrorStyle>
            <p>{error.toString()}</p>
        </ErrorStyle>
    )
};

const ErrorStyle = styled.tbody`
  display: flex;
  justify-content: center;
  margin: 20px;
`;