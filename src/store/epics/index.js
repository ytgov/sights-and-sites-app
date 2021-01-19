import {combineEpics} from 'redux-observable';
import listingFilter from './filters';

const rootEpic = combineEpics(
    listingFilter
);

export default rootEpic;
