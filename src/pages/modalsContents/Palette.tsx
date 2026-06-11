import Badge from '../../components/Badge.tsx'

export default function Palette() {
  return (
    <div className={'flex flex-col h-full'}>
      <div className="flex flex-col overflow-y-auto h-full w-full p-4 space-y-4 gap-5">
        <div className="grid w-full grid-cols-[9fr_11fr] gap-10 items-start">
          <div className={'flex flex-col gap-4 text-justify text-xl min-w-0'}>
            <h2 className="text-4xl font-bold">Logiciel industriel d'assistance à la préparation en entrepôt</h2>
            <p>
              Cette application a été conçue pour assister la préparation de palettes destinées au restockage de
              supermarchés. Elle accompagne les préparateurs de commandes en temps réel sur le terrain afin d'accroître
              l'efficacité logistique dans des conditions de travail particulièrement exigeantes.
            </p>

            <p>
              L'interface n'avait pas de vocation esthétique mais répond à des contraintes environnementales et
              matérielles strictes. Elle est déployée sur des tablettes tactiles utilisées dans des entrepôts
              frigorifiques à environ -10°C par des opérateurs équipés de gants épais. L'ergonomie a donc été conçue
              pour s'adapter à ce milieu extrême. L'intégration de la reconnaissance et de la synthèse vocales permet
              aux préparateurs d'interagir avec l'application tout en gardant les mains libres.
            </p>

            <p>
              Le système assure un suivi logistique en temps réel grâce à un affichage du parcours de préparation,
              listant les adresses exactes dans l'entrepôt, les noms d'articles et les quantités requises pour chaque
              commande. Pour faciliter l'arrangement des colis sur le support, l'application intègre un moteur de rendu
              3D modélisant le support en cours de montage. Ce module affiche visuellement l'emplacement optimal et le
              plus stable pour le placement du prochain colis.
            </p>
          </div>
          <div className={'flex items-start justify-center overflow-hidden min-w-0'}>
            <img
              src="/modalImage/PreparationInterface.png"
              alt="Image de l'interface utilisateur du projet"
              className="h-auto max-w-full rounded-lg object-contain"
            />
          </div>
        </div>

        <div className={'flex flex-col gap-8'}>
          <h3 className={'text-2xl font-bold'}>Stack Technique :</h3>
          <div className={'flex justify-around items-start'}>
            <Badge
              title={'FrontEnd'}
              content={'React, Tailwind CSS, Three.js, Web Speech API pour le STT et TTS natifs'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path
                  fill-rule="evenodd"
                  d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Badge>
            <Badge title={'Backend'} content={"Symfony pour la mise en place de l'API REST"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
                <path
                  fill-rule="evenodd"
                  d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  clip-rule="evenodd"
                />
              </svg>
            </Badge>
            <Badge title={'Base de données'} content={'PostgreSQL'}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z" />
                <path d="M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z" />
                <path d="M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z" />
                <path d="M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z" />
              </svg>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
