import { useBlockProps } from "@wordpress/block-editor";

export default function Save() {
	return (
		<p {...useBlockProps.save()}>
			{"Bwl Gt Service – hello from the saved content!"}
		</p>
	);
}
