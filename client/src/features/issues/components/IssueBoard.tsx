import { ISSUE_STATUS_ORDER } from "../constants/issueStatuses";
//import IssueStatusColumn from "./IssueStatusColumn";
import IssueList from "./IssueList";
import { mockIssues } from "../mock/mockIssues";

const IssueBoard = () => {
	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-6">Project Issues Board</h1>
			<div className="flex space-x-4 overflow-x-auto">
				{ISSUE_STATUS_ORDER.map((status) => (
					<div key={status} className="flex-none w-64">
						<IssueList issues={mockIssues} status={status} />
					</div>
				))}
			</div>
		</div>
	);
};
export default IssueBoard;
