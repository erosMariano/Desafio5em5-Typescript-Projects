import { BrowserRouter } from "react-router-dom";
import { FormProvider } from "./contexts/FormContext";
import { Router } from "./router";

const App = () => {
	return (
		<BrowserRouter>
			<FormProvider>
				<Router />
			</FormProvider>
		</BrowserRouter>
	);
};

export default App;
