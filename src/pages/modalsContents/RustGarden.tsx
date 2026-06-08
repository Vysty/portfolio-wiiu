export default function RustGarden() {
  return (
    <div className={"flex flex-col h-full"}>
      <h2 className="text-4xl font-bold mb-4">Rust Garden</h2>

      <div className="overflow-y-auto h-full p-4 space-y-4">
        <p>RustGarden est un système IoT complet dédié à la surveillance environnementale et à l'automatisation de
          l'entretien des plantes.</p>

        <p>Ce projet illustre la conception d'une architecture logicielle distribuée et robuste, allant de la capture de
          données par des capteurs connectés à un Arduino, jusqu'à leur restitution via une interface utilisateur, avec
          l'écosystème Rust au cœur de la stack.</p>

        <p>Cette interface permet également l'automatisation de commandes telles que l'entretien du jardin manuellement
          ou bien automatisé en fonction des besoins de la plante.</p>

        <p>L'application s'appuie sur les données de Trefle.io pour connaître les conditions idéales de la plante.</p>

        <img src="/modalImage/rustGarden.png" alt="RustGarden" className="w-3/4 h-auto rounded-lg shadow-md mx-auto" />

        <h3 className={"text-xl font-bold"}>Stack Technique :</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Frontend : Dioxus (Rust), requêtes REST API</li>
          <li>Backend : Rust, API REST, intégration API externe (Trefle.io)</li>
          <li>IoT et Pont (arduino-com) : Arduino, Rust, Port Série, Protocole MQTT</li>
          <li>Base de données : PostgreSQL</li>
        </ul>

      </div>
    </div>
  )
}