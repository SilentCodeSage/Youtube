export function formatViewCount(viewCount) {
    if (viewCount >= 1_000_000_000) {
      return (viewCount / 1_000_000_000).toFixed(1) + 'B';
    } else if (viewCount >= 1_000_000) {
      return (viewCount / 1_000_000).toFixed(1) + 'M';
    } else if (viewCount >= 1_000) {
      return (viewCount / 1_000).toFixed(1) + 'k';
    }
    return viewCount.toString();
  }

  export function formatPublishedDate(publishedAt) {
    const date = new Date(publishedAt);
    const now = new Date();
    const diff = now - date; // Difference in milliseconds
  
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
  }