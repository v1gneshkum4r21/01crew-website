export default function About() {
  return (
    <section id="about" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80"
              alt="Our Office"
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">About 01 Crew</h2>
            <p className="text-gray-400">
              Located at the prestigious Kristu Jayanti College Incubation Center, 01 Crew is at the forefront of technological innovation. We combine cutting-edge technology with creative problem-solving to deliver solutions that drive business growth.
            </p>
            <div className="border-l-4 border-cyan-500 pl-4 my-6">
              <p className="text-gray-300 italic">
                "Our mission is to empower businesses through innovative technology solutions and exceptional service delivery."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-2xl font-bold text-cyan-500">50+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-cyan-500">100%</h4>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}