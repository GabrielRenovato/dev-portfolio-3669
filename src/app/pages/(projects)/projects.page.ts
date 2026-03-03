import { Chart } from "primeng/chart";
import { Chip } from "primeng/chip";
import { Card } from "primeng/card";
import { Button } from "primeng/button";
import { Component, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

@Component({
	selector: "app-projects",
	standalone: true,
	imports: [RouterLink, NgOptimizedImage, NavbarComponent, Card, Button, Chip],
	templateUrl: './_projects.html',
})
export default class ProjectsPage {
	project = signal<any>(null);

	tag: any = ""; // Auto-injected
	projects = signal<Project[]>([
		{
			id: 1,
			title: "E-Commerce Dashboard",
			description:
				"A comprehensive dashboard for managing online store inventory, sales analytics, and customer data with real-time updates.",
			image: "https://picsum.photos/seed/ecommerce/600/400.jpg",
			tags: ["Angular", "PrimeNG", "RxJS"],
			slug: "ecommerce-dashboard",
			githubUrl: "#",
			demoUrl: "#",
		},
		{
			id: 2,
			title: "Task Flow Manager",
			description:
				"Collaborative task management application featuring drag-and-drop boards, team assignments, and deadline tracking.",
			image: "https://picsum.photos/seed/taskflow/600/400.jpg",
			tags: ["AnalogJS", "Tailwind", "NestJS"],
			slug: "task-flow-manager",
			githubUrl: "#",
			demoUrl: "#",
		},
		{
			id: 3,
			title: "Weather Analytics",
			description:
				"Visual weather forecasting tool providing historical data analysis and predictive modeling using external APIs.",
			image: "https://picsum.photos/seed/weather/600/400.jpg",
			tags: ["TypeScript", "D3.js", "REST API"],
			slug: "weather-analytics",
			githubUrl: "#",
			demoUrl: "#",
		},
		{
			id: 4,
			title: "Social Media Connector",
			description:
				"A unified platform to schedule posts and analyze engagement across multiple social media channels.",
			image: "https://picsum.photos/seed/social/600/400.jpg",
			tags: ["Angular", "Firebase", "OAuth"],
			slug: "social-connector",
			githubUrl: "#",
			demoUrl: "#",
		},
		{
			id: 5,
			title: "Crypto Portfolio Tracker",
			description:
				"Real-time cryptocurrency portfolio tracker with price alerts, charting, and tax export capabilities.",
			image: "https://picsum.photos/seed/crypto/600/400.jpg",
			tags: ["React", "WebSockets", "Chart.js"],
			slug: "crypto-tracker",
			githubUrl: "#",
			demoUrl: "#",
		},
		{
			id: 6,
			title: "AI Chat Interface",
			description:
				"Modern chat interface integrating with LLMs, featuring markdown support, code highlighting, and chat history.",
			image: "https://picsum.photos/seed/ai-chat/600/400.jpg",
			tags: ["Angular", "OpenAI API", "Signals"],
			slug: "ai-chat-interface",
			githubUrl: "#",
			demoUrl: "#",
		},
	]);

	getSeverity(
		tag: string,
	):
		| "success"
		| "secondary"
		| "info"
		| "warn"
		| "danger"
		| "contrast"
		| "help" {
		switch (tag.toLowerCase()) {
			case "angular":
			case "analogjs":
			case "typescript":
				return "danger";
			case "primeng":
			case "tailwind":
				return "success";
			case "rxjs":
			case "d3.js":
				return "info";
			case "nestjs":
			case "firebase":
				return "warn";
			default:
				return "secondary";
		}
	}
}

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	tags: string[];
	slug: string;
	githubUrl: string;
	demoUrl: string;
}
