const initialStore = {
    LogedInUserInfo: {},
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'UPDATE_USER_DETAILS':
            return Object.assign({}, state, { UserDetails: action.payload });
        default:
            return Object.assign({}, state);
    }
}

export default reducer;