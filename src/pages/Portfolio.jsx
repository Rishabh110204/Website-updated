import React, { useState } from 'react';
import ServicesFooter from '../components/ServicesFooter';
import { useNavigate } from 'react-router-dom';
import {
  User, FileText, Award, Briefcase, Mail, Phone, MapPin, ExternalLink, Download, Zap, Settings, BookOpen, Trophy, Star, Medal, Linkedin
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'business', label: 'Business', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Medal },
    { id: 'services', label: 'Services', icon: Briefcase }
  
  ];

  const navigate = useNavigate();
  const handleRedirect = () => {
    alert('Redirecting to login page...');
    navigate('/login');
  };

  const TabContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                     <img
                      src="https://drive.google.com/file/d/14pJSdiTouwV2pA1bwW6yQKu3LCRPC_kI/view?usp=sharing"
                      alt="Ritesh Mahor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    Ritesh Mahor
                  </h2>
                  <h3 className="text-2xl text-blue-600 dark:text-blue-400 mb-6">
                    Head of Engineering | Transformer Specialist
                  </h3>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Mail size={18} />
                      <span>rpmahor@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={18} />
                      <span>+91 7046963119</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>Vadodara, Gujarat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <User className="text-blue-500" />
                  About Me
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Transformer design professional with over two decades of experience leading engineering teams, implementing lean strategies, and delivering cost-optimized high-performance transformer solutions. Specialized in oil-filled, cast resin, VPI transformers, and solutions for solar and multipulse drive applications.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                  Proven track record in training and developing teams, implementing ISO and Lean Six Sigma methodologies, designing oil-filled transformers from <strong>100 kVA / 11kV</strong> up to <strong>500 MVA / 400kV</strong>, and cast resin & VPI transformers up to <strong>10 MVA / 33kV</strong>, while driving product development and business strategies across domestic and international firms.                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                  <Settings className="text-blue-500" />
                  Core Skills
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2"><Star className="text-yellow-500" size={16} /> Oil-filled, Cast Resin & VPI Transformers</li>
                  <li className="flex items-center gap-2"><Star className="text-yellow-500" size={16} /> Design for Solar, Multipulse Drives, and Explosive Atmospheres (ATEX)</li>
                  <li className="flex items-center gap-2"><Star className="text-yellow-500" size={16} /> Lean Six Sigma for Process Improvement</li>
                  <li className="flex items-center gap-2"><Star className="text-yellow-500" size={16} /> ISO 9001:2015 Implementation & Audit</li>
                  <li className="flex items-center gap-2"><Star className="text-yellow-500" size={16} /> Cross-functional Team Leadership</li>
                  <li className="flex items-center gap-2"><Star className="text-yellow-500" size={16} /> Training & Development based on Skill Matrix</li>
                  <li className="flex items-center gap-2"><Star className="text-yellow-500" size={16} /> Design Manuals, Specifications & SOP Development</li>
                </ul>
              </div>
            </div>
          </div>
        );

case 'resume':
        return (
          <div className="space-y-8 animate-fade-in">
            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <BookOpen className="text-blue-500" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    B.E. in Electrical Engineering
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    Sardar Vallabhbhai Patel Institute of Technology, Vasad (Gujarat University)
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">Graduated: 2003 | Distinction with Gold Medal</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Rank certificate recipient.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Lean Six Sigma Expert
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Simplilearn</p>
                  <p className="text-gray-600 dark:text-gray-300">Completed: 2021</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Includes Green Belt, Black Belt & Lean Management Certifications
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    ISO 9001:2015 Lead Auditor
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Udemy</p>
                  <p className="text-gray-600 dark:text-gray-300">Completed</p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
                <Briefcase className="text-blue-500" />
                Professional Experience
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Head of Engineering",
                    company: "Hammond Power Solutions Ltd",
                    location: "Hyderabad, India",
                    period: "Dec 2021 – Present"
                  },
                  {
                    title: "GM – Engineering",
                    company: "Unimag Power Transformer Ltd",
                    location: "Bangalore, India",
                    period: "Mar 2020 – Nov 2021"
                  },
                  {
                    title: "Design Consultant",
                    company: "Independent",
                    location: "Baroda, Gujarat, India",
                    period: "May 2019 – Feb 2020"
                  },
                  {
                    title: "Technical Director",
                    company: "ATEF Large Power Transformer",
                    location: "Baku, Azerbaijan",
                    period: "Jun 2018 – May 2019"
                  },
                  {
                    title: "Head of Design",
                    company: "Federal Power Transformer",
                    location: "Abu Dhabi, UAE",
                    period: "May 2016 – May 2018"
                  },
                  {
                    title: "Head of Engineering",
                    company: "Universal Power Transformer",
                    location: "Bangalore, India",
                    period: "Jun 2014 – Apr 2016"
                  },
                  {
                    title: "Team Leader",
                    company: "Virginia Transformer Pvt Ltd",
                    location: "Roanoke, USA",
                    period: "Nov 2012 – Dec 2013"
                  },
                  {
                    title: "GM – Technical",
                    company: "PME Power Solution Pvt Ltd",
                    location: "G. Noida, UP, India",
                    period: "May 2010 – Oct 2012"
                  },
                  {
                    title: "Executive Engineer",
                    company: "Crompton Greaves Ltd",
                    location: "Bhopal, India",
                    period: "Apr 2008 – Apr 2010"
                  },
                  {
                    title: "Jr. Engineer",
                    company: "EMCO Ltd",
                    location: "Jalgaon, Maharashtra, India",
                    period: "Aug 2006 – Mar 2008"
                  },
                  {
                    title: "Jr. Engineer",
                    company: "GEB (State Government)",
                    location: "WTPS, Gujarat, India",
                    period: "Jan 2004 – Jul 2006"
                  }
                ].map((exp, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-6">
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-green-600 dark:text-green-400 font-medium">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.period} | {exp.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'certifications':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Certifications
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Recognized through various international and organizational awards for engineering excellence and leadership.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {["Lean Six Sigma Black Belt", "Lean Six Sigma Green Belt", "Lead Auditor ISO 9001:2015", "Lean Management"].map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full">
                      <Trophy className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {cert}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Professional Achievement</p>
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

        case 'business':
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Business Development & Training
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Key organizational initiatives, strategic planning efforts, and technical training sessions conducted across global teams and clients.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Hoshin Chart – Strategic Objective Deployment",
            audience: "HODs of all Sections",
            company: "Unimag Power Transformer"
          },
          {
            title: "Implementation of Lean Concept",
            audience: "All the staff",
            company: "Unimag Power Transformer"
          },
          {
            title: "Transformer Maintenance & Its Effect",
            audience: "KARAAMA, Qatar",
            company: "Federal Power Transformer LLC, UAE"
          },
          {
            title: "Transformer Failure and Diagnosis",
            audience: "KOC, Kuwait",
            company: "Federal Power Transformer LLC, UAE"
          },
          {
            title: "Transformer for Explosive Atmosphere (ATEX Certified)",
            audience: "ADDC, Abu Dhabi",
            company: "Federal Power Transformer LLC, UAE"
          },
          {
            title: "Transformer Life Assessment Based on Diagnosis",
            audience: "Design Team",
            company: "Federal Power Transformer LLC, UAE"
          },
          {
            title: "Transformer Designing Concepts and Understanding",
            audience: "Design Team",
            company: "PME Power Solution, Universal, Unimag, HPS"
          },
          {
            title: "Presentation on PEN System for CTQ Monitoring",
            audience: "All the staff",
            company: "Crompton Greaves Ltd"
          },
          {
            title: "Design Training – Core, Winding, OLTC, Testing",
            audience: "R & D Team",
            company: "Crompton Greaves Ltd"
          }
        ].map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full">
                <Briefcase className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  <strong>Audience:</strong> {item.audience}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

case 'achievements':
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Projects & Achievements
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Significant contributions in transformer engineering that improved design performance, reduced costs, and expanded business opportunities globally.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Sales Quotation Software & Design Optimization",
            impact: "Order booking worth $19M in 6 months",
            company: "Virginia Transformer, USA"
          },
          {
            title: "Counter Shield Winding for Impulse Distribution",
            impact: "3% VAR cost cut, 33% winding time reduced",
            company: "Virginia Transformer, USA"
          },
          {
            title: "132 kV Transformer Design Optimization",
            impact: "40 transformers ordered directly by UPPTCL",
            company: "PME Power Solution, G Noida, India"
          },
          {
            title: "SEC Spec Short Circuit Test at KEMA",
            impact: "Qualified vendor; secured orders",
            company: "Federal Power Transformer LLC, UAE"
          },
          {
            title: "OMAN Spec Short Circuit Test at KEMA",
            impact: "Qualified vendor; demonstrated strength",
            company: "Federal Power Transformer LLC, UAE"
          },
          {
            title: "ATEX Certified 8/15 MVA Transformer",
            impact: "Qualified for offshore/onshore supply",
            company: "Federal Power Transformer LLC, UAE"
          },
          {
            title: "SOP for Counter Shield Winding",
            impact: "66% boost in existing productivity",
            company: "Unimag Power Transformer"
          },
          {
            title: "Reverse Engineering – 250 MVA, 230kV",
            impact: "Improved repair/refurbishment capacity",
            company: "ATEF Large Power Transformer LLC"
          },
          {
            title: "125 MVA, 330kV Transformer Manufacturing",
            impact: "Expanded company's product range",
            company: "ATEF Large Power Transformer LLC"
          },
          {
            title: "Stray Loss Analysis and Reduction",
            impact: "Performance gain and cost savings",
            company: "Virginia / Unimag Power Transformer"
          },
          {
            title: "Sales Tool – 230 kV Transformer Quotations",
            impact: "Customer response improved; orders up",
            company: "Virginia Transformer, USA"
          },
          {
            title: "Dynamic Price List – IS 1180",
            impact: "Improved response and order booking",
            company: "Unimag Power Transformer"
          },
          {
            title: "PEN System Implementation (CTQ Monitoring)",
            impact: "Reduced customer complaints",
            company: "Crompton Greaves Ltd"
          },
          {
            title: "Lean Concept Implementation",
            impact: "Improved quality and productivity",
            company: "Unimag Power Transformer"
          },
          {
            title: "LV Foil Design Implementation",
            impact: "3.5–6% material savings; faster delivery",
            company: "Unimag Power Transformer"
          },
          {
            title: "SOP – Phase Shifting, Multi-Winding",
            impact: "Reduced design errors",
            company: "Federal Power Transformer LLC, UAE"
          },
        ].map((item, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full">
                <Trophy className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  <strong>Impact:</strong> {item.impact}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{item.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );



      case 'services':
        return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                Consulting & Services
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Offering engineering solutions from transformer design to technical audits, training programs, and business process improvements.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {["Custom Transformer Design", "Transformer Life Assessment", "Implementation of Lean Concept", "Plant Setup upto 400kV Class"].map((title, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full">
                      <Briefcase className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                        {title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Expert service in {title.toLowerCase()} aligned with latest industrial standards and client goals.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <ServicesFooter />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <header className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={handleRedirect}
                className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                <Zap size={32} />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Ritesh Mahor
                </h1>
                <p className="text-blue-600 dark:text-blue-400">Transformer Design Specialist</p>
              </div>
            </div>
            <button
              onClick={() => window.location.href = 'https://www.linkedin.com/in/rpmahor/'}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all hover:shadow-lg flex items-center gap-2"
            >
              <Linkedin size={32} />
            </button>
          </div>
        </header>

        <nav className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-8 overflow-hidden">
          <div className="flex flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-0 px-6 py-4 flex items-center justify-center gap-2 font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        <main>
          <TabContent />
        </main>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
