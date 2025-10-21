import HeroBanner from "../_components/heroBanner";

export default async function MentionsLegales() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <section className="flex flex-col gap-12 mx-10 my-12 max-w-5xl">
                <HeroBanner
                    title={
                        <>
                            Mentions légales
                        </>
                    }
                    className="text-primary"
                />
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-5xl">Éditeur et responsable de publication</h2>
                    <p>Le présent site est édité par Marine Magnin.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-5xl">Hébergeur</h2>
                    <p>OVH SAS – 2 rue Kellermann – BP 80157 – 59053 Roubaix Cedex 1 – Téléphone : 1007
                        Informations techniques.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-5xl">Informations techniques</h2>
                    <p>Il est rappelé que le secret des correspondances n’est pas garanti sur le réseau Internet et qu’il appartient à chaque utilisateur d’Internet de prendre toutes les mesures appropriées de façon à protéger ses propres données et/ou logiciels de la contamination d’éventuels virus circulant sur Internet.
                        .</p>
                    <p>Voir <a href="/" className="underline">la politique de confidentialité</a></p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-bold sm:text-5xl">Entrée en vigueur</h2>
                    <p>La présente charte est entrée en vigueur le 20/10/2025.</p>
                </div>
            </section>
        </main>
    );
}
