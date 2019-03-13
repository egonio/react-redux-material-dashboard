import {SIDE_MENU_TOGGLE} from '../actions/types';

export const sideMenuToggle = (sideMenuToggle) => {
    return {
        type: SIDE_MENU_TOGGLE,
        payload: sideMenuToggle
    }
}