import { Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";
import { Button } from "primeng/button";

import NavbarComponent from "@app/components/navbar.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [NavbarComponent, RouterLink, NgOptimizedImage, Button],
	templateUrl: './_index.html',
})
export default class HomePage {
	project = signal<any>(null);

	skill = signal<any>(null);

	["/projects"]: any = ""; // Auto-injected
	tag: any = ""; // Auto-injected
	private router = inject(Router);

	// Hero Section Data
	heroTitle = "Building Digital Experiences";
	heroSubtitle =
		"I am a passionate Full Stack Developer crafting modern web applications with Angular, Analog, and Node.js.";

	// Skills Data
	skills = [
		{ name: "Angular", icon: "pi pi-android", level: 95 },
		{ name: "TypeScript", icon: "pi pi-code", level: 90 },
		{ name: "Tailwind CSS", icon: "pi pi-palette", level: 85 },
		{ name: "Node.js", icon: "pi pi-server", level: 80 },
		{ name: "AnalogJS", icon: "pi pi-bolt", level: 88 },
		{ name: "PrimeNG", icon: "pi pi-prime", level: 92 },
	];

	// Featured Projects Data
	featuredProjects = [
		{
			title: "E-Commerce Platform",
			slug: "ecommerce-platform",
			description:
				"A full-featured shopping cart with payment integration and admin dashboard.",
			tags: ["Angular", "Node.js", "Stripe"],
			image: "https://picsum.photos/seed/ecommerce/600/400.jpg",
		},
		{
			title: "Task Management App",
			slug: "task-manager",
			description:
				"Real-time collaborative task board with drag-and-drop functionality.",
			tags: ["AnalogJS", "Firebase", "Tailwind"],
			image: "https://picsum.photos/seed/taskmanager/600/400.jpg",
		},
		{
			title: "Portfolio v1",
			slug: "portfolio-v1",
			description:
				"My previous portfolio showcasing early works and experiments.",
			tags: ["HTML", "SCSS", "JavaScript"],
			image: "https://picsum.photos/seed/portfolio/600/400.jpg",
		},
	];

	// Navigation Methods
	navigateToProjects(): void {
		this.router.navigate(["/projects"]);
	}

	navigateToContact(): void {
		this.router.navigate(["/contact"]);
	}
}
