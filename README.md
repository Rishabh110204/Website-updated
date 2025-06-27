# 🏭 Transformer Database Management System

A professional web application for managing transformer specifications, pricing, and costing data with real-time Google Sheets integration.

## ✨ Features

- **📊 Real-time Data Management** - Edit Google Sheets data directly from the web interface
- **💰 Pricing Management** - Professional pricing sheet with search and filtering
- **📈 Costing Analysis** - Comprehensive costing data management
- **🔐 Secure Authentication** - Firebase-based user authentication
- **📱 Responsive Design** - Works perfectly on desktop and mobile devices
- **⚡ Real-time Updates** - Instant synchronization with Google Sheets

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Cloud Project with Sheets API enabled
- Firebase project (for authentication)

### Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd website
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

3. **Install backend dependencies:**
   ```bash
   cd trafo-backend
   npm install
   cd ..
   ```

4. **Set up environment variables:**
   - Copy `env.example` to `.env.local`
   - Copy `trafo-backend/env.example` to `trafo-backend/.env`
   - Fill in your configuration values

5. **Start the backend:**
   ```bash
   npm run backend:start
   ```

6. **Start the frontend (in a new terminal):**
   ```bash
   npm start
   ```

7. **Open your browser:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

## 🛠️ Available Scripts

### Frontend Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run deploy:check` - Check deployment readiness
- `npm run deploy:build` - Build for deployment

### Backend Scripts
- `npm run backend:install` - Install backend dependencies
- `npm run backend:start` - Start backend server
- `npm run backend:test` - Test backend health

## 🌐 Deployment

This application is designed to be deployed on:
- **Frontend:** Vercel (React app)
- **Backend:** Railway (Node.js API)

### Quick Deployment

1. **Check deployment readiness:**
   ```bash
   npm run deploy:check
   ```

2. **Follow the deployment guide:**
   - See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions
   - Deploy backend to Railway first
   - Deploy frontend to Vercel
   - Connect them with environment variables

### Environment Variables

#### Frontend (Vercel)
```
REACT_APP_BACKEND_URL=https://your-railway-app.railway.app
```

#### Backend (Railway)
```
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_SERVICE_ACCOUNT=your_service_account_json
```

## 📁 Project Structure

```
website/
├── src/                    # Frontend React code
│   ├── components/         # React components
│   │   └── TabContent/     # Main application tabs
│   ├── pages/             # Page components
│   ├── firebase/          # Firebase configuration
│   └── utils/             # Utility functions
├── trafo-backend/         # Backend Node.js API
│   ├── index.js           # Main server file
│   └── package.json       # Backend dependencies
├── public/                # Static assets
├── vercel.json           # Vercel configuration
├── deploy.sh             # Deployment script
└── DEPLOYMENT.md         # Deployment guide
```

## 🔧 Configuration

### Google Sheets Setup
1. Create a Google Cloud Project
2. Enable Google Sheets API
3. Create a service account
4. Share your Google Sheet with the service account email
5. Add the sheet ID to your environment variables

### Firebase Setup
1. Create a Firebase project
2. Enable Authentication
3. Add your Firebase config to environment variables

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure backend CORS is properly configured
   - Check that frontend URL is allowed

2. **Google Sheets API Errors**
   - Verify service account has sheet access
   - Check sheet ID is correct
   - Ensure API is enabled

3. **Build Errors**
   - Clear node_modules and reinstall
   - Check for missing dependencies
   - Verify environment variables

### Getting Help

- Check the [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) file
- Review deployment logs in Vercel/Railway dashboards
- Test API endpoints directly with tools like Postman

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ using React, Node.js, and Google Sheets API**
