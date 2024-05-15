import Link from "next/link";
import "./css/navbar.css";
import Icons from "./icons";

const Navbar = () => {
	return (
		<nav className="component-navbar">
			<div
				className="hamburger-menu"
				tabIndex={0}
			/>

			<label className="icon">
				<Icons.quickPlant width="8em" height="3em" color="white" />
			</label>
			
			<ul>
				<li>
					<Link href="/me/dashboard">Home</Link>
				</li>
				<li>
					<Link href="/home">About</Link>
				</li>
				<li>
					<Link href="/me/profile">Profile</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
