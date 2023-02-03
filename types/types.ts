import {Key} from "react";
import {StateEnum} from "@/enums/enums";

export type QueryResultType = {
    repository: RepositoryType
};

export type RepositoryType = {
    issues: {
        edges: NodeType[]
    };
    totalCount: number;
    pageInfo: {
        endCursor: string,
        hasNextPage: boolean,
    }
};

export type NodeType = {
    id: Key;
    title: string;
    url: string;
    state: StateEnum;
    number: string;
    createdAt: string;
    author: any;
};

export type IssueType = {
    node: NodeType;
};

export type FilterOptionsType = {
    label: string;
    value: FilterState;
};

export type FilterState = StateEnum.Open | StateEnum.Closed | undefined;
