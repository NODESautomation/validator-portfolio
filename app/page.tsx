export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-shadow">Welcome to NODESautomation</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white/90 dark:bg-blue-800/90 p-6 rounded-lg shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 text-shadow">Reliable node operation</h2>
          <p className="text-shadow">We ensure your nodes are running smoothly and efficiently.</p>
        </div>
        <div className="bg-white/90 dark:bg-blue-800/90 p-6 rounded-lg shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 text-shadow">Blockchain stability support</h2>
          <p className="text-shadow">Our services contribute to the overall stability of the blockchain network.</p>
        </div>
        <div className="bg-white/90 dark:bg-blue-800/90 p-6 rounded-lg shadow-md backdrop-blur-sm">
          <h2 className="text-2xl font-semibold mb-4 text-shadow">Efficient validator</h2>
          <p className="text-shadow">
            We provide high-performance validation services for various blockchain networks.
          </p>
        </div>
      </div>
    </div>
  )
}
