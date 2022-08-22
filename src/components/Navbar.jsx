import { Link } from 'react-router-dom';
import { routes } from '../constants/routes';

export const Navbar = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				gap: '20px',
				fontSize: '20px',
				marginBlockEnd: '20px',
				margin: '0 auto',
			}}
		>
			{routes.map((r) => (
				<Link key={r.key} to={r.url}>
					{r.name}
				</Link>
			))}
		</div>
	);
};
