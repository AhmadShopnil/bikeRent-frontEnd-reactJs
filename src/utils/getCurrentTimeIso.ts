export const getCurrentTimeISO = () => {
    const now = new Date();
    return now.toISOString();
  };