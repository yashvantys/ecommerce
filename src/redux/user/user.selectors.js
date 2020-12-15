import {createSelector} from 'reselect';


const selectuser = state => state.user;

export const selectCurrentuser = createSelector(
    [selectuser],
    (user) => user.currentUser
)
