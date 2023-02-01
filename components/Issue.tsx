import styled from "styled-components";
import AdjustIcon from '@mui/icons-material/Adjust';
import moment from "moment";

export default function Issue({issue}) {

    const {state, title, number, createdAt, author} = issue.node;

    const stateOpen = state === "OPEN";

    const fromNow = moment(createdAt).fromNow();


    return (
        <IssueRowStyle>
            <IssueCellStyle>
                <AdjustIcon style={{ color: (stateOpen ? 'green' : 'red'), padding: '8px 0 0 16px'}}/>
                <IssueTextStyle>
                    <IssueTitleStyle>{title}</IssueTitleStyle>
                    <IssueDescriptionStyle>#{number} opened {fromNow} by {author.login}</IssueDescriptionStyle>
                </IssueTextStyle>
            </IssueCellStyle>
        </IssueRowStyle>
    )
}

const IssueRowStyle = styled.tr`
  border: 1px solid var(--grey);

  &:hover {
    background: var(--lightGrey);
  }
`;

const IssueCellStyle = styled.td`
  display: flex;
  height: 60px;
`;

const IssueTextStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 8px;
`;

const IssueTitleStyle = styled.span`
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--darkGrey);
  line-height: 21px;
  font-weight: bold;
`;

const IssueDescriptionStyle = styled.span`
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  line-height: 21px;
`;