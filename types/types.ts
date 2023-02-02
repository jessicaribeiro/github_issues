import {StateEnum} from "@/enums/enums";
import {Key} from "react";

export type QueryResultType = {
    repository: RepositoryType
}

export type RepositoryType = {
    issues: {
        edges: NodeType[]
    };
    totalCount: Number;
    pageInfo: {
        endCursor: String,
        hasNextPage: boolean,
    }
};

export type NodeType = {
    id: Key;
    title: String;
    url: String;
    state: StateEnum;
    number: String;
    createdAt: String;
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
