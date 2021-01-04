import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import wordLists from './wordLists';
import words from './words';

import { WordList } from './wordLists'
import { Word } from './words'

export interface RootState {
    wordLists: WordList[],
    words: { [key: string]: Word[] }
}

export default createStore(
    combineReducers({ wordLists, words }),
    composeWithDevTools(applyMiddleware(thunk))
);
