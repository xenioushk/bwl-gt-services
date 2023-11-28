// Service Inner Block index.js
import { registerBlockType } from "@wordpress/blocks";
import metadata from "../block.json";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";
import Save from "./save";

registerBlockType("bwl-gt-blocks/bwl-gt-service", {
	title: __("Service", "bwl-gt-services"),
	description: __("Single Service Block", metadata.textdomain),
	parent: ["bwl-gt-blocks/bwl-gt-services"],
	icon: "admin-tools",
	supports: {
		html: false,
		reusable: false,
	},
	attributes: {
		serviceTitle: {
			type: "string",
			source: "html",
			selector: "h4",
		},
		serviceDescription: {
			type: "string",
			source: "html",
			selector: "p",
		},
	},
	edit: Edit,
	save: Save,
});
