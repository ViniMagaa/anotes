import Provider from "./context/Provider";
import Header from "./components/Header/Header";
import Main from "./components/Main";

function App() {
	return (
		<Provider>
			<Header />
			<Main />
		</Provider>
	);
}

export default App;
