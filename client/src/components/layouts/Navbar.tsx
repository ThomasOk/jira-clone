import { FiPlus } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import logo from "../../assets/logo.svg";

const Navbar = () => {
	return (
		<aside className="bg-blue-950 w-48 min-h-screen p-4 flex flex-col">
			<div className="mb-8">
				<img src={logo} alt="logo" className="h-8 w-auto" />
			</div>
			<div className="py-2">
				<button className="text-slate-100 flex items-center space-x-4">
					<FiSearch size={24} />
					<span>Search issues</span>
				</button>
			</div>
			<div className="py-2">
				<button className=" text-slate-100 flex items-center space-x-4">
					<FiPlus size={24} />
					<span>Create issue</span>
				</button>
			</div>

			{/* <nav>
				<ul>
					<li className="">
						<FiPlus className="text-slate-100" />
					</li>
				</ul>
			</nav> */}
		</aside>
	);
};
export default Navbar;
