import { Component, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { Button } from "primeng/button";

@Component({
	selector: "app-navbar",
	standalone: true,
	templateUrl: './_navbar.html',
	imports: [RouterLink, RouterLinkActive, Button],
})
export default class NavbarComponent {
	["/"]: any = ""; // Auto-injected
	["/about"]: any = ""; // Auto-injected
	["/projects"]: any = ""; // Auto-injected
	["/contact"]: any = ""; // Auto-injected
	isMobileMenuOpen = signal(false);

	toggleMenu() {
		this.isMobileMenuOpen.update((v) => !v);
	}

	currentYear(): number {
		return new Date().getFullYear();
	}
}
