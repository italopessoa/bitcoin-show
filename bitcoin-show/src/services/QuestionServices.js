export default function checkAnswerService(correctOptionNumber, selectedOptionNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedOptionNumber === undefined || selectedOptionNumber < 1) {
        reject('Select an option!');
      }
      const isAnswerCorrect = (selectedOptionNumber === correctOptionNumber);
      resolve(isAnswerCorrect);
    }, 400);
  });
}
