const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover(98382);
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual('Normal');
    expect(rover.generatorWatts).toEqual(110);
  })

  it("response returned by receiveMessage contains name of message", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("Test message with two commands.", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    
    expect(response.message).toEqual('Test message with two commands.'); // so you are referencing rover.response
    // you want to just reference the object being returned by rover.receiveMessage(message)
    // the rover doesn't have a response property
    // notice how you have this response variable but you aren't referencing it anywhere
  })
  // it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
  //   let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  //   let message = new Message("Test message with two commands.", commands);
  //   let rover = new Rover(98382);
  //   let response = rover.receiveMessage(message);
  //   expect(response.results[0]).toEqual(commands[0]);
  //   expect(response.results[1]).toEqual(commands[1]);

  // })
  it("responds correctly to status check command", function(){
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message("Test message with two commands.", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    // console.log(response.results[0].roverStatus.mode);
    expect(response.results[0].completed).toEqual(true);
    expect(response.results[0].roverStatus.mode).toEqual('Normal');
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
    expect(response.results[0].roverStatus.position).toEqual(98382);
  })


  // 7 tests here!

});
