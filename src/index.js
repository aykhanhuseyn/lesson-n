import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Loader } from './components/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback={<Loader />}>
				<App />
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
);
