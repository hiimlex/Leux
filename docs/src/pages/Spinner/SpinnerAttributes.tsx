import { LeHighlighter, LePreview, LeSourceButton } from "@/components";
import { Spinner } from "../../../../src";
import { attributes as spinnerAttr } from "./spinner.md";

const SpinnerImportPreview = () => (
	<LeHighlighter code={`import { Spinner, SpinnerProps } from "leux";`} language="tsx" />
);

const SpinnerSizePreview = () => (
	<>
		<LePreview>
			<Spinner size="small" />
			<Spinner size="medium" />
			<Spinner size="large" />
		</LePreview>
		<LeHighlighter
			code={`const Component = () => (
	<>
		<Spinner size="small" />
		<Spinner size="medium" />
		<Spinner size="large" />
	</>
);`}
			language="tsx"
		/>
	</>
);

const SpinnerThemePreview = () => (
	<>
		<LePreview>
			<Spinner theme="primary" />
			<Spinner theme="secondary" />
			<Spinner theme="success" />
			<Spinner theme="warning" />
			<Spinner theme="danger" />
			<Spinner theme="default" />
		</LePreview>
		<LeHighlighter
			code={`const Component = () => (
	<>
		<Spinner theme="primary" />
		<Spinner theme="secondary" />
		<Spinner theme="success" />
		<Spinner theme="danger" />
		<Spinner theme="default" />
	</>
);`}
			language="tsx"
		/>
	</>
);

const SpinnerCustomPreview = () => (
	<>
		<LePreview>
			<Spinner
				customColor="purple"
				customSize="52px"
				customSpeed="1.5s"
				customStyles={{
					backgroundColor: "#afafaf",
					padding: "3rem",
				}}
			/>
		</LePreview>
		<LeHighlighter
			code={`const Component = () => (
	<>
		<Spinner
			customColor="purple"
			customSize="52px"
			customSpeed="1.5s"
			customStyles={{
				backgroundColor: "#afafaf",
				padding: '3rem'
			}}
		/>
	</>
);`}
			language="tsx"
		></LeHighlighter>
	</>
);

spinnerAttr["LeSourceButton"] = LeSourceButton;
spinnerAttr["SpinnerImportPreview"] = SpinnerImportPreview;
spinnerAttr["SpinnerSizePreview"] = SpinnerSizePreview;
spinnerAttr["SpinnerThemePreview"] = SpinnerThemePreview;
spinnerAttr["SpinnerCustomPreview"] = SpinnerCustomPreview;

export { spinnerAttr };
