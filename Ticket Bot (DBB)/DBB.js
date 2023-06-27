const { AoiClient, LoadCommands } = require("aoi.js");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
//Main.js
const bot = new AoiClient({
    token: "token-giriniz",
    prefix: ["!"],
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates", "GuildMessageReactions", "GuildInvites", "GuildEmojisAndStickers", "GuildBans", "GuildWebhooks", "GuildMembers", "GuildPresences", "GuildMessageTyping"],
    events: ["onMessage", "onInteractionCreate", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onReactionRemove", "onReactionRemoveAll", "onInviteCreate", "onInviteDelete", "onGuildJoin", "onGuildLeave", "onGuildUpdate", "onGuildUnavailable", "onRoleCreate", "onRoleUpdate", "onRoleDelete", "onChannelCreate", "onChannelUpdate", "onChannelDelete", "onChannelPinsUpdate", "onStageInstanceCreate", "onStageInstanceUpdate", "onStageInstanceDelete", "onThreadCreate", "onThreadUpdate", "onThreadDelete", "onThreadListSync", "onThreadMemberUpdate", "onThreadMembersUpdate", "onEmojiCreate", "onEmojiDelete", "onEmojiUpdate", "onStickerCreate", "onStickerDelete", "onStickerUpdate", "onBanAdd", "onBanRemove", "onVoiceStateUpdate", "onWebhookUpdate", "onJoin", "onLeave", "onMemberUpdate", "onMemberAvailable", "onMembersChunk", "onPresenceUpdate", "onTypingStart", "onUserUpdate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});
//SoundCloud & Youtube
const voice = new AoiVoice(bot, {
    searchOptions: {
        youtubeClient: "D9NPfM1bMer1amerPRPhaA",
        youtubegl: "TR",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});
// Memory & Disk
voice.addPlugin(PluginName.Cacher, new Cacher("memory"));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
}));

voice.bindExecutor(bot.functionManager.interpreter);
const { Util } = require("aoi.js");
const { setup } = require("aoi.parser");
setup(Util);
const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./Komutlar/");
