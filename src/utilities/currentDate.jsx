// function to determine if we are in the morning, evening, or afternoon
export const getCurrentimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) {
    return "morning";
  } else if (hours >= 12 && hours <= 17) {
    return "afternoon";
  }
  return "evening";
};
