import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Dashboard as DashboardLayout } from '~/layouts';

import { ApplicationState } from '~/store/index';

import { loadRequest } from '~/store/ducks/repositories/actions';

import RepositoryItem from '~/components/RepositoryItem';

export default function Dashboard() {
  const repositories = useSelector((state:ApplicationState) => state.repositories.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  return (
    <DashboardLayout>
      <ul>{repositories.map(rep => <RepositoryItem key={rep.id} repository={rep} />)}</ul>
    </DashboardLayout>
  );
}
