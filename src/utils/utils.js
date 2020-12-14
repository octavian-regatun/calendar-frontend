function addZero(number) {
  if (number < 10) {
    number = `0${number}`;
  }
  return number;
}

export { addZero };
