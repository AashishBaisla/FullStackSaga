import React from 'react';
import { ProjectDetailScreen } from '@/screens';
import { ModalWrapper } from '@/components/Global';

export default function page({ params }: { params: { name: string } }) {
    return (
        <ModalWrapper>
            <ProjectDetailScreen projectName={params.name} />
        </ModalWrapper>
    )
}
