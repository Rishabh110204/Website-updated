import React, { useState } from 'react';
import { 
  Database, 
  DollarSign, 
  Zap, 
  User, 
  Bell, 
  Search,
  ChevronDown,
  FileText,
  BarChart3,
  Calculator,
  Wrench,
  Palette,
  Menu,
  X
} from 'lucide-react';
import TransformerSpecifications from '../components/TabContent/TransformerSpecifications';
import BisDB from '../components/TabContent/BisDB';
import CostingAndPricing from '../components/TabContent/CostingAndPricing';
import Pricing from '../components/TabContent/Pricing';
import Converter from '../components/TabContent/Converter';
import PadM from '../components/TabContent/PadM';

export default function TransformerDashboard() {
  const [activeTab, setActiveTab] = useState('database');
  const [activeSubPage, setActiveSubPage] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = {
    database: {
      name: 'Database',
      icon: Database,
      subPages: [
        { id: 'transformer-specs', name: 'Renewable', icon: FileText },
        { id: 'material-data', name: 'Standard Trafo', icon: FileText },
        { id: 'standards', name: 'Converter', icon: FileText },
        { id: 'test-results', name: 'Pad Mount', icon: FileText },
      ]
    },
    pricelist: {
      name: 'Price List',
      icon: DollarSign,
      subPages: [
        { id: 'Transformer Costing', name: 'Transformer Costing', icon: Calculator },
        { id: 'Transformer Pricing', name: 'Transformer Pricing', icon: Calculator },
        { id: 'vendor-quotes', name: 'Vendor Quotes', icon: Calculator },
        { id: 'cost-analysis', name: 'Cost Analysis', icon: BarChart3 },
      ]
    },
    design: {
      name: 'Design',
      icon: Wrench,
      subPages: [
        { id: 'core-design', name: 'Core Design', icon: Zap },
        { id: 'winding-calc', name: 'Winding Calculator', icon: Calculator },
        { id: 'thermal-analysis', name: 'Thermal Analysis', icon: BarChart3 },
        { id: 'design-templates', name: 'Design Templates', icon: Palette },
      ]
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setActiveSubPage('');
    setIsMobileMenuOpen(false);
  };

  const handleSubPageClick = (subPageId) => {
    setActiveSubPage(subPageId);
    setIsMobileMenuOpen(false);
  };

  const renderSubPageContent = () => {
    if (activeSubPage === 'transformer-specs') {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <TransformerSpecifications />
    </div>
  );
}
   if (activeSubPage === 'material-data') {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <BisDB />
    </div>
  );
}
if (activeSubPage === 'Transformer Pricing') {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <Pricing />
    </div>
  );
}
   if (activeSubPage === 'Transformer Costing') {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <CostingAndPricing />
    </div>
  );
}
if (activeSubPage === 'standards') {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <Converter />
    </div>
  );
}
if (activeSubPage === 'test-results') {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <PadM />
    </div>
  );
}
    if (!activeSubPage) {
      return (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            {React.createElement(tabs[activeTab].icon, { size: 48, className: "text-white" })}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {tabs[activeTab].name} Section
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            Select a sub-page from the navigation to view detailed information and tools for {tabs[activeTab].name.toLowerCase()}.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {tabs[activeTab].subPages.map((subPage) => (
              <button
                key={subPage.id}
                onClick={() => handleSubPageClick(subPage.id)}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {React.createElement(subPage.icon, { size: 24, className: "text-white" })}
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{subPage.name}</h3>
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Placeholder content for each sub-page
    const currentSubPage = tabs[activeTab].subPages.find(page => page.id === activeSubPage);
    
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveSubPage('')}
              className="text-blue-600 dark:text-blue-400 hover:text-blue-500 font-medium"
            >
              ← Back to {tabs[activeTab].name}
            </button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              {React.createElement(currentSubPage.icon, { size: 24, className: "text-white" })}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                {currentSubPage.name}
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                {tabs[activeTab].name} / {currentSubPage.name}
              </p>
            </div>
          </div>

          {/* Embedded Content Area */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 min-h-96">
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-xl flex items-center justify-center mx-auto mb-4 opacity-50">
                <FileText size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                Content Integration Area
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This is where your existing webpage for "{currentSubPage.name}" will be embedded.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 max-w-md mx-auto">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Integration Note:</strong> You can embed your existing webpage here using an iframe 
                  or by copying the component code directly into this section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative bg-white dark:bg-gray-800 backdrop-blur-lg bg-opacity-95 dark:bg-opacity-95 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Zap size={24} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                Transformer Design
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(tabs).map(([tabId, tab]) => (
                <div key={tabId} className="relative group">
                  <button
                    onClick={() => handleTabClick(tabId)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all ${
                      activeTab === tabId
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {React.createElement(tab.icon, { size: 18 })}
                    {tab.name}
                    <ChevronDown size={16} className="opacity-50" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <div className="py-2">
                      {tab.subPages.map((subPage) => (
                        <button
                          key={subPage.id}
                          onClick={() => {
                            handleTabClick(tabId);
                            handleSubPageClick(subPage.id);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {React.createElement(subPage.icon, { size: 16 })}
                          {subPage.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                  />
                </div>
                <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Bell size={20} />
                </button>
                <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <User size={20} />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-4 space-y-2">
              {Object.entries(tabs).map(([tabId, tab]) => (
                <div key={tabId}>
                  <button
                    onClick={() => handleTabClick(tabId)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg font-medium text-left transition-all ${
                      activeTab === tabId
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {React.createElement(tab.icon, { size: 18 })}
                    {tab.name}
                  </button>
                  {activeTab === tabId && (
                    <div className="ml-6 mt-2 space-y-1">
                      {tab.subPages.map((subPage) => (
                        <button
                          key={subPage.id}
                          onClick={() => handleSubPageClick(subPage.id)}
                          className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg text-left"
                        >
                          {React.createElement(subPage.icon, { size: 16 })}
                          {subPage.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSubPageContent()}
      </main>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}