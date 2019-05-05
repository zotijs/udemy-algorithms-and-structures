// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

//my solution
class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    const arr = this.events[eventName] ? [...this.events[eventName], callback] : [callback];
    this.events = { ...this.events, [eventName]: arr };
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName].map(event => {
      event();
    });
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
}

//stephen's solution
// class Events {
//   constructor() {
//     this.events = {};
//   }
//   // Register an event handler
//   on(eventName, callback) {
//     if (this.events[eventName]) {
//       this.events[eventName].push(callback);
//     } else {
//       this.events[eventName] = [callback];
//     }
//   }

//   // Trigger all callbacks associated
//   // with a given eventName
//   trigger(eventName) {
//     if (this.events[eventName]) {
//       for (let cb of this.events[eventName]){
//         cb();
//       }
//     }
//   }

//   // Remove all event handlers associated
//   // with the given eventName
//   off(eventName) {
//     delete this.events[eventName];
//   }
// }

module.exports = Events;
