import React, {useState, useEffect} from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState("online");

  useEffect(() => {
    const isOnline = e => {
      setStatus(e.type);
    };
    window.addEventListener("online", isOnline);

    const isOffline = e => {
      setStatus(e.type);
    };
    window.addEventListener('offline', isOffline);

    return () => {
      window.removeEventListener('online', isOnline);
      window.removeEventListener('offline', isOffline);
    }

  }, [])

  const offlineClass = status === "offline" 
    && "status_offline";

    return (
      <div 
      className={`status ${offlineClass}`}
      >
        {status}
      </div>
    );
};

export default ConnectionStatus;
