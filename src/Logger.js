var Logger = (function () {
  function logStatus() {
    console.log('Logger.js -> logStatus() is now loaded...');
  };

  return {
    logStatus: function () {
      return logStatus();
    }
  };

})();

module.exports = Logger;
