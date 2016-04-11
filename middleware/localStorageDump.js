export default store => next => action => {
  console.log ('save to localStorage')

    const state = store.getState();

    console.log(state);
    localStorage.setItem('MYFIRSTAPP', JSON.stringify(state));
    next(action);
}
