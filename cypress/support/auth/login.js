export const randomUserName = () => {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  return `Test+${randomNumber}`;
};
