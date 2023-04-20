import { render } from "@testing-library/react";

import { TextArea } from "./TextArea";
import "@testing-library/jest-dom";
import React from "react";

describe("TextArea component test", () => {
	it("should render a TextArea component", () => {
		const { getByTestId } = render(<TextArea fieldKey="testTextArea" />);

		const textArea = getByTestId("leuxTextArea");

		expect(textArea).toBeTruthy();
	});

	it("should render a TextArea with three min rows and five rows", () => {
		const { getByTestId } = render(<TextArea fieldKey="testTextArea" minRows={3} rows={5} />);

		const textArea = getByTestId("leuxTextArea");

		const mediumRowHeight = 1.75;
		const metricFontSize = "rem";

		const minHeight = 3 * mediumRowHeight;
		const maxHeight = 5 * mediumRowHeight;

		expect(textArea).toHaveStyle({
			minHeight: `${minHeight}${metricFontSize}`,
			maxHeight: `${maxHeight}${metricFontSize}`,
		});
	});

	it("should render a TextArea component that can be resized", () => {
		const { getByTestId } = render(<TextArea fieldKey="testTextArea" resize />);

		const textArea = getByTestId("leuxTextArea");

		expect(textArea).toHaveStyle({
			resize: "block",
		});
	});

	it("should render a TextArea component with large size", () => {
		const { getByTestId } = render(<TextArea fieldKey="testTextArea" size="large" />);

		const textArea = getByTestId("leuxTextArea");

		expect(textArea).toHaveClass("le-textarea--large");
	});

	it("should render a TextArea component with defaultValue", () => {
		const { getByTestId } = render(<TextArea fieldKey="testTextArea" defaultValue="test" />);

		const textArea = getByTestId("leuxTextArea");

		expect(textArea).toHaveValue("test");
	});

	it("should render a TextArea component with customStyles", () => {
		const { getByTestId } = render(
			<TextArea fieldKey="testTextArea" customStyles={{ color: "red" }} />
		);

		const textArea = getByTestId("leuxTextArea");

		expect(textArea).toHaveStyle({
			color: "red",
		});
	});

	it("should render a TextArea component with customClass", () => {
		const { getByTestId } = render(<TextArea fieldKey="testTextArea" customClass="testClass" />);

		const textArea = getByTestId("leuxTextArea");

		expect(textArea).toHaveClass("testClass");
	});

	it("should render a TextArea component with the textAreaProp overriding the main component props", () => {
		const { getByTestId } = render(
			<TextArea
				fieldKey="testTextArea"
				customClass="testClass"
				customStyles={{ color: "red" }}
				textAreaProps={{
					id: "testId",
					name: "testName",
					className: "testClass",
					style: { color: "blue" },
				}}
			/>
		);

		const textArea = getByTestId("leuxTextArea");

		expect(textArea).toHaveClass("testClass");
		expect(textArea).toHaveStyle("color: blue");
		expect(textArea).toHaveAttribute("id", "testId");
		expect(textArea).toHaveAttribute("name", "testName");
	});
});
