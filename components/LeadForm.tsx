import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Home, 
  Clock, 
  Wrench, 
  ChevronLeft,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { LeadFormData } from '../types';

interface LeadFormProps {
  className?: string;
  onSuccess?: () => void;
}

type Step = 'service' | 'urgency' | 'homeowner' | 'details';

export const LeadForm: React.FC<LeadFormProps> = ({ className = "", onSuccess }) => {
  const [step, setStep] = useState<Step>('service');
  const [formData, setFormData] = useState<LeadFormData & { serviceType?: string; urgency?: string; isHomeowner?: string }>({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    serviceType: '',
    urgency: '',
    isHomeowner: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Calculate progress for the bar
  const getProgress = () => {
    switch(step) {
      case 'service': return 25;
      case 'urgency': return 50;
      case 'homeowner': return 75;
      case 'details': return 95;
      default: return 0;
    }
  };

  const handleSelection = (field: string, value: string, nextStep: Step) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setStep(nextStep);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className={`bg-white rounded-3xl shadow-2xl p-8 border-t-8 border-brand-500 text-center h-auto min-h-[520px] flex flex-col justify-center items-center ${className}`}>
        <div className="bg-green-100 p-6 rounded-full mb-8 animate-bounce">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Request Received!</h3>
        <p className="text-gray-600 mb-8 max-w-xs mx-auto text-lg leading-relaxed">
          Your quote request has been sent. Expect a call shortly at <span className="font-bold text-gray-900 bg-gray-100 px-2 py-0.5 rounded">{formData.phone}</span>.
        </p>
        <button 
          onClick={() => {
            setStep('service');
            setIsSuccess(false);
            setFormData({ fullName: '', email: '', phone: '', zipCode: '' });
          }}
          className="text-brand-600 font-bold hover:text-brand-700 hover:underline transition-colors"
        >
          Start new quote
        </button>
      </div>
    );
  }

  return (
    <div id="lead-form" className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col h-auto min-h-[520px] ${className}`}>
      
      {/* Header / Progress */}
      <div className="bg-white px-8 pt-8 pb-4">
        <div className="flex justify-between items-end mb-4">
           <div>
             <span className="text-xs font-bold text-brand-600 tracking-wider uppercase mb-1 block">
                Step {step === 'service' ? '1' : step === 'urgency' ? '2' : step === 'homeowner' ? '3' : '4'} of 4
             </span>
             <h3 className="font-black text-gray-900 text-2xl leading-none">
               {step === 'details' ? 'Final Details' : 'Get Your Quote'}
             </h3>
           </div>
        </div>
        <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
          <div 
            className="bg-brand-600 h-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(225,29,72,0.5)]"
            style={{ width: `${getProgress()}%` }}
          ></div>
        </div>
      </div>

      <div className="p-8 pt-2 flex-1 flex flex-col justify-center">
        
        {/* Step 1: Service Type */}
        {step === 'service' && (
          <div className="animate-fade-in space-y-4">
            <h4 className="text-lg font-medium text-gray-600 mb-6">What do you need help with today?</h4>
            
            <button 
              onClick={() => handleSelection('serviceType', 'Replace/Install', 'urgency')}
              className="w-full group flex items-center p-5 border-2 border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 transition-all text-left bg-white hover:shadow-lg"
            >
              <div className="bg-brand-100 p-4 rounded-xl group-hover:bg-brand-200 transition-colors">
                <Home className="w-7 h-7 text-brand-600" />
              </div>
              <div className="ml-5">
                <span className="block font-bold text-xl text-gray-900 group-hover:text-brand-700 transition-colors">New Garage Door</span>
                <span className="text-gray-500 group-hover:text-brand-600/70 transition-colors">Installation & Replacement</span>
              </div>
            </button>

            <button 
              onClick={() => handleSelection('serviceType', 'Repair', 'urgency')}
              className="w-full group flex items-center p-5 border-2 border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 transition-all text-left bg-white hover:shadow-lg"
            >
              <div className="bg-orange-100 p-4 rounded-xl group-hover:bg-orange-200 transition-colors">
                <Wrench className="w-7 h-7 text-orange-600" />
              </div>
              <div className="ml-5">
                <span className="block font-bold text-xl text-gray-900 group-hover:text-brand-700 transition-colors">Repair Existing</span>
                <span className="text-gray-500 group-hover:text-brand-600/70 transition-colors">Fix broken springs/openers</span>
              </div>
            </button>
          </div>
        )}

        {/* Step 2: Urgency */}
        {step === 'urgency' && (
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center text-sm text-gray-400 mb-2 cursor-pointer hover:text-gray-800 font-bold transition-colors w-fit" onClick={() => setStep('service')}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </div>
            <h4 className="text-lg font-medium text-gray-600 mb-6">How soon do you need this service?</h4>
            
            <button 
              onClick={() => handleSelection('urgency', 'Emergency', 'homeowner')}
              className="w-full group flex items-center p-4 border-2 border-red-50 rounded-2xl hover:border-red-500 hover:bg-red-50 transition-all text-left bg-white hover:shadow-md"
            >
              <div className="bg-red-100 p-3 rounded-xl">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <span className="block font-bold text-lg text-gray-900">Emergency (ASAP)</span>
                <span className="text-sm text-gray-500">Door is stuck or broken</span>
              </div>
            </button>

            <button 
              onClick={() => handleSelection('urgency', 'This Week', 'homeowner')}
              className="w-full group flex items-center p-4 border-2 border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 transition-all text-left bg-white hover:shadow-md"
            >
              <div className="bg-brand-50 p-3 rounded-xl">
                <Clock className="w-6 h-6 text-brand-600" />
              </div>
              <div className="ml-4">
                <span className="block font-bold text-lg text-gray-900">This Week</span>
                <span className="text-sm text-gray-500">Need it done soon</span>
              </div>
            </button>

            <button 
              onClick={() => handleSelection('urgency', 'Flexible', 'homeowner')}
              className="w-full group flex items-center p-4 border-2 border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 transition-all text-left bg-white hover:shadow-md"
            >
              <div className="bg-gray-100 p-3 rounded-xl">
                <CheckCircle className="w-6 h-6 text-gray-600" />
              </div>
              <div className="ml-4">
                <span className="block font-bold text-lg text-gray-900">Flexible</span>
                <span className="text-sm text-gray-500">Just gathering quotes</span>
              </div>
            </button>
          </div>
        )}

        {/* Step 3: Homeowner Status */}
        {step === 'homeowner' && (
          <div className="animate-fade-in space-y-4">
            <div className="flex items-center text-sm text-gray-400 mb-2 cursor-pointer hover:text-gray-800 font-bold transition-colors w-fit" onClick={() => setStep('urgency')}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </div>
            <h4 className="text-lg font-medium text-gray-600 mb-6">Are you the owner of the property?</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => handleSelection('isHomeowner', 'Yes', 'details')}
                className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 transition-all text-center h-48 bg-white hover:shadow-lg group"
              >
                <div className="bg-green-100 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                   <Home className="w-8 h-8 text-green-600" />
                </div>
                <span className="font-bold text-xl text-gray-900">Yes</span>
                <span className="text-sm text-gray-500 mt-2">I own this property</span>
              </button>

              <button 
                onClick={() => handleSelection('isHomeowner', 'No', 'details')}
                className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-all text-center h-48 bg-white hover:shadow-lg group"
              >
                <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                   <Home className="w-8 h-8 text-gray-500" />
                </div>
                <span className="font-bold text-xl text-gray-900">No</span>
                <span className="text-sm text-gray-500 mt-2">I am renting</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Contact Details */}
        {step === 'details' && (
          <form onSubmit={handleSubmit} className="animate-fade-in space-y-4">
             <div className="flex items-center text-sm text-gray-400 mb-2 cursor-pointer hover:text-gray-800 font-bold transition-colors w-fit" onClick={() => setStep('homeowner')}>
              <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </div>
            <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-600">Enter your details to match with a pro.</h4>
            </div>

            <div className="space-y-4">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400 group-focus-within:text-brand-500 transition-colors" />
                    </div>
                    <input
                        type="text"
                        name="zipCode"
                        required
                        placeholder="Zip Code"
                        className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-medium text-lg placeholder:text-gray-400"
                        value={formData.zipCode}
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-medium text-lg placeholder:text-gray-400"
                    value={formData.fullName}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-medium text-lg placeholder:text-gray-400"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all font-medium text-lg placeholder:text-gray-400"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-black py-5 rounded-xl text-xl shadow-lg hover:shadow-brand-500/30 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 mt-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Matching...
                </>
              ) : (
                <>
                  Get My Free Quote <ArrowRight className="w-6 h-6" />
                </>
              )}
            </button>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-[11px] text-gray-400">
                <CheckCircle className="w-3 h-3 text-green-500" />
                <span>No spam. Your data is secure.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};