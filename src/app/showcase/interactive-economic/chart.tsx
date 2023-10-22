'use client';

import { useState, useEffect } from 'react';

export default function Chart() {
  const [str, setStr] = useState('');
  useEffect(() => {
    const id = setTimeout(() => {
      setStr("Render chart!");
    }, 3000);
    return () => clearTimeout(id);
  }, []);
  return (
      <div>{str}</div>
      )
}
