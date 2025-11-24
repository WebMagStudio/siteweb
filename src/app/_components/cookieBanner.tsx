"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            setIsOpen(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 max-w-xl mx-auto bg-white shadow-xl border border-gray-200 rounded-xl p-4">
            <p className="text-sm text-base">
                Ce site utilise des cookies anonymes pour mesurer l’audience via Vercel Analytics.
                Aussi, certaines fonctionnalités
                externes comme la prise de rendez-vous via Calendly peuvent collecter
                les informations nécessaires à l’organisation du rendez-vous.{" "}
                <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">
                    En savoir plus
                </Link>
            </p>

            <button
                onClick={accept}
                className="mt-3 w-full bg-base text-white px-4 py-2 rounded-lg text-sm hover:bg-primary transition"
            >
                OK
            </button>
        </div>
    );
}

// "use client";

// import { useEffect, useState } from "react";

// export default function CookieBanner() {
//     const [isOpen, setIsOpen] = useState(false);

//     useEffect(() => {
//         const consent = localStorage.getItem("cookie-consent");
//         if (consent === "accepted") {
//             loadUmami();
//         } else if (!consent) {
//             setIsOpen(true);
//         }
//     }, []);

//     const loadUmami = () => {
//         const script = document.createElement("script");
//         script.src = "https://votre-umami.com/umami.js";
//         script.async = true;
//         script.setAttribute("data-website-id", "VOTRE_WEBSITE_ID");
//         document.body.appendChild(script);
//     };

//     const accept = () => {
//         localStorage.setItem("cookie-consent", "accepted");
//         loadUmami();
//         setIsOpen(false);
//     };

//     const refuse = () => {
//         localStorage.setItem("cookie-consent", "refused");
//         setIsOpen(false);
//     };

//     if (!isOpen) return null;

//     return (
//         <div
//             aria-live="polite"
//             className="fixed bottom-4 left-4 right-4 z-50 max-w-xl mx-auto bg-white shadow-xl border border-gray-200 rounded-xl p-4"
//         >
//             <p className="text-sm text-gray-700">
//                 Ce site utilise des cookies anonymes pour mesurer l’audience via Umami.
//                 Vous pouvez accepter ou refuser ce suivi.{" "}
//                 Aussi, certaines fonctionnalités
//                 externes comme la prise de rendez-vous via Calendly peuvent collecter
//                 les informations nécessaires à l’organisation du rendez-vous.
//                 <a
//                     href="/mentions-legales"
//                     className="text-blue-600 hover:underline"
//                 >
//                     En savoir plus
//                 </a>
//             </p>

//             <div className="mt-3 flex gap-2">
//                 <button
//                     onClick={accept}
//                     className="flex-1 bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition"
//                 >
//                     Accepter
//                 </button>
//                 <button
//                     onClick={refuse}
//                     className="flex-1 bg-gray-200 text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-300 transition"
//                 >
//                     Refuser
//                 </button>
//             </div>
//         </div>
//     );
// }
