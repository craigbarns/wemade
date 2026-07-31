/* eslint-disable react-refresh/only-export-components -- module mixte helpers + composant, assumé */
import { PhoneCall } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SITE } from "../config";

/** Clés sessionStorage partagées entre landings / simulateur / formulaire home */
export const PREFILL_MESSAGE_KEY = "wemade:prefillMessage";
export const CALLBACK_INTENT_KEY = "wemade:callbackIntent";

export const CALLBACK_MESSAGE = {
  fr: "Je souhaite être rappelé sous 24h. Mon numéro : ",
  en: "Please call me back within 24h. My number: "
};

export const CALLBACK_LABEL = {
  fr: "Être rappelé sous 24h",
  en: "Get a call back within 24h"
};

/**
 * Déclenche le flux "Être rappelé sous 24h" depuis une page SANS formulaire
 * (landing, blog...) : stocke l'intention en sessionStorage et navigue vers /#contact.
 * Le formulaire home lit cette intention au mount (voir App.jsx).
 */
export function triggerCallbackRequest({ navigate } = {}) {
  try {
    sessionStorage.setItem(CALLBACK_INTENT_KEY, "1");
  } catch {
    /* sessionStorage indisponible : on navigue quand même */
  }
  if (navigate) {
    navigate("/#contact");
  } else {
    window.location.href = "/#contact";
  }
}

/**
 * Barre sticky mobile "Être rappelé sous 24h" (+ téléphone si configuré).
 * Visible uniquement sous 768px (CSS .sticky-callback-bar).
 * Passer onRequest quand le formulaire de contact est sur la page (home).
 */
export function StickyCallbackBar({ lang = "fr", onRequest }) {
  const navigate = useNavigate();
  const handleClick = () => (onRequest ? onRequest() : triggerCallbackRequest({ navigate }));
  return (
    <div className="sticky-callback-bar">
      <button type="button" className="sticky-callback-btn" onClick={handleClick}>
        <PhoneCall size={16} />
        {CALLBACK_LABEL[lang] || CALLBACK_LABEL.fr}
      </button>
      {SITE.phone ? (
        <a className="sticky-callback-phone" href={`tel:${SITE.phone}`}>
          {SITE.phoneDisplay || SITE.phone}
        </a>
      ) : null}
    </div>
  );
}
