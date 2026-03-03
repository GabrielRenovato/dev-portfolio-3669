import { Button } from 'primeng/button';

// contact.page.ts
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [@angular/core, @angular/core, Button, FormsModule, NavbarComponent],
  templateUrl: './_contact.html'
})
export default class ContactPage {
  link = signal<any>(null);

  name = '';
  email = '';
  message = '';
  submitted = false;

  socialLinks = [
    { icon: 'pi pi-github', url: 'https://github.com', label: 'GitHub' },
    { icon: 'pi pi-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'pi pi-twitter', url: 'https://twitter.com', label: 'Twitter' },
    { icon: 'pi pi-envelope', url: 'mailto:hello@developer.com', label: 'Email' }
  ];

  onSubmit() {
    if (this.name && this.email && this.message) {
      this.submitted = true;
      // Simulate API call
      setTimeout(() => {
        this.submitted = false;
        this.name = '';
        this.email = '';
        this.message = '';
      }, 3000);
    }
  }
}