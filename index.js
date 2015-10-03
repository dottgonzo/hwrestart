var exec = require('child_process').exec,
verb = require('verbo');

module.exports = {
  restart: function() {
verb("restarting","warning","HWrestart")
exec("reboot");
  },
  force: function() {
verb("force reboot","warning","HWrestart")
exec("sync && reboot -f")
  },
  unplug: function() {
verb("unplug","warning","HWRestart")
exec("reboot -f");
  }
};
