from googletrans import Translator, LANGUAGES

def translate_text(text, target_language):
    try:
        translator = Translator()
        translated = translator.translate(text, src='auto', dest=target_language)
        return translated.text
    except Exception as e:
        return str(e)

if __name__ == "__main__":
    print("Supported languages:")
    for lang_code, lang_name in LANGUAGES.items():
        print(f"{lang_code}: {lang_name}")

    source_text = input("Enter the text to translate: ")
    target_language = input("Enter the target language code (e.g., 'es' for Spanish): ")

    translated_text = translate_text(source_text, target_language)
    print(f"Translation: {translated_text}")
