import React from 'react';

// Custom components
import { Dashboard as DashboardLayout } from '~/layouts';
import { SubHeader } from '~/components/Common';

export default function ListTasks() {
  return (
    <DashboardLayout>
      <SubHeader title="Lista de Tarefas" Links={[]} />
    </DashboardLayout>
  );
}
