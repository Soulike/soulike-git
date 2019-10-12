import {AnyAction, Reducer} from 'redux';
import ActionType from './Action/ACTION_TYPE';
import {RootState} from '../../Store';

const reducer: Reducer<RootState, AnyAction> = (state, action) =>
{
    const {type} = action;
    switch (type)
    {
        case ActionType.SET_LOGGED_IN:
        {
            return {
                ...state!,
                isLoggedIn: true,
            };
        }
        case ActionType.SET_LOGGED_OUT:
        {
            return {
                ...state!,
                isLoggedIn: false,
            };
        }
        default:
        {
            return {
                ...state!,
            };
        }
    }
};

export default reducer;