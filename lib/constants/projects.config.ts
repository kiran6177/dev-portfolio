export const projects = [
        {
        id: 'geode-hiring-platform',
        name: 'GEODE - Hiring Platform',
        description: 'A creative hiring platform for discovering and recruiting top talent with dashboard insights.',
        image: '/assets/mac_geode.png',
        stack: ['React', 'MongoDB', 'Node.js', 'AWS', 'Tailwind CSS'],
        features: [
            'Role-based User authentication for candidates, hiring managers and design reviewers',
            'Config-based UI platform fir Role-based content management',
            'Deployment migration from Render to AWS ',
            'Automated deployment pipelines with GitHub Actions',

        ],
        github: 'https://github.com/user/geode'
    },
    {
        id: 'haulerhub-portal',
        name: 'HaulerHub Portal',
        description: 'A full-featured logistics admin dashboard for managing shipments, carriers, and financial metrics.',
        image: '/assets/mac_hhb-portal.png',
        stack: ['React', 'TypeScript', 'Node.js'],
        features: [
            'Analytics dashboard (charts, KPIs)',
            'Trip and shipment management',
            'Credit and expense tracking',
            'Role-based admin controls'
        ],
        github: 'https://github.com/user/haulerhub-dashboard'
    },
    {
        id: 'rollin-theatre-booking',
        name: 'RollIN Ticket Platform',
        description: 'A movie ticket booking platform with mangament interface for theatres, booking tickets interface for users, reminders, and categorized browsing experience.',
        image: '/assets/mac_rollin.png',
        stack: ['React', 'Node.js', 'Microservices', 'MongoDB', 'GCP', 'Docker', 'Kubernetes', 'Tailwind CSS'],
        features: [
            'Dynamic movie listings with categories',
            'Theatre management dashboard',
            'User ticket booking interface',
            'Payment integration with Cashfree Payments',
            'Admin dashboard for managing theatres and movies',
            'Real-time seat locking and availability updates',
            'Reminder functionality for upcoming movies',
            'Responsive cinematic UI design',
            'Location-based filtering (e.g., Kochi)'
        ],
        github: 'https://github.com/kiran6177/rollin'
    },
    {
        id: 'adorehome-ecommerce',
        name: 'AdoreHome E-commerce Platform',
        description: 'A modern home decor e-commerce platform with dedicated product listing, cart, checkout, and payment integration for home decor enthusiasts.',
        image: '/assets/mac_adorehome.png',
        stack: ['AWS', 'Node.js', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
        features: [
            'Product and category-based navigation',
            'High-quality visual grid layout',
            'User-friendly shopping experience',
            'Minimal and aesthetic UI'
        ],
        github: 'https://github.com/kiran6177/adorehome'
    },
    {
        id: 'custom-code-integrations',
        name: 'Custom Code Integrations',
        description: 'Integrated custom code solutions for various projects, including a React-based lead capture form with validation , multi-step forms, serverless functions, and API integrations for enhanced functionality.',
        image: '/assets/mac_atvoid.png',
        subImages: ['/assets/mac-fn.png', '/assets/mac-itf.png'],
        stack: ['AWS' , 'Azure', 'TypeScript', 'React'],
        features: [
            'Lead capture form with validation and Hubspot API integration',
            'Serverless function for custom backend logic',
            'Multi-step form implementation',
            'Custom UI components and animations for enhanced user experience',
        ],
        github: ''
    },
];