export const formatSecondsTimestampToDate = (timestamp) => {
    console.log({timestamp})
    const date = new Date(timestamp * 1000);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
  
    function getDayWithSuffix(day) {
      if (day >= 11 && day <= 13) {
        return day + 'th';
      }
      switch (day % 10) {
        case 1: return day + 'st';
        case 2: return day + 'nd';
        case 3: return day + 'rd';
        default: return day + 'th';
      }
    }
  
    const formattedDay = getDayWithSuffix(day);
    return `${formattedDay} ${month} ${year}`;
  };
  