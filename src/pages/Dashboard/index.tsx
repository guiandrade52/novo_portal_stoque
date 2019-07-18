import React from 'react';

// Material Components
import { Dashboard as DashboardLayout } from '~/layouts';

// Custom components
import { SubHeader } from '~/components/Common';


export default function Dashboard() {
  return (
    <DashboardLayout>
      <SubHeader title="Dashboard" Links={[]} />
    </DashboardLayout>
  );
}
