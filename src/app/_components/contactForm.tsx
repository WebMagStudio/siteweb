// // import { useForm } from "react-hook-form"
// import { ChevronDownIcon } from "@heroicons/react/16/solid";

// type Inputs = {
//   example: string;
//   exampleRequired: string;
// };

// export default function ContactForm() {
//   //   const {
//   //     register,
//   //     handleSubmit,
//   //     watch,
//   //     formState: { errors },
//   //   } = useForm<Inputs>()

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form className="mx-auto w-full max-w-[600px] rounded-3xl bg-gradient-to-r from-bg-gradient-dark-start to-bg-gradient-dark-end p-10">
//       <div className="">
//         <div className="mb-6">
//           <label
//             htmlFor="first-name"
//             className="text-md block font-bold text-white"
//           >
//             Nom
//             <span className="text-warning"> *</span>
//           </label>
//           <div className="mt-2">
//             <input
//               id="first-name"
//               name="first-name"
//               type="text"
//               autoComplete="given-name"
//               className="block w-full rounded-full bg-mistyLavender px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//             />
//           </div>
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="last-name"
//             className="text-md block font-bold text-white"
//           >
//             Prénom
//             <span className="text-warning"> *</span>
//           </label>
//           <div className="mt-2">
//             <input
//               id="last-name"
//               name="last-name"
//               type="text"
//               autoComplete="family-name"
//               className="block w-full rounded-full bg-mistyLavender px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//             />
//           </div>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="email" className="text-md block font-bold text-white">
//             E-mail
//             <span className="text-warning"> *</span>
//           </label>
//           <div className="mt-2">
//             <input
//               id="email"
//               name="email"
//               type="email"
//               autoComplete="email"
//               className="block w-full rounded-full bg-mistyLavender px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//             />
//           </div>
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="subject"
//             className="text-md block font-bold text-white"
//           >
//             Sujet
//             <span className="text-warning"> *</span>
//           </label>
//           <div className="mt-2 grid grid-cols-1">
//             <select
//               id="subject"
//               name="subject"
//               autoComplete="subject-name"
//               className="col-start-1 row-start-1 w-full appearance-none rounded-full bg-mistyLavender py-1.5 pl-3 pr-8 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//             >
//               <option>Prendre RDV</option>
//               <option>Demande d'informations</option>
//               <option>Demande de devis</option>
//               <option>Autre</option>
//             </select>
//             <ChevronDownIcon
//               aria-hidden="true"
//               className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
//             />
//           </div>
//         </div>

//         <div className="mb-6">
//           <label
//             htmlFor="message"
//             className="text-md block font-bold text-white"
//           >
//             Message
//             <span className="text-warning"> *</span>
//           </label>
//           <div className="mt-2">
//             <textarea
//               id="message"
//               name="message"
//               rows={3}
//               className="block w-full rounded-xl bg-mistyLavender px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
//               defaultValue={""}
//             />
//           </div>
//         </div>
//       </div>

//       {/* <input type="submit" /> */}

//       <fieldset className="my-3">
//         <legend className="text-md font-bold text-white">
//           Veuillez cocher les cases ci-dessous :{" "}
//           <span className="text-warning">*</span>
//         </legend>
//         <div className="mt-6 space-y-6">
//           {/* Case 1 */}
//           <div className="flex gap-3">
//             <div className="flex h-6 shrink-0 items-center">
//               <div className="group grid size-4 grid-cols-1">
//                 <input
//                   defaultChecked
//                   id="autorisation"
//                   name="autorisation"
//                   type="checkbox"
//                   aria-describedby="autorisation-description"
//                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                 />
//                 <svg
//                   fill="none"
//                   viewBox="0 0 14 14"
//                   className="group-has-disabled:stroke-gray-950/25 pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
//                 >
//                   <path
//                     d="M3 8L6 11L11 3.5"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="group-has-checked:opacity-100 opacity-0"
//                   />
//                   <path
//                     d="M3 7H11"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="group-has-indeterminate:opacity-100 opacity-0"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div
//               className="text-xs text-white"
//               id="autorisation-description"
//             >
//               J'autorise Marine Magnin à utiliser les informations personnelles
//               transmises via ce formulaire pour me contacter uniquement dans le
//               cadre de ma demande.
//             </div>
//           </div>

//           {/* Case 2 */}
//           <div className="flex gap-3">
//             <div className="flex h-6 shrink-0 items-center">
//               <div className="group grid size-4 grid-cols-1">
//                 <input
//                   id="confidentialite"
//                   name="confidentialite"
//                   type="checkbox"
//                   aria-describedby="confidentialite-description"
//                   className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
//                 />
//                 <svg
//                   fill="none"
//                   viewBox="0 0 14 14"
//                   className="group-has-disabled:stroke-gray-950/25 pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
//                 >
//                   <path
//                     d="M3 8L6 11L11 3.5"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="group-has-checked:opacity-100 opacity-0"
//                   />
//                   <path
//                     d="M3 7H11"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="group-has-indeterminate:opacity-100 opacity-0"
//                   />
//                 </svg>
//               </div>
//             </div>
//             <div
//               className="text-xs text-white"
//               id="confidentialite-description"
//             >
//               En cliquant sur le bouton "Envoyer", je reconnais avoir pris
//               connaissance et être en accord avec votre Politique de
//               confidentialité.
//             </div>
//           </div>
//         </div>
//       </fieldset>

//       <button
//         className="text-md mt-12 flex rounded-xl bg-gradient-to-r from-purple-300 to-purple-600 px-8 py-2 text-center font-medium text-white transition-all duration-700 ease-in-out hover:from-fushia hover:to-amber sm:px-10 sm:py-4 sm:text-lg"
//         type="submit"
//       >
//         {" "}
//         Envoyer{" "}
//       </button>
//     </form>
//   );
// }

"use client";
import { useForm } from "react-hook-form";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  autorisation: boolean;
  confidentialite: boolean;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // À remplacer par ton traitement (envoi API, etc.)
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-[600px] rounded-3xl bg-white p-6 shadow-md hover:shadow-lg"
    >
      {/* Champ Nom */}
      <div className="mb-6">
        <label
          htmlFor="first-name"
          className="text-md block font-bold text-primary"
        >
          Nom<span className="text-red-500"> *</span>
        </label>
        <input
          id="first-name"
          type="text"
          {...register("firstName", { required: "Le nom est obligatoire." })}
          className="mt-2 block w-full rounded-full bg-accent/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        {errors.firstName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Champ Prénom */}
      <div className="mb-6">
        <label
          htmlFor="last-name"
          className="text-md block font-bold text-primary"
        >
          Prénom<span className="text-red-500"> *</span>
        </label>
        <input
          id="last-name"
          type="text"
          {...register("lastName", { required: "Le prénom est obligatoire." })}
          className="mt-2 block w-full rounded-full bg-accent/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        {errors.lastName && (
          <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      {/* Champ Email */}
      <div className="mb-6">
        <label htmlFor="email" className="text-md block font-bold text-primary">
          E-mail<span className="text-red-500"> *</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "L’e-mail est obligatoire.",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Adresse e-mail invalide.",
            },
          })}
          className="mt-2 block w-full rounded-full bg-accent/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Champ Sujet */}
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="text-md block font-bold text-primary"
        >
          Sujet<span className="text-red-500"> *</span>
        </label>
        <div className="relative mt-2 grid grid-cols-1">
          <select
            id="subject"
            {...register("subject", { required: "Le sujet est obligatoire." })}
            className="col-start-1 row-start-1 w-full appearance-none rounded-full bg-accent/50 py-1.5 pl-3 pr-8 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="">-- Sélectionnez --</option>
            <option value="rdv">Prendre RDV</option>
            <option value="infos">Demande d'informations</option>
            <option value="devis">Demande de devis</option>
            <option value="autre">Autre</option>
          </select>
          <ChevronDownIcon
            aria-hidden="true"
            className="pointer-events-none absolute right-2 top-2.5 size-5 text-gray-500 sm:size-4"
          />
        </div>
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Champ Message */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="text-md block font-bold text-primary"
        >
          Message<span className="text-red-500"> *</span>
        </label>
        <textarea
          id="message"
          rows={3}
          {...register("message", { required: "Le message est obligatoire." })}
          className="mt-2 block w-full rounded-xl bg-accent/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Cases à cocher */}
      <fieldset className="my-6">
        <legend className="text-md mb-4 font-bold text-primary">
          Veuillez cocher les cases ci-dessous :
          <span className="text-red-500"> *</span>
        </legend>

        {/* Autorisation */}
        <div className="mb-4 flex items-start gap-3">
          <input
            type="checkbox"
            id="autorisation"
            {...register("autorisation", { required: true })}
            className="mt-1 size-4 rounded border-gray-300 text-accent accent-accent focus:ring-accent"
          />
          <label htmlFor="autorisation" className="text-sm text-primary">
            J'autorise Marine Magnin à utiliser les informations personnelles
            transmises via ce formulaire pour me contacter uniquement dans le
            cadre de ma demande.
          </label>
        </div>
        {errors.autorisation && (
          <p className="mb-4 text-sm text-red-500">
            Cette autorisation est requise.
          </p>
        )}

        {/* Confidentialité */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="confidentialite"
            {...register("confidentialite", { required: true })}
            className="mt-1 size-4 rounded border-gray-300 text-accent accent-accent focus:ring-accent"
          />
          <label htmlFor="confidentialite" className="text-sm text-primary">
            En cliquant sur le bouton "Envoyer", je reconnais avoir pris
            connaissance et être en accord avec votre Politique de
            confidentialité.
          </label>
        </div>
        {errors.confidentialite && (
          <p className="mt-2 text-sm text-red-500">
            Veuillez accepter la politique de confidentialité.
          </p>
        )}
      </fieldset>

      {/* Bouton Envoyer */}
      <div className="flex justify-center pt-2">
        <button
          type="submit"
          className="text-md inline-flex w-fit gap-2 rounded-xl bg-gradient-to-r from-[#003249] via-[#6A497A] to-[#832161] px-8 py-4 text-center font-medium text-white transition-all duration-700 ease-in-out hover:from-fushia hover:to-amber focus:from-fushia focus:to-amber active:from-fushia active:to-amber sm:px-10 sm:py-6 sm:text-lg"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
