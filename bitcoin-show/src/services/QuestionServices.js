export default function checkAnswerService(correctOption, selectedOption) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedOption === undefined || selectedOption < 1) {
        reject('Select an option!');
      }
      const isAnswerCorrect = (selectedOption === correctOption);
      resolve(isAnswerCorrect);
    }, 400);
  });
}
