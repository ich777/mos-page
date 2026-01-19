// Einfaches i18n-System für MOS Landing Page
//
// NEUE SPRACHE HINZUFÜGEN:
// 1. Sprache in 'languages' Objekt hinzufügen (oben)
// 2. Übersetzungen in 'translations' Objekt hinzufügen (unten)
// 3. Fertig! Das System erkennt die neue Sprache automatisch.
//
// Beispiel für Französisch:
//   languages: fr: { name: 'Français', code: 'FR' }
//   translations: fr: { 'nav.features': 'Fonctionnalités', ... }

// ============================================================
// IMPRESSUM / DATENSCHUTZ - HIER DEINE DATEN EINTRAGEN:
// ============================================================
const LEGAL_INFO = {
  name: 'Christoph Hummer',      // z.B. 'Max Mustermann'
  street: 'Santk Joahnnesstraße 40/1', // z.B. 'Musterstraße 123'
  city: '3293 Lunz am See',             // z.B. '12345 Musterstadt'
  country: 'Österreich',
  email: 'admin@minenet.at',         // z.B. 'kontakt@example.de'
};
// ============================================================

// Verfügbare Sprachen mit Anzeigenamen
const languages = {
  de: { name: 'Deutsch', code: 'DE' },
  en: { name: 'English', code: 'EN' },
  // Neue Sprachen einfach hier hinzufügen:
  // fr: { name: 'Français', code: 'FR' },
  // es: { name: 'Español', code: 'ES' },
};

const translations = {
  de: {
    // Meta
    'meta.title': 'MOS – Web UI für Server, Storage, Services & Virtualisierung',
    'meta.description': 'MOS ist eine moderne Web-Oberfläche für Monitoring, Storage/Shares, Benutzer, Services, Docker/LXC/VMs, Plugins, Benachrichtigungen und Systemeinstellungen – schnell, übersichtlich und self-hosted.',
    'meta.ogDescription': 'Moderne Web-Oberfläche für Monitoring, Storage/Shares, Benutzer, Services, Docker/LXC/VMs, Plugins, Benachrichtigungen und Settings.',
    
    // Brand
    'brand.alt': 'MOS',
    
    // Navigation
    'nav.ariaLabel': 'Hauptnavigation',
    'nav.features': 'Features',
    'nav.modules': 'Bereiche',
    'nav.api': 'API',
    'nav.opensource': 'Open Source',
    'nav.usecases': 'Use Cases',
    'nav.security': 'Security',
    'nav.faq': 'FAQ',
    
    // Header
    'header.theme': 'Theme',
    'header.theme.ariaLabel': 'Theme umschalten',
    'header.theme.title': 'Theme',
    'header.language.ariaLabel': 'Sprache umschalten',
    'header.language.title': 'Sprache',
    'header.getStarted': 'Loslegen',
    
    // Hero
    'hero.kicker': 'Self-hosted · Schnell · Übersichtlich',
    'hero.title': 'Deine zentrale Web-Oberfläche für MOS.',
    'hero.lead': 'MOS bündelt Monitoring, Storage & Shares, Benutzerverwaltung, Benachrichtigungen, Webterminal, Services sowie Docker/LXC/VMs – ergänzt durch Plugins und Settings.',
    'hero.chip1.strong': 'Modernes UI',
    'hero.chip1.text': 'schnell & konsistent',
    'hero.chip2.strong': 'Modernes API',
    'hero.chip2.text': 'REST + WebSocket',
    'hero.chip3.strong': 'Open Source',
    'hero.chip3.text': 'AGPLv3',
    'header.language': 'DE',
    'hero.docs': 'Dokumentation',
    'hero.bullet1': 'System- & Hardware-Infos (CPU/RAM/Disks/Sensoren)',
    'hero.bullet2': 'Storage, Pools & Shares – zentral verwalten',
    'hero.bullet3': 'Docker/LXC/VM – je nach aktivem Service sichtbar',
    'hero.bullet4': 'Benachrichtigungen in Echtzeit',
    'hero.bullet5': 'Webterminal & Tools für schnelle Aktionen',
    'hero.screenshot.alt': 'MOS Web UI Screenshot',
    
    // Lightbox
    'lightbox.close': 'Schließen',
    'lightbox.imageAlt': 'MOS Web UI Screenshot vergrößert',
    
    // Features
    'features.monitoring.title': 'Monitoring & Status',
    'features.monitoring.text': 'CPU, RAM, Disks, Temperaturen, Netz – kompakt und direkt erreichbar.',
    'features.storage.title': 'Storage, Pools & Shares',
    'features.storage.text': 'Disks und Pools überblicken, Shares verwalten – ohne den Kontext zu verlieren.',
    'features.users.title': 'Benutzer & Profil',
    'features.users.text': 'Benutzerverwaltung, Profil, Sprache und UI-Einstellungen zentral in einer Oberfläche.',
    'features.containers.title': 'Container & Virtualisierung',
    'features.containers.text': 'Docker, LXC und VMs im Zugriff – abhängig davon, welche MOS-Services aktiv sind.',
    'features.terminal.title': 'Webterminal & Tools',
    'features.terminal.text': 'Schnelle Checks und Aktionen direkt im Browser – ohne ständig zwischen Tools zu wechseln.',
    'features.notifications.title': 'Benachrichtigungen',
    'features.notifications.text': 'Wichtige Events in Echtzeit – mit Badge und Toaster nach Priorität.',
    'features.plugins.title': 'Plugins & Erweiterbarkeit',
    'features.plugins.text': 'Die Oberfläche bleibt schlank – zusätzliche Funktionen kommen modular dazu.',
    'features.settings.title': 'Settings & Services',
    'features.settings.text': 'System- und Service-Einstellungen gebündelt: System, Netzwerk, Logs, Token und mehr.',
    'features.i18n.title': 'Mehrsprachig & Theme',
    'features.i18n.text': 'UI-Texte per i18n sowie Hell/Dunkel und Farben – passend zu deinem Setup.',
    
    // Modules
    'modules.dashboard.title': 'Dashboard',
    'modules.dashboard.text': 'Systemübersicht, schnelle Kacheln und zentrale Statusanzeigen.',
    'modules.disks.title': 'Disks · Pools · Shares',
    'modules.disks.text': 'Speicher, Pools, Freigaben und related Views übersichtlich gebündelt.',
    'modules.users.title': 'Users',
    'modules.users.text': 'Benutzerverwaltung und Zugänge in der Web-UI.',
    'modules.docker.title': 'Docker',
    'modules.docker.text': 'Container-Views (Compose/Create/Change) – nur sichtbar, wenn Docker läuft.',
    'modules.lxc.title': 'LXC',
    'modules.lxc.text': 'Container-Verwaltung für LXC – je nach aktiviertem Service.',
    'modules.vm.title': 'VM',
    'modules.vm.text': 'VM-Übersichten und Service-Views – wenn die VM-Komponente aktiv ist.',
    'modules.webterminal.title': 'Webterminal',
    'modules.webterminal.text': 'Terminal im Browser, inklusive Popup-Variante für schnelle Aktionen.',
    'modules.plugins.title': 'Plugins',
    'modules.plugins.text': 'Plugin-Liste und Plugin-Views – Erweiterungen bleiben modular.',
    'modules.hub.title': 'MOS Hub & Remote Mounting',
    'modules.hub.text': 'Zusatzmodule wie Hub/Remote-Mounting erscheinen, wenn sie aktiv sind.',
    
    // API
    'api.rest.title': 'REST-first',
    'api.rest.text': 'Klare HTTP-Endpoints für Auth, Systeminfos, Services, Storage, User und vielem mehr.',
    'api.websocket.title': 'Realtime per WebSocket',
    'api.websocket.text': 'Live-Events wie Notifications funktionieren in Echtzeit – ohne Polling-Stress.',
    'api.integration.title': 'Saubere Integration',
    'api.integration.text': 'Ideal für Automationen, eigene Tools oder externe Clients – je nach Setup.',
    'api.note': 'Hinweis: Details hängen von Version/Installation ab. Die UI nutzt API-Routen unter /api/v1 und einen Notification-WebSocket.',
    
    // Open Source
    'opensource.license.title': 'Lizenz',
    'opensource.license.text': 'MOS ist (und bleibt) Open Source und steht unter der GNU AGPLv3.',
    'opensource.license.link': 'Lizenz anzeigen',
    'opensource.contribute.title': 'Mitmachen',
    'opensource.contribute.text': 'Feedback, Issues und Beiträge helfen, MOS besser zu machen.',
    
    // Use Cases
    'usecases.nas.title': 'Homeserver / NAS',
    'usecases.nas.item1': 'Ressourcen und Speicherpools schnell prüfen',
    'usecases.nas.item2': 'Shares/Users im Blick behalten',
    'usecases.nas.item3': 'Remote Mounts und Hub-Services',
    'usecases.dev.title': 'Dev / Lab',
    'usecases.dev.item1': 'Docker/LXC/VMs an einem Ort',
    'usecases.dev.item2': 'Webterminal für schnelle Checks',
    'usecases.dev.item3': 'Plugins für projektspezifische Aufgaben',
    
    // Security
    'security.auth.title': 'Auth',
    'security.auth.text': 'Login-Flow mit Token-basiertem Zugriff (ideal hinter HTTPS / Reverse Proxy).',
    'security.privilege.title': 'Least Privilege',
    'security.privilege.text': 'Nur das freigeben, was benötigt wird; API-Zugriffe sauber segmentieren.',
    'security.updates.title': 'Updates',
    'security.updates.text': 'Regelmäßig aktualisieren und Logs/Benachrichtigungen ernst nehmen.',
    
    // FAQ
    'faq.what.title': 'Was ist MOS?',
    'faq.what.text': 'MOS ist eine webbasierte Verwaltungsoberfläche für Server/Systeme: Monitoring, Storage, Benutzerverwaltung, Services, Container/VMs, Notifications und Tools – als Client zur MOS-API.',
    'faq.services.title': 'Welche Dienste und Plattformen werden unterstützt?',
    'faq.services.text': 'MOS ist service‑orientiert: Dashboard, Disks/Pools/Shares, Users, Docker, LXC, VM, Webterminal und optionale Module (z.B. Hub/Remote Mounting). Sichtbarkeit richtet sich nach aktiven Services.',
    'faq.install.title': 'Wie installiere und betreibe ich MOS?',
    'faq.install.text': 'Übliche Deploys laufen als Web‑UI hinter HTTPS / Reverse Proxy. Die UI selbst ist statisch; sie kommuniziert mit einer MOS‑Backend‑API (z. B. /api/v1) und einem Notification‑WebSocket.',
    'faq.security.title': 'Wie wird Zugriff und Sicherheit gehandhabt?',
    'faq.security.text': 'Auth erfolgt tokenbasiert; Betrieb hinter TLS und Reverse Proxy wird empfohlen. Prinzipien: Least Privilege, regelmäßige Updates und Monitoring von Logs/Notifications.',
    'faq.plugins.title': 'Wie funktionieren Plugins und Erweiterungen?',
    'faq.plugins.text': 'Funktionen bleiben modular: Plugins erweitern Views und API‑Funktionen. Die UI zeigt nur registrierte/aktivierte Plugins und Module an.',
    'faq.updates.title': 'Wie bekomme ich Updates und pflege MOS?',
    'faq.updates.text': 'Updates betreffen Backend und UI getrennt. Folge dem Projekt‑Repo für Releases.',
    'faq.opensource.title': 'Ist MOS Open Source?',
    'faq.opensource.text': 'Ja, MOS ist (und bleibt) Open Source unter der GNU AGPLv3 (siehe LICENSE im Repo).',
    'faq.help.title': 'Wo finde ich Hilfe oder möchte beitragen?',
    'faq.help.text': 'Issues, PRs und Diskussionsbeiträge über das Projekt‑Repository; für Installationsfragen sind Readme/Docs und Community‑Kanäle die erste Anlaufstelle.',
    
    // Sections
    'section.features.title': 'Features, die im Alltag zählen',
    'section.features.subtitle': 'MOS ist mehr als Monitoring: es ist die Schaltzentrale für dein Setup.',
    'section.modules.title': 'Bereiche in MOS',
    'section.modules.subtitle': 'Ein Überblick über die wichtigsten Module, die du in der Navigation findest.',
    'section.api.title': 'Modernes API',
    'section.api.subtitle': 'MOS ist nicht nur UI: es ist eine Plattform – die UI ist „nur" ein Client.',
    'section.opensource.title': 'Open Source',
    'section.opensource.subtitle': 'Transparenz, Community und Kontrolle über dein eigenes Setup.',
    'section.usecases.title': 'Typische Use Cases',
    'section.usecases.subtitle': 'Von Homeserver bis kleines Rack – MOS passt sich an.',
    'section.security.title': 'Security & Zugriff',
    'section.security.subtitle': 'Ein paar Grundprinzipien für sicheren Betrieb.',
    'section.faq.title': 'FAQ',
    'section.faq.subtitle': 'Kurz beantwortet, damit du direkt starten kannst.',
    
    // Footer
    'footer.scrollTop': 'Nach oben',
    'footer.docs': 'Docs',
    'footer.license': 'AGPLv3',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    
    // Modal
    'modal.close': 'Schließen',
    
    // Impressum
    'imprint.title': 'Impressum',
    'imprint.responsible.title': 'Angaben gemäß § 5 ECG',
    'imprint.responsible.name': LEGAL_INFO.name,
    'imprint.responsible.address': LEGAL_INFO.street,
    'imprint.responsible.city': LEGAL_INFO.city,
    'imprint.responsible.country': LEGAL_INFO.country,
    'imprint.contact.title': 'Kontakt',
    'imprint.contact.email': 'E-Mail: ' + LEGAL_INFO.email,
    'imprint.disclaimer.title': 'Haftungsausschluss',
    'imprint.disclaimer.content.title': 'Haftung für Inhalte',
    'imprint.disclaimer.content.text': 'Die Inhalte dieser Seite wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.',
    'imprint.disclaimer.links.title': 'Haftung für Links',
    'imprint.disclaimer.links.text': 'Diese Seite enthält Links zu externen Webseiten Dritter, auf deren Inhalte kein Einfluss besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.',
    
    // Datenschutz
    'privacy.title': 'Datenschutzerklärung',
    'privacy.overview.title': '1. Datenschutz auf einen Blick',
    'privacy.overview.text': 'Diese Website erhebt keine personenbezogenen Daten, verwendet keine Cookies und setzt keine Tracking-Tools ein.',
    'privacy.responsible.title': '2. Verantwortlicher',
    'privacy.responsible.name': LEGAL_INFO.name,
    'privacy.responsible.address': LEGAL_INFO.street,
    'privacy.responsible.city': LEGAL_INFO.city,
    'privacy.responsible.email': 'E-Mail: ' + LEGAL_INFO.email,
    'privacy.hosting.title': '3. Hosting',
    'privacy.hosting.text': 'Diese Website wird selbst gehostet. Bei jedem Zugriff können technische Informationen in Server-Logfiles gespeichert werden (IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser-Typ). Diese Daten dienen ausschließlich der Sicherheit und Fehleranalyse und werden nicht an Dritte weitergegeben. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb der Website).',
    'privacy.cloudflare.title': '4. Cloudflare',
    'privacy.cloudflare.text': 'Diese Website nutzt Cloudflare (Cloudflare, Inc.) als Sicherheits- und Performance-Dienst. Dabei werden Verbindungsdaten (z.B. IP-Adresse) über Cloudflare-Server geleitet. Cloudflare ist ein US-Unternehmen, das DSGVO-konforme Standardvertragsklauseln (SCCs) und ein Data Processing Addendum (DPA) anbietet. Weitere Informationen: https://www.cloudflare.com/de-de/privacypolicy/',
    'privacy.cookies.title': '5. Cookies',
    'privacy.cookies.text': 'Diese Website verwendet keine Cookies.',
    'privacy.localStorage.title': '6. Lokale Speicherung',
    'privacy.localStorage.text': 'Diese Website speichert ausschließlich technisch notwendige Einstellungen (Theme- und Sprachpräferenz) im lokalen Speicher Ihres Browsers (localStorage). Diese Daten werden nicht an Server übertragen und können jederzeit durch Löschen der Browser-Daten entfernt werden.',
    'privacy.external.title': '7. Externe Links',
    'privacy.external.text': 'Diese Website enthält Links zu externen Websites (z.B. GitHub). Beim Anklicken dieser Links verlassen Sie diese Website. Für die Datenschutzpraktiken dieser externen Seiten sind deren jeweilige Betreiber verantwortlich.',
    'privacy.rights.title': '8. Ihre Rechte',
    'privacy.rights.text': 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit. Bei Beschwerden können Sie sich an die zuständige Aufsichtsbehörde wenden.',
    
    // Skip link
    'skipLink': 'Zum Inhalt springen',
  },
  en: {
    // Meta
    'meta.title': 'MOS – Web UI for Servers, Storage, Services & Virtualization',
    'meta.description': 'MOS is a modern web interface for monitoring, storage/shares, users, services, Docker/LXC/VMs, plugins, notifications and system settings – fast, clear and self-hosted.',
    'meta.ogDescription': 'Modern web interface for monitoring, storage/shares, users, services, Docker/LXC/VMs, plugins, notifications and settings.',
    
    // Brand
    'brand.alt': 'MOS',
    
    // Navigation
    'nav.ariaLabel': 'Main navigation',
    'nav.features': 'Features',
    'nav.modules': 'Modules',
    'nav.api': 'API',
    'nav.opensource': 'Open Source',
    'nav.usecases': 'Use Cases',
    'nav.security': 'Security',
    'nav.faq': 'FAQ',
    
    // Header
    'header.theme': 'Theme',
    'header.theme.ariaLabel': 'Toggle theme',
    'header.theme.title': 'Theme',
    'header.language.ariaLabel': 'Toggle language',
    'header.language.title': 'Language',
    'header.getStarted': 'Get Started',
    
    // Hero
    'hero.kicker': 'Self-hosted · Fast · Clear',
    'hero.title': 'Your central web interface for MOS.',
    'hero.lead': 'MOS bundles monitoring, storage & shares, user management, notifications, web terminal, services as well as Docker/LXC/VMs – enhanced by plugins and settings.',
    'hero.chip1.strong': 'Modern UI',
    'hero.chip1.text': 'fast & consistent',
    'hero.chip2.strong': 'Modern API',
    'hero.chip2.text': 'REST + WebSocket',
    'hero.chip3.strong': 'Open Source',
    'hero.chip3.text': 'AGPLv3',
    'header.language': 'EN',
    'hero.docs': 'Documentation',
    'hero.bullet1': 'System & hardware info (CPU/RAM/Disks/Sensors)',
    'hero.bullet2': 'Storage, pools & shares – manage centrally',
    'hero.bullet3': 'Docker/LXC/VM – visible depending on active service',
    'hero.bullet4': 'Real-time notifications',
    'hero.bullet5': 'Web terminal & tools for quick actions',
    'hero.screenshot.alt': 'MOS Web UI Screenshot',
    
    // Lightbox
    'lightbox.close': 'Close',
    'lightbox.imageAlt': 'MOS Web UI Screenshot enlarged',
    
    // Features
    'features.monitoring.title': 'Monitoring & Status',
    'features.monitoring.text': 'CPU, RAM, disks, temperatures, network – compact and directly accessible.',
    'features.storage.title': 'Storage, Pools & Shares',
    'features.storage.text': 'Overview disks and pools, manage shares – without losing context.',
    'features.users.title': 'Users & Profile',
    'features.users.text': 'User management, profile, language and UI settings centrally in one interface.',
    'features.containers.title': 'Containers & Virtualization',
    'features.containers.text': 'Docker, LXC and VMs accessible – depending on which MOS services are active.',
    'features.terminal.title': 'Web Terminal & Tools',
    'features.terminal.text': 'Quick checks and actions directly in the browser – without constantly switching between tools.',
    'features.notifications.title': 'Notifications',
    'features.notifications.text': 'Important events in real-time – with badge and toaster by priority.',
    'features.plugins.title': 'Plugins & Extensibility',
    'features.plugins.text': 'The interface stays lean – additional features come modular.',
    'features.settings.title': 'Settings & Services',
    'features.settings.text': 'System and service settings bundled: system, network, logs, tokens and more.',
    'features.i18n.title': 'Multilingual & Theme',
    'features.i18n.text': 'UI texts via i18n as well as light/dark and colors – matching your setup.',
    
    // Modules
    'modules.dashboard.title': 'Dashboard',
    'modules.dashboard.text': 'System overview, quick tiles and central status displays.',
    'modules.disks.title': 'Disks · Pools · Shares',
    'modules.disks.text': 'Storage, pools, shares and related views bundled clearly.',
    'modules.users.title': 'Users',
    'modules.users.text': 'User management and access in the web UI.',
    'modules.docker.title': 'Docker',
    'modules.docker.text': 'Container views (Compose/Create/Change) – only visible when Docker is running.',
    'modules.lxc.title': 'LXC',
    'modules.lxc.text': 'Container management for LXC – depending on activated service.',
    'modules.vm.title': 'VM',
    'modules.vm.text': 'VM overviews and service views – when the VM component is active.',
    'modules.webterminal.title': 'Web Terminal',
    'modules.webterminal.text': 'Terminal in the browser, including popup variant for quick actions.',
    'modules.plugins.title': 'Plugins',
    'modules.plugins.text': 'Plugin list and plugin views – extensions remain modular.',
    'modules.hub.title': 'MOS Hub & Remote Mounting',
    'modules.hub.text': 'Additional modules like Hub/Remote Mounting appear when they are active.',
    
    // API
    'api.rest.title': 'REST-first',
    'api.rest.text': 'Clear HTTP endpoints for auth, system info, services, storage, users and much more.',
    'api.websocket.title': 'Realtime via WebSocket',
    'api.websocket.text': 'Live events like notifications work in real-time – without polling stress.',
    'api.integration.title': 'Clean Integration',
    'api.integration.text': 'Ideal for automation, own tools or external clients – depending on setup.',
    'api.note': 'Note: Details depend on version/installation. The UI uses API routes under /api/v1 and a notification WebSocket.',
    
    // Open Source
    'opensource.license.title': 'License',
    'opensource.license.text': 'MOS is (and remains) Open Source under the GNU AGPLv3.',
    'opensource.license.link': 'View license',
    'opensource.contribute.title': 'Contribute',
    'opensource.contribute.text': 'Feedback, issues and contributions help make MOS better.',
    
    // Use Cases
    'usecases.nas.title': 'Home Server / NAS',
    'usecases.nas.item1': 'Quickly check resources and storage pools',
    'usecases.nas.item2': 'Keep shares/users in view',
    'usecases.nas.item3': 'Remote mounts and hub services',
    'usecases.dev.title': 'Dev / Lab',
    'usecases.dev.item1': 'Docker/LXC/VMs in one place',
    'usecases.dev.item2': 'Web terminal for quick checks',
    'usecases.dev.item3': 'Plugins for project-specific tasks',
    
    // Security
    'security.auth.title': 'Auth',
    'security.auth.text': 'Login flow with token-based access (ideal behind HTTPS / reverse proxy).',
    'security.privilege.title': 'Least Privilege',
    'security.privilege.text': 'Only release what is needed; cleanly segment API access.',
    'security.updates.title': 'Updates',
    'security.updates.text': 'Update regularly and take logs/notifications seriously.',
    
    // FAQ
    'faq.what.title': 'What is MOS?',
    'faq.what.text': 'MOS is a web-based management interface for servers/systems: monitoring, storage, user management, services, containers/VMs, notifications and tools – as a client to the MOS API.',
    'faq.services.title': 'Which services and platforms are supported?',
    'faq.services.text': 'MOS is service-oriented: Dashboard, Disks/Pools/Shares, Users, Docker, LXC, VM, Web Terminal and optional modules (e.g. Hub/Remote Mounting). Visibility depends on active services.',
    'faq.install.title': 'How do I install and operate MOS?',
    'faq.install.text': 'Common deploys run as web UI behind HTTPS / reverse proxy. The UI itself is static; it communicates with a MOS backend API (e.g. /api/v1) and a notification WebSocket.',
    'faq.security.title': 'How is access and security handled?',
    'faq.security.text': 'Auth is token-based; operation behind TLS and reverse proxy is recommended. Principles: Least Privilege, regular updates and monitoring of logs/notifications.',
    'faq.plugins.title': 'How do plugins and extensions work?',
    'faq.plugins.text': 'Functions remain modular: plugins extend views and API functions. The UI only shows registered/activated plugins and modules.',
    'faq.updates.title': 'How do I get updates and maintain MOS?',
    'faq.updates.text': 'Updates affect backend and UI separately. Follow the project repo for releases.',
    'faq.opensource.title': 'Is MOS Open Source?',
    'faq.opensource.text': 'Yes, MOS is (and remains) Open Source under the GNU AGPLv3 (see LICENSE in repo).',
    'faq.help.title': 'Where can I find help or want to contribute?',
    'faq.help.text': 'Issues, PRs and discussion contributions via the project repository; for installation questions, readme/docs and community channels are the first point of contact.',
    
    // Sections
    'section.features.title': 'Features that matter in everyday use',
    'section.features.subtitle': 'MOS is more than monitoring: it\'s the control center for your setup.',
    'section.modules.title': 'Areas in MOS',
    'section.modules.subtitle': 'An overview of the most important modules you\'ll find in the navigation.',
    'section.api.title': 'Modern API',
    'section.api.subtitle': 'MOS is not just UI: it\'s a platform – the UI is "just" a client.',
    'section.opensource.title': 'Open Source',
    'section.opensource.subtitle': 'Transparency, community and control over your own setup.',
    'section.usecases.title': 'Typical Use Cases',
    'section.usecases.subtitle': 'From home server to small rack – MOS adapts.',
    'section.security.title': 'Security & Access',
    'section.security.subtitle': 'A few basic principles for secure operation.',
    'section.faq.title': 'FAQ',
    'section.faq.subtitle': 'Briefly answered so you can get started right away.',
    
    // Footer
    'footer.scrollTop': 'Scroll to top',
    'footer.docs': 'Docs',
    'footer.license': 'AGPLv3',
    'footer.imprint': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    
    // Modal
    'modal.close': 'Close',
    
    // Imprint (Legal Notice)
    'imprint.title': 'Legal Notice',
    'imprint.responsible.title': 'Information according to § 5 ECG',
    'imprint.responsible.name': LEGAL_INFO.name,
    'imprint.responsible.address': LEGAL_INFO.street,
    'imprint.responsible.city': LEGAL_INFO.city,
    'imprint.responsible.country': LEGAL_INFO.country,
    'imprint.contact.title': 'Contact',
    'imprint.contact.email': 'Email: ' + LEGAL_INFO.email,
    'imprint.disclaimer.title': 'Disclaimer',
    'imprint.disclaimer.content.title': 'Liability for Content',
    'imprint.disclaimer.content.text': 'The contents of this site have been created with the greatest care. However, no guarantee can be given for the correctness, completeness and timeliness of the content.',
    'imprint.disclaimer.links.title': 'Liability for Links',
    'imprint.disclaimer.links.text': 'This site contains links to external third-party websites over whose content we have no control. The respective provider is always responsible for the content of the linked pages.',
    
    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.overview.title': '1. Privacy at a Glance',
    'privacy.overview.text': 'This website does not collect personal data, does not use cookies and does not employ tracking tools.',
    'privacy.responsible.title': '2. Controller',
    'privacy.responsible.name': LEGAL_INFO.name,
    'privacy.responsible.address': LEGAL_INFO.street,
    'privacy.responsible.city': LEGAL_INFO.city,
    'privacy.responsible.email': 'Email: ' + LEGAL_INFO.email,
    'privacy.hosting.title': '3. Hosting',
    'privacy.hosting.text': 'This website is self-hosted. Technical information may be stored in server log files with each access (IP address, time, page accessed, browser type). This data is used exclusively for security and error analysis and is not shared with third parties. Processing is based on Art. 6 para. 1 lit. f GDPR (legitimate interest in secure website operation).',
    'privacy.cloudflare.title': '4. Cloudflare',
    'privacy.cloudflare.text': 'This website uses Cloudflare (Cloudflare, Inc.) as a security and performance service. Connection data (e.g. IP address) is routed through Cloudflare servers. Cloudflare is a US company that offers GDPR-compliant Standard Contractual Clauses (SCCs) and a Data Processing Addendum (DPA). More information: https://www.cloudflare.com/privacypolicy/',
    'privacy.cookies.title': '5. Cookies',
    'privacy.cookies.text': 'This website does not use cookies.',
    'privacy.localStorage.title': '6. Local Storage',
    'privacy.localStorage.text': 'This website only stores technically necessary settings (theme and language preference) in your browser\'s local storage (localStorage). This data is not transmitted to servers and can be removed at any time by clearing your browser data.',
    'privacy.external.title': '7. External Links',
    'privacy.external.text': 'This website contains links to external websites (e.g. GitHub). When clicking these links, you leave this website. The respective operators are responsible for the data protection practices of these external sites.',
    'privacy.rights.title': '8. Your Rights',
    'privacy.rights.text': 'You have the right to access, rectification, deletion and restriction of processing of your personal data, as well as the right to data portability. In case of complaints, you can contact the competent supervisory authority.',
    
    // Skip link
    'skipLink': 'Skip to content',
  }
};

// Einfache i18n-Funktion
function i18n(key, lang = 'de') {
  return translations[lang]?.[key] || key;
}

// Sprache setzen und alle Texte aktualisieren
function setLanguage(lang) {
  if (!translations[lang]) return;
  
  // Sprache in localStorage speichern
  localStorage.setItem('mos-landing-lang', lang);
  
  // HTML lang-Attribut aktualisieren
  document.documentElement.setAttribute('lang', lang);
  
  // Sprachumschalter-Button aktualisieren
  updateLanguageButton(lang);
  
  // Alle Elemente mit data-i18n durchgehen
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = i18n(key, lang);
    
    // Wenn es ein Input/Button/Textarea ist, value setzen, sonst textContent
    if (el.tagName === 'INPUT' || el.tagName === 'BUTTON' || el.tagName === 'TEXTAREA') {
      if (el.type === 'submit' || el.type === 'button' || el.tagName === 'BUTTON') {
        // Für Buttons: Nur textContent setzen, wenn keine verschachtelten Elemente vorhanden sind
        if (el.children.length === 0) {
          el.textContent = translation;
        } else {
          // Wenn verschachtelte Elemente vorhanden sind, nur den direkten Text ersetzen
          const textNodes = Array.from(el.childNodes).filter(n => n.nodeType === Node.TEXT_NODE);
          if (textNodes.length > 0) {
            textNodes[0].textContent = translation;
          }
        }
      } else {
        el.value = translation;
      }
    } else if (el.tagName === 'IMG' && el.hasAttribute('alt')) {
      el.alt = translation;
    } else if (el.tagName === 'STRONG' || el.tagName === 'EM' || el.tagName === 'SPAN') {
      // Für inline-Elemente: textContent setzen
      el.textContent = translation;
    } else {
      // Für Block-Elemente: textContent setzen (überschreibt verschachtelte Elemente)
      // Wenn verschachtelte Elemente mit data-i18n vorhanden sind, werden diese separat behandelt
      const hasNestedI18n = el.querySelector('[data-i18n]');
      if (!hasNestedI18n) {
        el.textContent = translation;
      }
    }
  });
  
  // title-Attribut aktualisieren
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    el.title = i18n(key, lang);
  });
  
  // aria-label aktualisieren
  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    el.setAttribute('aria-label', i18n(key, lang));
  });
  
  // placeholder aktualisieren
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = i18n(key, lang);
  });
  
  // content-Attribut aktualisieren (für meta-Tags)
  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const key = el.getAttribute('data-i18n-content');
    el.setAttribute('content', i18n(key, lang));
  });
  
  // alt-Attribut aktualisieren (für Bilder)
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    el.setAttribute('alt', i18n(key, lang));
  });
  
  // title-Tag aktualisieren
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const key = titleEl.getAttribute('data-i18n');
    titleEl.textContent = i18n(key, lang);
  }
  
  // document.title direkt aktualisieren (für Browser-Tab)
  const titleKey = document.querySelector('title[data-i18n]')?.getAttribute('data-i18n');
  if (titleKey) {
    document.title = i18n(titleKey, lang);
  }
}

// Verfügbare Sprachen als Array (für einfaches Durchlaufen)
function getAvailableLanguages() {
  return Object.keys(languages).filter(lang => translations[lang]);
}

// Nächste Sprache in der Liste finden
function getNextLanguage(currentLang) {
  const available = getAvailableLanguages();
  const currentIndex = available.indexOf(currentLang);
  const nextIndex = (currentIndex + 1) % available.length;
  return available[nextIndex];
}

// Browser-Sprache erkennen (berücksichtigt mehrere Sprachen und Fallbacks)
function detectBrowserLanguage() {
  const available = getAvailableLanguages();
  if (available.length === 0) return 'de'; // Fallback
  
  // 1. Alle Browser-Sprachen durchgehen (navigator.languages für mehrere Präferenzen)
  const browserLangs = navigator.languages || [navigator.language];
  
  for (const browserLang of browserLangs) {
    // Vollständigen Code prüfen (z.B. "en-US")
    const langCode = browserLang.split('-')[0].toLowerCase();
    if (available.includes(langCode)) {
      return langCode;
    }
    
    // Auch mit Unterstrich-Variante prüfen (z.B. "en_US")
    const langCodeAlt = browserLang.split('_')[0].toLowerCase();
    if (available.includes(langCodeAlt)) {
      return langCodeAlt;
    }
  }
  
  // 2. Fallback: System-Sprache (navigator.language)
  const systemLang = (navigator.language || '').split('-')[0].toLowerCase();
  if (available.includes(systemLang)) {
    return systemLang;
  }
  
  // 3. Fallback: Erste verfügbare Sprache (Standard: Deutsch)
  return available.includes('de') ? 'de' : available[0];
}

// Sprache beim Laden initialisieren
function initLanguage() {
  const stored = localStorage.getItem('mos-landing-lang');
  const available = getAvailableLanguages();
  
  // Wenn bereits eine Sprache gespeichert ist, diese verwenden
  if (stored && available.includes(stored)) {
    setLanguage(stored);
    return;
  }
  
  // Ansonsten Browser-Sprache erkennen
  const detectedLang = detectBrowserLanguage();
  setLanguage(detectedLang);
}

// Sprachumschalter-Text aktualisieren
function updateLanguageButton(lang) {
  const langBtn = document.querySelector('[data-action="toggle-language"] .hide-sm');
  if (langBtn && languages[lang]) {
    langBtn.textContent = languages[lang].code;
  }
}
