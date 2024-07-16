import { PluginSettingTab, App, Setting } from "obsidian";
import ContentfulObsidianPlugin from "../main";

export class ContentfulObsidianPluginSettingsTab extends PluginSettingTab {
	plugin: ContentfulObsidianPlugin;

	constructor(app: App, plugin: ContentfulObsidianPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName("Access Token")
			.setDesc(
				`This access token is used to preview and consume unpublished content (i.e. content in “Draft” status).`
			)
			.addText((text) =>
				text
					.setPlaceholder("Access Token")
					.setValue(this.plugin.settings.contentfulAccessToken)
					.onChange(async (value) => {
						this.plugin.settings.contentfulAccessToken = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Space ID")
			.setDesc(`Space that content should be queried from`)
			.addText((text) =>
				text
					.setPlaceholder("Space ID")
					.setValue(this.plugin.settings.contentfulSpaceId)
					.onChange(async (value) => {
						this.plugin.settings.contentfulSpaceId = value;
						await this.plugin.saveSettings();
					})
			);
	}
}
