import { useState } from 'react';

export default function ContactForm() {
  
  // --- PASTE YOUR NEW KEY FROM WEB3FORMS HERE ---
  const ACCESS_KEY = "ae4b0387-7ab2-4f2b-9ed7-300a776cfba9";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // This is the data structure Web3Forms expects (JSON)
    const formData = {
      name: name,
      email: email,
      message: message,
      access_key: ACCESS_KEY,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error("Form submission error:", result.message);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
        disabled={isSubmitting}
        className="font-valorant bg-valorant-red text-white text-lg px-6 py-2 rounded-md hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
      </button>

      {submissionStatus === 'success' && (
        <p className="mt-4 text-green-400">Message sent successfully! Thank you.</p>
      )}
      {submissionStatus === 'error' && (
        <p className="mt-4 text-valorant-red">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}