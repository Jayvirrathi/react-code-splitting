import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import { lazy, Suspense } from "react";

// import Chart from "./pages/Chart/Chart";
const Chart = lazy(() => import("./pages/Chart/Chart"));

export default function App () {
	return (
		<>
			<Header />
			<Router>
				<Route exact path="/dashboard" component={ Dashboard } />
				<Suspense fallback={ <p>Loading...</p> }>
					<Route exact path="/chart" component={ Chart } />
				</Suspense>
			</Router>
		</>
	);
}
