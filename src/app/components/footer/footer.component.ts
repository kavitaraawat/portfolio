import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/kavita-rawat-271a38422/' },
    { name: 'GitHub', icon: '🐙', url: 'https://github.com/kavitaraawat' },
    { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/kavitaraawat' },
    { name: 'Email', icon: '📧', url: 'mailto:kavita.rawat@myemail.indwes.edu' }
  ];
}
