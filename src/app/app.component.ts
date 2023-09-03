
import { Component } from '@angular/core';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '';
  translatedText = '';
  selectedLanguage = 'es'; 

  constructor(private translationService: TranslationService) {}

  async translate() {
    this.translatedText = await this.translationService.translate(this.text, this.selectedLanguage);
  }
}
