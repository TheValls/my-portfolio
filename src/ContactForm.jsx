import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const FORM_ENDPOINT = import.meta.env.VITE_FORM_SUBMIT_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    const formData = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      // FormSubmit returns success as a string "true"
      if (result.success === "true") {
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
      {/* We add a 'name' attribute to each field. This is what FormSubmit uses. */}
      <div>
        <label htmlFor="name" className="block text-gray-400 mb-1">Name</label>
        <input 
          type="text" 
          id="name"
          name="name" // <-- Add this
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
          name="email" // <-- Add this
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
          name="message" // <-- Add this
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