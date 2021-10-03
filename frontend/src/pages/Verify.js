import TableComponent from 'components/TableComponent';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllContributions } from 'store/reducers/contributions/contributions.action';

export default function Verify() {
  // fetch data
  const contributions = useSelector((state) => state.contributions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContributions());
  }, []);

  return (
    <div>
      <TableComponent
        header={[
          'Sent Date',
          'Legal Name',
          'Legal Form',
          'Country',
          'City',
          'Document',
        ]}
        isLoading={contributions.isLoading}
        data={contributions.data}
      />
    </div>
  );
}
