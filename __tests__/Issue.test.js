import {render, screen} from "@testing-library/react";
import {MockedProvider} from '@apollo/react-testing';
import moment from "moment";
import {Issue} from '../components/Issue';
import {fakeIssue} from '../lib/testUtils';

jest.mock('moment', () => {
    return () => jest.requireActual('moment')('2010-01-01T00:00:00.000Z');
});

describe('<Issue/>', () => {
    const issue = fakeIssue();
    const fromNow = moment(issue.createdAt).fromNow();

    it('Should render issue properties', () => {
        const {container, debug} = render(
            <MockedProvider>
                <Issue issue={issue}/>
            </MockedProvider>
        );

        const issueId= + issue.node.id;

        const issueStateIcon = screen.getByTestId('AdjustIcon');
        expect(issueStateIcon).toHaveStyle('color: green');

        const issueTitle = screen.getByTestId('issue-title-' + issueId);
        expect(issueTitle).toHaveTextContent('This is a Issue')

        const issueDescription = screen.getByTestId('issue-description-' + issueId);
        expect(issueDescription).toHaveTextContent(`#123 opened ${fromNow} by Jane Doe`)
    });

    it('Should render and match snapshot', () => {
        const {container, debug} = render(
            <MockedProvider>
                <Issue issue={issue}/>
            </MockedProvider>
        );

        expect(container).toMatchSnapshot();
    });
});