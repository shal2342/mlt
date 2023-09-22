
document.addEventListener('DOMContentLoaded', function () {
  const inputText = document.getElementById('inputText');
  const translateButton = document.getElementById('translateButton');
  const translationResult = document.getElementById('translationResult');

  translateButton.addEventListener('click', function () {
    const sourceText = inputText.value.trim().toLowerCase(); // Convert to lowercase
    const targetLanguage = 'hi'; // Hindi

    const translationResources = {
      "hello, world!": "नमस्ते, दुनिया!",
      "translate me": "मुझे अनुवाद करो",
      "good morning": "सुप्रभात",
      "thank you": "धन्यवाद",
      "goodbye": "अलविदा",
      "yes": "हाँ",
      "no": "नहीं",
      "please": "कृपया",
      "sorry": "माफ़ करना",
      "excuse me": "माफ़ कीजिए",
      "i love you": "मैं तुमसे प्यार करता/करती हूँ",
      "what's your name?": "आपका नाम क्या है?",
      "my name is...": "मेरा नाम है...",
      "i don't understand": "मुझे समझ में नहीं आया",
      "where is the restroom?": "शौचालय कहाँ है?",
      // Add more vocabulary here
    };

    const translatedText = translationResources[sourceText];
    if (translatedText) {
      translationResult.textContent = translatedText;
    } else {
      translationResult.textContent = 'Translation not found';
    }
  });
});
