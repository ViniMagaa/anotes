import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

import "./ButtonToggleMode.css";
import { useState } from "react";
import { useEffect } from "react";

function ButtonToggleMode() {
	localStorage.setItem("mode", localStorage.getItem("mode") || "light");
	const [mode, setMode] = useState(localStorage.getItem("mode"));

	function darkMode() {
		localStorage.setItem("mode", "dark");
		setMode("dark");
		document.documentElement.style.cssText(
			`--bg-color #222;
			--bg-color: #222; 
			--header-color: #444; 
			--span-color: var(--light-blue); 
			--text-color: var(--light-gray); 
			--light-yellow: #AB7D38; 
			--medium-yellow: #5E451F;
			--light-blue: #383A7E;
			--medium-blue: #272959;
			--light-pink: #C84771;
			--medium-pink: #62374E;
			--light-green: #519872;
			--medium-green: #3B5249;
			--light-gray: #eee;
			--dark-gray: #444;
			--border: 3px solid var(--light-gray);
			--box-shadow: 3px 3px 0 var(--light-gray); 
			--box-shadow-hover: 7px 7px 0 var(--light-gray);`
		);
		document.body.style.color = "var(--light-gray)";
	}

	function lightMode() {
		localStorage.setItem("mode", "light");
		setMode("light");
		document.documentElement.style.cssText(`
		--bg-color: #F9F3E5;
		--header-color: var(--medium-yellow);
		--span-color: var(--medium-blue); 
		--text-color: var(--dark-gray);
		--light-yellow: #F5D89A;
		--medium-yellow: #ffd16f;
		--light-blue: #9ABAF5;
		--medium-blue: #5791fd;
		--light-pink: #F59AC8;
		--medium-pink: #ff79bc; 
		--light-green: #9AF59A;
		--medium-green: #5de35d; 
		--light-gray: #eee; 
		--dark-gray: #33322E; 
		--border: 3px solid var(--dark-gray); 
		--box-shadow: 3px 3px 0px var(--dark-gray); 
		--box-shadow-hover: 7px 7px 0px var(--dark-gray); 
		--light-grey: #A09886;`
		);
		document.body.style.color = "#111";
	}

	function toggleMode() {
		switch (mode) {
			case "light":
				// If light, the mode has to be set to "dark"
				darkMode();
				break;
			case "dark":
				// If dark, the mode has to be set to "light"
				lightMode();
				break;
			default:
				setMode("light");
				break;
		}
	}

	// First render
	useEffect(() => {
		if (mode === "light") {
			lightMode();
		} else {
			darkMode();
		}
	}, [mode]);

	return (
		<button className="mode" onClick={toggleMode}>
			{mode === "light" ? <BiSolidMoon /> : <BiSolidSun />}
		</button>
	);
}

export default ButtonToggleMode;
