import { Navigate } from 'react-router-dom';

export function Protected({ user, children }) {
	if (!user) return <Navigate to='/401' />;
	return children;
}
