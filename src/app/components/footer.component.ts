import { Component } from "@angular/core";

@Component({
	selector: "app-footer",
	standalone: true,
	templateUrl: './_footer.html',
})
export default class FooterComponent {
	currentYear(): number {
		return new Date().getFullYear();
	}
}
