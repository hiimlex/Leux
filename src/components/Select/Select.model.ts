import React from "react";

type SelectOption = {
	value: string;
	label: string;
	state: {
		disabled?: boolean;
		selected: boolean;
	};
};

type SelectSizes = "small" | "medium" | "large";
type SelectTypes = "filled" | "outlined";
type SelectState = {
	disabled?: boolean;
};

interface SelectProps {
	fieldKey?: string;
	size?: SelectSizes;
	placeholder?: string;
	width?: React.CSSProperties["width"];
	type?: SelectTypes;
	focusStyle?: boolean;
	onChange?: (
		value: string[],
		event?: React.ChangeEvent<HTMLSelectElement>
	) => void;
	customStyles?: React.CSSProperties;
	customClass?: string;
	state?: SelectState;
	defaultValue?: string[];
	multiple?: boolean;
	options: SelectOption[];
	optionCustomClass?: string;
	optionCustomStyles?: React.CSSProperties;
}

export { SelectProps, SelectSizes, SelectOption, SelectState, SelectTypes };
