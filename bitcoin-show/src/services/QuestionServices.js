export function checkAnswerService(correctOptionNumber, selectedOptionNumber) {
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

export function removeWrongOptionsService(question, numberOfOptions) {
  question.options = question.options.filter(item => item.number === question.answer.number);
  return new Promise((resolve, reject) => {
    resolve({ question });
  });
}
