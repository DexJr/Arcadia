import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html", [], "/js/galerie.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", ["client", "admin"]),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html", ["client", "admin"]),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html", ["client"]),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html", ["client"]),
    new Route("/activite", "Activités", "/pages/activite.html", []),
    new Route("/carte", "Carte du zoo", "/pages/carte.html", []),
    new Route("/habitat", "Habitat", "/pages/habitat.html", []),
    new Route("/veto", "Espace vétérinaires", "/pages/veto.html", ["admin"]),
    new Route("/tarif", "Tarifs", "/pages/tarif.html", []),
    new Route("/avis", "Tarifs", "/pages/avis.html", []),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
