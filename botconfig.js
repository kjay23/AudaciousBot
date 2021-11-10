module.exports = {
  Admins: ["<discord_user_id>"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/<code>", //Support Server Link
  Token: process.env.Token || "<bot_token>", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "<bot_client_id>", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "<bot_client_secret_id>", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "The Quick Brown Fox Jumps Over The Lazy Dog", //A Secret like a password
  IconURL:
    "https://media.discordapp.net/attachments/906549061732139008/907973626597351444/konqi_musician.png", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "online", // You can show online, idle, and dnd
    name: "your Music, >help for list of commands.", // The message shown
    type: "STREAMING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "<lavalink host>",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "youshallnotpass",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "<spotify_client_id>", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "<spotify_client_secret_id>", //Spotify Client Secret
  },
};
