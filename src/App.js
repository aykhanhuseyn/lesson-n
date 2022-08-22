import { useState, lazy, Suspense, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Protected } from './Protected';
import { Navbar } from './components/Navbar';
import { User } from './components/User';
import { Loader } from './components/Loader';
import './App.css';

// const User = lazy(() => import('./components/User'));
const Profile = lazy(() =>
	/* webpackChunkName: Profile */
	import('./components/Profile')
);
const Contact = lazy(() => import('./components/Contact'));

// navigate('/', { replace: true })
// history.push('/')
// history.replace('/')

function App() {
	const [user, setUser] = useState(false);

	return (
		<div className='App'>
			<div
				style={{
					backgroundColor: user ? 'blue' : 'red',
				}}
				onClick={() => {
					setUser(Math.random() * 100 > 50);
				}}
			>
				check user
			</div>

			<h1>user is {!user && 'not'} logged in</h1>

			<Navbar />

			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<div>THIS IS HOME</div>} />
					<Route path='user' element={<User />}>
						<Route
							path='profile'
							element={
								<Protected user={user}>
									<Profile />
								</Protected>
							}
						/>
						<Route
							path='contact'
							element={
								<Protected user={user}>
									<Contact />
								</Protected>
							}
						/>
					</Route>
					<Route
						path='about'
						element={
							<Protected user={user}>
								<div>about</div>
							</Protected>
						}
					/>
					<Route path='404' element={<h2>not found</h2>} />
					<Route path='401' element={<h2>unauthorized</h2>} />
					<Route path='*' element={<Navigate to='/404' />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
