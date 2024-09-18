import Navbar from "../components/layouts/Navbar";
import IssueBoard from "../features/issues/components/IssueBoard";

function App() {
	return (
		<div className="flex h-screen">
			<Navbar></Navbar>
			<main>
				<h1 className="text-3xl font-bold underline">Hello worlddddd!</h1>
				<IssueBoard />
			</main>
		</div>
	);
}

export default App;
