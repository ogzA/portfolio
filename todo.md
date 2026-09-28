# Portfolio

Angular + SCSS. Hover- und Animationsdetails im Figma-Prototyp-Modus checken.

## 1. Setup

- [x] `ng new portfolio --style=scss --skip-tests`
- [x] Components: header, hero, about, skills, projects, project-dialog, testimonials, contact, footer, legal-notice
- [ ] Farben, Schriftgrößen und Abstände aus Figma übernehmen, in `_variables.scss` ablegen
- [ ] Fonts lokal einbinden, nicht über das Google Fonts CDN (DSGVO)
- [ ] Icons als SVG exportieren, dazu Projektbilder und Foto
- [ ] Eigenes Logo erstellen
- [ ] Globale Styles: Reset, Hintergrund, Container max-width, Abstände zwischen den Sections
- [ ] ngx-translate einrichten, Texte von Anfang an in `en.json` / `de.json` schreiben (wenn man das ans Ende schiebt, muss man jede Datei nochmal anfassen)

## 2. Header

- [ ] Logo, Navigation (About me, Skills, Projects)
- [ ] EN/DE-Toggle, aktive Sprache hervorgehoben, Auswahl im localStorage speichern
- [ ] Links scrollen zur jeweiligen Section
- [ ] Hover-Effekt für die Links

## 3. Hero

- [ ] Grüner Gradient im Hintergrund
- [ ] "Frontend Developer", Name, zwei Buttons
- [ ] Check my work → Projects, Contact me → Contact
- [ ] Links Pfeil nach unten mit vertikaler Linie, Klick scrollt zu About
- [ ] Rechts E-Mail vertikal (`writing-mode`), GitHub- und LinkedIn-Icons, vertikale Linie
- [ ] Schräges Band unten mit Laufschrift
  - Band leicht gedreht, Überstand mit `overflow: hidden` abschneiden
  - Inhalt zweimal nebeneinander, `translateX` bis `-50%`, dann springt die Schleife nicht
- [ ] Hover für Buttons und Icons

## 4. About me

- [ ] Foto (Graustufen) mit Karte daneben
- [ ] 3 Punkte mit Icons (Standort, Lernbereitschaft, Problemlösung)
- [ ] Platzhaltertexte durch eigene Texte ersetzen

## 5. Skills

- [ ] Linke Karte: Skill-Set-Text, "You need another skill?", Let's-Talk-Button (→ Contact)
- [ ] Rechts Icon-Grid mit 4 Spalten, Skills kommen aus einem Array
- [ ] Hover-Animation für die Icons

## 6. Projects

- [ ] Überschrift, Beschreibung, Projektzeilen (Name links, Technologien rechts, Trennlinien dazwischen)
- [ ] Projektdaten an einer Stelle sammeln: Name, Beschreibung, Technologien, Bild, GitHub- und Live-Link
- [ ] Hover auf Zeile: Farbwechsel und Vorschaubild des Projekts
- [ ] Klick auf eine Zeile öffnet den Dialog

### Projekt-Dialog

- [ ] Nummer, Titel, Beschreibung, Technologie-Icons, GitHub / Live Test Buttons, Bild
- [ ] Schließen per X, Klick auf Backdrop, ESC
- [ ] Seite im Hintergrund nicht scrollbar, solange der Dialog offen ist
- [ ] Next project springt nach dem letzten wieder zum ersten

## 7. Testimonials

- [ ] Karte: Anführungszeichen, Text, Name und Rolle
- [ ] Mittlere Karte aktiv und gefüllt, die seitlichen blass und am Rand abgeschnitten
- [ ] Wechsel über Pfeile und Punkte, Endlosschleife
- [ ] Slide-Animation
- [ ] Echte Feedbacks von den Teampartnern einholen

## 8. Contact

- [ ] Links Texte, rechts Formular (Name, E-Mail, Nachricht)
- [ ] Validierung mit Reactive Forms, Fehlermeldungen
- [ ] Ohne Häkchen bei Privacy Policy kein Absenden, Button disabled
- [ ] Mailversand (POST mit HttpClient)
- [ ] Erfolgs- / Fehlermeldung, Formular danach zurücksetzen
- [ ] Styles für Input-Focus und Button-Hover

## 9. Footer

- [ ] Logo, Rolle und Stadt, Copyright, Links (GitHub, LinkedIn, E-Mail, Legal Notice)
- [ ] Copyright-Jahr dynamisch

## 10. Seiten und Routing

- [ ] Legal-Notice-Seite
- [ ] Privacy-Policy-Seite, Link an der Checkbox führt dorthin
- [ ] Header und Footer auch auf diesen Seiten, Logo führt zur Startseite
- [ ] Anchor-Scrolling über `withInMemoryScrolling({ anchorScrolling: 'enabled' })`
- [ ] Unbekannte Routes auf die Startseite umleiten

## 11. Responsive

- [ ] Breakpoints festlegen
- [ ] Burger-Menü auf Mobile
- [ ] Mobile Ansicht für Hero, Skills-Grid, Projektliste und Dialog
- [ ] Bis 320px kein horizontales Scrollen

## 12. Letzte Checks

- [ ] Hover-Effekte einzeln mit dem Prototyp vergleichen
- [ ] Fehlen in einer der beiden Sprachen Texte?
- [ ] Funktionieren alle Links (GitHub, Live Test, Social Media, E-Mail)?
- [ ] Chrome, Firefox, Safari
- [ ] Lighthouse, Bilder komprimieren
- [ ] Favicon, Title, Meta-Description
- [ ] Deploy
- [ ] README
