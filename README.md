# Next.js Trading Platform Template

A modern, full-stack web application template demonstrating how to build powerful trading platforms using Next.js 14, React, and Supabase. This project showcases integration with Interactive Brokers (IBKR) as an example, but the architecture can be adapted for any trading platform or financial service.

## Overview

This template demonstrates how to build a professional-grade trading platform frontend with features commonly needed in fintech applications. Interactive Brokers (IBKR) is used as an example integration, but the architecture is designed to be adaptable to any trading API or financial service.

## Key Technologies

- **Frontend**: Next.js 14, React, TailwindCSS
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Hooks
- **Data Visualization**: Recharts, Chart.js
- **Type Safety**: TypeScript
- **Development**: Docker

## Project Structure

```
IBKR_auto_proto/
├── my-app/           # Next.js web application
├── Docs/            # Project documentation and examples
└── README.md        # This file
```

## Core Features

- 🔒 **Authentication System**
  - Protected routes
  - Session management
  - Role-based access control

- 🎯 **Trading Interface**
  - Strategy management dashboard
  - Performance monitoring
  - Trade execution interface
  - Real-time updates

- 📊 **Data Visualization**
  - Performance charts
  - Trading analytics
  - Portfolio overview
  - Custom chart components

- 🎨 **Modern UI/UX**
  - Responsive design
  - Dark/light mode
  - Accessible components
  - Interactive dashboards

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/IBKR_auto_proto.git
cd IBKR_auto_proto
```

2. Copy environment template:
```bash
cp my-app/.env.example my-app/.env.local
```

3. Configure environment variables:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

4. Run with Docker:
```bash
docker-compose up --build
```

Access the application at `http://localhost:3000`

## Development Guide

See [my-app/README.md](./my-app/README.md) for detailed development instructions.

## Documentation

The [Docs](./Docs) directory contains:
- System architecture and design patterns
- Implementation examples
- Component templates
- Integration guides
- Example use cases

## Learning Resources

This template demonstrates several key Next.js and React patterns:
- Route groups and layouts
- Server and client components
- Authentication patterns
- Protected routes
- API route handlers
- Data fetching strategies
- Component composition
- State management
- Form handling
- Real-time updates

## Customization

The template is designed to be customizable:
- Swap IBKR integration for other trading platforms
- Modify the UI components
- Add new features
- Extend the authentication system
- Customize the trading interface

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)

## Support

For questions and support:
1. Check the documentation in the Docs folder
2. Create an issue in the repository
3. Refer to implementation examples