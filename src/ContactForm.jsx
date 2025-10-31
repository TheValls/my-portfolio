import { useState } from 'react';

export default function ContactForm() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert(`Thank you, ${name}! Your message has been sent.`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-gray-400 mb-1">Name</label>
        <input 
          type="text" 
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-valorant-red"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-400 mb-1">Email</label>
        <input 
          type="email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-valorant-red"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-400 mb-1">Message</label>
        <textarea 
          id="message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full bg-gray-800/50 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-valorant-red"
        />
      </div>
      <button 
        type="submit"
        className="font-valorant bg-valorant-red text-white text-lg px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}