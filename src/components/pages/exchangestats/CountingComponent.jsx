import React, { useEffect, useRef } from 'react';

export function useCountAnimation(elementId, increment, target, interval) {
  const countRef = useRef(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const countElement = document.getElementById(elementId);

    function updateCount() {
      if (countElement) {
        countElement.textContent = countRef.current;
        countRef.current += increment;
        if (countRef.current <= target) {
          timeoutRef.current = setTimeout(updateCount, interval);
        }
      }
    }

    updateCount();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [elementId, increment, target, interval]);
}
