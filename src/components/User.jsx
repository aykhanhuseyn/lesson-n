import { Outlet } from 'react-router-dom';

export function User() {
	return (
		<div>
			<h1>user</h1>
			<Outlet />
			<p>user end</p>
		</div>
	);
}
