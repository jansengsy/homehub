
import { Outlet, Link } from "react-router-dom";

export default function Root() {
	return (
		<>
			<div id="sidebar">
				<nav>
					<ul>
						<li>
							<Link to={`/`}>HomeHub</Link>
						</li>
						<li>
							<Link to={`/bills`}>Bills</Link>
						</li>
						<li>
							<Link to={`/menu`}>Menu</Link>
						</li>
						<li>
							<Link to={`/shoppinglist`}>Shopping List</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail">
				<Outlet /> {/* Similar to slots in vue but in the context of route elements */}
			</div>
		</>
	);
}