import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages';
import GlobalStyle from './../style/Global';
export default function PagesRouter(): JSX.Element {
	return (
		
		<BrowserRouter>
			<GlobalStyle />
			
			<Routes>
				
				<Route
					path='/'
					element={<Home />}
				/>
			</Routes>
		</BrowserRouter>

	);
}