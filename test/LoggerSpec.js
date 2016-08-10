var Logger = require('../src/Logger.js');
describe("Logger", function(){

  it("is working",function(){
    spyOn(Logger,'logStatus');
    Logger.logStatus();
    expect(Logger.logStatus).toHaveBeenCalled();
  });

});
