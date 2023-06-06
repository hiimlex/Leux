import React, { useContext, useEffect, useRef } from "react";
import { LeClassNames } from "../../types";
import { ToastContext } from "../ToastContext";
import { ToastProps } from "./Toast.model";

import "./Toast.scss";

const Toast = ({
	id,
	label,
	loading = false,
	duration = 2000,
	theme = "default",
	variant = "filled",
	size = "medium",
	closable = true,
	onClose,
	zIndex,
	customClass,
	customStyles,
}: ToastProps) => {
	const { removeToast } = useContext(ToastContext);

	const classNames: LeClassNames = {
		leToast: () =>
			`le-toast${
				customClass ? ` ${customClass}` : ""
			} le-toast--${theme} le-toast--${variant} le-toast--${size}${
				loading ? " le-toast--loading" : ""
			}${closable ? " le-toast--closable" : ""}`,
		leToastLabel: () => `le-toast--label`,
	};

	const toastRef = useRef<HTMLDivElement>(null);

	const handleCloseToast = () => {
		if (closable && id) {
			removeToast(id);

			onClose && onClose();
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (id) {
				removeToast(id);
			}

			if (closable) {
				onClose && onClose();
			}
		}, duration);

		return () => {
			clearTimeout(timer);
		};
	});

	return (
		<div
			ref={toastRef}
			data-testid="leuxToast"
			className={classNames["leToast"]()}
			id={id}
			onClick={handleCloseToast}
			style={{ ...customStyles, zIndex }}
		>
			<span className={classNames["leToastLabel"]()}>{label}</span>
		</div>
	);
};

export { Toast };
