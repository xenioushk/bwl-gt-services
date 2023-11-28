// Services Parent Block edit.js
import { __ } from "@wordpress/i18n";
import metadata from "./block.json";

import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from "@wordpress/block-editor";

import { PanelBody, RangeControl } from "@wordpress/components";

import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const { columns } = attributes;

	// Functions.

	const onChangeColumns = (newColumns) => {
		setAttributes({
			columns: newColumns,
		});
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<RangeControl
						label={__("Columns", metadata.textdomain)}
						min={1}
						max={6}
						onChange={onChangeColumns}
						value={columns}
					/>
				</PanelBody>
			</InspectorControls>

			<InnerBlocks allowedBlocks={["bwl-gt-blocks/bwl-gt-service"]} />
		</div>
	);
}
