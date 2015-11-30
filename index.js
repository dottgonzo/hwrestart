var exec = require('child_process').exec,
verb = require('verbo');

module.exports = function(mode) {
switch(mode){
  case 'restart':{
    verb("restarting","warn","HWrestart");
    exec("reboot")
  };
  case 'force':{
    verb("force reboot","warn","HWrestart");
    exec("sync && reboot -f")
  };
  case 'unplug':{
    verb("unplug","warn","HWRestart");
    exec("reboot -f")
  }
}

  }
