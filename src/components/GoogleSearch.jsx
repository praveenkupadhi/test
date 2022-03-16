import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { searchDataAdd } from "../redux/actions";

export const GoogleSearch = () => {
	const data = useSelector((store) => store.data);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (data !== "") {
			renderNextPage();
		}
	}, [data]);

	const handleClick = (e) => {
		if (e.keyCode === 13) {
			dispatch(searchDataAdd(e.target.value));
		}
	};

	const renderNextPage = () => {
		navigate(`/search?q=${data}`);
		// console.log(data);
	};

	return (
		<>
			<img
				src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
				alt="image"
			/>
			<br />
			<input
				type="text"
				placeholder="Search google"
				className="search-box"
				onKeyUp={handleClick}
			/>
		</>
	);
};
