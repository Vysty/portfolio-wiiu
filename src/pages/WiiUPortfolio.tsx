import {motion, AnimatePresence} from "framer-motion";
import {useState} from "react";

type AppData = {
    id: number;
    name: string;
};

const apps: AppData[] = [
    {id: 1, name: "Mon CV"},
    {id: 2, name: "Projets"},
    {id: 3, name: "Contact"},
];

export default function WiiUPortfolio() {
    const [selectedApp, setSelectedApp] = useState<AppData | null>(null);

    return (
        <div className="relative flex flex-col h-screen w-screen bg-gray-900 text-white">
            {/* Top bar */}
            <header className="p-4 bg-gray-800">Wii U Portfolio</header>

            {/* App Grid */}
            <main className="flex-grow overflow-x-auto p-6 flex space-x-6">
                {apps.map((app) => (
                    <motion.div
                        key={app.id}
                        whileHover={{scale: 1.1}}
                        onClick={() => setSelectedApp(app)}
                        className="w-32 h-32 bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer"
                    >
                        {app.name}
                    </motion.div>
                ))}
            </main>

            {/* Bottom bar */}
            <footer className="p-4 bg-gray-800">© 2025</footer>

            {/* Overlay App View */}
            <AnimatePresence>
                {selectedApp && (
                    <motion.div
                        key="appview"
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        exit={{opacity: 0, scale: 0.9}}
                        className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center z-50"
                        onClick={() => setSelectedApp(null)}
                    >
                        <div
                            className="bg-white text-black p-8 rounded-xl shadow-lg text-center"
                            onClick={(e) => e.stopPropagation()} // évite de fermer quand on clique dans la fenêtre
                        >
                            <h2 className="text-2xl font-bold mb-4">{selectedApp.name}</h2>
                            <p>Contenu de l'app ici</p>
                            <button
                                className="mt-6 px-4 py-2 bg-gray-800 text-white rounded"
                                onClick={() => setSelectedApp(null)}
                            >
                                Fermer
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
