function addZero(number) {
  if (number < 10) {
    number = `0${number}`;
  }
  return number;
}

const fileToBase64 = async file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = e => reject(e);
  });

export { addZero, fileToBase64 };
