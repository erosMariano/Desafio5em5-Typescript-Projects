// Context, Reducer, Provider, Hook

import { createContext, useContext, useReducer, ReactNode } from "react";

type State = {
	currentStep: number;
	name: string;
	level: 0 | 1;
	email: string;
	github: string;
};

type Action = {
	type: FormActions;
	payload: any;
};

type ContextType = {
	state: State;
	dispatch: (action: Action) => void;
};

type FormProviderProps = {
	children: ReactNode;
};
const inicialData: State = {
	currentStep: 0,
	name: "",
	level: 0,
	email: "",
	github: "",
};

//Context

const FormContext = createContext<ContextType | undefined>(undefined);

// useReducer
export enum FormActions {
	setCurrentStep,
	setName,
	setLevel,
	setEmail,
	setGithub,
}
const formReducer = (state: State, action: Action) => {
	switch (action.type) {
		case FormActions.setCurrentStep:
			return { ...state, currentStep: action.payload };
		case FormActions.setName:
			return { ...state, name: action.payload };
		case FormActions.setLevel:
			return { ...state, level: action.payload };
		case FormActions.setEmail:
			return { ...state, email: action.payload };
		case FormActions.setGithub:
			return { ...state, github: action.payload };
		default:
			return state;
	}
};

//Provider

export const FormProvider = ({ children }: FormProviderProps) => {
	const [state, dispatch] = useReducer(formReducer, inicialData);
	const value = { state, dispatch };
	return (
		<FormContext.Provider value={value}>{children}</FormContext.Provider>
	);
};

//context hooks

export const useForm = () => {
	const context = useContext(FormContext);

	if (context === undefined) {
		throw new Error("UseForm precisa ser usado dentro do formProvider");
	}
	return context;
};