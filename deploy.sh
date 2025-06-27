#!/bin/bash

echo "🚀 Website Deployment Script"
echo "=============================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not found. Please initialize git first:"
    echo "   git init"
    echo "   git add ."
    echo "   git commit -m 'Initial commit'"
    echo "   git remote add origin <your-github-repo-url>"
    echo "   git push -u origin main"
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  You have uncommitted changes. Please commit them first:"
    echo "   git add ."
    echo "   git commit -m 'Your commit message'"
    echo "   git push"
    exit 1
fi

echo "✅ Git repository is clean"

# Build the frontend
echo "🔨 Building frontend..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful"
else
    echo "❌ Frontend build failed"
    exit 1
fi

# Test backend locally
echo "🧪 Testing backend locally..."
cd trafo-backend
npm install
npm start &
BACKEND_PID=$!

# Wait for backend to start
sleep 5

# Test health endpoint
curl -f http://localhost:5000/api/health > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo "✅ Backend is running locally"
else
    echo "❌ Backend failed to start locally"
    kill $BACKEND_PID
    exit 1
fi

# Stop backend
kill $BACKEND_PID
cd ..

echo ""
echo "🎉 Ready for deployment!"
echo ""
echo "📋 Next steps:"
echo "1. Push your code to GitHub:"
echo "   git push"
echo ""
echo "2. Deploy backend to Railway:"
echo "   - Go to https://railway.app/dashboard"
echo "   - Create new project from GitHub repo"
echo "   - Select trafo-backend directory"
echo "   - Set environment variables (see DEPLOYMENT.md)"
echo ""
echo "3. Deploy frontend to Vercel:"
echo "   - Go to https://vercel.com/dashboard"
echo "   - Import your GitHub repository"
echo "   - Set REACT_APP_BACKEND_URL to your Railway URL"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions" 