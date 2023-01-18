
exports.getDate = function() {
    // Create a new Date object
    const today = new Date();

    // Options for the toLocaleDateString method
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long"
    };

    // return current day in the format "Monday, Day Month"
    return today.toLocaleDateString("en-US", options);

   };

   exports.getDay = function() {
        // Create a new Date object
        const today = new Date();
    
        // Options for the toLocaleDateString method
        const options = {
          weekday: "long",
        };
    
        // return the current day in the format "Monday, Day Month"
        return today.toLocaleDateString("en-US", options);

      }
