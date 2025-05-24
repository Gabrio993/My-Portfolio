import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <h2 className="section-title">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-lg mb-6">I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to connect!</p>

          <div className="space-y-4">
            <a href="mailto:gabriele93.fusco@gmail.com" className="flex items-center gap-3 hover:text-gray-700 transition-colors">
              <Mail size={20} />
              <span>gabriele93.fusco@gmail.com</span>
            </a>

            <a href="tel:+393208242781" className="flex items-center gap-3 hover:text-gray-700 transition-colors">
              <Phone size={20} />
              <span>+39 3208242781</span>
            </a>

            <div className="flex items-center gap-3">
              <MapPin size={20} />
              <span>Turin, TO</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
