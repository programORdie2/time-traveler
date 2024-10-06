const features = [
  {
    title: 'Create Time Capsules',
    description: 'Upload photos, videos, and files into a secure digital vault.',
    icon: '📦',
  },
  {
    title: 'Set a Date',
    description: 'Choose when your capsule unlocks — in a week, a year, or a decade.',
    icon: '📅',
  },
  {
    title: 'Unlock the Future',
    description: 'When the time comes, open your capsule and relive your stored memories.',
    icon: '🔓',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Features</h2>
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg h-60">
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}