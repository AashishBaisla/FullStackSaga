import React from 'react';
import { ProjectDetailScreen } from '@/screens';

export default function page({ params }: { params: { name: string } }) {
  return (
    <main style={{ minHeight: 'calc(100vh - 92px)', marginTop: 50 }}>
      <ProjectDetailScreen projectName={params.name} />
    </main>
  )
}
