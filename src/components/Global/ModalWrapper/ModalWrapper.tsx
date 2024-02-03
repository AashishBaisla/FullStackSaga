'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import styles from './ModalWrapper.module.css';

export function ModalWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className={styles.modalBackdrop}>
      <dialog ref={dialogRef} className={styles.modal} onClose={onDismiss}>
        <button onClick={onDismiss} className={styles.closeButton} />
        {children}
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}