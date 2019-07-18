import React from 'react';

// Custom components
import { Dashboard as DashboardLayout } from '~/layouts';
import { SubHeader } from '~/components/Common';

export default function About() {
  return (
    <DashboardLayout>
      <SubHeader title="Ajuda" Links={[]} />
    </DashboardLayout>
  );
}
