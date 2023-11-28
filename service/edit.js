// Service Inner Block edit.js
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
	const { title } = attributes;

	const onChangeTitle = (newTitle) => {
		setAttributes({
			title: newTitle,
		});
	};

	return (
		<>
			<div {...useBlockProps()}>
				<RichText
					tagName="h4"
					placeholder="Service title"
					value={title}
					onChange={onChangeTitle}
					allowedFormats={[]}
				/>
			</div>
		</>
	);
}
