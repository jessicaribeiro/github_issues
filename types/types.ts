import {StatusEnum} from "@/enums/enums";
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
    state: String;
    number: String;
    createdAt: String;
    author: any;
};

export type IssueType = {
    node: NodeType;
};

export type FilterOptionsType = {
    label: string;
    value: FilterStatus;
};

export type FilterStatus = StatusEnum.Open | StatusEnum.Closed;

type FetchMoreType = {
    offset: number;
    limit: number;
};
