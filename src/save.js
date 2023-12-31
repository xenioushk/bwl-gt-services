// Services Parent Block save.js
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { columns } = attributes;

	return (
		<div {...useBlockProps.save()}>
			<InnerBlocks.Content />
		</div>
	);
}
