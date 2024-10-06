const steps = [
  {
    title: 'Upload Your Files',
    description: 'Drag and drop your photos, videos, and documents into a new capsule.',
    icon: '📁',
  },
  {
    title: 'Pick a Date',
    description: 'Choose a future date when your time capsule will unlock.',
    icon: '📅',
  },
  {
    title: 'Wait for the Moment',
    description: 'Sit back and relax — your files will stay secure until the right time arrives.',
    icon: '⏳',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 min-h-screen" id="how-it-works">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12 text-gray-500">How It Works</h2>
        <div className="flex flex-wrap justify-center">
          {steps.map((step, index) => (
            <div key={index} className="w-full sm:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg h-60">
                <div className="text-6xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}