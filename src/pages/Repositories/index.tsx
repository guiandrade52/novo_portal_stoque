import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '~/store/index';


export default function Repositories() {
  const repositories = useSelector((state:ApplicationState) => state.repositories.data);

  return (
    <h1>{repositories.map(rep => rep.name)}</h1>
  );
}
