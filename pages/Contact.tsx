import React from 'react';
import { MapPin, Phone, Mail, Globe, Clock, Send } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Contact: React.FC = () => {
  const { state } = useContent();
  
  // Fallback to default contact if not available
  const contact = state.contact || {
    location: 'Accra, Ghana',
    locationDetail: 'Diplomatic Enclave',
    telephone: '+233 (0) XXX XXX XXX',
    email: 'secretariat@ggpa-global.org',
    officeHours: 'Monday - Friday: 9:00 AM - 5:00 PM GMT',
    officeHoursDetail: 'By appointment for diplomatic engagements',
    mediaEmail: 'media@ggpa-global.org',
    partnershipsEmail: 'partnerships@ggpa-global.org',
    yacEmail: 'yac@ggpa-global.org',
  };

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-24 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 text-white/5 pointer-events-none">
          <MapPin size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold font-serif mb-8">Diplomatic Inquiries</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              Headquarters in Accra, Ghana. Connect with the Secretariat for institutional partnerships, media inquiries, and diplomatic engagements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-8">Headquarters</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900 p-3 rounded-xl shrink-0">
                    <MapPin className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Location</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {contact.location}<br />
                      {contact.locationDetail}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900 p-3 rounded-xl shrink-0">
                    <Phone className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Telephone</h3>
                    <p className="text-slate-600">{contact.telephone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900 p-3 rounded-xl shrink-0">
                    <Mail className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                    <p className="text-slate-600">{contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900 p-3 rounded-xl shrink-0">
                    <Clock className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Office Hours</h3>
                    <p className="text-slate-600">
                      {contact.officeHours}<br />
                      {contact.officeHoursDetail}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
              <h3 className="font-bold text-slate-900 mb-4">Diplomatic Protocol</h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                For formal diplomatic inquiries, please follow the Note Verbale protocol as outlined in Volume X of the Compendium. All diplomatic communications are handled through the Chief of Protocols.
              </p>
              <button className="text-amber-700 hover:text-amber-800 font-bold text-sm flex items-center gap-2">
                View Protocol Guidelines
                <Globe size={16} />
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold font-serif mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Inquiry Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                  <option>General Inquiry</option>
                  <option>Diplomatic Engagement</option>
                  <option>Media Inquiry</option>
                  <option>Partnership Opportunity</option>
                  <option>IIGRA Diagnostic Request</option>
                  <option>Fellowship Application</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Your message..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">Media Inquiries</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              For press releases, interviews, and media access to the Founder or Executive Council.
            </p>
            <a href={`mailto:${contact.mediaEmail || 'media@ggpa-global.org'}`} className="text-amber-600 hover:text-amber-700 font-bold text-sm">
              {contact.mediaEmail || 'media@ggpa-global.org'} →
            </a>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">Partnerships</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Interested in institutional partnerships, research collaborations, or strategic alliances.
            </p>
            <a href={`mailto:${contact.partnershipsEmail || 'partnerships@ggpa-global.org'}`} className="text-amber-600 hover:text-amber-700 font-bold text-sm">
              {contact.partnershipsEmail || 'partnerships@ggpa-global.org'} →
            </a>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">Fellowship Applications</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Questions about the YAC application process, tracks, or induction requirements.
            </p>
            <a href={`mailto:${contact.yacEmail || 'yac@ggpa-global.org'}`} className="text-amber-600 hover:text-amber-700 font-bold text-sm">
              {contact.yacEmail || 'yac@ggpa-global.org'} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
