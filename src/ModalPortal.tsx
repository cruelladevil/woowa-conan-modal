import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const ModalPortal = ({ children }: React.PropsWithChildren) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return createPortal(<>{children}</>, document.body);
  }

  return null;
};
