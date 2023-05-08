import './style.css';
import React, { cloneElement, useCallback, useState } from 'react';
import { ModalPortal } from './ModalPortal';

const BottomSheet = ({
  defaultOpen,
  trigger,
  children,
}: React.PropsWithChildren<{ defaultOpen: boolean; trigger: React.ReactElement }>) => {
  const [isModalOpen, setIsModalOpen] = useState(defaultOpen);

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      {cloneElement(trigger, { onClick: handleOpenModal })}
      {isModalOpen && (
        <ModalPortal>
          <div className="wrapper">
            <div className="backdrop" onClick={handleCloseModal} />
            <div className="bottom-sheet">{children}</div>
          </div>
        </ModalPortal>
      )}
    </>
  );
};

export default BottomSheet;
