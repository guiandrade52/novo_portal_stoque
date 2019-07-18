import React from 'react';

// Custom components
import { Dashboard as DashboardLayout } from '~/layouts';
import { SubHeader } from '~/components/Common';

export default function Dashboard() {
  return (
    <DashboardLayout>
      <SubHeader title="Nova Tarefa" Links={[]} />
    </DashboardLayout>
  );
}
