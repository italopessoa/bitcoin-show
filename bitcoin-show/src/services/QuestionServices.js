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

export function removeWrongOptionsService(currentQuestion, numberOfOptions) {
  const question = JSON.parse(JSON.stringify(currentQuestion));
  let x = numberOfOptions;
  while (x > 0) {
    const randomIndex = Math.floor(Math.random() * question.options.length);
    if (question.options[randomIndex].number !== question.answer.number) {
      question.options.splice(randomIndex, 1);
      x -= 1;
    }
  }
  return new Promise((resolve) => {
    resolve({ question });
  });
}
