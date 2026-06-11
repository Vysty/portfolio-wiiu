// Composant affiché dans la modale lorsqu'on clique sur l'icône "Contact"
export default function Contact() {
  return (
    <div className={'flex flex-col gap-3 md:gap-5'}>
      <h1 className={'text-2xl md:text-3xl font-bold'}>Contact</h1>
      <div className={'flex flex-col gap-2 md:gap-3'}>
        {/* Section Email */}
        <div className={'flex flex-col gap-1'}>
          <div className={'flex gap-2 md:gap-3'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 md:size-8"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <p className={'text-lg md:text-xl'}>Emails :</p>
          </div>
          <ul className={'list-disc pl-5 text-sm md:text-base'}>
            <li>
              <a className={'text-tileselected underline'} href={'mailto:tmarieduval@gmail.com'}>
                tmarieduval@gmail.com
              </a>
            </li>
            <li>
              <a className={'text-tileselected underline'} href={'mailto:contact@thomas-marie-duval.fr'}>
                contact@thomas-marie-duval.fr
              </a>
            </li>
          </ul>
        </div>

        {/* Section Téléphone */}
        <div className={'flex flex-col gap-1'}>
          <div className={'flex gap-2 md:gap-3'}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 md:size-8"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <p className={'text-lg md:text-xl'}>Tel :</p>
          </div>
          <ul className={'list-disc pl-5 text-sm md:text-base'}>
            <li>
              <a className={'text-tileselected underline'} href={'tel:0665367772'}>
                06 65 36 77 72
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
