const asset = (path: string) => `${import.meta.env.BASE_URL}assets/images/${path}`;

// Real product interfaces, framed in the same light as their project identity.
export const projectScenes: Record<string, { image: string; light: string; secondary: string; alt: { es: string; en: string } }> = {
  wikilol: { image: asset("wikilol/01-search.png"), light: "#ffbe64", secondary: "#a475ff", alt: { es: "La interfaz real de wikiLoL, con búsqueda de jugadores y archivo de campeones", en: "The real wikiLoL interface, with player search and champion archive" } },
  "blog-de-viajes": { image: asset("blog-de-viajes-preview.jpg"), light: "#ffd651", secondary: "#78aebb", alt: { es: "La portada de Blog de Viajes con su paisaje y planificador de rutas", en: "Blog de Viajes home, featuring its landscape and route planner" } },
  huellas: { image: asset("huellas/care-agenda.jpg"), light: "#b5d79b", secondary: "#64a8a4", alt: { es: "La agenda de cuidados de mascotas de Huellas", en: "Huellas pet care agenda" } },
  pokeshop: { image: asset("pokeshop/home.png"), light: "#f5ce57", secondary: "#ea6f78", alt: { es: "La portada de PokeShop con los iniciales de Kanto", en: "PokeShop home with the Kanto starters" } },
};
