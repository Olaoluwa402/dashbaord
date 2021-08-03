import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import AboutScreen from "./screens/AboutScreen/AboutScreen";
import GoalScreen from "./screens/GoalScreen/GoalScreen";
import NavSideMain from "./screens/NavSideMain";
import "./App.css";

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route
					path={"/"}
					render={({ match: { path } }) => (
						<NavSideMain>
							<Switch>
								<Route
									exact
									path={"/"}
									component={HomeScreen}
								/>
								<Route
									path={"/about"}
									component={AboutScreen}
								/>
								<Route
									path={"/get_goals"}
									component={GoalScreen}
								/>
							</Switch>
						</NavSideMain>
					)}
				/>
			</Switch>
		</React.Fragment>
	);
}

export default App;
