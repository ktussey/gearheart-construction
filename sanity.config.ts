import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import project from "./sanity/schemas/project";

const projectId = import.meta.env.SANITY_PROJECT_ID || "n3ywke92";
const dataset = import.meta.env.SANITY_DATASET || "production";

export default defineConfig({
	name: "gearheart-construction",
	title: "Gearheart Construction",
	projectId,
	dataset,
	plugins: [structureTool()],
	schema: {
		types: [project],
	},
});
