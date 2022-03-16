import { Route, Routes } from "react-router-dom";
import { GoogleSearch } from "../components/GoogleSearch";
import { GoogleSearchList } from "../components/GoogleSearchList";

export const RoutesSection = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<GoogleSearch />} />
				<Route path="search" element={<GoogleSearchList />} />
			</Routes>
		</>
	);
};
