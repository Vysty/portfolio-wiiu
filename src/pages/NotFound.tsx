export default function NotFound() {
    return (
        <div
            className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-gray-800 flex flex-col items-center justify-center text-white px-4"
        >
            <h1 className="text-2xl md:text-4xl font-semibold mb-4 tracking-wide">
                Oups, vous êtes perdu !
            </h1>
            <button
                onClick={() => window.history.back()}
                className="mt-4 inline-block bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-xl transition"
            >
                Retour à la page précédente
            </button>
        </div>
    )
}