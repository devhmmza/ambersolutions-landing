import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div 
          className="w-16 h-16 border-2 border-electric-blue rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [1, 0.7, 1] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute inset-2 bg-electric-blue rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.1, 0.2] 
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}
