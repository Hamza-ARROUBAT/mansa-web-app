import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContributions } from 'store/reducers/contributions/contributions.action';

export default function Verify() {
  const contributions = useSelector((state) => state.contributions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContributions());
  }, []);

  useEffect(() => {
    console.log(contributions);
  }, [contributions]);

  return (
    <div>
      {/* <Table
        type={'byTimePlayed'}
        header={['game', 'platforms', 'genre', 'Total play time']}
        isLoading={isLoading}
        games={!searched ? topGamesByTimePlayed : searchedTopGamesByTimePlayed}
      /> */}
    </div>
  );
}
