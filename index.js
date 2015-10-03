var exec = require('child_process').exec,
verb = require('verb');

module.exports = {
  restart: function() {
verbo("restarting","warning","HWrestart")
exec("reboot");
  },
  force: function() {
verbo("force reboot","warning","HWrestart")
exec("sync && reboot -f")
  },
  unplug: function() {
verbo("unplug","warning","HWRestart")
exec("reboot -f");
  }
};
