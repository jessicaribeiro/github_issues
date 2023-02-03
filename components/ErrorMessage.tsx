import styled from "styled-components";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function ErrorMessage({error}: any) {
    return (
        <div>
            <ErrorStyle>
                <ErrorOutlineIcon style={{color: 'red'}}/>
                <p>{error?.toString()}</p>
            </ErrorStyle>
            <ButtonStyle onClick={() => window.location.reload()}>Try again</ButtonStyle>
        </div>
    )
};

const ErrorStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px;
  font-weight: bold;
`;

const ButtonStyle = styled.button`
  position: absolute;
  left: 50%;
  color: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--blue);
  background-color: var(--blue);
  transition: .3s;
  font-weight: bold;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: white;
    color: var(--blue);
    cursor: pointer;
  }
`;