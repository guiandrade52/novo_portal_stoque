import React from 'react';

// Custom components
import { Dashboard as DashboardLayout } from '~/layouts';
import { SubHeader } from '~/components/Common';

export default function Config() {
  return (
    <DashboardLayout>
      <SubHeader title="Configurador" Links={[]} />
    </DashboardLayout>
  );
}
