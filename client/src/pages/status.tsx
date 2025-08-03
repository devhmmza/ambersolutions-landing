import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Status() {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle size={40} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            All Systems <span className="text-electric-blue">Online</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Working 24/7 for our customers
          </p>
          
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Service Status</span>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-500 font-medium">Operational</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Website</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400">100% Uptime</span>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Email Support</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400">Available 24/7</span>
            </div>
            
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Project Delivery</span>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400">On Schedule</span>
            </div>
          </div>
          
          <p className="text-gray-400 mt-8">
            Last updated: {new Date().toLocaleString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
}