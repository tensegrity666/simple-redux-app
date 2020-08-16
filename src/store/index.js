function createStore() {
  const state = {};
  const subscribers = [];

  return {
    dispatch(action) {
      
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    }
  }
}