import { motion } from "framer-motion";

const footerLinks = {
  support: [
    { label: "Help Center", href: "#contact" },
    { label: "Community", href: "https://www.instagram.com/ambersolutionspk?igsh=d3FyYTVtcno3MG9k" },
    { label: "Contact Us", href: "#contact" },
    { label: "Status", href: "/status" }
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" }
  ]
};

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (href.startsWith("http")) {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold text-electric-blue mb-4">Ambersolutionspk</div>
            <p className="text-gray-400 text-sm">
              Turning ideas into impactful digital experiences through innovative solutions and trusted expertise.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-electric-blue transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-electric-blue transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2024 Ambersolutionspk. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <button className="hover:text-electric-blue transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-electric-blue transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-electric-blue transition-colors">
              Cookie Policy
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
