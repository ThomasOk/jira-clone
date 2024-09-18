export const ISSUE_STATUSES = {
	BACKLOG: "Backlog",
	TODO: "À faire",
	IN_PROGRESS: "En cours",
	REVIEW: "En revue",
	DONE: "Terminé",
	CANCELLED: "Annulé",
} as const;

export type IssueStatus = (typeof ISSUE_STATUSES)[keyof typeof ISSUE_STATUSES];

export const ISSUE_STATUS_ORDER: IssueStatus[] = [
	ISSUE_STATUSES.BACKLOG,
	ISSUE_STATUSES.TODO,
	ISSUE_STATUSES.IN_PROGRESS,
	ISSUE_STATUSES.REVIEW,
	ISSUE_STATUSES.DONE,
	ISSUE_STATUSES.CANCELLED,
];
