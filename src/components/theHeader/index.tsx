import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Pfp from "../pfp";

export const MenuLinks = ({
														setMenu,
													}: {
	setMenu: (state: boolean) => void;
}) => (
	<>
		<ul>
			<li>
				<Link to="/" onClick={() => setMenu(false)}>
					Home
				</Link>
			</li>
			<li>
				<Link to="/about" onClick={() => setMenu(false)}>
					About
				</Link>
			</li>
		</ul>
	</>
);

export const Component = ({
														setMenu,
													}: {
	setMenu: (state: boolean) => void;
}) => {
	const [scrolled, setScrolled] = useState(false);


	window.onscroll = () => {
		if (window.pageYOffset > 10) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};
	return (
		<header className={scrolled ? "scrolled" : ""}>
			<div className="header-wrapper">
				<nav>
					<div className="mobile-spacer"></div>
					<Link className="logo" to="/">
						<Pfp
							size={64}
						/>
						<span className="ml-4">Dråfølin</span>
					</Link>

					<MenuLinks setMenu={setMenu}/>

					<button
						onClick={() => setMenu(true)}
						aria-label="Menu"
						className="hamburger"
					>
						<svg
							version="1.1"
							width="30"
							height="18"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line x1={5} y1={1} x2={25} y2={1} strokeWidth={2}/>
							<line x1={5} y1={9} x2={25} y2={9} strokeWidth={2}/>
							<line x1={5} y1={17} x2={25} y2={17} strokeWidth={2}/>
						</svg>
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Component;
