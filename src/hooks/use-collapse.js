import { useState } from 'react';

export const useCollapse = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return [collapsed, toggleCollapse];
};
