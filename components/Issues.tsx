import styled from "styled-components"
import {Issue} from "./Issue";

import {
    FilterState,
    IssueType,
} from "@/types/types";

type IssuesProps = {
    issues: IssueType[];
    filteredState: FilterState;
    totalCount: number;
}

export default function Issues({issues, filteredState, totalCount}: IssuesProps) {
    return (
        <>
            <IssuesTableStyle>
                <IssuesTableHeaderStyle>
                    <tr>
                        <td data-testid='total-issues'>Total {filteredState?.toLowerCase()} issues: {totalCount}</td>
                    </tr>
                </IssuesTableHeaderStyle>

                {issues && (
                    <IssuesTableBodyStyle>
                        {issues?.map((issue: IssueType) => (
                            <Issue key={issue.node.id} issue={issue}/>
                        ))}
                    </IssuesTableBodyStyle>
                )}
            </IssuesTableStyle>
        </>
    )
}

const IssuesTableStyle = styled.table`
  position: relative;
  width: 95vw;
  margin-bottom: 40px;
  border-collapse: collapse;
`;

const IssuesTableBodyStyle = styled.tbody`
  padding: 0 1px;
`;

const IssuesTableHeaderStyle = styled.thead`
  display: flex;
  height: 20px;
  background-color: var(--lightGrey);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid var(--grey);
  padding: 10px 45px;
  font-size: 14px;
  font-weight: bold;
`;
