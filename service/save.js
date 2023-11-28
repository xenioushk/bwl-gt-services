// Service Inner Block save.js
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Save({ attributes }) {
	const { title } = attributes;

	return (
		<div {...useBlockProps.save()}>
			{title && <RichText.Content tagName="h4" value={title} />}
		</div>
	);
}
