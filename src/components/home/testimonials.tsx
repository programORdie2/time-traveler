const testimonials = [
  {
    quote: "I can't wait to surprise my future self with these memories!",
    name: 'John Doe',
  },
  {
    quote: 'Perfect for preserving moments for special occasions!',
    name: 'Jane Smith',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">What People Are Saying</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-xl italic mb-4">"{testimonial.quote}"</p>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}