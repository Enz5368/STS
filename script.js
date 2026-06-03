const prices = {
  diagnosticPc: 30,
  optimisationPc: 50,
  reinstallWindows: 80,
  ssdRam: 50,
  montagePc: 100,
  montageWindowsDrivers: 130,
  setupSimple: 80,
  nasSimple: 120,
  domotiqueLegere: 80,
  ecranTelephone: 40,
  applicationLocale: 300,
  siteWebFormulaire: 290
};

const categories = {
  reparation: {
    label: "Reparation PC",
    basePrice: prices.diagnosticPc,
    questions: [
      {
        id: "probleme",
        title: "Probleme",
        type: "radio",
        options: ["PC lent", "Ne demarre pas", "Probleme Windows", "Virus / pubs", "Bruit / chauffe", "Ecran bleu", "Autre"]
      },
      {
        id: "budget",
        title: "Budget reparation",
        type: "radio",
        options: ["Moins de 30 \u20ac", "30 à 60 \u20ac", "60 à 100 \u20ac", "Plus de 100 \u20ac", "Je veux d'abord un diagnostic"]
      }
    ]
  },
  montage: {
    label: "Montage PC",
    basePrice: prices.montagePc,
    questions: [
      {
        id: "utilisation",
        title: "Utilisation principale",
        type: "radio",
        options: ["Bureautique", "Etudes", "Gaming", "Streaming", "Montage video", "Programmation", "Dessin / 3D", "Musique", "Usage familial"]
      },
      {
        id: "budget",
        title: "Budget materiel",
        type: "radio",
        options: ["Moins de 400 \u20ac", "400 à 600 \u20ac", "600 à 800 \u20ac", "800 à 1000 \u20ac", "1000 à 1500 \u20ac", "Plus de 1500 \u20ac", "Je ne sais pas"]
      },
      {
        id: "materiel",
        title: "Materiel deja possede",
        type: "checkbox",
        options: ["Ecran", "Clavier/souris", "Boitier", "Alimentation", "Carte graphique", "Stockage", "Rien"]
      },
      {
        id: "besoin",
        title: "Besoin",
        type: "radio",
        options: ["Conseil composants", "Montage uniquement", "Montage + Windows + drivers", "Montage + installation complete"]
      }
    ]
  },
  ssdRam: {
    label: "SSD / RAM",
    basePrice: prices.ssdRam,
    questions: [
      {
        id: "objectif",
        title: "Objectif",
        type: "radio",
        options: ["Accelerer le PC", "Ajouter du stockage", "Ameliorer les performances", "Remplacer un ancien disque"]
      },
      {
        id: "piece",
        title: "Le client a deja la piece",
        type: "radio",
        options: ["Oui", "Non", "Je veux un conseil"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["Moins de 50 \u20ac", "50 à 100 \u20ac", "Plus de 100 \u20ac", "Je ne sais pas"]
      }
    ]
  },
  setup: {
    label: "Setup bureau / teletravail / gaming",
    basePrice: prices.setupSimple,
    questions: [
      {
        id: "type",
        title: "Type de setup",
        type: "radio",
        options: ["Bureau", "Teletravail", "Etudiant", "Gaming", "Mixte"]
      },
      {
        id: "besoins",
        title: "Besoins",
        type: "checkbox",
        options: ["Double ecran", "Webcam", "Clavier/souris", "Rangement cables", "Installation logiciels", "Optimisation Windows", "Imprimante/peripheriques"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["Moins de 50 \u20ac", "50 à 100 \u20ac", "100 à 250 \u20ac", "Plus de 250 \u20ac"]
      }
    ]
  },
  nas: {
    label: "NAS / sauvegarde",
    basePrice: prices.nasSimple,
    questions: [
      {
        id: "objectif",
        title: "Objectif",
        type: "checkbox",
        options: ["Sauvegarde photos", "Sauvegarde documents", "Stockage familial", "Partage de fichiers", "Sauvegarde PC", "Conseil achat NAS"]
      },
      {
        id: "materiel",
        title: "Materiel deja possede",
        type: "radio",
        options: ["Oui", "Non", "Je veux un conseil"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["Moins de 100 \u20ac", "100 à 250 \u20ac", "250 à 500 \u20ac", "Plus de 500 \u20ac"]
      }
    ]
  },
  domotique: {
    label: "Domotique legere",
    basePrice: prices.domotiqueLegere,
    note: "Prestation limitee a la configuration d'objets connectes compatibles, sans modification de l'installation electrique fixe.",
    questions: [
      {
        id: "equipement",
        title: "Equipement a configurer",
        type: "checkbox",
        options: ["Lampe connectee", "Prise connectee", "Volet compatible application", "Assistant vocal", "Home Assistant", "Plusieurs appareils", "Je veux un conseil"]
      },
      {
        id: "objectif",
        title: "Objectif",
        type: "checkbox",
        options: ["Controler depuis le telephone", "Programmer des horaires", "Scenario matin/soir", "Regrouper dans une seule application", "Ajouter Google Home / Alexa"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["Moins de 50 \u20ac", "50 à 150 \u20ac", "150 à 300 \u20ac", "Plus de 300 \u20ac"]
      }
    ]
  },
  telephone: {
    label: "Remplacement ecran telephone",
    basePrice: prices.ecranTelephone,
    questions: [
      {
        id: "marque",
        title: "Marque",
        type: "radio",
        options: ["iPhone", "Samsung", "Xiaomi / Redmi", "Oppo", "Autre"]
      },
      {
        id: "ecran",
        title: "Le client a deja l'ecran",
        type: "radio",
        options: ["Oui", "Non", "Je veux un conseil"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["Moins de 50 \u20ac", "50 à 100 \u20ac", "Plus de 100 \u20ac", "Je veux savoir si ca vaut le coup"]
      }
    ]
  },
  applicationLocale: {
    label: "Logiciel sur mesure",
    basePrice: prices.applicationLocale,
    questions: [
      {
        id: "besoinPrincipal",
        title: "Besoin principal",
        type: "radio",
        options: ["Gestion de stock", "Suivi client", "Automatisation Excel", "Formulaire avec export", "Logiciel de devis/facture simple", "Tableau de bord", "Calcul automatique", "Organisation de fichiers", "Autre"]
      },
      {
        id: "utilisateur",
        title: "Utilisateur",
        type: "radio",
        options: ["Particulier", "Etudiant", "Association", "Artisan", "Petit commerce", "Entreprise"]
      },
      {
        id: "format",
        title: "Format souhaite",
        type: "radio",
        options: ["Logiciel Windows local", "Fichier Excel automatise", "Script simple", "Tableau de bord", "Je veux un conseil"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["300 à 500 \u20ac", "500 à 1000 \u20ac", "1000 à 2000 \u20ac", "Plus de 2000 \u20ac", "Je veux d'abord estimer"]
      }
    ]
  },
  siteWebFormulaire: {
    label: "Site web personnalise avec formulaire",
    basePrice: prices.siteWebFormulaire,
    questions: [
      {
        id: "besoinPrincipal",
        title: "Besoin principal",
        type: "radio",
        options: ["Site vitrine", "Page de presentation", "Formulaire de contact", "Formulaire de devis", "Refonte d'un site existant", "Je veux un conseil"]
      },
      {
        id: "pages",
        title: "Nombre de pages",
        type: "radio",
        options: ["1 page", "2 a 3 pages", "4 a 6 pages", "Plus de 6 pages", "Je ne sais pas"]
      },
      {
        id: "formulaire",
        title: "Type de formulaire",
        type: "checkbox",
        options: ["Contact", "Demande de devis", "Reservation / rendez-vous", "Inscription", "Envoi vers email", "Je veux un conseil"]
      },
      {
        id: "utilisateur",
        title: "Utilisateur",
        type: "radio",
        options: ["Particulier", "Association", "Artisan", "Petit commerce", "Entreprise"]
      },
      {
        id: "budget",
        title: "Budget",
        type: "radio",
        options: ["290 à 500 \u20ac", "500 à 1000 \u20ac", "1000 à 2000 \u20ac", "Plus de 2000 \u20ac", "Je veux d'abord estimer"]
      }
    ]
  }
};

let cart = [];

const categorySelect = document.querySelector("#category-select");
const questionsContainer = document.querySelector("#dynamic-questions");
const addToCartButton = document.querySelector("#add-to-cart");
const cartItems = document.querySelector("#cart-items");
const cartTotal = document.querySelector("#cart-total");
const clearCartButton = document.querySelector("#clear-cart");
const quoteForm = document.querySelector("#quote-form");
const cartSummaryInput = document.querySelector("#cart-summary");
const formMessage = document.querySelector("#form-message");
const configMessage = document.querySelector("#config-message");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#main-menu");
const serviceTabs = document.querySelectorAll(".service-tab");
const serviceCards = document.querySelectorAll(".service-card[data-sector]");
const copyButtons = document.querySelectorAll(".copy-contact");

function formatPrice(value) {
  return `${value} \u20ac`;
}

function initCategories() {
  Object.entries(categories).forEach(([key, category]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = category.label;
    categorySelect.appendChild(option);
  });
}

function renderQuestions() {
  const selectedKey = categorySelect.value;
  const category = categories[selectedKey];
  questionsContainer.innerHTML = "";
  configMessage.textContent = "";
  configMessage.className = "form-message";

  if (!category) {
    return;
  }

  if (category.note) {
    const note = document.createElement("p");
    note.className = "info-note";
    note.textContent = category.note;
    questionsContainer.appendChild(note);
  }

  category.questions.forEach((question) => {
    const group = document.createElement("fieldset");
    group.className = "question-group";

    const legend = document.createElement("legend");
    legend.className = "question-title";
    legend.textContent = question.title;
    group.appendChild(legend);

    const optionsGrid = document.createElement("div");
    optionsGrid.className = "option-grid";

    question.options.forEach((optionText) => {
      const label = document.createElement("label");
      label.className = "choice";

      const input = document.createElement("input");
      input.type = question.type;
      input.name = question.id;
      input.value = optionText;

      label.appendChild(input);
      label.append(optionText);
      optionsGrid.appendChild(label);
    });

    group.appendChild(optionsGrid);
    questionsContainer.appendChild(group);
  });
}

function getSelectedValues(question) {
  const checkedInputs = questionsContainer.querySelectorAll(`input[name="${question.id}"]:checked`);
  return Array.from(checkedInputs).map((input) => input.value);
}

function estimateCategoryPrice(categoryKey, selections) {
  if (categoryKey === "montage") {
    const need = selections.besoin?.[0] || "";
    if (need.includes("Windows") || need.includes("installation complete")) {
      return prices.montageWindowsDrivers;
    }
    return prices.montagePc;
  }

  if (categoryKey === "reparation") {
    const problem = selections.probleme?.[0] || "";
    if (problem === "PC lent") {
      return prices.optimisationPc;
    }
    if (problem === "Probleme Windows" || problem === "Virus / pubs" || problem === "Ecran bleu") {
      return prices.reinstallWindows;
    }
    return prices.diagnosticPc;
  }

  return categories[categoryKey].basePrice;
}

function getBudgetFromSelections(selections) {
  return selections.budget?.[0] || "Non precise";
}

function addToCart() {
  const selectedKey = categorySelect.value;
  const category = categories[selectedKey];

  if (!category) {
    showConfigMessage("Choisis une categorie avant d'ajouter une prestation.", "error");
    return;
  }

  const selections = {};
  const missingQuestions = [];

  category.questions.forEach((question) => {
    const values = getSelectedValues(question);
    selections[question.id] = values;
    if (values.length === 0) {
      missingQuestions.push(question.title);
    }
  });

  if (missingQuestions.length > 0) {
    showConfigMessage(`Complete les champs suivants : ${missingQuestions.join(", ")}.`, "error");
    return;
  }

  const price = estimateCategoryPrice(selectedKey, selections);
  cart.push({
    id: Date.now(),
    categoryKey: selectedKey,
    category: category.label,
    selections,
    budget: getBudgetFromSelections(selections),
    price
  });

  renderCart();
  showConfigMessage("Prestation ajoutee a la demande.", "success");
}

function showConfigMessage(message, type) {
  configMessage.textContent = message;
  configMessage.className = `form-message ${type}`;
}

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-cart";
    empty.textContent = "Aucun service ajoute pour le moment.";
    cartItems.appendChild(empty);
  }

  cart.forEach((item) => {
    const article = document.createElement("article");
    article.className = "cart-item";

    const header = document.createElement("div");
    header.className = "cart-item-header";

    const title = document.createElement("h4");
    title.textContent = item.category;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-item";
    removeButton.type = "button";
    removeButton.textContent = "X";
    removeButton.setAttribute("aria-label", `Supprimer ${item.category}`);
    removeButton.addEventListener("click", () => removeCartItem(item.id));

    header.append(title, removeButton);
    article.appendChild(header);

    const details = document.createElement("p");
    details.textContent = selectionsToText(item.selections);
    article.appendChild(details);

    const budget = document.createElement("p");
    budget.textContent = `Budget indique : ${item.budget}`;
    article.appendChild(budget);

    const price = document.createElement("span");
    price.className = "cart-price";
    price.textContent = `Prestation estimee : ${formatPrice(item.price)}`;
    article.appendChild(price);

    cartItems.appendChild(article);
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotal.textContent = formatPrice(total);
  cartSummaryInput.value = buildCartSummary();
}

function selectionsToText(selections) {
  return Object.entries(selections)
    .map(([key, values]) => `${labelFromKey(key)} : ${values.join(", ")}`)
    .join(" | ");
}

function labelFromKey(key) {
  const labels = {
    probleme: "Probleme",
    budget: "Budget",
    utilisation: "Utilisation",
    materiel: "Materiel",
    besoin: "Besoin",
    objectif: "Objectif",
    piece: "Piece",
    type: "Type",
    besoins: "Besoins",
    equipement: "Equipement",
    marque: "Marque",
    ecran: "Ecran",
    besoinPrincipal: "Besoin principal",
    utilisateur: "Utilisateur",
    format: "Format souhaite",
    pages: "Pages",
    formulaire: "Formulaire"
  };

  return labels[key] || key;
}

function removeCartItem(id) {
  cart = cart.filter((item) => item.id !== id);
  renderCart();
}

function clearCart() {
  cart = [];
  renderCart();
}

function buildCartSummary() {
  if (cart.length === 0) {
    return "";
  }

  const lines = cart.map((item, index) => {
    return [
      `Prestation ${index + 1}: ${item.category}`,
      `Options: ${selectionsToText(item.selections)}`,
      `Budget indique: ${item.budget}`,
      `Prix estime: ${formatPrice(item.price)}`
    ].join("\n");
  });

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return `${lines.join("\n\n")}\n\nTotal estime: ${formatPrice(total)}`;
}

function validateForm(event) {
  formMessage.textContent = "";
  formMessage.className = "form-message";
  cartSummaryInput.value = buildCartSummary();

  const requiredFields = [
    { selector: "#first-name", label: "prenom" },
    { selector: "#email", label: "email" },
    { selector: "#phone", label: "telephone" },
    { selector: "#city", label: "ville" }
  ];

  const missing = requiredFields
    .filter((field) => !document.querySelector(field.selector).value.trim())
    .map((field) => field.label);

  if (cart.length === 0) {
    event.preventDefault();
    showFormError("Ajoute au moins une prestation dans ta demande avant l'envoi.");
    return;
  }

  if (missing.length > 0) {
    event.preventDefault();
    showFormError(`Renseigne les champs obligatoires : ${missing.join(", ")}.`);
  }
}

function showFormError(message) {
  formMessage.textContent = message;
  formMessage.className = "form-message error";
}

function toggleMenu() {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function filterServices(sector) {
  serviceCards.forEach((card) => {
    const shouldShow = sector === "all" || card.dataset.sector === sector;
    card.classList.toggle("hidden", !shouldShow);
  });
}

function setActiveServiceTab(selectedTab) {
  serviceTabs.forEach((tab) => {
    const isActive = tab === selectedTab;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  filterServices(selectedTab.dataset.sector);
}

async function copyToClipboard(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

async function handleCopyContact(button) {
  const value = button.dataset.copy;
  const label = button.dataset.label || "Contact";
  const originalText = button.textContent;

  try {
    await copyToClipboard(value);
    button.classList.add("copied");
    button.setAttribute("aria-label", `${label} copi\u00e9`);

    if (button.classList.contains("copy-link")) {
      button.textContent = "Copi\u00e9";
    }

    setTimeout(() => {
      button.classList.remove("copied");
      button.setAttribute("aria-label", `Copier ${label}`);
      if (button.classList.contains("copy-link")) {
        button.textContent = originalText;
      }
    }, 1400);
  } catch (error) {
    showFormError("Impossible de copier automatiquement. Selectionne le contact manuellement.");
  }
}

initCategories();
renderCart();
filterServices("informatique");

categorySelect.addEventListener("change", renderQuestions);
addToCartButton.addEventListener("click", addToCart);
clearCartButton.addEventListener("click", clearCart);
quoteForm.addEventListener("submit", validateForm);
menuToggle.addEventListener("click", toggleMenu);
navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    closeMenu();
  }
});
serviceTabs.forEach((tab) => {
  tab.addEventListener("click", () => setActiveServiceTab(tab));
});
copyButtons.forEach((button) => {
  button.setAttribute("aria-label", `Copier ${button.dataset.label || "contact"}`);
  button.addEventListener("click", () => handleCopyContact(button));
});
