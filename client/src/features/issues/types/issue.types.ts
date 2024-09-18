import { IssueStatus } from "../constants/issueStatuses";

export type IssuePriority = "low" | "medium" | "high";

export type Issue = {
	id: string;
	title: string;
	description: string;
	status: IssueStatus;
	assignee?: string;
	creator: string;
	createdAt: Date;
	updatedAt: Date;
	priority: IssuePriority;
};

export type IssueFilter = {
	status?: IssueStatus;
	priority?: IssuePriority;
	assignee?: string;
};
