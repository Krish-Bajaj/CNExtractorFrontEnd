import './Navbar.css'

const Navbar = () => {
	return (
		<div className="wrapper">
			<nav className="nav-container flex-alignment">
				<p className="logo">
					CN Extractor
				</p>
				<ul className="nav-list">
					<li>
						<p>Login</p>
					</li>
                    <li>
						<p>Sign up</p>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Navbar
