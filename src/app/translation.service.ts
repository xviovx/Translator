import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  async translate(text: string, targetLang: string): Promise<string> {
    try {
      const apiKey = '[insert API key here]';
      const url = `https://translation.googleapis.com/language/translate/v2?target=${targetLang}&key=${apiKey}&q=${text}`;
  
      const response = await axios.post(url);
      return response.data.data.translations[0].translatedText;
    } catch (error: any) {
      console.error("Error in TranslationService:", error, error.response ? error.response.data : 'No additional error data');
      throw error;
    }    
  }  
}
