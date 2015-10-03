var exec = require('child_process').exec,
verb = require('verbo');

module.exports = {
  restart: function() {
verb("restarting","warn","HWrestart");
exec("reboot")
  },
  force: function() {
verb("force reboot","warn","HWrestart");
exec("sync && reboot -f")
  },
  unplug: function() {
verb("unplug","warn","HWRestart");
exec("reboot -f")
  }
};
