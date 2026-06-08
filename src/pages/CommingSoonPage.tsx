import '../styles/commingSoonAnimation.css'

export default function CommingSoonPage() {
  const listOfSentences = [
    'Mon portfolio est en construction. Merci de votre patience !',
    'Je peaufine les derniers détails...',
    'En ligne très prochainement.',
    'Je finalise mon portfolio pour une mise en ligne prochaine.',
    'Actuellement hors ligne pour rénovation.',
    'Mon site est temporairement indisponible — retour très bientôt.',
  ]

  const currentSentence = listOfSentences[Math.floor(Math.random() * listOfSentences.length)]

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-900 to-gray-800 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-1xl md:text-4xl font-semibold mb-2 tracking-wide">Thomas Marie--Duval</h1>

      <h2
        className="overflow-hidden border-r-2 border-white inline-block text-2xl md:text-6xl font-bold text-center"
        style={{
          whiteSpace: 'nowrap',
          animation: 'typing 3s steps(25, end), blink 1.5s step-end infinite',
        }}
      >
        Portfolio en construction 🏗️
      </h2>

      <p
        className="text-lg md:text-xl text-gray-300 my-8 text-center"
        style={{
          opacity: 0,
          animation: 'fadeIn 1s ease-in-out forwards',
          animationDelay: '1s',
        }}
      >
        {currentSentence}
      </p>

      <a
        href="/ThomasMarieDuval_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 mb-2 inline-block bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-xl transition"
      >
        Voir mon CV
      </a>

      {/* Réseaux sociaux*/}
      <div className="flex justify-center gap-5 my-3">
        <a
          href="https://www.linkedin.com/in/thomas-marie-duval/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-center items-center w-16"
        >
          <img src="/icons/linkedin.svg" alt="Icone" className="size-6 group-hover:brightness-75 transition" />
          <p className={'group-hover:text-indigo-400'}>Linkedln</p>
        </a>
        <a
          href="https://github.com/Vysty"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col justify-center items-center w-16"
        >
          <img src="/icons/github.svg" alt="Icone" className="size-6 group-hover:brightness-75 transition" />
          <p className={'group-hover:text-indigo-400'}>GitHub</p>
        </a>
        <a href="mailto:contact@thomas-marie-duval.fr" className="group flex flex-col justify-center items-center w-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 group-hover:brightness-75 transition"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <p className={'group-hover:text-indigo-400'}>Email</p>
        </a>
      </div>
    </div>
  )
}
