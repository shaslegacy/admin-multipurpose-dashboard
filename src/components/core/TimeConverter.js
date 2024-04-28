import React from 'react';

const TimeConverter = ({ createdAt }) => {

  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    const options = { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    };
    return `${date.toLocaleDateString('en-US', options)}`;
  };

  const getTimeAgo = (createdAt) => {
    const now = new Date();
    const diff = now - new Date(createdAt);
    if (diff < 60000) { // Less than a minute
      return 'just now';
    } else if (diff < 3600000) { // Less than an hour
      const minutes = Math.floor(diff / 60000);
      return `about ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (diff < 86400000) { // Less than a day
      const hours = Math.floor(diff / 3600000);
      return `about ${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (diff < 172800000) { // Less than two days
      return 'Yesterday';
    } else {
      return formatDate(createdAt);
    }
  };

  return (
    <div>
      {getTimeAgo(createdAt)}
    </div>
  );
};

export default TimeConverter;