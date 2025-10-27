import HeroBanner from "../_components/heroBanner";

export default async function PolitiqueConfidentialite() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <section className="flex flex-col gap-12 mx-10 my-12 max-w-5xl">
                <HeroBanner
                    title={
                        <>
                            Politique de confidentialité
                        </>
                    }
                    className="text-primary"
                />
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-4xl">Identité du responsable de la collecte de données</h2>
                    <p>Le responsable de la collecte de vos données à caractère personnel est l&apos;éditrice du site : Marine Magnin.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-4xl">Conditions générales d&apos;utilisation</h2>
                    <h3 className="text-lg font-bold sm:text-2xl">Propriétés intellectuelles</h3>
                    <p>

                        Ce site constitue une œuvre de l&apos;esprit protégée par les dispositions du droit d&apos;auteur et du Code de la Propriété Intellectuelle.
                        La reproduction ou représentation, intégrale ou partielle, des pages, des données et de tout autre élément constitutif du présent site, par quelque procédé ou support que ce soit, est interdite et constitue une contrefaçon lorsqu&apos;elle est faite sans l&apos;autorisation expresse de l&apos;éditeur.
                    </p>
                    <h3 className="text-lg font-bold sm:text-2xl">Accès au site</h3>
                    <p>
                        L&apos;utilisation du site https://webmagstudio.fr/ implique l&apos;acceptation pleine et entière des conditions générales d&apos;utilisation décrites ci-après.
                        Ces conditions d&apos;utilisation sont susceptibles d&apos;être modifiées ou complétées à tout moment. Les utilisateurs du site https://webmagstudio.fr/ sont donc invités à les consulter de manière régulière.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-4xl">Responsabilité du contenu du site</h2>
                    <p>L&apos;éditrice de publication ne peut en aucun cas être tenue responsable de l&apos;utilisation ou de l&apos;interprétation des informations contenues sur le site.</p>
                    <h3 className="text-lg font-bold sm:text-2xl">Sécurité</h3>
                    <p>
                        Nous vous encourageons à prendre toutes précautions utiles, mesures organisationnelles et techniques appropriées pour préserver la sécurité, l&apos;intégrité et la confidentialité de vos données à caractère personnel et notamment, empêcher qu&apos;elles soient déformées, endommagées ou que des tiers non autorisés y aient accès.Nous vous encourageons à prendre toutes précautions utiles, mesures organisationnelles et techniques appropriées pour préserver la sécurité, l&apos;intégrité et la confidentialité de vos données à caractère personnel et notamment, empêcher qu&apos;elles soient déformées, endommagées ou que des tiers non autorisés y aient accès.
                    </p>
                    <h3 className="text-lg font-bold sm:text-2xl">Liens hypertextes</h3>
                    <p>
                        Des liens hypertextes peuvent être présents sur le site. Nous vous informons qu&apos;en cliquant sur ces liens, vous sortirez du site https://webmagstudio.fr/.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-4xl">Données personnelles</h2>
                    <p>Conformément à la loi française (N° 78-17 du 6 janvier 1978) relative à l&apos;informatique, aux fichiers et aux libertés (CNIL) et au Règlement Européen n°2016/679 du 27 avril 2016, dit le « RGPD », à compter du 25 mai 2018, qui vise à renforcer les droits des personnes, responsabiliser les acteurs traitant des données personnelles et harmoniser et crédibiliser la régulation du traitement des données personnelles, tout utilisateur ayant déposé sur ce site des informations directement ou indirectement nominatives, peut demander communication, rectification ou suppression des informations nominatives le concernant par simple mail auprès de Marine Magnin.</p>

                    <h3 className="text-lg font-bold sm:text-2xl">Informations collectées et usages</h3>
                    <p>
                        Nous collectons des informations personnelles lorsque vous nous contactez via la prise de rendez-vous en ligne ou lorsque vous nous envoyez un e-mail. Les informations que nous collectons peuvent inclure votre nom, votre adresse e-mail, votre numéro de téléphone, et toute autre information que vous choisissez de nous fournir.
                    </p>
                    <h3 className="text-lg font-bold sm:text-2xl">Cookies</h3>
                    <p>
                        Sur ce site, nous n&apos;utilisons pas de cookies publicitaires, ni de statistiques d’audience, ni de suivi du comportement de l&apos;utilisateur.
                    </p>
                    <h3 className="text-lg font-bold sm:text-2xl">Contenu embarqué depuis d&apos;autres sites</h3>
                    <p>
                        Ce site utilise le service de Calendly pour la prise de rendez-vous en ligne. Pour plus d&apos;informations, veuillez vous référer à leur politique de confidentialité.
                    </p>

                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-4xl">Durée de stockage de vos données</h2>
                    <h3 className="text-lg font-bold sm:text-2xl">Données relatives à la gestion commerciale</h3>
                    <p>
                        Vos données à caractère personnel ne seront pas conservées au-delà de la durée strictement nécessaire à la gestion de notre relation commerciale avec vous.
                    </p>
                    <h3 className="text-lg font-bold sm:text-2xl">Données relatives à la gestion de listes d&apos;opposition à recevoir de la prospection</h3>
                    <p>
                        Les informations permettant de prendre en compte votre droit d&apos;opposition sont conservées au minimum trois ans à compter de l&apos;exercice du droit d&apos;opposition.
                    </p>
                    <h3 className="text-lg font-bold sm:text-2xl">Données relatives à la mesure de l&apos;audience</h3>
                    <p>
                        Les informations stockées dans le terminal des utilisateurs ou tout autre élément utilisé pour identifier les utilisateurs et permettant leur traçabilité ou fréquentation ne seront pas conservées au-delà de 6 mois.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-4xl">Les droits que vous avez sur vos données</h2>
                    <p>
                        Conformément à la loi n° 78-17 du 6 janvier 1978 relative à l&apos;informatique, aux fichiers et aux libertés, vous disposez du droit d&apos;obtenir la communication et, le cas échéant, la rectification ou la suppression des données vous concernant, à travers un accès en ligne à votre dossier.
                        Vous pouvez également vous adresser à : contact@webmagstudio.fr
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-4xl">Transmission de vos données personnelles</h2>
                    <p>
                        L&apos;éditrice du site aura accès à vos données à caractère personnel.
                        Peuvent également être destinataires de vos données à caractère personnel les organismes publics, exclusivement pour répondre à nos obligations légales, les auxiliaires de justice, les officiers ministériels et les organismes chargés d&apos;effectuer le recouvrement de créances.
                        Vos données à caractère personnel ne feront pas l&apos;objet de cessions, locations ou échanges au bénéfice de tiers.
                    </p>
                </div>
            </section>
        </main>
    );
}
