import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Phone, GraduationCap, FileText, Upload, CheckCircle } from 'lucide-react';

const Application: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    track: '',
    qualification: '',
    experience: '',
    motivation: '',
    resume: null as File | null
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Application submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 lg:p-20 shadow-sm border border-slate-100 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h1 className="text-4xl font-bold font-serif mb-4 text-slate-900">Application Submitted</h1>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Thank you for your interest in joining the Youth Advisory Corps. Your application has been received and is under review by the Executive Council.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              You will receive a confirmation email at <strong>{formData.email}</strong> within 24 hours with next steps in the induction process.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                to="/fellowship"
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
              >
                Back to Fellowship
              </Link>
              <Link 
                to="/"
                className="bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-amber-700 transition-all"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 sm:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <Link 
            to="/fellowship"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-bold mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            Back to Fellowship
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-3 sm:mb-4 text-slate-900">YAC Application Form</h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Join the Technical Elite. Complete the form below to begin your journey as an Architect of Integrity.
          </p>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-12 shadow-sm border border-slate-100 space-y-6 sm:space-y-8">
          {/* Personal Information */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold font-serif mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <User className="text-amber-600 w-6 h-6 sm:w-7 sm:h-7" />
              Personal Information
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <Mail size={16} />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                  <Phone size={16} />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="+233 (0) XXX XXX XXX"
                />
              </div>
            </div>
          </section>

          {/* Track Selection */}
          <section>
            <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
              <GraduationCap className="text-amber-600" size={28} />
              Track Selection
            </h2>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Select Your Track *</label>
              <select
                name="track"
                value={formData.track}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Choose your specialization track</option>
                <option value="track-a">Track A: Legal & Diplomatic Affairs</option>
                <option value="track-b">Track B: Economic Governance (IPSAS/IFRS)</option>
                <option value="track-c">Track C: Digital Sovereignty & E-Governance</option>
              </select>
            </div>
          </section>

          {/* Qualifications */}
          <section>
            <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
              <FileText className="text-amber-600" size={28} />
              Qualifications & Experience
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Educational Qualifications *</label>
                <textarea
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="List your degrees, certifications, and relevant qualifications (e.g., LLB, PhD, IPSAS certification, etc.)"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Professional Experience *</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Describe your professional experience relevant to your chosen track"
                />
              </div>
            </div>
          </section>

          {/* Motivation Statement */}
          <section>
            <h2 className="text-2xl font-bold font-serif mb-6">Motivation Statement</h2>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Why do you want to join the YAC? *</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Explain your motivation for joining the Youth Advisory Corps and how you align with the GGPA's mission of Functional Authority..."
              />
            </div>
          </section>

          {/* Resume Upload */}
          <section>
            <h2 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
              <Upload className="text-amber-600" size={28} />
              Resume/CV Upload
            </h2>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Upload Your Resume (PDF, DOC, DOCX) *</label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-amber-400 transition-colors">
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden"
                  id="resume-upload"
                />
                <label htmlFor="resume-upload" className="cursor-pointer">
                  <Upload className="mx-auto mb-4 text-slate-400" size={32} />
                  <p className="text-slate-600 font-medium mb-2">
                    {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                  </p>
                  <p className="text-xs text-slate-400">PDF, DOC, or DOCX (Max 10MB)</p>
                </label>
              </div>
            </div>
          </section>

          {/* Terms & Conditions */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                required
                className="mt-1 w-5 h-5 rounded border-slate-300 text-amber-600 focus:ring-amber-500"
              />
              <label htmlFor="terms" className="text-sm text-slate-700">
                I understand that this application is subject to the GGPA's vetting process, including NDA signing, background checks, and technical assessment. I agree to the terms of the induction process as outlined in the Fellowship page. *
              </label>
            </div>
          </section>

          {/* Submit Button */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              Submit Application
              <CheckCircle size={20} />
            </button>
            <Link
              to="/fellowship"
              className="px-8 py-5 rounded-2xl font-bold text-lg border-2 border-slate-200 text-slate-700 hover:border-slate-300 transition-all"
            >
              Cancel
            </Link>
          </div>
        </form>

        {/* Additional Information */}
        <div className="mt-12 bg-amber-50 rounded-2xl p-8 border border-amber-100">
          <h3 className="font-bold text-slate-900 mb-4">What Happens Next?</h3>
          <ul className="space-y-2 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">1.</span>
              <span>Your application will be reviewed by the Executive Council within 5-7 business days.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">2.</span>
              <span>If shortlisted, you'll receive an email with instructions for the next phase (NDA & Confidentiality Briefing).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">3.</span>
              <span>Selected candidates will undergo technical assessment and vetting.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 font-bold">4.</span>
              <span>Final candidates will participate in In-Situ Audit Training before formal induction.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Application;
