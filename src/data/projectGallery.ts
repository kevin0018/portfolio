import type {Language} from "./caseStudies";

type GalleryView = {
  title: Record<Language, string>;
  description: Record<Language, string>;
  alt: Record<Language, string>;
  image: string;
};
const asset = (path: string) => `${import.meta.env.BASE_URL}assets/images/${path}`;

export const projectGallery: Record<string, GalleryView[]> = {
  wikilol: [
    {title: {es: "Buscar jugadores", en: "Find players"}, description: {es: "Introduce un Riot ID y una región para consultar el perfil, los rangos y las maestrías de un jugador.", en: "Enter a Riot ID and region to look up a player’s profile, ranks, and champion masteries."}, alt: {es: "Búsqueda de jugadores en wikiLoL", en: "wikiLoL player search"}, image: asset("wikilol/01-search.png")},
    {title: {es: "Explorar campeones", en: "Explore champions"}, description: {es: "Busca por nombre, filtra por rol y abre la ficha de un campeón para conocer su historia y explorar sus aspectos.", en: "Search by name, filter by role, and open a champion’s dossier to discover their story and skins."}, alt: {es: "Catálogo de campeones con filtros por rol", en: "Champion catalogue with role filters"}, image: asset("wikilol/02-champion-archive.png")},
    {title: {es: "Comparar perfiles", en: "Compare profiles"}, description: {es: "Consulta dos jugadores lado a lado y comparte la comparación mediante su URL, incluso si juegan en regiones distintas.", en: "View two players side by side and share the comparison through its URL, even across different regions."}, alt: {es: "Comparación de dos perfiles en wikiLoL", en: "Two-player comparison in wikiLoL"}, image: asset("wikilol/04-player-compare.png")},
  ],
  "blog-de-viajes": [
    {title: {es: "Encontrar destino", en: "Find a destination"}, description: {es: "Combina duración, temporada, presupuesto y estilo para explorar seis destinos y elegir por dónde empezar.", en: "Combine duration, season, budget, and travel style to explore six destinations and decide where to start."}, alt: {es: "Explorador de destinos con filtros", en: "Destination explorer with filters"}, image: asset("blog-de-viajes/destinations.png")},
    {title: {es: "Preparar el viaje", en: "Prepare your trip"}, description: {es: "Consulta la duración recomendada y la mejor temporada antes de crear una ruta de uno, tres o cinco días. El itinerario se guarda en el navegador y se puede compartir.", en: "Check the recommended stay and best season before building a one, three, or five-day route. Your itinerary stays in the browser and can be shared."}, alt: {es: "Vista rápida de Londres antes de planificar", en: "London quick view before planning"}, image: asset("blog-de-viajes/destination-preview.png")},
    {title: {es: "Leer las guías", en: "Read the guides"}, description: {es: "Artículos de planificación y presupuesto acompañan los destinos para pasar de la inspiración a un viaje preparado.", en: "Planning and budget articles accompany the destinations to help turn inspiration into a prepared trip."}, alt: {es: "Revista de viajes con artículos y guías", en: "Travel journal with articles and guides"}, image: asset("blog-de-viajes/journal.png")},
  ],
  huellas: [
    {title: {es: "Agenda de cuidados", en: "Care agenda"}, description: {es: "Reúne las mascotas, los avisos activos y los siguientes cuidados en una sola vista. Desde aquí puedes consultar las citas y abrir cada perfil.", en: "Pets, active reminders, and upcoming care come together in one view. Open appointments or each pet’s profile from here."}, alt: {es: "Agenda de Huellas extraída del vídeo, minuto 1:52", en: "Huellas care agenda from the tour at 1:52"}, image: asset("huellas/care-agenda.jpg")},
    {title: {es: "Cartilla y documentos", en: "Records and documents"}, description: {es: "Consulta el historial, adjunta documentos privados y elige qué información incluir en un resumen descargable o en un enlace temporal.", en: "Read the history, attach private documents, and choose which information to include in a downloadable summary or temporary link."}, alt: {es: "Historial y opciones de resumen de Huellas, minuto 1:18", en: "Huellas history and summary options from the tour at 1:18"}, image: asset("huellas/health-record.jpg")},
    {title: {es: "Plan preventivo", en: "Preventive plan"}, description: {es: "Distingue lo vencido, lo próximo y lo que está al día. Registrar un cuidado actualiza el plan y permite consultar cómo se calcula cada fecha.", en: "See what is overdue, upcoming, or up to date. Recording care updates the plan, and each date’s calculation can be inspected."}, alt: {es: "Plan preventivo de Rocky en Huellas, minuto 1:34", en: "Rocky’s preventive plan in Huellas from the tour at 1:34"}, image: asset("huellas/preventive-plan.jpg")},
  ],
  pokeshop: [
    {title: {es: "Elegir un inicial", en: "Choose a starter"}, description: {es: "Bulbasaur, Charmander y Squirtle abren la tienda. Entra en sus fichas o explora el catálogo de Kanto desde la portada.", en: "Bulbasaur, Charmander, and Squirtle introduce the shop. Open their details or explore the Kanto catalog from the home page."}, alt: {es: "Portada de PokeShop con los iniciales de Kanto", en: "PokeShop home featuring Kanto starters"}, image: asset("pokeshop/home.png")},
    {title: {es: "Filtrar el catálogo", en: "Filter the catalog"}, description: {es: "Busca por nombre y combina tipo, región, generación y forma. Aplica tus filtros y comparte la selección mediante la URL.", en: "Search by name and combine type, region, generation, and form. Apply your filters and share the selection through its URL."}, alt: {es: "Catálogo paginado de PokeShop", en: "PokeShop paginated catalog"}, image: asset("pokeshop/catalog.png")},
    {title: {es: "Preparar el carrito", en: "Build your cart"}, description: {es: "Añade Pokémon, ajusta cantidades y consulta el total. El carrito se conserva al volver; los precios y el stock son ficticios y no se realizan compras.", en: "Add Pokémon, adjust quantities, and check the total. Your cart is saved for your return; prices and stock are fictional and no purchases are made."}, alt: {es: "Carrito persistente de PokeShop con resumen de productos", en: "PokeShop persistent cart with product summary"}, image: asset("pokeshop/cart.png")},
  ],
};
