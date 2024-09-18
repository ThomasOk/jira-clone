import IssueItem from "./IssueItem";
import { IssueStatus } from "../constants/issueStatuses";
import { Issue } from "../types/issue.types";

type IssueListProps = {
	issues: Issue[];
	status: IssueStatus;
};

const IssueList: React.FC<IssueListProps> = ({ issues, status }) => {
	const filteredIssues = issues.filter((issue) => issue.status === status);

	return (
		<div className="bg-white p-4 rounded-lg shadow">
			<h2 className="text-xl font-bold mb-4">{status}</h2>
			{filteredIssues.length > 0 ? (
				<ul>
					{filteredIssues.map((issue) => (
						<li key={issue.id} className="mb-2">
							<IssueItem issue={issue} />
						</li>
					))}
				</ul>
			) : (
				<p className="text-gray-500">Aucune issue pour ce statut</p>
			)}
		</div>
	);
};
export default IssueList;
