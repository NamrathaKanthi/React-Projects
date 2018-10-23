const initialStore = {
    LogedInUserInfo: {},
    formObjects: {
        'name': 'form',
        'fields': [
            {
                'type': 'text',
                'label': 'username',
                'value': 'abc',
                'disabled': false
            },
            {
                'type': 'number',
                'label': 'Enter number',
                'value': '7555'
            },
            {
                'type': 'textarea',
                'label': 'Enter feild',
                'value': 'afx'
            },
            {
                'type': 'button',
                'value': 'save',
                'actions': 'primary'
            },
            {
                'type': 'select',
                'label': 'Favorite Color',
                'value': 'red',

            }
        ]
    }
}

const reducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'UPDATE_USER_INFO':
            return Object.assign({}, state, { LogedInUserInfo: action.payload });
        case 'UPDATE_FORM_DATA':
            return Object.assign({}, state, { formObjects: action.payload });
        default:
            return Object.assign({}, state);
    }
};

export default reducer;