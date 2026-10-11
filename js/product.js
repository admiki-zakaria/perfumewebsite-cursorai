/* ============================================================
   MAISON LUMIÈRE — Product Detail Page Logic
   ============================================================ */
(function () {
  "use strict";

  /* ============================================================
     THE MAISON CATALOGUE
     ============================================================ */
  const PRODUCTS = {
    nuit: {
      id: "nuit",
      name: "Nuit Éternelle",
      tagline: "Édition Signature",
      badge: "Bestseller",
      image: "assets/bottle-nuit.svg",
      accent: "#7a6fc0",
      accent2: "#c9a55c",
      notesLine: "Amber · Oud · Bourbon Vanilla",
      price: 189,
      sizes: [
        { label: "50 ml", price: 189 },
        { label: "100 ml", price: 285 },
      ],
      rating: 4.9,
      reviewsCount: 214,
      distribution: { 5: 86, 4: 9, 3: 3, 2: 1, 1: 1 },
      family: "Amber Oriental",
      longevity: "8–10 hours",
      sillage: "Intimate to moderate",
      season: "Autumn & Winter",
      concentration: "Extrait de Parfum · 22%",
      perfumer: "Camille Lumière",
      short:
        "A midnight garden wrapped in amber warmth. Smoked oud rises through vanilla orchid for a trail that feels like velvet in candlelight.",
      storyTitle: "Born at <em>Midnight</em>",
      story: [
        "Nuit Éternelle was composed across a single winter in our hillside atelier, in the hours between the last client and the first light. Camille Lumière had been chasing a specific feeling — the hush of a courtyard at two in the morning, when the fountains are switched off and the jasmine has grown too sweet to bear — and she would not release the formula until she found it.",
        "The accord rests on three pillars. Amber resin gives the composition its molten, honeyed heat. Laotian oud, aged eight years in oak, contributes smoke and authority without aggression. And a generous dose of Bourbon vanilla absolute — not the sugared pastry kind, but the leathery, tobacco-leafed absolute we buy from a single plantation in Madagascar — holds everything together like a cashmere blanket.",
        "The result is a fragrance that behaves like a presence. It arrives before you do, it stays through dinner, and hours later a single stroke of your wrist still carries the whole room.",
      ],
      quote: "Perfume is the only language that speaks in memory.",
      quoteBy: "Camille Lumière, in-house perfumer",
      notes: {
        top: ["Pink Pepper", "Ripe Plum", "Saffron Thread"],
        heart: ["Jasmine Absolute", "Moroccan Rose", "Orris Butter"],
        base: ["Amber Resin", "Laotian Oud", "Bourbon Vanilla"],
      },
      ingredients: [
        { name: "Amber Resin", role: "Base", detail: "Labdanum and benzoin, cooked into a molten accord that gives Nuit Éternelle its honeyed warmth." },
        { name: "Laotian Oud", role: "Base · 3%", detail: "Aged eight years in oak barrels. Smoky, leathery, and remarkably smooth — no medicinal edge." },
        { name: "Bourbon Vanilla Absolute", role: "Base · 4%", detail: "Sourced from a single Madagascar plantation; tobacco leaf and dried fig rather than confectionery sugar." },
        { name: "Jasmine Absolute", role: "Heart · 2%", detail: "Grasse-harvested, extracted by enfleurage. Eight hundred kilos of petals per kilo of absolute." },
        { name: "Orris Butter", role: "Heart · 1.5%", detail: "Six-year-aged iris root. The powder that makes the drydown feel like cool linen on warm skin." },
      ],
      application: [
        "Apply to pulse points — behind the ears, at the base of the throat, inside the wrists — immediately after showering, while skin still holds warmth.",
        "Do not rub the wrists together; friction breaks the top notes and the composition collapses into plain sweetness.",
        "Two sprays are enough for the office, three for the evening. Nuit Éternelle is a concentration, not a cologne — restraint is the luxury.",
        "For the longest trail, spray once at the nape of the neck; the heat rising from the collar carries the oud gently all evening.",
      ],
      shipping: [
        "Every flacon ships in the Maison coffret with a ribbon of gold, wrapped by hand in our Grasse atelier. Complimentary express shipping worldwide, always insured and signature-tracked.",
        "Two 2 ml discovery vials accompany each full-bottle order so you may wear the fragrance for a week before committing to it. Unopened flacons may be returned within 30 days for a full refund.",
      ],
      reviews: [
        { name: "Camille R.", loc: "Paris", date: "March 2026", rating: 5, text: "The only fragrance my husband recognises me by. Three years, countless compliments, zero regrets. The drydown on a wool coat is unreal." },
        { name: "Julian M.", loc: "New York", date: "January 2026", rating: 5, text: "I collect oud and have spent silly money on rare batches. This sits comfortably among them — and it behaves better on skin than most. The vanilla never turns into cupcake." },
        { name: "Sofia A.", loc: "Milan", date: "December 2025", rating: 4, text: "Gorgeous, grown-up and warm. I would rate it five if it had a touch more sillage — three sprays gets me there, but I like a room-filling trail." },
      ],
    },

    rose: {
      id: "rose",
      name: "Rose Sauvage",
      tagline: "Nouveauté",
      badge: "New Season",
      image: "assets/bottle-rose.svg",
      accent: "#d18aa2",
      accent2: "#c96b8a",
      notesLine: "Bulgarian Rose · Saffron · Patchouli",
      price: 210,
      sizes: [
        { label: "50 ml", price: 210 },
        { label: "75 ml", price: 298 },
      ],
      rating: 4.8,
      reviewsCount: 168,
      distribution: { 5: 81, 4: 12, 3: 5, 2: 1, 1: 1 },
      family: "Floral Chypre",
      longevity: "6–8 hours",
      sillage: "Moderate",
      season: "Spring & Autumn",
      concentration: "Extrait de Parfum · 20%",
      perfumer: "Élodie Marchand",
      short:
        "Twenty thousand petals per flacon. Wild rose absolute is pierced with saffron and grounded in dark patchouli — romance with an edge.",
      storyTitle: "The Wild <em>Garden</em>",
      story: [
        "Rose Sauvage began with a complaint. Élodie Marchand had been asked, yet again, for a 'clean rose' — and she refused. The roses she loves are not polite; they are feral, sun-baked, slightly gone at the edges. So she built a composition that behaves exactly like that.",
        "The heart is a Bulgarian rose centifolia absolute harvested in the Valley of the Roses, where each May morning twenty thousand petals are gathered by hand to produce a single flacon. Saffron threads lend a metallic, savoury glint that keeps the rose from turning powdery, while Indonesian patchouli — aged, not fresh — pulls the whole composition down into something darker and far more mysterious than a bridal bouquet.",
        "Wear it in daylight and it reads as confidence; wear it after dark and it reads as a dare.",
      ],
      quote: "A rose is never innocent. It has thorns for a reason.",
      quoteBy: "Élodie Marchand, guest perfumer",
      notes: {
        top: ["Raspberry", "Saffron", "Bergamot Zest"],
        heart: ["Bulgarian Rose Absolute", "Peony", "Honey Accord"],
        base: ["Patchouli", "Ambrette Seed", "Vanilla Root"],
      },
      ingredients: [
        { name: "Bulgarian Rose Absolute", role: "Heart · 3%", detail: "Rosa centifolia from the Valley of the Roses — twenty thousand hand-picked petals per flacon." },
        { name: "Saffron", role: "Top · 0.8%", detail: "Iranian saffron threads, giving the rose a savoury metallic glint and a golden, bitter warmth." },
        { name: "Indonesian Patchouli", role: "Base · 3.5%", detail: "Aged two years rather than distilled fresh — camphorous, earthy, and unmistakably nocturnal." },
        { name: "Ambrette Seed", role: "Base · 1.5%", detail: "A plant-based musk that lends skin-like softness and an incredible clinging trail on fabric." },
        { name: "Honey Accord", role: "Heart · 1%", detail: "Beeswax and immortelle, a nectar note that turns the rose sticky-sweet without ever becoming gourmand." },
      ],
      application: [
        "Best worn on warm skin — spray at the collarbone and let body heat unfurl the saffron opening.",
        "In spring, one spray at the wrist and one at the hem of a scarf is enough; the rose blooms for hours.",
        "Layer over an unscented body oil at night for a denser, more intimate patchouli trail.",
        "Avoid heat at the elbows; the raspberry top note can turn jammy in high humidity.",
      ],
      shipping: [
        "Ships in the Maison coffret with complimentary express delivery worldwide, tracked and insured.",
        "A complimentary 2 ml discovery vial accompanies each full-bottle order. Unopened flacons may be returned within 30 days.",
      ],
      reviews: [
        { name: "Amara D.", loc: "London", date: "April 2026", rating: 5, text: "Smells like my grandmother's garden on the first day of spring — until the patchouli arrives and it becomes entirely mine. That twist is everything." },
        { name: "Léa T.", loc: "Lyon", date: "February 2026", rating: 5, text: "I have worn classic rose fragrances for years and always found them a little safe. This one has an edge I cannot stop sniffing." },
        { name: "Hannah B.", loc: "Berlin", date: "January 2026", rating: 4, text: "Beautiful, though the saffron opening is stronger than I expected for the first ten minutes. After that it is pure rose heaven." },
      ],
    },

    citron: {
      id: "citron",
      name: "Citron Blanc",
      tagline: "Ressenti Estival",
      badge: "House Classic",
      image: "assets/bottle-citron.svg",
      accent: "#d9b25c",
      accent2: "#e3c25f",
      notesLine: "Bergamot · Neroli · White Musk",
      price: 165,
      sizes: [
        { label: "50 ml", price: 165 },
        { label: "100 ml", price: 265 },
      ],
      rating: 4.7,
      reviewsCount: 142,
      distribution: { 5: 77, 4: 15, 3: 5, 2: 2, 1: 1 },
      family: "Citrus Aromatic",
      longevity: "5–7 hours",
      sillage: "Close and radiant",
      season: "Spring & Summer",
      concentration: "Eau de Parfum · 16%",
      perfumer: "Julien Rossi",
      short:
        "Sun over the Côte d'Azur, bottled. Sun-ripened bergamot and orange blossom drift over clean white musk — effortless, luminous, all-day.",
      storyTitle: "Sun Over the <em>Ridge</em>",
      story: [
        "Citrus fragrances are the easiest to make and the hardest to make well. Most collapse within an hour into lemon-furniture-polish. Julien Rossi spent eighteen months fixing exactly that problem, and his solution was not more citrus — it was better structure.",
        "The bergamot is Calabian, cold-pressed within hours of picking so it keeps its green, almost floral character instead of turning sharp. The neroli is Tunisian, distilled from bitter orange blossom the day after harvest. Beneath them sits a clean white musk and a whisper of vetiver, which is the reason the composition never turns thin: when the citrus fades, you are left with something closer to warm skin than to fruit.",
        "It is the fragrance of a linen shirt on a terrace, of salt drying on skin, of the moment the shutters open at noon.",
      ],
      quote: "Simplicity is the hardest composition of all.",
      quoteBy: "Julien Rossi, in-house perfumer",
      notes: {
        top: ["Calabrian Bergamot", "Lemon Zest", "Green Mandarin"],
        heart: ["Tunisian Neroli", "Petitgrain", "Orange Blossom"],
        base: ["White Musk", "Haitian Vetiver", "Blonde Woods"],
      },
      ingredients: [
        { name: "Calabrian Bergamot", role: "Top · 6%", detail: "Cold-pressed within hours of harvest along the Calabrian coast — green and floral rather than sharp." },
        { name: "Tunisian Neroli", role: "Heart · 2%", detail: "Bitter orange blossom distilled the day after picking; honeyed, waxy and radiant." },
        { name: "White Musk", role: "Base · 5%", detail: "A clean, laundry-fresh musk accord that gives the fragrance its skin-like finish." },
        { name: "Haitian Vetiver", role: "Base · 1%", detail: "A single stroke of earth so the citrus never reads as cleaning product." },
        { name: "Petitgrain", role: "Heart · 1.5%", detail: "Distilled from the twigs and leaves of the same tree as the neroli — a bitter green shadow." },
      ],
      application: [
        "Generously — this is an eau de parfum built for reapplication. Four sprays is a good day-time maximum.",
        "Excellent over sunscreen at the beach; the bergamot threads through salt and coconut beautifully.",
        "Spray into the air and walk through it for a light, even veil rather than concentrated pulse points.",
        "Reapply after lunch; the composition is intentionally radiant rather than tenacious.",
      ],
      shipping: [
        "Ships in the Maison coffret with complimentary worldwide express delivery.",
        "Includes one 2 ml discovery vial per order. Unopened flacons may be returned within 30 days.",
      ],
      reviews: [
        { name: "Marco V.", loc: "Nice", date: "May 2026", rating: 5, text: "I grew up on the Riviera and this is the first scent that actually smells like the memory I carry. The neroli is perfect." },
        { name: "Ines K.", loc: "Lisbon", date: "April 2026", rating: 4, text: "My office fragrance for three summers running. Everyone asks what it is; nobody believes it is not a tailor's cologne." },
        { name: "Daniel O.", loc: "Toronto", date: "March 2026", rating: 4, text: "Bright, clean and genuinely long-lasting for a citrus. I only wish the projection were slightly stronger." },
      ],
    },

    oud: {
      id: "oud",
      name: "Oud Royal",
      tagline: "Récolte Rare",
      badge: "Rare Harvest",
      image: "assets/bottle-oud.svg",
      accent: "#a05c2c",
      accent2: "#c9a96a",
      notesLine: "Agarwood · Leather · Incense",
      price: 295,
      sizes: [
        { label: "75 ml", price: 295 },
        { label: "15 ml travel spray", price: 95 },
      ],
      rating: 4.9,
      reviewsCount: 96,
      distribution: { 5: 89, 4: 8, 3: 2, 2: 0, 1: 1 },
      family: "Woody Oriental",
      longevity: "10–12 hours",
      sillage: "Heavy",
      season: "Winter",
      concentration: "Extrait de Parfum · 25%",
      perfumer: "Karim Haddad",
      short:
        "Aged Laotian oud, softened with suede-like leather and church incense. Weighty, regal, unforgettable — worn best at night.",
      storyTitle: "The Long <em>Journey</em>",
      story: [
        "The oud at the heart of Oud Royal travelled eight years in oak barrels before a single drop was blended. Karim Haddad insists that raw oud oil is not perfume material — it is a rehearsal. Age teaches it patience; what arrives is smoke, leather, dried fruit and sweetness in a slow, quiet sequence.",
        "Around that oud we built a court of materials: olibanum incense from Oman for a churchlike lift, a suede-like leather accord that never turns rubbery, and a Turkish rose that arrives briefly, like a guest, before leaving the room to the woods. This is the most concentrated composition the Maison releases — twenty-five percent perfume oil — and it should be dosed like an extract.",
        "Oud Royal is not a daily fragrance. It is an occasion you wear.",
      ],
      quote: "Oud is not a smell. It is the time it takes for resin to become memory.",
      quoteBy: "Karim Haddad, guest perfumer",
      notes: {
        top: ["Turkish Rose", "Cardamom", "Black Pepper"],
        heart: ["Aged Laotian Oud", "Olibanum Incense", "Leather Accord"],
        base: ["Sandalwood", "Labdanum", "Ambergris"],
      },
      ingredients: [
        { name: "Aged Laotian Oud", role: "Heart · 8%", detail: "Eight years in oak barrels. The most expensive material the Maison purchases, and the reason for the price." },
        { name: "Olibanum Incense", role: "Heart · 2%", detail: "Omani frankincense, resinous and lemony, lifting the woods into cathedral air." },
        { name: "Leather Accord", role: "Heart · 2%", detail: "Suede rather than patent — birch tar softened with immortelle and cistus." },
        { name: "Ambergris", role: "Base · 1%", detail: "A responsibly sourced ambergris tincture that binds the composition to skin for twelve hours." },
        { name: "Mysore Sandalwood", role: "Base · 2%", detail: "Creamy, lactonic, and endlessly smooth — the counterweight to the smoke." },
      ],
      application: [
        "One spray is genuinely enough. This is a 25% concentration and Oud Royal projects for hours.",
        "Apply at the sternum and the back of the neck; the composition rewards warmth and circulation.",
        "Never apply before a business meeting — this is a statement, and statements should be timed.",
        "A travel spray in the bag is the best way to carry it; the 15 ml refill keeps a single top-up under a pocket.",
      ],
      shipping: [
        "Ships in a lacquered coffret with complimentary worldwide express delivery, insured to full value.",
        "One 2 ml discovery vial accompanies each order. Given the concentration of the juice, unopened flacons may be returned within 30 days.",
      ],
      reviews: [
        { name: "Yusuf A.", loc: "Dubai", date: "June 2026", rating: 5, text: "I was born around oud and I am hard to impress. The age of this oil is unmistakable — no medicinal sharpness anywhere. Superb." },
        { name: "Edward L.", loc: "London", date: "March 2026", rating: 5, text: "Wore it to a winter wedding. Three people asked what I had on before I reached the table. Worth every penny." },
        { name: "Grace N.", loc: "Sydney", date: "February 2026", rating: 4, text: "Magnificent but serious. I cannot wear it casually; when I do wear it, there is nothing like it." },
      ],
    },

    fleur: {
      id: "fleur",
      name: "Fleur de Lune",
      tagline: "Édition Limitée",
      badge: "Limited Run",
      image: "assets/bottle-fleur.svg",
      accent: "#b49ae0",
      accent2: "#c9a8f0",
      notesLine: "Jasmine · Tuberose · Sandalwood",
      price: 185,
      sizes: [
        { label: "50 ml", price: 185 },
        { label: "75 ml", price: 265 },
      ],
      rating: 4.8,
      reviewsCount: 121,
      distribution: { 5: 83, 4: 11, 3: 4, 2: 1, 1: 1 },
      family: "White Floral",
      longevity: "7–9 hours",
      sillage: "Moderate to strong",
      season: "Summer nights",
      concentration: "Extrait de Parfum · 21%",
      perfumer: "Camille Lumière",
      short:
        "White florals gathered under a full moon. Night-blooming jasmine and creamy tuberose rest on a bed of Mysore sandalwood.",
      storyTitle: "Gathered by <em>Moonlight</em>",
      story: [
        "Jasmine must be picked at night, when the flowers have finished releasing their scent — a fact that makes every jasmine fragrance in the world something of a midnight product. Fleur de Lune takes that literally: Camille Lumière composed it as the second chapter of Nuit Éternelle, the same story told by white flowers instead of vanilla.",
        "Grandiflorum jasmine, harvested between ten at night and six in the morning, is joined by a hefty dose of tuberose absolute — a flower so heady it is traditionally worn alone. Mysore sandalwood, warm and milky, catches both before they can tip into excess, and a single drop of ylang-ylang adds a banana-rich glint that keeps the florals alive.",
        "Five hundred numbered flacons are released each year, each hand-finished with a silver collar.",
      ],
      quote: "The jasmine tells you when it is ready. You simply have to be awake.",
      quoteBy: "Camille Lumière, in-house perfumer",
      notes: {
        top: ["Ylang-Ylang", "Green Mandarin", "Pear Blossom"],
        heart: ["Night Jasmine", "Tuberose Absolute", "Frangipani"],
        base: ["Mysore Sandalwood", "Orris Root", "Cashmeran"],
      },
      ingredients: [
        { name: "Night Jasmine", role: "Heart · 3%", detail: "Jasminum grandiflorum picked between ten at night and six in the morning, then enfleuraged the same night." },
        { name: "Tuberose Absolute", role: "Heart · 2.5%", detail: "Indian tuberose, solvent-extracted — heady, rubbery-green and unmistakably carnal." },
        { name: "Mysore Sandalwood", role: "Base · 2%", detail: "Creamy and lactonic, the rarest legal sandalwood we can source, and the reason the florals behave." },
        { name: "Ylang-Ylang", role: "Top · 1%", detail: "A single trace adds a banana-rich richness that keeps the white flowers from turning floral-soap." },
        { name: "Cashmeran", role: "Base · 1.5%", detail: "A modern musk-wood that wraps the bouquet in clean, cashmere-like warmth." },
      ],
      application: [
        "One spray to the décolleté; the tuberose blooms upward along the collarbone beautifully.",
        "Ideal for warm evenings — the composition is at its most beautiful on skin warmed by the night air.",
        "For a bridal-adjacent signature, apply to the veil of a dress rather than directly to skin.",
        "Do not overspray: tuberose is the loudest flower in perfumery and needs a light hand.",
      ],
      shipping: [
        "Each numbered flacon ships in the Maison coffret with a certificate of the release year.",
        "Complimentary worldwide express delivery, with one 2 ml discovery vial per order and 30-day returns on unopened flacons.",
      ],
      reviews: [
        { name: "Priya S.", loc: "Mumbai", date: "May 2026", rating: 5, text: "The tuberose is handled with real respect — creamy, not medicinal. I wore it to a summer gala and felt like the evening itself." },
        { name: "Elise B.", loc: "Brussels", date: "April 2026", rating: 5, text: "My wedding perfume. I bought the 75 ml and filled three decants for the day; nothing else came close." },
        { name: "Tom H.", loc: "Copenhagen", date: "March 2026", rating: 4, text: "Bought for my partner, ended up stealing half the bottle. The sandalwood drydown is the star." },
      ],
    },

    vetiver: {
      id: "vetiver",
      name: "Vétiver Noir",
      tagline: "Signature Silencieuse",
      badge: "Icon",
      image: "assets/bottle-vetiver.svg",
      accent: "#6f8f74",
      accent2: "#9ab89e",
      notesLine: "Vetiver · Cedarwood · Tonka Bean",
      price: 175,
      sizes: [
        { label: "50 ml", price: 175 },
        { label: "100 ml", price: 270 },
      ],
      rating: 4.7,
      reviewsCount: 187,
      distribution: { 5: 78, 4: 14, 3: 5, 2: 2, 1: 1 },
      family: "Woody Aromatic",
      longevity: "7–9 hours",
      sillage: "Intimate",
      season: "All seasons",
      concentration: "Extrait de Parfum · 20%",
      perfumer: "Julien Rossi",
      short:
        "Haitian vetiver smoked over cedar and sweetened with tonka. A quiet, confident signature that wears like white linen and dark wood.",
      storyTitle: "Earth &amp; <em>Smoke</em>",
      story: [
        "Vétiver Noir is the quiet one — and it sells the most. Julien Rossi built it for clients who want to be remembered without being noticed: a fragrance that stays close to the skin and reveals itself only to the person standing near enough.",
        "Haitian vetiver root, distilled by our partner cooperative, is smoked over cedar before blending, which gives the composition its faint bonfire edge. Atlas and Virginia cedars stack the smoke into structure, while tonka bean absolute — almond, tobacco, vanilla — puts a sweetness underneath that makes the whole thing feel inevitable rather than austere.",
        "It is the smell of a linen shirt hanging in a room where a fire was lit hours ago. The best everyday signature we make.",
      ],
      quote: "The best compliment is when someone leans in closer.",
      quoteBy: "Julien Rossi, in-house perfumer",
      notes: {
        top: ["Pink Grapefruit", "Black Tea", "Cardamom"],
        heart: ["Haitian Vetiver", "Atlas Cedar", "Lavender"],
        base: ["Tonka Bean", "Virginia Cedar", "Haitian Vetiver"],
      },
      ingredients: [
        { name: "Haitian Vetiver", role: "Heart · 12%", detail: "Distilled by our partner cooperative, then smoked over cedar — the largest single dose of any material in the composition." },
        { name: "Atlas Cedar", role: "Heart · 2%", detail: "Dry, red-cedar pencil-shaving character that gives the smoke its architecture." },
        { name: "Tonka Bean Absolute", role: "Base · 3%", detail: "Almond, tobacco and vanilla coumarin — the sweetness that keeps the woods humane." },
        { name: "Black Tea Accord", role: "Top · 1%", detail: "A dry, faintly tannic opening that sets the composition apart from barbershop fougères." },
        { name: "Lavender", role: "Heart · 1%", detail: "A whisper of French lavender, present only as a finishing light on the woods." },
      ],
      application: [
        "The everyday fragrance: apply liberally in the morning, two to four sprays at the chest and neck.",
        "Excellent over beard or stubble — vetiver clings to facial hair and releases gently all day.",
        "Works beautifully under a coat; the smoke and cedar rise with the heat of wool.",
        "Reapply after the gym if you like the opening; the tonka drydown survives even then.",
      ],
      shipping: [
        "Ships in the Maison coffret with complimentary worldwide express delivery.",
        "Two 2 ml discovery vials accompany each full-bottle order, and unopened flacons may be returned within 30 days.",
      ],
      reviews: [
        { name: "Henrik S.", loc: "Oslo", date: "June 2026", rating: 5, text: "I wear it five days a week and nobody has ever commented on it — which is exactly the point. My partner leans in constantly." },
        { name: "Nadia F.", loc: "Casablanca", date: "April 2026", rating: 5, text: "Bought it for my father, then bought one for myself. The tonka drydown is so soft I want to sleep in it." },
        { name: "Chris D.", loc: "Austin", date: "February 2026", rating: 4, text: "My second bottle. I only wish the travel size existed in a bigger format — I go through this stuff." },
      ],
    },
  };

  const DEFAULT_ID = "nuit";
  const $ = (id) => document.getElementById(id);

  /* ---------- Resolve product from URL ---------- */
  const params = new URLSearchParams(window.location.search);
  const requested = (params.get("id") || DEFAULT_ID).toLowerCase();
  const p = PRODUCTS[requested] || PRODUCTS[DEFAULT_ID];
  const imageBase = p.image.replace(/\.svg$/, "");
  const galleryViews = [
    { src: `${imageBase}.svg`, alt: `${p.name} flacon` },
    { src: `${imageBase}-cap.svg`, alt: `${p.name} atomiser detail` },
    { src: `${imageBase}-label.svg`, alt: `${p.name} label detail` },
    { src: "assets/coffret.svg", alt: "Maison Lumière coffret" },
  ];

  /* ---------- Page chrome ---------- */
  document.title = `${p.name} — Maison Lumière`;
  document.querySelector('link[rel="icon"]').href = p.image;
  document.body.style.setProperty("--accent", p.accent);
  document.body.style.setProperty("--accent-2", p.accent2);
  $("crumb-name").textContent = p.name;

  /* ---------- Gallery ---------- */
  const mainImg = $("gallery-main");
  const thumbs = $("gallery-thumbs");
  $("gallery-badge").textContent = p.badge;

  mainImg.src = galleryViews[0].src;
  mainImg.alt = galleryViews[0].alt;

  thumbs.innerHTML = "";
  galleryViews.forEach((view, i) => {
    const btn = document.createElement("button");
    btn.className = "thumb" + (i === 0 ? " is-active" : "");
    btn.setAttribute("data-hover", "");
    btn.setAttribute("aria-label", `View ${i + 1}: ${view.alt}`);
    const img = document.createElement("img");
    img.src = view.src;
    img.alt = view.alt;
    btn.appendChild(img);

    btn.addEventListener("click", () => {
      if (btn.classList.contains("is-active")) return;
      thumbs.querySelectorAll(".thumb").forEach((t) => t.classList.remove("is-active"));
      btn.classList.add("is-active");
      mainImg.classList.add("is-swapping");
      setTimeout(() => {
        mainImg.src = view.src;
        mainImg.alt = view.alt;
        mainImg.classList.remove("is-swapping");
      }, 320);
    });

    thumbs.appendChild(btn);
  });

  /* ---------- Info column ---------- */
  $("pdp-tagline").textContent = p.tagline;
  $("pdp-name").textContent = p.name;
  $("pdp-notes-line").textContent = p.notesLine;
  $("pdp-rating-text").textContent = `${p.rating.toFixed(1)} · ${p.reviewsCount} reviews`;
  $("pdp-short").textContent = p.short;
  $("spec-family").textContent = p.family;
  $("spec-longevity").textContent = p.longevity;
  $("spec-sillage").textContent = p.sillage;
  $("spec-season").textContent = p.season;
  $("spec-concentration").textContent = p.concentration;
  $("spec-perfumer").textContent = p.perfumer;

  const stars = "★".repeat(Math.round(p.rating)) + "☆".repeat(5 - Math.round(p.rating));
  $("pdp-stars").textContent = stars;

  /* Notes lists */
  const fillNotes = (el, items) => {
    el.innerHTML = "";
    items.forEach((n) => {
      const li = document.createElement("li");
      li.textContent = n;
      el.appendChild(li);
    });
  };
  fillNotes($("notes-top"), p.notes.top);
  fillNotes($("notes-heart"), p.notes.heart);
  fillNotes($("notes-base"), p.notes.base);

  /* ---------- Sizes & price ---------- */
  const sizesWrap = $("pdp-sizes");
  const priceEl = $("pdp-price");
  const priceNote = $("pdp-price-note");

  const setSize = (label, price) => {
    priceEl.textContent = `$${price}`;
    priceNote.textContent = `${p.concentration.split(" · ")[0]} · ${label}`;
  };

  sizesWrap.innerHTML = "";
  p.sizes.forEach((s, i) => {
    const btn = document.createElement("button");
    btn.className = "size" + (i === 0 ? " is-active" : "");
    btn.textContent = s.label;
    btn.setAttribute("data-hover", "");
    btn.addEventListener("click", () => {
      sizesWrap.querySelectorAll(".size").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      setSize(s.label, s.price);
    });
    sizesWrap.appendChild(btn);
  });
  setSize(p.sizes[0].label, p.sizes[0].price);

  /* ---------- Quantity & bag ---------- */
  let qty = 1;
  const qtyValue = $("qty-value");
  $("qty-minus").addEventListener("click", () => {
    qty = Math.max(1, qty - 1);
    qtyValue.textContent = qty;
  });
  $("qty-plus").addEventListener("click", () => {
    qty = Math.min(9, qty + 1);
    qtyValue.textContent = qty;
  });

  const toast = $("toast");
  const toastText = $("toast-text");
  let toastTimer = null;

  const showToast = (msg) => {
    toastText.textContent = msg;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
  };

  const addBtn = $("add-to-bag");
  const addLabel = $("add-to-bag-label");
  addBtn.addEventListener("click", () => {
    addBtn.classList.add("is-added");
    addLabel.textContent = "Added to Bag ✓";
    showToast(`${p.name} × ${qty} added to your bag`);
    setTimeout(() => {
      addBtn.classList.remove("is-added");
      addLabel.textContent = "Add to Bag";
    }, 2400);
  });

  const wish = $("wish");
  wish.addEventListener("click", () => {
    wish.classList.toggle("is-active");
    showToast(
      wish.classList.contains("is-active")
        ? `${p.name} saved to your wishlist`
        : `${p.name} removed from your wishlist`
    );
  });

  /* ---------- Accordion ---------- */
  const accDescription = $("acc-description");
  p.story.forEach((para) => {
    const el = document.createElement("p");
    el.textContent = para;
    accDescription.appendChild(el);
  });

  const accIngredients = $("acc-ingredients");
  p.ingredients.forEach((ing) => {
    const el = document.createElement("div");
    el.className = "ingredient";
    el.innerHTML = `
      <div><strong></strong><em></em></div>
      <span></span>`;
    el.querySelector("strong").textContent = ing.name;
    el.querySelector("em").textContent = ing.role;
    el.querySelector("span").textContent = ing.detail;
    accIngredients.appendChild(el);
  });

  const accApplication = $("acc-application");
  const appList = document.createElement("ul");
  appList.className = "app-list";
  p.application.forEach((tip) => {
    const li = document.createElement("li");
    li.textContent = tip;
    appList.appendChild(li);
  });
  accApplication.appendChild(appList);

  const accShipping = $("acc-shipping");
  p.shipping.forEach((line) => {
    const el = document.createElement("p");
    el.textContent = line;
    accShipping.appendChild(el);
  });

  document.querySelectorAll(".accordion__item").forEach((item) => {
    const head = item.querySelector(".accordion__head");
    const body = item.querySelector(".accordion__body");

    head.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      document.querySelectorAll(".accordion__item.is-open").forEach((other) => {
        other.classList.remove("is-open");
        other.querySelector(".accordion__body").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("is-open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });

  // Open the first accordion item by default
  const firstItem = document.querySelector(".accordion__item");
  if (firstItem) {
    firstItem.classList.add("is-open");
    const firstBody = firstItem.querySelector(".accordion__body");
    requestAnimationFrame(() => {
      firstBody.style.maxHeight = firstBody.scrollHeight + "px";
    });
  }

  /* ---------- Story ---------- */
  $("story-title").innerHTML = p.storyTitle;
  const storyText = $("story-text");
  p.story.forEach((para) => {
    const el = document.createElement("p");
    el.textContent = para;
    storyText.appendChild(el);
  });
  $("story-quote-text").textContent = `“${p.quote}”`;
  $("story-quote-cite").textContent = `— ${p.quoteBy}`;

  /* ---------- Reviews ---------- */
  $("reviews-score").textContent = p.rating.toFixed(1);
  $("reviews-stars").textContent = stars;
  $("reviews-count").textContent = `${p.reviewsCount} verified reviews`;

  const barsWrap = $("reviews-bars");
  [5, 4, 3, 2, 1].forEach((star) => {
    const pct = p.distribution[star] || 0;
    const row = document.createElement("div");
    row.className = "rbar";
    row.innerHTML = `
      <span>${star} star${star > 1 ? "s" : ""}</span>
      <span class="rbar__track"><span class="rbar__fill" data-pct="${pct}"></span></span>
      <span>${pct}%</span>`;
    barsWrap.appendChild(row);
  });

  const reviewsGrid = $("reviews-grid");
  p.reviews.forEach((r) => {
    const card = document.createElement("figure");
    card.className = "voice reveal";
    card.setAttribute("data-reveal", "");
    const initials = r.name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2);
    card.innerHTML = `
      <div class="voice__head">
        <span class="voice__avatar">${initials}</span>
        <span class="voice__who"><strong></strong><span></span></span>
        <span class="voice__date">${r.date}</span>
      </div>
      <div class="voice__stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</div>
      <blockquote></blockquote>
      <figcaption><strong>Verified purchase</strong><span>${r.loc}</span></figcaption>`;
    card.querySelector(".voice__who strong").textContent = r.name;
    card.querySelector(".voice__who span").textContent = r.loc;
    card.querySelector("blockquote").textContent = r.text;
    reviewsGrid.appendChild(card);
  });

  /* ---------- Related products ---------- */
  const relatedGrid = $("related-grid");
  Object.values(PRODUCTS)
    .filter((item) => item.id !== p.id)
    .slice(0, 3)
    .forEach((item) => {
      const a = document.createElement("a");
      a.className = "card reveal";
      a.href = `product.html?id=${item.id}`;
      a.setAttribute("data-reveal", "");
      a.innerHTML = `
        <div class="card__media">
          ${item.badge ? `<span class="card__tag">${item.badge}</span>` : ""}
          <img src="${item.image}" alt="${item.name} — ${item.notesLine}">
        </div>
        <div class="card__body">
          <h3 class="card__title">${item.name}</h3>
          <p class="card__notes">${item.notesLine}</p>
          <p class="card__desc">${item.short}</p>
          <div class="card__foot">
            <span class="card__price">$${item.price}<small>/ ${item.sizes[0].label}</small></span>
            <span class="card__link">View <i>→</i></span>
          </div>
        </div>
        <div class="card__shine"></div>`;
      relatedGrid.appendChild(a);
    });

  /* ---------- Observe dynamically added reveals ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));

  /* ---------- Animate rating bars when visible ---------- */
  const barsIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target
            .querySelectorAll(".rbar__fill")
            .forEach((fill) => (fill.style.width = fill.dataset.pct + "%"));
          barsIO.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  barsIO.observe(barsWrap);
})();
