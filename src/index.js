// Services Parent Block index.js
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import "./service";

import "./style.scss";

import Edit from "./edit";
import Save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
	edit: Edit,
	save: Save,
});
