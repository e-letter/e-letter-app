import { useEffect, useState } from "react";

export function useMounted() {
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
