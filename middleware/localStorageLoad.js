export default store => next => action => {
    const { type } = action;
    if (type === 'INIT') {
      console.log('INIT ENTERED')
        try {
            const storedState = JSON.parse(
                localStorage.getItem('MYFIRSTAPP')
            );
            if (storedState) {
              console.log('MYFIRSTAPP found')
              console.log(storedState)
                store.dispatch({
                    type: 'RESET_STATE',
                    payload: storedState
                });
            }
            else {

              console.log('MYFIRSTAPP not found')
            }
            return;
        } catch (e) {
            // Unable to load or parse stored state, proceed as usual
        }
    }

    next(action);
}
