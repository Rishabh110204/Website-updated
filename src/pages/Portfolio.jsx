
// import React, { useState } from 'react';
// // import emailjs from '@emailjs/browser';
// import ServicesFooter from '../components/ServicesFooter';
// import { useNavigate } from 'react-router-dom';
// import { User, FileText, Award, Briefcase, Mail, Phone, MapPin, ExternalLink, Download, Zap, Settings, BookOpen, Trophy, Star } from 'lucide-react';


// const Portfolio = () => {
//   const [activeTab, setActiveTab] = useState('about');

//   const tabs = [
//     { id: 'about', label: 'About', icon: User },
//     { id: 'resume', label: 'Resume', icon: FileText },
//     { id: 'certifications', label: 'Certifications', icon: Award },
//     { id: 'services', label: 'Services', icon: Briefcase }
//   ];

//   const skills = [
//     { name: 'Transformer Design', level: 95 },
//     { name: 'Electrical Engineering', level: 92 },
//     { name: 'Power Systems', level: 88 },
//     { name: 'AutoCAD/SolidWorks', level: 90 },
//     { name: 'Finite Element Analysis', level: 85 },
//     { name: 'Magnetic Circuit Design', level: 93 },
//     { name: 'IEEE Standards', level: 87 },
//     { name: 'Project Management', level: 82 }
//   ];

//   const certifications = [
//     {
//       title: "Professional Engineer (PE) - Electrical",
//       issuer: "National Society of Professional Engineers",
//       date: "2022",
//       status: "Active"
//     },
//     {
//       title: "IEEE Certified Transformer Designer",
//       issuer: "Institute of Electrical and Electronics Engineers",
//       date: "2021",
//       status: "Active"
//     },
//     {
//       title: "Power Transformer Design Specialist",
//       issuer: "International Association of Engineers",
//       date: "2020",
//       status: "Active"
//     },
//     {
//       title: "Advanced Magnetic Design Certificate",
//       issuer: "Power Electronics Society",
//       date: "2019",
//       status: "Active"
//     }
//   ];

  
// const navigate = useNavigate();
//   const handleRedirect = () => {
//     alert('Redirecting to login page...');
//     navigate('/login');
//     // In a real application, you would use React Router: navigate('/login');
//   };

//   const TabContent = () => {
//     switch(activeTab) {
//       case 'about':
//         return (
//           <div className="space-y-8 animate-fade-in">
//             <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
//               <div className="flex flex-col lg:flex-row items-center gap-8">
//                 <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
//                   <Zap size={80} />
//                 </div>
//                 <div className="flex-1 text-center lg:text-left">
//                   <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
//                     Ritesh Mahor
//                   </h2>
//                   <h3 className="text-2xl text-blue-600 dark:text-blue-400 mb-6">
//                     Senior Transformer Designer & Electrical Engineer
//                   </h3>
//                   <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-gray-600 dark:text-gray-300">
//                     <div className="flex items-center gap-2">
//                       <Mail size={18} />
//                       <span>rpmahor@gmail.com</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Phone size={18} />
//                       <span>+91 9876543210</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <MapPin size={18} />
//                       <span>Vadodara, Gujarat</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
//                   <User className="text-blue-500" />
//                   About Me
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
//                   With over 12 years of experience in electrical engineering and transformer design, I specialize in creating innovative, efficient, and reliable power transmission solutions. My expertise spans from small distribution transformers to large power transformers for utility applications.
//                 </p>
//                 <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
//                   I am passionate about advancing transformer technology through innovative design approaches, sustainable materials, and cutting-edge simulation techniques. My work has contributed to improving grid reliability and reducing energy losses in power systems worldwide.
//                 </p>
//               </div>

//               <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
//                 <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
//                   <Settings className="text-blue-500" />
//                   Expertise
//                 </h3>
//                 <ul className="space-y-3 text-gray-600 dark:text-gray-300">
//                   <li className="flex items-center gap-2">
//                     <Star className="text-yellow-500" size={16} />
//                     Power & Distribution Transformer Design
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <Star className="text-yellow-500" size={16} />
//                     Magnetic Circuit Analysis & Optimization
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <Star className="text-yellow-500" size={16} />
//                     Thermal Management Systems
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <Star className="text-yellow-500" size={16} />
//                     Insulation Coordination
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <Star className="text-yellow-500" size={16} />
//                     IEEE/IEC Standards Compliance
//                   </li>
//                   <li className="flex items-center gap-2">
//                     <Star className="text-yellow-500" size={16} />
//                     CAD Design & 3D Modeling
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         );

      // case 'resume':
      //   return (
      //     <div className="space-y-8 animate-fade-in">
      //       {/* Education */}
      //       <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
      //         <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
      //           <BookOpen className="text-blue-500" />
      //           Education
      //         </h3>
      //         <div className="space-y-6">
      //           <div className="border-l-4 border-blue-500 pl-6">
      //             <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
      //               Master of Science in Electrical Engineering
      //             </h4>
      //             <p className="text-blue-600 dark:text-blue-400 font-medium">University of Illinois at Chicago</p>
      //             <p className="text-gray-600 dark:text-gray-300">2010 - 2012 | GPA: 3.8/4.0</p>
      //             <p className="text-gray-600 dark:text-gray-300 mt-2">
      //               Specialization: Power Systems and Electromagnetic Field Theory
      //             </p>
      //           </div>
      //           <div className="border-l-4 border-blue-500 pl-6">
      //             <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
      //               Bachelor of Science in Electrical Engineering
      //             </h4>
      //             <p className="text-blue-600 dark:text-blue-400 font-medium">Purdue University</p>
      //             <p className="text-gray-600 dark:text-gray-300">2006 - 2010 | Magna Cum Laude</p>
      //             <p className="text-gray-600 dark:text-gray-300 mt-2">
      //               Focus: Electrical Machines and Power Electronics
      //             </p>
      //           </div>
      //         </div>
      //       </div>

//             {/* Experience */}
//             <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
//                 <Briefcase className="text-blue-500" />
//                 Professional Experience
//               </h3>
//               <div className="space-y-8">
//                 <div className="border-l-4 border-green-500 pl-6">
//                   <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
//                     Senior Transformer Design Engineer
//                   </h4>
//                   <p className="text-green-600 dark:text-green-400 font-medium">PowerTech Solutions Inc.</p>
//                   <p className="text-gray-600 dark:text-gray-300">2018 - Present | Chicago, IL</p>
//                   <ul className="text-gray-600 dark:text-gray-300 mt-3 space-y-2">
//                     <li>• Lead design team for utility-scale power transformers (50-500 MVA)</li>
//                     <li>• Developed innovative cooling systems reducing losses by 15%</li>
//                     <li>• Managed $50M+ transformer projects for major utilities</li>
//                     <li>• Mentored junior engineers and established design standards</li>
//                   </ul>
//                 </div>
//                 <div className="border-l-4 border-green-500 pl-6">
//                   <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
//                     Transformer Design Engineer
//                   </h4>
//                   <p className="text-green-600 dark:text-green-400 font-medium">ElectroMax Manufacturing</p>
//                   <p className="text-gray-600 dark:text-gray-300">2014 - 2018 | Milwaukee, WI</p>
//                   <ul className="text-gray-600 dark:text-gray-300 mt-3 space-y-2">
//                     <li>• Designed distribution transformers for commercial applications</li>
//                     <li>• Implemented FEA analysis improving design accuracy by 25%</li>
//                     <li>• Collaborated with manufacturing team to optimize production</li>
//                     <li>• Achieved 99.5% quality rating on delivered products</li>
//                   </ul>
//                 </div>
//                 <div className="border-l-4 border-green-500 pl-6">
//                   <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
//                     Junior Electrical Engineer
//                   </h4>
//                   <p className="text-green-600 dark:text-green-400 font-medium">Midwest Power Systems</p>
//                   <p className="text-gray-600 dark:text-gray-300">2012 - 2014 | Indianapolis, IN</p>
//                   <ul className="text-gray-600 dark:text-gray-300 mt-3 space-y-2">
//                     <li>• Supported senior engineers in transformer testing and analysis</li>
//                     <li>• Performed routine and type tests per IEEE standards</li>
//                     <li>• Documented test procedures and maintained quality records</li>
//                     <li>• Contributed to cost reduction initiatives saving $200K annually</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Skills */}
//             <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
//               <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
//                 <Settings className="text-blue-500" />
//                 Technical Skills
//               </h3>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {skills.map((skill, index) => (
//                   <div key={index} className="space-y-2">
//                     <div className="flex justify-between">
//                       <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
//                       <span className="text-blue-600 dark:text-blue-400 font-semibold">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
//                       <div 
//                         className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-1000 ease-out"
//                         style={{ width: `${skill.level}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       case 'certifications':
//         return (
//           <div className="space-y-6 animate-fade-in">
//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
//                 Professional Certifications & Achievements
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//                 Maintaining the highest standards of professional excellence through continuous learning and certification.
//               </p>
//             </div>
            
//             <div className="grid md:grid-cols-2 gap-6">
//               {certifications.map((cert, index) => (
//                 <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
//                   <div className="flex items-start gap-4">
//                     <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full">
//                       <Trophy className="text-white" size={24} />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                         {cert.title}
//                       </h3>
//                       <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
//                         {cert.issuer}
//                       </p>
//                       <div className="flex justify-between items-center">
//                         <span className="text-gray-600 dark:text-gray-300">{cert.date}</span>
//                         <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
//                           {cert.status}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mt-8">
//               <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 text-center">
//                 Additional Achievements
//               </h3>
//               <div className="grid md:grid-cols-3 gap-6 text-center">
//                 <div className="space-y-2">
//                   <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
//                   <div className="text-gray-600 dark:text-gray-300">Transformers Designed</div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15</div>
//                   <div className="text-gray-600 dark:text-gray-300">Patent Applications</div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">25+</div>
//                   <div className="text-gray-600 dark:text-gray-300">Technical Papers</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//         case 'services':
//   return (
//     <div className="space-y-8 animate-fade-in">
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
//           Professional Services
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//           Comprehensive transformer design and consulting services tailored to meet your specific power system requirements.
//         </p>
//       </div>

//       <div className="grid lg:grid-cols-2 gap-8">
//         {/* Sample service cards */}
//         { [
//     {
//       title: "Custom Transformer Design",
//       description: "Design and development of power transformers, distribution transformers, and specialty transformers tailored to specific requirements.",
//       features: ["Power rating up to 500MVA", "Voltage classes up to 765kV", "Custom specifications", "Thermal analysis"]
//     },
//     {
//       title: "Transformer Testing & Analysis",
//       description: "Comprehensive testing services including routine tests, type tests, and special tests as per international standards.",
//       features: ["IEEE/IEC compliance", "Insulation testing", "Loss evaluation", "Thermal imaging"]
//     },
//     {
//       title: "Consulting & Optimization",
//       description: "Expert consultation for transformer selection, efficiency optimization, and cost reduction strategies.",
//       features: ["Efficiency analysis", "Cost optimization", "Performance enhancement", "Standards compliance"]
//     },
//     {
//       title: "Technical Training",
//       description: "Professional training programs on transformer design principles, testing procedures, and industry best practices.",
//       features: ["Design workshops", "Testing procedures", "Safety protocols", "Industry standards"]
//     }
//   ].map((service, index) => (
//           <div
//             key={index}
//             className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
//           >
//             <div className="flex items-start gap-4 mb-4">
//               <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full">
//                 <Briefcase className="text-white" size={24} />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//             <div className="space-y-2">
//               <h4 className="font-semibold text-gray-800 dark:text-white">Key Features:</h4>
//               <ul className="space-y-1">
//                 {service.features.map((feature, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
//                   >
//                     <Star className="text-yellow-500" size={16} />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Contact and Brochure section */}
//       <ServicesFooter />
//     </div>
//   );


//     //   case 'services':
//     //     return (
//     //       <div className="space-y-8 animate-fade-in">
//     //         <div className="text-center mb-8">
//     //           <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
//     //             Professional Services
//     //           </h2>
//     //           <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//     //             Comprehensive transformer design and consulting services tailored to meet your specific power system requirements.
//     //           </p>
//     //         </div>

//     //         <div className="grid lg:grid-cols-2 gap-8">
//     //           {services.map((service, index) => (
//     //             <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
//     //               <div className="flex items-start gap-4 mb-4">
//     //                 <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full">
//     //                   <Briefcase className="text-white" size={24} />
//     //                 </div>
//     //                 <div>
//     //                   <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
//     //                     {service.title}
//     //                   </h3>
//     //                   <p className="text-gray-600 dark:text-gray-300 mb-4">
//     //                     {service.description}
//     //                   </p>
//     //                 </div>
//     //               </div>
                  
//     //               <div className="space-y-2">
//     //                 <h4 className="font-semibold text-gray-800 dark:text-white">Key Features:</h4>
//     //                 <ul className="space-y-1">
//     //                   {service.features.map((feature, idx) => (
//     //                     <li key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
//     //                       <Star className="text-yellow-500" size={16} />
//     //                       {feature}
//     //                     </li>
//     //                   ))}
//     //                 </ul>
//     //               </div>
//     //             </div>
//     //           ))}
//     //         </div>

//     //         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
//     //           <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
//     //           <p className="mb-6 opacity-90">
//     //             Get in touch to discuss your transformer design requirements and receive a customized solution.
//     //           </p>
//     //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//     //             <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
//     //               <Mail size={18} />
//     //               Contact Me
//     //             </button>
//     //             <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
//     //               <Download size={18} />
//     //               Download Brochure
//     //             </button>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <header className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
//           <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
//                 <Zap size={32} />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
//                   Ritesh Mahor
//                 </h1>
//                 <p className="text-blue-600 dark:text-blue-400">Transformer Design Specialist</p>
//               </div>
//             </div>
//             <button
//               onClick={handleRedirect}
//               className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all hover:shadow-lg flex items-center gap-2"
//             >
//               <ExternalLink size={18} />
//               Redirect
//             </button>
//           </div>
//         </header>

//         {/* Navigation */}
//         <nav className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-8 overflow-hidden">
//           <div className="flex flex-wrap">
//             {tabs.map((tab) => {
//               const Icon = tab.icon;
//               return (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex-1 min-w-0 px-6 py-4 flex items-center justify-center gap-2 font-semibold transition-all ${
//                     activeTab === tab.id
//                       ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
//                       : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
//                   }`}
//                 >
//                   <Icon size={20} />
//                   <span className="hidden sm:inline">{tab.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </nav>

//         {/* Content */}
//         <main>
//           <TabContent />
//         </main>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Portfolio;

import React, { useState } from 'react';
import ServicesFooter from '../components/ServicesFooter';
import { useNavigate } from 'react-router-dom';
import {
  User, FileText, Award, Briefcase, Mail, Phone, MapPin, ExternalLink, Download, Zap, Settings, BookOpen, Trophy, Star
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'business', label: 'Business', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: Award },
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
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                   <img
                      src="/profile.jpg" // Replace this path with your actual image path
                      alt="Ritesh Mahor"
                      className="w-full h-full object-cover"
                    />
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
                  Proven track record in training and developing teams, implementing ISO and Lean Six Sigma methodologies, and driving product development and business strategies across domestic and international firms.
                </p>
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
              {["Lean Six Sigma Black Belt", "Lean Six Sigma Green Belt", "Lead Auditor ISO 9001:2015", "Lean Management", "Gold Medalist – Electrical Engineering"].map((cert, index) => (
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
            impact: "Expanded company’s product range",
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
          }
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
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                <Zap size={32} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Ritesh Mahor
                </h1>
                <p className="text-blue-600 dark:text-blue-400">Transformer Design Specialist</p>
              </div>
            </div>
            <button
              onClick={handleRedirect}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all hover:shadow-lg flex items-center gap-2"
            >
              <ExternalLink size={18} />
              Redirect
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
