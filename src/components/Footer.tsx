const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 md:px-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <p className="text-sm text-gray-600">© {currentYear} Portfolio. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#home" className="text-sm text-gray-600 hover:text-black transition-colors">
            Home
          </a>
          <a href="#projects" className="text-sm text-gray-600 hover:text-black transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-black transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
