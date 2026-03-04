export const questions = [
  {
    id: "1",
    number: 1,
    category: "legal",
    question: "Y a-t-il des limites légales à tout ça? Est-ce que je peux emprunter ta photo et ta voix pour créer mes vidéos ?!?!",
    answer: `Oui, il y a des limites légales importantes. Au Canada et dans la plupart des juridictions, le **droit à l'image** et le **droit à la voix** sont protégés. Vous devez absolument obtenir le **consentement explicite et éclairé** de la personne dont vous souhaitez cloner l'apparence ou la voix.

Concrètement :
- **Consentement écrit** : il est fortement recommandé de faire signer une autorisation précisant l'usage prévu (contexte pédagogique, durée, diffusion).
- **Lois sur les hypertrucages** : plusieurs provinces et pays renforcent leur législation sur les médias synthétiques. L'utilisation sans consentement peut mener à des poursuites.
- **ElevenLabs** exige une vérification de consentement lors du clonage vocal professionnel.
- **HeyGen** demande une vidéo de consentement de la personne filmée pour créer un avatar personnalisé.

En résumé : non, vous ne pouvez pas utiliser la photo ou la voix de quelqu'un sans son accord. C'est à la fois une question éthique et légale.`
  },
  {
    id: "2",
    number: 2,
    category: "technical",
    question: "J'imagine que c'est aussi beaucoup plus facile de modifier une capsule? Par exemple si un texte de loi est modifié, on modifie seulement le texte utilisé?",
    answer: `Exactement, c'est l'un des **grands avantages** de cette approche. Si un contenu doit être mis à jour (ex. : modification d'un texte de loi, changement de données), il suffit de :

1. **Modifier le script texte** dans HeyGen.
2. **Regénérer la capsule** avec le même avatar et la même voix.
3. La nouvelle vidéo est prête en quelques minutes.

Comparé à un tournage traditionnel (qui nécessite de reconvoquer l'expert·e, réserver un studio, refaire le montage, etc.), **le gain de temps et de coûts est considérable**. C'est particulièrement utile pour les formations réglementaires ou les contenus qui évoluent fréquemment.`
  },
  {
    id: "3",
    number: 3,
    category: "pedagogical",
    question: "Bonjour, a-t-on des retours d'étudiant.e.s? Leur capacité d'attention est-elle OK avec des profs clones? Merci",
    answer: `Les recherches récentes sont encourageantes. Une étude publiée dans *Computers & Education* (2024) indique que **remplacer un enseignant humain par un avatar IA ne réduit pas significativement l'expérience d'apprentissage** des étudiants (Leiker, Gyllen et al., 2023).

Plusieurs points importants :
- **Courte durée = meilleure attention** : les capsules de quelques minutes maintiennent mieux l'attention qu'un long cours magistral filmé.
- Les étudiants apprécient la **clarté de la diction** et la **qualité visuelle constante**.
- La **transparence** est essentielle : informer les étudiants qu'il s'agit d'un avatar IA renforce la confiance.
- L'avatar fonctionne particulièrement bien pour les **contenus informatifs structurés** (procédures, réglementations, définitions).

Il est cependant recommandé de **mixer contenu IA et interventions humaines** authentiques pour maintenir un lien pédagogique chaleureux.`
  },
  {
    id: "4",
    number: 4,
    category: "legal",
    question: "Pouvez-vous nous parler des droits à l'image que les sites web, comme Heygen, demandent? Est-ce qu'un avatar de soi-même qu'on crée sur Hygen devient la propriété de Heygen, et donc, nous pourrions nous retrouver un peu partout sur le web?",
    answer: `Bonne nouvelle : selon la politique de HeyGen, **vous conservez la propriété de vos avatars personnalisés et des vidéos générées**.

Voici ce que disent leurs conditions :
- **Propriété** : « As between us and you, you own the rights to photo, or custom avatars you create. » — Vous êtes propriétaire de vos créations.
- HeyGen **ne réutilise pas** vos avatars personnalisés pour d'autres clients ou à des fins marketing sans votre accord.
- Vos données biométriques (visage, voix) sont protégées par leur politique de confidentialité.
- Vous pouvez **supprimer** votre avatar de la plateforme à tout moment.

Cependant, il est toujours prudent de :
- Lire attentivement les conditions d'utilisation à jour.
- Vérifier les mises à jour des conditions (elles peuvent évoluer).
- Conserver une copie locale de vos exports vidéo.

Votre avatar ne se retrouvera **pas** un peu partout sur le web à cause de HeyGen.`
  },
  {
    id: "5",
    number: 5,
    category: "cost",
    question: "Quels sont les coûts liés à l'utilisation de ces plateformes (Heygen, Elevenlabs, etc.)? Doit-on payer un membership, est-ce que les institutions subventionnent leur utilisation? Merci",
    answer: `**Oui, les deux plateformes fonctionnent par abonnement mensuel ou annuel.**

- **HeyGen** : à partir de 29 USD/mois (Creator annuel). Le plan Team utilisé dans ce projet est à 89 USD/mois.
- **ElevenLabs** : à partir de 22 USD/mois (Creator). Un plan gratuit existe mais il est très limité et ne permet pas le clonage vocal professionnel.

**Concernant les subventions institutionnelles :**
- Certaines institutions (universités, cégeps, organismes de formation) intègrent ces coûts dans leur budget de développement pédagogique ou de technologie éducative.
- Des programmes comme le **Fonds de développement académique** ou des subventions en innovation pédagogique peuvent couvrir ces frais.
- Il est recommandé de vérifier auprès de votre département TI ou de votre service de pédagogie si un budget existe.
- Le retour sur investissement est rapide : une seule journée de tournage économisée rembourse plusieurs mois d'abonnement.`
  },
  {
    id: "6",
    number: 6,
    category: "legal",
    question: "Qui détient les droits d'utilisation sur les avatars et vidéos que vous avez créées: le créateur de l'avatar ou HeyGen /Eleven Labs/... ?",
    answer: `**Le créateur conserve les droits sur ses contenus.**

**HeyGen :**
- Vous êtes propriétaire de vos avatars personnalisés et de vos vidéos générées.
- HeyGen conserve des droits sur sa technologie sous-jacente (le moteur IA), mais pas sur vos créations.
- Les vidéos exportées vous appartiennent et peuvent être utilisées librement dans un cadre commercial ou éducatif.

**ElevenLabs :**
- Vous conservez la propriété des voix clonées et des fichiers audio générés.
- Avec un plan payant (Creator ou supérieur), vous disposez d'une **licence commerciale** sur les contenus générés.

**Points de vigilance :**
- Assurez-vous d'avoir le consentement de la personne dont l'image/voix est clonée.
- Conservez toujours une copie locale de vos exports.
- Les conditions peuvent évoluer : consultez régulièrement les CGU des plateformes.`
  },
  {
    id: "7",
    number: 7,
    category: "technical",
    question: "Pour \"préparer\" l'avatar à l'image d'une personne x, devons-nous la filmer ou photographier, quel est le processus?",
    answer: `Pour créer un avatar personnalisé dans HeyGen, il faut **filmer une vidéo** de la personne. Voici le processus détaillé :

**Ce qu'il faut :**
- Une **vidéo de 2 à 5 minutes** de la personne parlant face caméra.
- **Bon éclairage** (lumière naturelle ou éclairage de studio, pas de contre-jour).
- **Fond uni** (mur blanc, fond vert ou neutre de préférence).
- Format **MP4**, résolution **720p minimum** (1080p recommandé).
- La personne doit parler clairement, avec des mouvements naturels.

**Le processus dans HeyGen :**
1. Accédez à **Avatar Studio** → **Créer un Avatar**.
2. Téléchargez la vidéo.
3. HeyGen demande aussi une **vidéo de consentement** (la personne lit un texte confirmant qu'elle autorise la création de l'avatar).
4. L'avatar est généré automatiquement en quelques minutes.
5. Il apparaît dans votre bibliothèque, prêt à être utilisé avec n'importe quel script.

**Note :** une simple photo ne suffit pas pour un avatar vidéo de qualité — il faut bien une vidéo.`
  },
  {
    id: "8",
    number: 8,
    category: "technical",
    question: "Est-ce qu'on peut choisir un Avatar en bonhomme au lieu de notre personne et notre visage? avec une autre voix?",
    answer: `**Oui, absolument!** HeyGen offre plusieurs options :

- **Avatars de stock** : HeyGen propose plus de **700 avatars vidéo prédéfinis** (hommes, femmes, différentes apparences et styles). Vous pouvez en choisir un sans utiliser votre propre image.
- **Photo Avatars** : vous pouvez créer des avatars à partir de photos (y compris des illustrations stylisées).
- **Voix indépendante** : vous pouvez associer **n'importe quelle voix** (voix de stock HeyGen, voix ElevenLabs ou autre voix tierce) à n'importe quel avatar.

**Combinaisons possibles :**
- Avatar de stock + voix clonée d'un expert → l'expert n'apparaît pas à l'écran mais on entend sa voix.
- Avatar personnalisé + voix de stock → visage réel mais voix synthétique standard.
- Avatar de stock + voix de stock → aucune ressource humaine spécifique nécessaire.

Cette flexibilité est très pratique quand l'expert·e ne souhaite pas apparaître à l'écran.`
  },
  {
    id: "9",
    number: 9,
    category: "technical",
    question: "Par rapport aux mouvements du clone, j'imagine que plus on a un long échantillon, plus on a un clone réaliste?",
    answer: `**Pour la vidéo (HeyGen) :**
- La vidéo d'entraînement recommandée est de **2 à 5 minutes**. Au-delà, le gain en réalisme est marginal.
- Ce qui compte davantage : la **qualité** de l'échantillon (éclairage, cadrage, fond uni, mouvements naturels, variété d'expressions).
- HeyGen génère les mouvements de lèvres (lip-sync) à partir du texte, pas à partir de la vidéo source. L'avatar aura donc des mouvements cohérents avec le script.

**Pour la voix (ElevenLabs) :**
- Le minimum est de **3 minutes** d'audio pour un clone professionnel.
- **Idéalement 30 à 60 minutes** d'échantillon pour capturer les nuances, accents et intonations.
- Plus l'échantillon vocal est long et varié, **plus le clone sera fidèle** à la voix originale.

**En résumé :** pour la vidéo, 2 à 5 minutes de bonne qualité suffisent. Pour la voix, un échantillon plus long (30–60 min) améliore sensiblement le résultat.`
  },
  {
    id: "10",
    number: 10,
    category: "technical",
    question: "Est-ce que c'est facile à utiliser? Ou il faut suivre une formation?",
    answer: `**Les deux plateformes sont conçues pour être accessibles**, même sans compétences techniques avancées.

**HeyGen :**
- Interface intuitive de type « glisser-déposer ».
- Vous collez un texte, choisissez un avatar et une voix, et la vidéo se génère automatiquement.
- Pas de montage vidéo à faire (tout est automatisé).
- Temps d'apprentissage : **environ 1 à 2 heures** pour être à l'aise.

**ElevenLabs :**
- Interface simple pour le clonage vocal.
- Téléchargez un audio, cliquez quelques boutons, et la voix est prête.
- Temps d'apprentissage : **moins d'une heure**.

**Recommandation :**
- Le **procédurier pas-à-pas** fourni (voir la section Procédure) permet de reproduire l'exercice de façon autonome.`
  },
  {
    id: "11",
    number: 11,
    category: "ethical",
    question: "Comment s'assurer de l'authenticité du message, de se distancer des ''fake news'' lorsque ces outils sont disponibles et accessibles?",
    answer: `C'est un enjeu crucial. Voici les bonnes pratiques recommandées :

**Transparence :**
- **Toujours indiquer** que le contenu est généré par IA (mention dans la vidéo, dans le descriptif, ou dans la plateforme de formation).
- HeyGen encourage l'usage éthique et propose des outils de détection de contenu synthétique.

**Validation du contenu :**
- Le script doit être **rédigé et validé par un expert humain** avant d'être narré par l'avatar.
- Mettre en place un **processus de révision** (relecture par un pair, validation institutionnelle).

**Traçabilité :**
- Conserver les scripts originaux et les versions des capsules.
- Documenter **qui a validé le contenu** et **quand**.

**Sensibilisation :**
- Former les équipes et les étudiants à **reconnaître les médias synthétiques**.
- Développer l'esprit critique face aux vidéos générées par IA en général.

**Cadre institutionnel :**
- Établir une **politique d'utilisation de l'IA** au sein de l'organisation.
- Définir des règles claires sur l'usage acceptable des avatars.`
  },
  {
    id: "12",
    number: 12,
    category: "pedagogical",
    question: "A-t-on des retours de réception?",
    answer: `Les retours sont globalement positifs dans le milieu de la formation professionnelle et universitaire :

**Points forts relevés :**
- Les apprenants apprécient la **qualité visuelle et sonore constante** des capsules.
- La **durée courte** (< 5 minutes) est bien reçue — elle correspond aux habitudes de consommation de contenu actuelles.
- Le contenu est perçu comme **professionnel et structuré**.

**Points d'attention :**
- Certains apprenants remarquent le côté « artificiel » si la capsule est longue (d'où l'importance de rester sur des formats courts).
- La **transparence** sur l'utilisation de l'IA améliore l'acceptation.

**Recherche :**
- Des études (PMC, 2024) montrent que l'impact sur l'**engagement** et la **performance académique** est comparable entre un instructeur humain filmé et un avatar IA, surtout pour des contenus factuels courts.`
  },
  {
    id: "13",
    number: 13,
    category: "technical",
    question: "Si Heygen ne le permet pas, existe-t-il des logiciels qui permettent de faire de longs vidéos en IA ?",
    answer: `HeyGen permet désormais des vidéos allant **jusqu'à 30 minutes** sur le plan Creator. Mais si vous avez besoin de formats plus longs ou d'alternatives :

**Alternatives pour vidéos longues :**
- **Synthesia** : plateforme similaire à HeyGen, permet des vidéos plus longues selon le plan choisi.
- **D-ID** : création d'avatars parlants, options de durée variées.
- **Colossyan** : orienté formation professionnelle, supporte des vidéos longues.

**Approche recommandée :**
- Plutôt que de faire une seule longue vidéo, il est préférable de **découper en capsules courtes** (1 à 5 minutes chacune).
- Cette approche est meilleure pour :
  - L'**attention** des apprenants
  - La **mise à jour** du contenu (modifier une capsule vs refaire tout)
  - La **réutilisation** modulaire du contenu
- Assembler ensuite les capsules dans un outil de montage (ex. : un simple éditeur vidéo) si besoin d'une vidéo continue.`
  },
  {
    id: "14",
    number: 14,
    category: "technical",
    question: "De ce que je vois sur le site de HeyGen, le forfait Entreprise permet des vidéos de 20 minutes max.",
    answer: `Les informations de tarification de HeyGen ont évolué. En 2025 :

- Le plan **Creator** permet désormais des vidéos allant **jusqu'à 30 minutes**.
- Le plan **Team** offre les mêmes limites de durée avec des fonctionnalités collaboratives en plus.
- Le plan **Enterprise** offre une tarification personnalisée avec des limites négociables.

Il est possible que les informations que vous avez vues datent d'une version antérieure des plans. HeyGen met régulièrement à jour ses offres.

**Recommandation :** pour des formations, la limite de 30 minutes est amplement suffisante. Il est même conseillé de rester sur des capsules de **1 à 5 minutes** pour optimiser l'engagement des apprenants.`
  },
  {
    id: "15",
    number: 15,
    category: "technical",
    question: "Parfois on veut mettre de l'emphase sur certains mots ou bien séparer les mots... est-ce possible avec ce type de logiciel?",
    answer: `**Oui, c'est tout à fait possible**, avec quelques techniques :

**Dans HeyGen (script) :**
- Ajouter des **virgules ou points** pour créer des pauses.
- Utiliser des **tirets ou espaces** pour séparer les syllabes d'un mot (ex. : « im-por-tant »).
- Insérer des **points de suspension (…)** pour allonger une pause.
- Écrire les chiffres en toutes lettres pour une meilleure diction.

**Dans ElevenLabs (voix) :**
- ElevenLabs offre des **contrôles d'intonation et d'émotion** (stabilité, clarté, expressivité).
- Vous pouvez ajuster le **débit** (plus lent = plus d'emphase).
- L'outil supporte le **SSML** (Speech Synthesis Markup Language) pour des contrôles avancés : pauses précises, emphase sur des mots spécifiques, changements de ton.

**Astuce du procédurier :**
- Pour les sigles, écrire lettre-par-lettre : « U – Laval » au lieu de « ULaval ».
- Tester avec un aperçu audio de 10–20 secondes et ajuster au besoin.
- Petits remaniements de texte = meilleure diction.`
  },
  {
    id: "16",
    number: 16,
    category: "technical",
    question: "Heygen prend combien de minutes pour générer la vidéo après que la commande a été lancée?",
    answer: `Le temps de génération dépend de la durée de la vidéo et de la charge des serveurs :

**Temps typiques :**
- Capsule de **30–60 secondes** : environ **2 à 5 minutes** de génération.
- Capsule de **2–3 minutes** : environ **5 à 10 minutes**.
- Vidéo de **5+ minutes** : **10 à 20 minutes** (voire plus selon la complexité).

**Facteurs qui influencent le temps :**
- **Longueur du script** : plus le texte est long, plus la génération prend du temps.
- **Type d'avatar** : un avatar personnalisé peut prendre légèrement plus de temps qu'un avatar de stock.
- **Heure de la journée** : aux heures de pointe (heures de bureau en Amérique du Nord), les serveurs peuvent être plus chargés.
- **Plan souscrit** : les plans Team et Enterprise ont généralement une **priorité de rendu** plus élevée.

**Astuce :** pendant que la vidéo se génère, vous pouvez préparer le script de la capsule suivante. Le workflow devient très efficace avec un peu de pratique.

**En résumé :** comptez environ **5 à 10 minutes** pour une capsule standard d'environ 1 minute.`
  }
];
