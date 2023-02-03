import {render, screen} from "@testing-library/react";
import {MockedProvider} from "@apollo/react-testing";
import Issues from "../components/Issues";
import {fakeIssue, fakeIssue2} from "../lib/testUtils";
import {StateEnum} from "../enums/enums";

describe('<Issues/>', () => {
    const issues = [fakeIssue(), fakeIssue2()];
    const filteredState = StateEnum.Open;
    const totalCount = issues.length;

    it('Should render Issues page', () => {
        const {container, debug} = render(
            <MockedProvider>
                <Issues issues={issues} filteredState={filteredState} totalCount={totalCount}/>
            </MockedProvider>
        );

        expect(screen.getByTestId('total-issues')).toHaveTextContent('Total open issues: ' + issues.length);

        const issueTitle1 = screen.getByTestId('issue-title-' + issues[0].node.id);
        expect(issueTitle1).toHaveTextContent(issues[0].node.title);

        const issueTitle2 = screen.getByTestId('issue-title-' + issues[1].node.id);
        expect(issueTitle2).toHaveTextContent(issues[1].node.title);
    });

    it('Should render and match snapshot', () => {
        const {container, debug} = render(
            <MockedProvider>
                <Issues issues={issues} filteredState={filteredState} totalCount={totalCount}/>
            </MockedProvider>
        );

        expect(container).toMatchSnapshot();
    });
});
