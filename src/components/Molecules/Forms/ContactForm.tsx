"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { Reveal } from '@/src/components/ui/FramerMotion/onReveal';

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;
    setStatus('sending');

    const serviceID = 'service_zye0j4k';
    const templateID = '__ejs-test-mail-service__';
    const publicKey = 'yYnO_1jLWd3zOUay3';

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
          console.log('SUCCESS!', result.text);
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 3000); 
      }, (error) => {
          console.log('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 3000);
      });
  };

  const getButtonText = () => {
    switch (status) {
      case 'sending':
        return 'Sending...';
      case 'success':
        return 'Message Sent!';
      case 'error':
        // [PERUBAHAN] Teks untuk status error diganti sesuai permintaan
        return 'Thankkk you';
      default:
        return 'Send Message';
    }
  };

  return (
    <Reveal delay={0.3} duration={0.5} width="100%">
        <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto mt-8 space-y-6">
            <Input 
                type="text" 
                name="from_name" 
                placeholder="Your Name" 
                required 
                className="dark:bg-[#0e1111] border-gray-300 dark:border-gray-600 focus:ring-teal-500"
            />
            <Input 
                type="email" 
                name="from_email" 
                placeholder="Your Email" 
                required 
                className="dark:bg-[#0e1111] border-gray-300 dark:border-gray-600 focus:ring-teal-500"
            />
            <Textarea 
                name="message" 
                placeholder="Your Message" 
                required 
                rows={6}
                className="dark:bg-[#0e1111] border-gray-300 dark:border-gray-600 focus:ring-teal-500"
            />
            <Button 
                type="submit" 
                disabled={status === 'sending'}
                className={`w-full text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ${
                    status === 'success' ? 'bg-green-500' :
                    status === 'error' ? 'bg-red-500' :
                    'gradient-tosca-biru hover:opacity-90'
                }`}
            >
                {getButtonText()}
            </Button>
        </form>
    </Reveal>
  );
};