import React from 'react';
import { redirect } from 'next/navigation';

const ContactPage: React.FC = () => {
  // redirect google form
  return redirect('https://docs.google.com/forms/d/e/1FAIpQLSdSTDPgMCzw7rfAHZYNcFkWGfUCLMzpeeUzxpad_9Pg_TVB1A/viewform');
};

export default ContactPage;
