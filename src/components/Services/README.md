# Services Component Structure

The Services section of the KENNONH application is organized using the following component structure:

```
Services/
├── index.js               # Main Services page component that assembles all sections
├── components/            # Reusable components specific to Services
│   ├── IconBox.js         # Reusable component for service icons with text
│   └── TeamMemberCard.js  # Already existing team member card component
├── sections/              # Major sections of the Services page
│   ├── ServicesHero.js    # Hero section for Services page (refactored)
│   ├── ServicesList.js    # List of available services
│   └── TeamSection.js     # Team members section
└── styles/                # CSS modules for styles
    ├── IconBox.css        # Styles specific to the IconBox component
    └── ServicesHero.css   # Styles specific to the ServicesHero section
```

This structure follows a modular approach, making it easier to maintain, test, and extend each component independently.