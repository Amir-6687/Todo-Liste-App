# Todo Liste App

Eine einfache Aufgabenverwaltungsanwendung (Todo List) mit React und Tailwind CSS. Diese Anwendung ermöglicht es Benutzern, ihre Aufgaben hinzuzufügen, zu bearbeiten, zu löschen und zu filtern.

## Funktionen

- **Aufgaben hinzufügen**: Benutzer können neue Aufgaben mit einem festgelegten Datum und einer Uhrzeit hinzufügen.
- **Aufgaben filtern**: Möglichkeit, Aufgaben nach Status (alle, erledigt, ausstehend) zu filtern.
- **Aufgaben löschen**: Benutzer können Aufgaben löschen.
- **Responsiv**: Das Design der Anwendung ist so gestaltet, dass es auf verschiedenen Geräten gut angezeigt wird.

## Voraussetzungen

Stellen Sie sicher, dass Sie die folgenden Voraussetzungen installiert haben:

- [Node.js](https://nodejs.org/) (Version 14 oder höher)
- [npm](https://www.npmjs.com/) (wird standardmäßig mit Node.js installiert)

## Installation

1. Klonen Sie dieses Repository:

   ```bash
   git clone https://github.com/benutzername/repo-name.git
   ```

2. Wechseln Sie in das Projektverzeichnis:

   ```bash
   cd repo-name
   ```

3. Installieren Sie die Abhängigkeiten:

   ```bash
   npm install
   ```

4. Starten Sie das Projekt:

   ```bash
   npm run dev
   ```

5. Öffnen Sie Ihren Browser und gehen Sie zu `http://localhost:3000`.

## Verwendung

- Um eine neue Aufgabe hinzuzufügen, geben Sie den Text der Aufgabe in das Eingabefeld ein, stellen Sie Datum und Uhrzeit ein und klicken Sie auf die Schaltfläche "+".
- Verwenden Sie die Filtertasten, um Aufgaben zu filtern.
- Um eine Aufgabe zu löschen, klicken Sie auf die Löschtaste (Mülltonnen-Symbol).

## Technologien

Dieses Projekt wurde mit den folgenden Technologien erstellt:

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Mitwirkung

Wenn Sie an diesem Projekt mitwirken möchten, folgen Sie bitte diesen Schritten:

1. Erstellen Sie einen Fork des Repositories.
2. Erstellen Sie einen neuen Branch für Ihre Änderungen:
   ```bash
   git checkout -b feature/IhreFunktion
   ```
3. Committen Sie Ihre Änderungen:
   ```bash
   git commit -m "Fügen Sie eine Funktion hinzu"
   ```
4. Kehren Sie zum Hauptbranch zurück:
   ```bash
   git checkout main
   ```
5. Pushen Sie Ihre Änderungen zum Hauptrepository:

   ```bash
   git push origin feature/IhreFunktion
   ```

6. Erstellen Sie einen Pull Request.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Informationen finden Sie in der Datei [LICENSE](LICENSE).

## Kontakt

Für Fragen oder Vorschläge können Sie mich kontaktieren:

- E-Mail: your-email@example.com
- [GitHub-Profil](https://github.com/your-username)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
