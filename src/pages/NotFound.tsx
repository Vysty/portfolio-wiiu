// Page d'erreur 404 simple affichée lorsqu'une route n'est pas reconnue
export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-gray-800 flex flex-col items-center justify-center text-white px-4">
      <h1 className={'text-4xl md:text-6xl font-semibold tracking-wide '}>Erreur 404</h1>
      <h2 className="text-xl md:text-2xl m-2">Oups, vous êtes perdu !</h2>
      {/* Utilisation de l'historique du navigateur pour permettre à l'utilisateur de revenir facilement en arrière */}
      <button
        onClick={() => window.history.back()}
        className="mt-4 inline-block bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-xl transition"
      >
        Page précédente
      </button>
    </div>
  )
}
