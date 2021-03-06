'use strict';

var path = require('path');

var _require = require('../log'),
    log = _require.log,
    error = _require.error;

var CastDeviceEmulator = require('../');

function startEmulator(filepath, cmd) {
  var fullPath = path.resolve(process.cwd(), filepath);
  var emulator = new CastDeviceEmulator();
  try {
    emulator.loadScenario(require(fullPath));
    log('Scenario file <' + fullPath + '> has been loaded.');
    emulator.start();
  } catch (err) {
    error(err);
  }
}

module.exports = {
  startEmulator: startEmulator
};