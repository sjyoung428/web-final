import { useCallback, useEffect, useState } from "react";

type UseNetworkCallback = () => void | Promise<void>;
type UseNetworkOptions = {
  onOnline?: UseNetworkCallback;
  onOffline?: UseNetworkCallback;
};

export const useNetwork = ({ onOnline, onOffline }: UseNetworkOptions = {}) => {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );

  const handleOnline = useCallback(() => {
    setIsOnline(true);
    if (onOnline) {
      onOnline();
    }
  }, [onOnline]);

  const handleOffline = useCallback(() => {
    setIsOnline(false);
    if (onOffline) {
      onOffline();
    }
  }, [onOffline]);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [handleOffline, handleOnline]);
  return isOnline;
};
