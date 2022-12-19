import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
	const [menu, setMenu] = useState(false);
	return (
		<>
			<header>
				<nav>
					<Link to="/">
						<img
							src="/assets/dindin-lightweight.png"
							alt="Image of my sona, eyesopener."
						/>
						<span className="ml-4">dindin|nibnib</span>
					</Link>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/projects">Projects</Link>
						</li>
						<li>
							<Link to="/cv">Resume</Link>
						</li>
					</ul>

					<button
						onClick={() => setMenu(!menu)}
						aria-label="Menu"
						className="hamburger"
					>
						<span />
						<span />
						<span />
					</button>

					<div className={`wrapMenu ${menu ? "active" : ""}`}>
						<ul>
							<li>
								<Link to="/">
									<strong >Home</strong>
								</Link>
							</li>
							<li>
								<Link to="/projects">
									<strong >Projects</strong>
								</Link>
							</li>
							<li>
								<Link to="/cv">
									<strong >Resume</strong>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</header>

			<main>
				<div>
					<Outlet />
				</div>
			</main>

			<footer>
				<span>Find me here:</span>
				<nav>
					<ul>
						<li>
							<a href="https://github.com/dindin-nibnib">
								<img
									width="70"
									src="/assets/icons/github-icon.png"

									alt="My github page"
								/>
							</a>
						</li>
						<li >
							<a href="https://twitter.com/dindin_nibnib">
								<img
									width="70"
									src="/assets/icons/twitter-icon.png"
									alt="My twitter page"
								/>
							</a>
						</li>
						<li >
							<a href="https://t.me/dindin_nibnib">
								<img
									width="70"
									src="/assets/icons/telegram-icon.png"
									alt="My telegram account"
								/>
							</a>
						</li>
						<li >
							<a href="https://discordapp.com/users/373515998000840714">
								<img
									width="70"
									src="/assets/icons/discord-icon.png"
									alt="My discord profile"
								/>
							</a>
						</li>
						<li >
							<a href="mailto:mail@dindin.ch">
								<img
									width="70"
									src="/assets/icons/mail-icon.png"
									alt="Email me!"
								/>
							</a>
						</li>
						<li >
							<a rel="me" href="https://derg.social/@dindin">
								<img
									src="/assets/icons/mastodon-icon.svg"
									alt="My mastodon account"
								/>
							</a>
						</li>
					</ul>
				</nav>
				<span>
					This site is a work in progress! Some pages might not be existing for
					now...
				</span>
				<br />
				<hr />
				<span >
					<Link to="mailto:mail@dindin.ch">
						&copy;2021-2022 - dindin|nibnib
					</Link>
				</span>
			</footer>
		</>
	);
};

export default Root;