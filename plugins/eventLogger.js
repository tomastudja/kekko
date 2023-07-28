const log = require('../core/log');
let _ = require('../core/lodash');
require('lodash-migrate');
const subscriptions = require('../subscriptions');
const config = require('../core/util').getConfig().eventLogger;

const EventLogger = function() {}

_.each(subscriptions, sub => {
  if(config.whitelist && !config.whitelist.includes(sub.event)) {
    return;
  }

  EventLogger.prototype[sub.handler] = (event, next) => {
    log.info(`\t\t\t\t[EVENT ${sub.event}]\n`, event);
    if(_.isFunction(next))
      next();
  }
});

module.exports = EventLogger;
