import React from "react";
import { BookOpen, DollarSign, Clock, Monitor } from "lucide-react";
import StepCard from "@/components/procedure/StepCard";
import TipBox from "@/components/procedure/TipBox";

export default function Procedure() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl shadow-xl mb-6" style={{ backgroundColor: "#00365F" }}>
          <BookOpen className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight" style={{ color: "#00365F" }}>
          Procédure pas-à-pas
        </h1>
        <p className="mt-3 text-base max-w-lg mx-auto leading-relaxed" style={{ color: "#6b8fa8" }}>
          Guide complet pour créer un avatar vidéo IA et un clone vocal professionnel, de A à Z.
        </p>
      </div>

      {/* Budget info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="rounded-2xl border p-5 text-center" style={{ borderColor: "#d0e6f5", backgroundColor: "#E8F4FC" }}>
          <DollarSign className="w-5 h-5 mx-auto mb-2" style={{ color: "#EF413D" }} />
          <p className="text-lg font-bold" style={{ color: "#00365F" }}>89 USD/mois</p>
          <p className="text-xs" style={{ color: "#6b8fa8" }}>HeyGen (Creator)</p>
        </div>
        <div className="rounded-2xl border p-5 text-center" style={{ borderColor: "#d0e6f5", backgroundColor: "#E8F4FC" }}>
          <DollarSign className="w-5 h-5 mx-auto mb-2" style={{ color: "#EF413D" }} />
          <p className="text-lg font-bold" style={{ color: "#00365F" }}>22 USD/mois</p>
          <p className="text-xs" style={{ color: "#6b8fa8" }}>ElevenLabs (Creator)</p>
        </div>
        <div className="rounded-2xl border p-5 text-center" style={{ borderColor: "#d0e6f5", backgroundColor: "#E8F4FC" }}>
          <Clock className="w-5 h-5 mx-auto mb-2" style={{ color: "#00365F" }} />
          <p className="text-lg font-bold" style={{ color: "#00365F" }}>20–40 min</p>
          <p className="text-xs" style={{ color: "#6b8fa8" }}>par capsule de 45–90 s</p>
        </div>
      </div>

      {/* Steps */}
      <h2 className="text-xl font-bold mb-8 flex items-center gap-2" style={{ color: "#00365F" }}>
        <Monitor className="w-5 h-5" style={{ color: "#EF413D" }} />
        Intégration HeyGen & ElevenLabs
      </h2>

      <div className="mb-12">
        <StepCard number={1} title="Créer un avatar professionnel dans HeyGen">
{`- Connectez-vous à [HeyGen](https://www.heygen.com) et choisissez un plan avec avatars personnalisés.
- Accédez à **Avatar Studio** → **Créer un Avatar**.
- Téléchargez une vidéo de l'expert·e (2 à 5 minutes), avec un bon éclairage et un fond uni.
- **Format** : MP4, résolution 720p minimum.
- Ajustez les paramètres, nommez l'avatar et validez.
- L'avatar sera généré en quelques minutes et disponible dans votre bibliothèque.`}
        </StepCard>

        <StepCard number={2} title="Créer un clone vocal dans ElevenLabs">
{`- Connectez-vous à [ElevenLabs](https://elevenlabs.io) et récupérez votre **clé API** dans les paramètres.
- Allez dans l'onglet **Voices** → cliquez **+** → **Professional Voice Clone**.
- Téléchargez un échantillon audio clair (minimum 3 minutes, idéalement 30–60 minutes).
- Nommez la voix et validez.
- Testez le rendu vocal avec une phrase simple pour vérifier la qualité.`}
        </StepCard>

        <StepCard number={3} title="Connecter ElevenLabs dans HeyGen">
{`- Dans HeyGen, allez dans **AI Voice** → **Integrate Third-Party Voices**.
- Choisissez **ElevenLabs** comme service tiers.
- Entrez votre **clé API** ElevenLabs et validez.
- Votre voix clonée apparaîtra dans la bibliothèque de voix HeyGen.`}
        </StepCard>

        <StepCard number={4} title="Créer une vidéo avec l'avatar et la voix">
{`- Accédez à **Create Video** dans HeyGen.
- Sélectionnez votre avatar et la voix clonée ElevenLabs.
- Rédigez ou collez le script dans le champ dédié.
- Ajustez l'intonation et l'émotion selon le ton souhaité.
- Ajoutez un arrière-plan, des graphiques ou un logo si nécessaire.
- Cliquez **Preview** pour vérifier le rendu, puis **Generate Video**.
- Téléchargez la vidéo finale une fois le rendu complété.`}
        </StepCard>
      </div>

      {/* Quick guide */}
      <h2 className="text-xl font-bold mb-8 flex items-center gap-2" style={{ color: "#00365F" }}>
        <BookOpen className="w-5 h-5" style={{ color: "#EF413D" }} />
        Guide rapide — Capsule HeyGen
      </h2>

      <div className="mb-10">
        <StepCard number={1} title="Préparer le contenu">
{`- Isoler **1 message clé** par capsule.
- Viser **120–150 mots ≈ 1 minute**.
- Découper en 2–4 phrases courtes (une idée par phrase).`}
        </StepCard>

        <StepCard number={2} title="Créer le projet dans HeyGen">
{`- Ouvrir un nouveau projet et choisir votre avatar.
- Sélectionner **FR-CA** (ou la langue voulue) et un débit naturel.`}
        </StepCard>

        <StepCard number={3} title="Coller et segmenter le texte">
{`- Coller le texte par paragraphes courts.
- Ajouter des virgules/points pour marquer les pauses.
- Éviter les chiffres ambigus : écrire « 2 006 » → « deux mille six ».
- Pour les sigles, préférer lettre-par-lettre (ex. « U-Laval » → « U – Laval »).`}
        </StepCard>

        <StepCard number={4} title="Vérifier la diction">
{`- Lancer un aperçu audio de 10–20 secondes.
- Si une prononciation cloche : simplifier le mot, ajouter un tiret ou espaces, scinder la phrase.`}
        </StepCard>

        <StepCard number={5} title="Générer et ajuster">
{`- Lancer la génération et noter les points à améliorer (lip-sync, débit).
- Ajuster la ponctuation et relancer si nécessaire (A/B).`}
        </StepCard>

        <StepCard number={6} title="Finaliser et exporter">
{`- Ajouter des sous-titres (.srt ou génération automatique + révision).
- Vérifier la lisibilité (marges, logo).
- Exporter en **MP4 1080p**.
- Nommer : \`AAAA-MM-JJ_projet_capsule-X_v1.mp4\`.`}
        </StepCard>
      </div>

      {/* Tips */}
      <h2 className="text-xl font-bold mb-4" style={{ color: "#00365F" }}>Rappels clés</h2>
      <div className="space-y-3">
        <TipBox>Courte durée = attention conservée. Gardez vos capsules courtes.</TipBox>
        <TipBox>Une idée → une capsule. Ne surchargez pas d'informations.</TipBox>
        <TipBox>Petits remaniements de texte = meilleure diction par l'avatar.</TipBox>
        <TipBox>Les avatars et clones restent chez votre organisation ; vous repartez avec vos exports vidéo.</TipBox>
      </div>
    </div>
  );
}