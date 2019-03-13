import {SIDE_MENU_TOGGLE} from '../actions/types';

const INITIAL_STATE = {
    sideMenuMinimized: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIDE_MENU_TOGGLE:
            return {
                ...state,
                sideMenuMinimized: !action.payload
            };
        default:
            return state;
    }

}