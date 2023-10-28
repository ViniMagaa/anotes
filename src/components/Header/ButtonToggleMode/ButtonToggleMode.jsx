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
		document.documentElement.style.setProperty("--bg-color", "#222");
		document.documentElement.style.setProperty("--header-color", "#444");
		document.documentElement.style.setProperty(
			"--span-color",
			"var(--light-blue)"
		);
		document.documentElement.style.setProperty(
			"--text-color",
			"var(--light-gray)"
		);
		document.documentElement.style.setProperty("--light-yellow", "#AB7D38");
		document.documentElement.style.setProperty("--medium-yellow", "#5E451F");
		document.documentElement.style.setProperty("--light-blue", "#383A7E");
		document.documentElement.style.setProperty("--medium-blue", "#272959");
		document.documentElement.style.setProperty("--light-pink", "#C84771");
		document.documentElement.style.setProperty("--medium-pink", "#62374E");
		document.documentElement.style.setProperty("--light-green", "#519872");
		document.documentElement.style.setProperty("--medium-green", "#3B5249");
		document.documentElement.style.setProperty("--light-gray", "#eee");
		document.documentElement.style.setProperty("--dark-gray", "#444");
		document.documentElement.style.setProperty(
			"--border",
			"3px solid var(--light-gray)"
		);
		document.documentElement.style.setProperty(
			"--box-shadow",
			"3px 3px 0 var(--light-gray)"
		);
		document.documentElement.style.setProperty(
			"--box-shadow-hover",
			"7px 7px 0 var(--light-gray)"
		);
		document.body.style.color = "var(--light-gray)";
	}

	function lightMode() {
		localStorage.setItem("mode", "light");
		setMode("light");
		document.documentElement.style.setProperty("--bg-color", "#F9F3E5");
		document.documentElement.style.setProperty(
			"--header-color",
			"var(--medium-yellow)"
		);
		document.documentElement.style.setProperty(
			"--span-color",
			"var(--medium-blue)"
		);
		document.documentElement.style.setProperty(
			"--text-color",
			"var(--dark-gray)"
		);
		document.documentElement.style.setProperty("--light-yellow", "#F5D89A");
		document.documentElement.style.setProperty("--medium-yellow", "#ffd16f");
		document.documentElement.style.setProperty("--light-blue", "#9ABAF5");
		document.documentElement.style.setProperty("--medium-blue", "#5791fd");
		document.documentElement.style.setProperty("--light-pink", "#F59AC8");
		document.documentElement.style.setProperty("--medium-pink", "#ff79bc");
		document.documentElement.style.setProperty("--light-green", "#9AF59A");
		document.documentElement.style.setProperty("--medium-green", "#5de35d");
		document.documentElement.style.setProperty("--light-grey", "#A09886");
		document.documentElement.style.setProperty("--dark-gray", "#33322E");
		document.documentElement.style.setProperty(
			"--border",
			"3px solid var(--dark-gray)"
		);
		document.documentElement.style.setProperty(
			"--box-shadow",
			"3px 3px 0px var(--dark-gray)"
		);
		document.documentElement.style.setProperty(
			"--box-shadow-hover",
			"7px 7px 0px var(--dark-gray)"
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
	}, [mode])

	return (
		<button className="mode" onClick={toggleMode}>
			{mode === "light" ? <BiSolidMoon /> : <BiSolidSun />}
		</button>
	);
}

export default ButtonToggleMode;
