import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../store';
import { getWordsByListName } from '../../store/words/actions';

import WordsTable from '../../components/WordsTable';

const Words: React.FC = () => {
    const dispatch = useDispatch();
    const { listName } = useParams<{ listName: string }>();
    const words = useSelector((state: RootState) => state.words[listName]);

    useEffect(() => {
        dispatch(getWordsByListName(listName));
    }, [listName])

    return (
        <WordsTable rows={[]} />
    );
};

export default Words;