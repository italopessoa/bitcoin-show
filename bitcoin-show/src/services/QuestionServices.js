export function checkAnswerService(correctOption, selectedOption) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if(selectedOption === undefined || selectedOption < 1) {
          reject('Select an option!');
        }
        let isAnswerCorrect = (selectedOption === correctOption)
        resolve(isAnswerCorrect);
      }, 400);
    });
  }