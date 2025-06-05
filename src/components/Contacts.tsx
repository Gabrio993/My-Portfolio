import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { PUBLIC_CONTACT_EMAIL } from "../config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"sending" | "success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch("/.netlify/functions/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null); // Resetta lo stato per nascondere il messaggio
      }, 3000);

      return () => clearTimeout(timer); // Pulizia se il componente si smonta o status cambia prima
    }
  }, [status]);

  return (
    <div>
      <h2 className="section-title">Contact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-lg mb-6">I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to connect!</p>

          <div className="space-y-4">
            <a href={`mailto:${PUBLIC_CONTACT_EMAIL}`} className="flex items-center gap-3 hover:text-gray-700 transition-colors">
              <Mail size={20} />
              <span>{PUBLIC_CONTACT_EMAIL}</span>
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
              href="https://github.com/Gabrio993"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/fuscogabriele"
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
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Messaggi di stato */}
            {status === "success" && <p className="text-green-600">Messaggio inviato con successo!</p>}
            {status === "error" && <p className="text-red-600">Errore durante l'invio. Riprova più tardi.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
