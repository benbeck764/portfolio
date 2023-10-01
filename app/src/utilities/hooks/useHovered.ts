import { useEffect, useState } from 'react';

export const useHovered = (ref: any, defaultState = false) => {
  const [focused, setFocused] = useState<boolean>(defaultState);

  useEffect(() => {
    const onMouseEnter = () => setFocused(true);
    const onMouseOut = () => setFocused(false);

    if (ref.current) {
      ref.current.addEventListener('mouseover', onMouseEnter);
      ref.current.addEventListener('mouseout', onMouseOut);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', onMouseEnter);
        ref.current.removeEventListener('mouseout', onMouseOut);
      }
    };
  }, []);

  return focused;
};
