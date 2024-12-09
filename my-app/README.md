# IBKR Auto Trading Web App

A web application template for tracking trading strategy. Uses [Interactive Brokers (IBKR)](https://www.interactivebrokers.com/) as an example. Configure trading strategies, monitor performance, and optimize your trades through an intuitive interface.

## Features

- 🔐 Authentication with Supabase
- 📊 Real-time trading dashboard
- ⚙️ Strategy configuration and management
- 📈 Performance monitoring and analytics
- 🔧 Account and API settings management

## Prerequisites

- Docker and Docker Compose installed on your machine
- Node.js 18+ (if running without Docker)
- Interactive Brokers account with API access
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Quick Start with Docker

1. Clone the repository:
```bash
git clone <repository-url>
cd my-app
```

2. Create a `.env.local` file in the project root with your Supabase credentials:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NODE_ENV=development
```

3. Start the development server using Docker:
```bash
docker-compose -f docker-compose.yml -f docker/development/docker-compose.dev.yml up --build
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

⚠️ **Important**: Clear your browser cookies and local storage for localhost:3000 before first use to ensure a clean state.

## Development Flow

1. Landing Page
   - Initial welcome screen
   - Options to sign in or create account

2. Authentication
   - Sign in with email/password
   - New users can create an account

3. Dashboard
   - Overview of active strategies
   - Performance metrics
   - Quick access to key features

4. Strategy Setup
   - Create new trading strategies
   - Configure parameters
   - Select stocks and risk levels

5. Performance Monitoring
   - Track strategy performance
   - View detailed analytics
   - Export reports

6. Settings
   - Account management
   - API key configuration
   - Notification preferences

## Docker Commands

Start development server:
```bash
docker-compose -f docker-compose.yml -f docker/development/docker-compose.dev.yml up --build
```

Stop containers:
```bash
docker-compose down
```

View logs:
```bash
docker-compose logs -f
```

Remove volumes and containers:
```bash
docker-compose down -v
```

## Development Without Docker

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

## Authentication Setup

### Setting up Supabase
1. Visit [Supabase](https://supabase.com) and click "Start your project"
2. Sign up with your GitHub account
3. Create a new project:
   - Give your project a name (e.g., "ibkr-auto-dev")
   - Set a secure database password
   - Choose your region (pick one closest to you)
   - Click "Create new project"
4. Wait for your project to be initialized (about 1 minute)

### Getting Your Credentials
1. In your Supabase project dashboard:
   - Click "Project Settings" (gear icon) in the left sidebar
   - Click "API" in the settings menu
2. You'll find two key pieces of information:
   - `Project URL`: Copy this into your .env.local as `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public`: Copy this into your .env.local as `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Creating a Developer Account
1. In your Supabase project:
   - Go to "Authentication" in the left sidebar
   - Click "Users" tab
   - Click "New User"
2. Enter your developer credentials:
   - Email: (e.g., "dev@yourdomain.com")
   - Password: Create a secure password

Your final `.env.local` should look like this:
```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NODE_ENV=development
```

## Environment Setup

Required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Troubleshooting

1. If the app doesn't load:
   - Clear browser cache and cookies
   - Check Docker logs for errors
   - Verify environment variables

2. Authentication issues:
   - Clear local storage
   - Check Supabase credentials
   - Verify email confirmation

3. Docker-specific:
   - Run `docker-compose down -v` to clean up
   - Rebuild with `--no-cache` flag
   - Check port conflicts

## Additional Notes

- The application uses port 3000 by default
- Hot reloading is enabled in development
- API rate limits apply to demo accounts
- Test trades are simulated in development

## Security Best Practices

- Never commit .env files
- Regularly rotate API keys
- Use strong passwords
- Clear browser data when testing
- Don't share account credentials

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Submit Pull Request

