import { ReactNode, MouseEvent as ReactMouseEvent } from "react";

type DropdownVariant = "filled" | "outlined";
type DropdownSize = "small" | "medium" | "large";
type DropdownPosition = "bl" | "br" | "tl" | "tr";
type DropdownTrigger = "click" | "hover";

interface DropdownProps {
	variant?: DropdownVariant;
	size?: DropdownSize;
	children?: React.ReactNode;
	anchor?: React.ReactNode;
	position?: DropdownPosition;
	trigger?: DropdownTrigger;
	clickOutside?: boolean;
	closeOnClick?: boolean;
	width?: React.CSSProperties["width"];
	customWrapperStyles?: React.CSSProperties;
	customWrapperClass?: string;
	customMenuStyles?: React.CSSProperties;
	customMenuClass?: string;
	menuProps?: React.HTMLAttributes<HTMLUListElement>;
}

interface DropdownItemProps {
	children?: ReactNode;
	noBreakWord?: boolean;
	onClick?: (event?: ReactMouseEvent<HTMLLIElement, MouseEvent>) => void;
	customStyles?: React.CSSProperties;
	customClass?: string;
	itemProps?: React.HTMLAttributes<HTMLLIElement>;
	closeOnClick?: boolean;
	centered?: boolean;
	readonly setShow?: React.Dispatch<React.SetStateAction<boolean>>;
	readonly trigger?: DropdownTrigger;
}

export { DropdownProps, DropdownItemProps, DropdownVariant, DropdownSize };
