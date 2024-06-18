import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/activite", "Activités", "/pages/activite.html", []),
    new Route("/carte", "Carte du zoo", "/pages/carte.html", []),
    new Route("/habitat", "Habitat", "/pages/habitat.html", []),
    new Route("/veto", "Espace vétérinaires", "/pages/veto.html", []),
    new Route("/tarif", "Tarifs", "/pages/tarif.html", []),
    new Route("/avis", "Tarifs", "/pages/avis.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", []),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", []),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", []),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";