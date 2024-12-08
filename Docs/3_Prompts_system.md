# IBKR Auto Trading Platform Development Prompts

## Architecture and Setup Prompts

### Initial Project Setup
"I'm building an automated trading platform using Next.js 14, TypeScript, and Tailwind CSS that interfaces with Interactive Brokers. Please help me set up the initial project structure with the following requirements:
- Next.js 14 with App Router
- TypeScript in strict mode
- Tailwind CSS with shadcn/ui components
- ESLint and Prettier configuration
- Basic folder structure for a feature-based architecture
- Essential type definitions and configurations

Please provide the necessary commands, configuration files, and folder structure."

### Authentication System
"I need to implement a secure authentication system for my IBKR trading platform with the following features:
- JWT-based session management
- Role-based access control (Admin, Trader, Viewer)
- IBKR credential integration
- API key management
- Secure storage of sensitive information

Please provide the authentication system implementation, including:
- Required dependencies
- Authentication context setup
- Protected route configuration
- JWT handling utilities
- User role management
- IBKR credential integration flow"

## Core Feature Prompts

### Strategy Management Interface
"Help me create a strategy management interface for my trading platform with these requirements:
- Step-by-step strategy creation wizard
- Form components for entry/exit conditions
- Risk parameter configuration
- Position sizing rules
- Time horizon settings
- Strategy template system
- Real-time validation

Please include:
- Component structure
- Form validation logic
- State management approach
- TypeScript interfaces
- Required utility functions"

### Portfolio Dashboard
"I need to implement a real-time portfolio dashboard that displays:
- Active trading strategies
- Current positions
- P&L metrics
- Risk indicators
- Portfolio analytics
- Market overview

Please provide:
- Dashboard component architecture
- Data fetching logic
- Real-time update implementation
- Performance optimization strategies
- Error handling approach"

### Market Data Integration
"Help me implement the market data integration system with:
- Real-time price updates via WebSocket
- Technical indicator calculations
- Chart rendering with react-chartjs-2
- Market scanner functionality
- Watchlist management
- News feed integration

Please include:
- WebSocket connection setup
- Data processing utilities
- Chart component implementation
- Market scanner logic
- Error handling and fallback strategies"

## Advanced Features Prompts

### Backtesting System
"I need to create a backtesting system for trading strategies with:
- Historical data processing
- Strategy performance simulation
- Risk metrics calculation
- Performance visualization
- Results analysis tools
- Export functionality

Please provide:
- Backtesting engine architecture
- Data processing algorithms
- Performance calculation methods
- Visualization components
- Export utilities"

### Risk Management System
"Help implement a comprehensive risk management system including:
- Position risk calculation
- Portfolio exposure analysis
- Margin requirement monitoring
- Risk limit enforcement
- Alert system
- Risk reporting tools

Please include:
- Risk calculation algorithms
- Monitoring system architecture
- Alert mechanism implementation
- Reporting component structure
- Real-time update handling"

## Testing and Quality Assurance Prompts

### Testing Implementation
"Please help me set up a comprehensive testing framework for the platform with:
- Jest configuration
- React Testing Library setup
- E2E testing with Cypress
- API testing strategy
- Performance testing approach
- Accessibility testing implementation

Include:
- Test configuration files
- Example test cases
- Testing utilities
- CI integration approach"

### Performance Optimization
"I need guidance on optimizing the platform's performance with:
- Bundle size optimization
- Code splitting strategy
- Data caching implementation
- Real-time data handling optimization
- Memory management
- Loading state optimization

Please provide:
- Performance optimization techniques
- Code examples
- Measurement methods
- Best practices implementation"

## Deployment and Documentation Prompts

### Deployment Setup
"Help me set up the deployment pipeline with:
- CI/CD configuration
- Environment setup (dev, staging, prod)
- Monitoring system implementation
- Backup procedures
- Security measures
- Performance monitoring

Include:
- Configuration files
- Deployment scripts
- Monitoring setup
- Security checklist"

### Documentation Generation
"I need help creating comprehensive documentation including:
- API documentation
- Component documentation
- Setup instructions
- Deployment guide
- User manual
- Troubleshooting guide

Please provide:
- Documentation structure
- Documentation generation setup
- Example documentation
- Maintenance guidelines"

## Security Implementation Prompts

### Security Features
"Help me implement security features including:
- HTTPS enforcement
- API key encryption
- Input sanitization
- Rate limiting
- CORS policy
- XSS protection
- CSRF protection

Please provide:
- Security implementation details
- Configuration files
- Best practices
- Testing approaches"

## Usage Guidelines

1. Use these prompts sequentially based on your development phase
2. Customize prompts based on specific implementation details
3. Include relevant context from previous implementations
4. Specify any constraints or specific requirements
5. Request examples and test cases when needed

## Additional Considerations

- Specify target browser compatibility
- Include mobile responsiveness requirements
- Mention any specific IBKR API limitations
- Include error handling preferences
- Specify performance targets
- Define coding style preferences