class Rover {
  constructor(position) {
    this.position = position;
    this.mode = 'Normal';
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
    let messageName = message.name;
    let commandsArray = message.commands;
    let results = [];
    let resultsObj = {};
    let response = {};
    response['message'] = messageName;
    response['results'] = results;
    let roverStatus = {
      mode: this.mode,
      generatorWatts: this.generatorWatts,
      position: this.position,
    }

    //  results.push(commandsArray[0]);
    //  results.push(commandsArray[1]);
    //  for the status check command. results includes a rover status 
    // need to iterate the key values so 'Status Check' can be used with conditional
    for (let i = 0; i < commandsArray.length; i++) {
      // for (commandType in message.commands[i]) {
        // commandsArray[i].commandType
        if (commandsArray[i].commandType === 'STATUS_CHECK') {
          resultsObj = {
            completed: true,
            roverStatus: {
              mode: this.mode,
              generatorWatts: this.generatorWatts,
              position: this.position,
            }
          }
          results.push(resultsObj);
        } 
      // }
    }

    return response
  }
  // Write code here!
}

module.exports = Rover;