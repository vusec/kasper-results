import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Restarts from './Restarts';

const defaultTheme = createTheme();

const App = ({ title }) =>
	<ThemeProvider theme={defaultTheme}>
		<Router>
			<Switch>
				<Route path="/">
					<Restarts/>
				</Route>
			</Switch>
		</Router>
	</ThemeProvider>;

export default App;
