const magic = require("./commands/magic.js");

const commands = { magic };
const prefix = "!";

module.exports = function (msg) {
  let args = msg.body.split(/\s+/);
  let command = args.shift();
  if (msg.body.startsWith(prefix)) {
    command = command.substring(1);
    if (commands[command]) {
      commands[command](msg, args, client);
    } else {
      client.sendMessage(msg.from, "Comando Inválido!");
    }
  }
};
