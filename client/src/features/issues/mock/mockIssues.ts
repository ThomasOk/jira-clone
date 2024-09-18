import { Issue } from "../types/issue.types";
import { ISSUE_STATUSES } from "../constants/issueStatuses";

export const mockIssues: Issue[] = [
	{
		id: "1",
		title: "Implémenter la fonctionnalité de connexion",
		description:
			"Créer un formulaire de connexion et gérer l'authentification des utilisateurs",
		status: ISSUE_STATUSES.TODO,
		assignee: "Alice Johnson",
		creator: "Bob Smith",
		createdAt: new Date("2023-05-10"),
		updatedAt: new Date("2023-05-10"),
		priority: "high",
	},
	{
		id: "2",
		title: "Corriger le bug d'affichage sur la page d'accueil",
		description:
			"Le carrousel ne s'affiche pas correctement sur les appareils mobiles",
		status: ISSUE_STATUSES.IN_PROGRESS,
		assignee: "Charlie Brown",
		creator: "Alice Johnson",
		createdAt: new Date("2023-05-12"),
		updatedAt: new Date("2023-05-15"),
		priority: "medium",
	},
	{
		id: "3",
		title: "Optimiser les performances de la recherche",
		description:
			"La recherche est lente pour les grandes bases de données. Implémenter l'indexation.",
		status: ISSUE_STATUSES.REVIEW,
		assignee: "David Wilson",
		creator: "Eve Taylor",
		createdAt: new Date("2023-05-14"),
		updatedAt: new Date("2023-05-18"),
		priority: "high",
	},
	{
		id: "4",
		title: "Ajouter des tests unitaires pour le module de paiement",
		description: "Augmenter la couverture de tests pour le module de paiement",
		status: ISSUE_STATUSES.TODO,
		assignee: "Frank Miller",
		creator: "Grace Lee",
		createdAt: new Date("2023-05-16"),
		updatedAt: new Date("2023-05-16"),
		priority: "low",
	},
	{
		id: "5",
		title: "Mettre à jour la documentation API",
		description:
			"La documentation est obsolète. Mettre à jour pour refléter les changements récents.",
		status: ISSUE_STATUSES.DONE,
		assignee: "Helen Davis",
		creator: "Ian Clark",
		createdAt: new Date("2023-05-08"),
		updatedAt: new Date("2023-05-20"),
		priority: "medium",
	},
];
