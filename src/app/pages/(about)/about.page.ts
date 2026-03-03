import { Component, computed, signal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Button } from "primeng/button";
import { Card } from "primeng/card";
import { Tag } from "primeng/tag";
import { Avatar } from "primeng/avatar";
import { Chip } from "primeng/chip";

@Component({
	selector: "app-about",
	standalone: true,
	imports: [RouterLink, Button, Card, Tag, Avatar, Chip],
	templateUrl: './_about.html',
})
export default class AboutPage {
	exp = signal<any>(null);

	skill = signal<any>(null);

	interest = signal<any>(null);

	developerName = "Alex Chen";
	developerTitle = "Full-Stack Developer";
	developerLocation = "San Francisco, CA";
	yearsExperience = 8;
	projectsCompleted = 150;
	cupsCoffee = 2847;

	bio = `Passionate developer with a love for creating elegant solutions to complex problems. 
         I specialize in building scalable web applications using modern technologies. 
         When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
         or sharing knowledge through blog posts and conference talks.`;

	skills = signal([
		{ name: "Angular", category: "frontend", level: 95 },
		{ name: "TypeScript", category: "frontend", level: 92 },
		{ name: "React", category: "frontend", level: 85 },
		{ name: "Node.js", category: "backend", level: 90 },
		{ name: "Python", category: "backend", level: 80 },
		{ name: "PostgreSQL", category: "database", level: 88 },
		{ name: "MongoDB", category: "database", level: 82 },
		{ name: "Docker", category: "devops", level: 78 },
		{ name: "AWS", category: "devops", level: 75 },
		{ name: "GraphQL", category: "backend", level: 85 },
	]);

	experiences = signal([
		{
			title: "Senior Software Engineer",
			company: "TechCorp Inc.",
			period: "2021 - Present",
			description:
				"Leading frontend architecture and mentoring junior developers on Angular best practices.",
		},
		{
			title: "Full-Stack Developer",
			company: "StartupXYZ",
			period: "2018 - 2021",
			description:
				"Built scalable microservices and responsive web applications from scratch.",
		},
		{
			title: "Frontend Developer",
			company: "Digital Agency",
			period: "2016 - 2018",
			description:
				"Created interactive UIs and improved website performance by 40%.",
		},
	]);

	interests = signal([
		{ icon: "pi-code", label: "Open Source" },
		{ icon: "pi-book", label: "Tech Blogs" },
		{ icon: "pi-users", label: "Mentoring" },
		{ icon: "pi-camera", label: "Photography" },
		{ icon: "pi-plane", label: "Traveling" },
	]);

	frontendSkills = computed(() =>
		this.skills().filter((s) => s.category === "frontend"),
	);

	backendSkills = computed(() =>
		this.skills().filter((s) => s.category === "backend"),
	);

	otherSkills = computed(() =>
		this.skills().filter(
			(s) => s.category === "database" || s.category === "devops",
		),
	);

	getSeverity(
		level: number,
	):
		| "success"
		| "secondary"
		| "info"
		| "warn"
		| "danger"
		| "contrast"
		| "help" {
		if (level >= 90) return "success";
		if (level >= 80) return "info";
		if (level >= 70) return "secondary";
		return "contrast";
	}
}
