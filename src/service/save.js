// Service Inner Block save.js
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Save({ attributes }) {
	const { serviceTitle, serviceDescription } = attributes;

	return (
		<div {...useBlockProps.save()}>
			{serviceTitle && <RichText.Content tagName="h4" value={serviceTitle} />}
			{serviceDescription && (
				<RichText.Content tagName="p" value={serviceDescription} />
			)}
		</div>
	);
}
