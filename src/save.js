// Services Parent Block save.js
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const { columns } = attributes;

	return (
		<p {...useBlockProps.save()}>
			{"Bwl Gt Service – hello from the saved content!"}
		</p>
	);
}
