// 
// The market data provider will fetch data from a datasource on tick. It emits:
// 
// - `trades`: batch of newly detected trades
// - `trade`: after Gekko fetched new trades, this
//   will be the most recent one.

var _ = require('lodash');
var util = require(__dirname + '/../util');
var MarketFetcher = require('./marketFetcher');
var dirs = util.dirs();
var Manager = function(config) {
  _.bindAll(this);

// fetch trades
  this.source = new MarketFetcher(config);
// relay newly fetched trades
  this.source
    .on('trades batch', this.relayTrades);
}

util.makeEventEmitter(Manager);

// HANDLERS
Manager.prototype.retrieve = function() {
  this.source.fetch();
}


Manager.prototype.relayTrades = function(batch) {
  this.sendMarketStart(batch);
  this.emit('marketUpdate', batch.last.date);

  this.emit('trades', batch);
}

Manager.prototype.sendMarketStart = _.once(function(batch) {
  this.emit('marketStart', batch.first.date);
});

module.exports = Manager;
/*
The MIT License (MIT)
Copyright (c) 2014-2017 Mike van Rossum mike@mvr.me
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
