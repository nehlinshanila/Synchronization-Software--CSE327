import React, { useState, useEffect } from "react";
import "./update.css"; // Import the CSS file


const SyncUpdate = () => {
  const [syncStatus, setSyncStatus] = useState("Syncing...");

  useEffect(() => {
    const syncTimer = setInterval(() => {
      // Simulate ongoing sync update
      setSyncStatus("Syncing...");

      // Call an asynchronous function to update the sync status
      // Example: fetchSyncStatus().then(data => setSyncStatus(data.status));
    }, 5000); // Update every 5 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(syncTimer);
    };
  }, []);

  return (
    <div className="update">
      <h2>Ongoing Sync Update</h2>
      <p>{syncStatus}</p>
    </div>
  );
};

export default SyncUpdate;
