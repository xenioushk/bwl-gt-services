// Service Inner Block edit.js
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
	const { serviceTitle, serviceDescription } = attributes;

	const onChangeServiceTitle = (newServiceTitle) => {
		setAttributes({
			serviceTitle: newServiceTitle,
		});
	};

	const onChangeServiceDescription = (newsServiceDescription) => {
		setAttributes({
			serviceDescription: newsServiceDescription,
		});
	};

	return (
		<>
			<div {...useBlockProps()}>
				<RichText
					tagName="h4"
					placeholder="Service Title"
					value={serviceTitle}
					onChange={onChangeServiceTitle}
					allowedFormats={[]}
				/>
				<RichText
					tagName="p"
					placeholder="Service Description"
					value={serviceDescription}
					onChange={onChangeServiceDescription}
					allowedFormats={[]}
				/>
			</div>
		</>
	);
}
