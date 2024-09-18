import { Issue } from "../types/issue.types";

type IssueItemProps = {
	issue: Issue;
};

const IssueItem = ({ issue }: IssueItemProps) => {
	return <div>{issue.title}</div>;
};
export default IssueItem;
