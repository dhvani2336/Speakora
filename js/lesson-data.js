const LESSONS_DATABASE = [
    // BEGINNER
    {
        title: "Lesson 1: Mastering Greetings & First Impressions",
        language: "English",
        level: "Beginner",
        description: "Learn how to greet people professionally and socially, including body language and cultural tips.",
        content: [
            { type: "text", value: "<strong>The Power of Hello</strong><br>Greetings are the foundation of any conversation. They show respect and set the tone for your interaction." },
            { type: "example", value: "• <strong>Formal:</strong> 'Good morning', 'It is a pleasure to meet you.'\n• <strong>Informal:</strong> 'Hey!', 'How's it going?', 'What's up?'" },
            { type: "text", value: "<strong>Cultural Tip:</strong> In many English-speaking cultures, eye contact and a firm handshake (in business) are very important." }
        ],
        exercises: [
            { question: "Which greeting is appropriate for a formal business meeting at 9 AM?", options: ["Hey!", "Good morning", "What's up?", "Hi there"], answer: "Good morning" },
            { question: "In many English-speaking cultures, what is important during a business greeting?", options: ["Looking away", "A firm handshake", "Speaking very softly", "Avoiding eye contact"], answer: "A firm handshake" },
            { question: "Which is an informal way to say 'How are you?'", options: ["How's it going?", "It is a pleasure to meet you", "Good day", "Good evening"], answer: "How's it going?" }
        ],
        order: 1
    },
    {
        title: "Lesson 2: Advanced Self-Introductions",
        language: "English",
        level: "Beginner",
        description: "Go beyond 'My name is...' and learn to talk about your background, job, and passions.",
        content: [
            { type: "text", value: "<strong>The Elevator Pitch</strong><br>A good introduction follows a simple structure: Present, Past, and Future." },
            { type: "example", value: "• <strong>Present:</strong> 'I am a software developer at X company.'\n• <strong>Past:</strong> 'I graduated from Y University with a degree in Design.'\n• <strong>Future:</strong> 'I am currently focusing on improving my English skills for international travel.'" },
            { type: "text", value: "<strong>Vocabulary:</strong> Originally, Based in, Passionate about, Specialize in." }
        ],
        exercises: [
            { question: "What formula is recommended for a good introduction?", options: ["Past, Present, Past", "Present, Past, Future", "Future, Future, Past", "Name only"], answer: "Present, Past, Future" },
            { question: "Which word is used to describe where you were born/came from?", options: ["Originally", "Future", "Align", "Scaled"], answer: "Originally" },
            { question: "Complete the sentence: 'I _______ in UX design.'", options: ["based in", "specialize", "passionate", "originally"], answer: "specialize" }
        ],
        order: 2
    },
    {
        title: "Lesson 3: Daily Life & Routines",
        language: "English",
        level: "Beginner",
        description: "Describe your day using frequency adverbs and time markers.",
        content: [
            { type: "text", value: "<strong>Talking about Habits</strong><br>We use the <em>Present Simple</em> for things we do regularly." },
            { type: "example", value: "• 'I <strong>always</strong> wake up at 7 AM.'\n• 'I <strong>usually</strong> drink coffee before work.'\n• 'I <strong>rarely</strong> go to the gym on weekends.'" },
            { type: "text", value: "<strong>Sequencing:</strong> First, Then, After that, Finally." }
        ],
        exercises: [
            { question: "Which tense is used for habits and routines?", options: ["Past Simple", "Present Simple", "Future Perfect", "Present Continuous"], answer: "Present Simple" },
            { question: "If you do something 100% of the time, which adverb do you use?", options: ["Sometimes", "Rarely", "Always", "Never"], answer: "Always" },
            { question: "Which word helps sequence your daily activities?", options: ["Finally", "Maybe", "Always", "Usually"], answer: "Finally" }
        ],
        order: 3
    },
    {
        title: "Lesson 4: Shopping & Supermarkets",
        language: "English",
        level: "Beginner",
        description: "Essential vocabulary for buying food, clothes, and asking for help in stores.",
        content: [
            { type: "text", value: "<strong>At the Store</strong><br>Common phrases for navigating a supermarket or shop." },
            { type: "example", value: "• 'Where can I find the dairy section?'\n• 'How much is this shirt?'\n• 'Do you have this in a larger size?'\n• 'I'll pay by credit card, please.'" },
            { type: "text", value: "<strong>Vocabulary:</strong> Aisle, Receipt, Discount, Checkout, Trolley." }
        ],
        exercises: [
            { question: "Where do you pay for your items in a store?", options: ["Aisle", "Checkout", "Trolley", "Entrance"], answer: "Checkout" },
            { question: "What do you call the piece of paper showing what you bought?", options: ["Discount", "Receipt", "Trolley", "Aisle"], answer: "Receipt" },
            { question: "Which section would you look for milk and cheese?", options: ["Bakery", "Dairy", "Hardware", "Electronics"], answer: "Dairy" }
        ],
        order: 4
    },
    {
        title: "Lesson 5: Health & Hygiene Basics",
        language: "English",
        level: "Beginner",
        description: "Learn to describe basic symptoms and discuss healthy habits.",
        content: [
            { type: "text", value: "<strong>Staying Healthy</strong><br>Useful words for visiting a doctor or explaining how you feel." },
            { type: "example", value: "• 'I have a headache.'\n• 'I feel a bit dizzy today.'\n• 'I exercise three times a week to stay fit.'\n• 'You should drink plenty of water.'" },
            { type: "text", value: "<strong>Vocabulary:</strong> Fever, Prescription, Vitamin, Symptom, Hygiene." }
        ],
        exercises: [
            { question: "What do you call a sign or evidence of an illness?", options: ["Vitamin", "Symptom", "Hygiene", "Recipe"], answer: "Symptom" },
            { question: "What does a doctor give you to get medicine at a pharmacy?", options: ["Prescription", "Fever", "Workout", "Receipt"], answer: "Prescription" },
            { question: "If your head hurts, you have a _______.", options: ["Stomachache", "Headache", "Fever", "Vitamin"], answer: "Headache" }
        ],
        order: 5
    },

    // INTERMEDIATE
    {
        title: "Lesson 6: Travel & Holidays",
        language: "English",
        level: "Intermediate",
        description: "Master vocabulary for airports, hotel bookings, and sightseeing adventures.",
        content: [
            { type: "text", value: "<strong>The Traveler's Guide</strong><br>Navigating international travel requires specific terminology." },
            { type: "example", value: "• 'I have a layover in Dubai.'\n• 'Where is the baggage claim area?'\n• 'I'd like to check out of room 402, please.'\n• 'Is breakfast included in the booking?'" },
            { type: "text", value: "<strong>Phrasal Verbs:</strong> Check in, Take off, Get away, Look around." }
        ],
        exercises: [
            { question: "What is a 'layover'?", options: ["A long flight", "A short stop between flights", "A lost suitcase", "Buying a ticket"], answer: "A short stop between flights" },
            { question: "Which phrasal verb means for a plane to leave the ground?", options: ["Check in", "Take off", "Get away", "Look around"], answer: "Take off" },
            { question: "Where do you pick up your bags after a flight?", options: ["Check-in counter", "Baggage claim", "Security", "Duty free"], answer: "Baggage claim" }
        ],
        order: 6
    },
    {
        title: "Lesson 7: Food & Cooking Culture",
        language: "English",
        level: "Intermediate",
        description: "Discuss different cuisines, recipe steps, and dining out etiquette.",
        content: [
            { type: "text", value: "<strong>Culinary English</strong><br>Talk about food like a foodie!" },
            { type: "example", value: "• 'This dish is a bit too savory for my taste.'\n• 'First, sauté the onions until they are golden brown.'\n• 'Could we have the check, please?'\n• 'I'm allergic to peanuts, does this contain any?'" },
            { type: "text", value: "<strong>Vocabulary:</strong> Garnish, Simmer, Palate, Authentic, Decadent." }
        ],
        exercises: [
            { question: "What does 'sauté' mean?", options: ["To boil in water", "To fry quickly in a little fat", "To bake in an oven", "To freeze"], answer: "To fry quickly in a little fat" },
            { question: "Which word describes food that is salty or spicy rather than sweet?", options: ["Decadent", "Savory", "Garnish", "Palate"], answer: "Savory" },
            { question: "If you want to pay at a restaurant, you ask for the _______.", options: ["Check", "Menu", "Authentic", "Garnish"], answer: "Check" }
        ],
        order: 7
    },
    {
        title: "Lesson 8: Hobbies & Free Time",
        language: "English",
        level: "Intermediate",
        description: "Talk about your interests, sports, and how you unwind after work.",
        content: [
            { type: "text", value: "<strong>Beyond the 9-to-5</strong><br>English for social bonding over shared interests." },
            { type: "example", value: "• 'I'm really into rock climbing lately.'\n• 'I find painting very therapeutic.'\n• 'I enjoy binge-watching documentaries on weekends.'\n• 'Are you a fan of any particular sports team?'" },
            { type: "text", value: "<strong>Idioms:</strong> To keep fit, To take up (a hobby), To chill out." }
        ],
        exercises: [
            { question: "What does 'to take up' a hobby mean?", options: ["To quit", "To start", "To teach", "To forget"], answer: "To start" },
            { question: "Which word means 'relax'?", options: ["Chill out", "Binge-watch", "Keep fit", "Therapeutic"], answer: "Chill out" },
            { question: "If an activity makes you feel better or less stressed, it is _______.", options: ["Decadent", "Therapeutic", "SAVORY", "Mitigation"], answer: "Therapeutic" }
        ],
        order: 8
    },

    // ADVANCED
    {
        title: "Lesson 9: Work & Career Development",
        language: "English",
        level: "Advanced",
        description: "Professional English for interviews, negotiations, and office leadership.",
        content: [
            { type: "text", value: "<strong>Navigating the Corporate Ladder</strong><br>High-level vocabulary for professional success." },
            { type: "example", value: "• 'We need to align our strategies to maximize synergy.'\n• 'Can we circle back to that point in the next meeting?'\n• 'I'm looking for a role with more autonomy and growth potential.'\n• 'The negotiation was tough, but we reached a consensus.'" },
            { type: "text", value: "<strong>Buzzwords:</strong> Scalability, Stakeholders, Deliverables, KPIs." }
        ],
        exercises: [
            { question: "What does 'consensus' mean?", options: ["A disagreement", "General agreement", "A budget", "A timeline"], answer: "General agreement" },
            { question: "What are 'KPIs'?", options: ["Kitchen Project Ideas", "Key Performance Indicators", "Knowledge Processing Items", "Key People Interactions"], answer: "Key Performance Indicators" },
            { question: "What does 'autonomy' in a job mean?", options: ["Higher pay", "Independence and freedom", "Working in a team", "Using cars"], answer: "Independence and freedom" }
        ],
        order: 9
    },
    {
        title: "Lesson 10: Technology & Future Innovations",
        language: "English",
        level: "Advanced",
        description: "Discuss AI, social media impact, and the digital transformation of society.",
        content: [
            { type: "text", value: "<strong>The Digital Frontier</strong><br>Critical discussions on how technology shapes our lives." },
            { type: "example", value: "• 'Algorithmic bias is a significant ethical concern in AI development.'\n• 'Is social media eroding our ability to focus?'\n• 'The rise of remote work is decentralizing urban populations.'\n• 'Quantum computing could revolutionize data encryption.'" },
            { type: "text", value: "<strong>Vocabulary:</strong> Obsolescence, Paradigm shift, Automation, Disruption." }
        ],
        exercises: [
            { question: "What is a 'paradigm shift'?", options: ["A small change", "A fundamental change in approach", "A new computer", "A software update"], answer: "A fundamental change in approach" },
            { question: "What does it mean when something is 'obsolete'?", options: ["Brand new", "No longer used or useful", "Very fast", "Expensive"], answer: "No longer used or useful" },
            { question: "Which term describes tasks being done by machines instead of humans?", options: ["Obsolescence", "Automation", "Encryption", "Shift"], answer: "Automation" }
        ],
        order: 10
    },
    {
        title: "Lesson 11: Environment & Global Challenges",
        language: "English",
        level: "Advanced",
        description: "Engage in debates about sustainability, climate change, and global policy.",
        content: [
            { type: "text", value: "<strong>A Planet in Flux</strong><br>Complex language for environmental advocacy and science." },
            { type: "example", value: "• 'The carbon footprint of the industrial sector is immense.'\n• 'We must transition to a circular economy to reduce waste.'\n• 'Biodiversity loss is an existential threat to humanity.'\n• 'What are the geopolitical implications of water scarcity?'" },
            { type: "text", value: "<strong>Vocabulary:</strong> Mitigation, Renewable, Ecosystem, Sustainability, Kyoto Protocol." }
        ],
        exercises: [
            { question: "What does 'mitigation' mean in an environmental context?", options: ["Making something worse", "Reducing the severity or impact", "Stopping completely", "Ignoring the problem"], answer: "Reducing the severity or impact" },
            { question: "What is a 'carbon footprint'?", options: ["A literal footprint in coal", "The total amount of greenhouse gases produced", "Planting trees", "Cleaning the ocean"], answer: "The total amount of greenhouse gases produced" },
            { question: "An economy that aims to eliminate waste and reuse resources is called a _______ economy.", options: ["Square", "Circular", "Linear", "Broken"], answer: "Circular" }
        ],
        order: 11
    },
    {
        title: "Lesson 12: Ethics & Artificial Intelligence",
        language: "English",
        level: "Advanced",
        description: "Exploring the philosophical and practical implications of advanced machine learning.",
        content: [
            { type: "text", value: "<strong>Man and Machine</strong><br>The ultimate debate on the ethics of intelligent systems." },
            { type: "example", value: "• 'Should AI be granted a form of legal personhood?'\n• 'The alignment problem: how do we ensure AI goals match human values?'\n• 'Deepfakes pose a serious threat to information integrity.'\n• 'Is universal basic income a solution to AI-driven job displacement?'" },
            { type: "text", value: "<strong>Concepts:</strong> Turing Test, Singularity, Neural networks, Heuristics." }
        ],
        exercises: [
            { question: "What is the 'alignment problem' in AI?", options: ["Aligning text in a document", "Ensuring AI goals match human values", "Fixing robot wheels", "Connecting to the internet"], answer: "Ensuring AI goals match human values" },
            { question: "What are 'deepfakes'?", options: ["Realistic but fake media created by AI", "Old movies", "Very deep computer files", "Smart robots"], answer: "Realistic but fake media created by AI" },
            { question: "The point in time where AI creates runaway technological growth is called the _______.", options: ["Singularity", "Heuristic", "Turing Test", "Neural net"], answer: "Singularity" }
        ],
        order: 12
    },
    // ADULT LEARNERS (20-40 AGE GROUP)
    {
        title: "Lesson 13: Workplace Communication & Soft Skills",
        language: "English",
        level: "Advanced",
        description: "Master the art of professional communication, from active listening to conflict resolution.",
        content: [
            { type: "text", value: "<strong>The Art of Professionalism</strong><br>Communication in the workplace is the oil that keeps the gears of a company turning." },
            { type: "example", value: "• <strong>Active Listening:</strong> 'I hear what you're saying, and I think we can find a middle ground.'\n• <strong>Constructive Feedback:</strong> 'I appreciate your effort on this project. Perhaps we could refine the X aspect for better results?'" },
            { type: "text", value: "<strong>Soft Skills:</strong> Empathy, Adaptability, Diplomacy, Active Listening." }
        ],
        exercises: [
            { question: "What does 'active listening' involve?", options: ["Interrupting to give your opinion", "Nodding but not listening", "Listening and responding to show understanding", "Looking at your phone"], answer: "Listening and responding to show understanding" },
            { question: "Which word describes the ability to adjust to new conditions?", options: ["Diplomacy", "Empathy", "Adaptability", "KPIs"], answer: "Adaptability" },
            { question: "When giving feedback, it should be _______.", options: ["Destructive", "Constructive", "Optional", "Loud"], answer: "Constructive" }
        ],
        order: 13
    },
    {
        title: "Lesson 14: Career & Professional Growth",
        language: "English",
        level: "Advanced",
        description: "Strategies for long-term career success, including personal branding and networking.",
        content: [
            { type: "text", value: "<strong>Building Your Brand</strong><br>Your career is a marathon, not a sprint. Success requires consistent growth and visibility." },
            { type: "example", value: "• 'I am working on enhancing my personal brand through LinkedIn and industry events.'\n• 'It's crucial to diversify your skill set in this rapidly changing market.'\n• 'Networking is not about collecting contacts; it's about building relationships.'" },
            { type: "text", value: "<strong>Vocabulary:</strong> Personal brand, Networking, Diversify, Visibility." }
        ],
        exercises: [
            { question: "What is personal branding?", options: ["Wearing a specific brand of clothes", "How you present your skills and experience to the world", "Buying a new laptop", "Doing your job well"], answer: "How you present your skills and experience to the world" },
            { question: "Why is networking important?", options: ["To get free food at events", "To build meaningful professional relationships", "To find out people's secrets", "To avoid working"], answer: "To build meaningful professional relationships" },
            { question: "What does it mean to 'diversify' your skill set?", options: ["Only do one thing", "Learn many different skills", "Change your job every month", "Forget what you learned"], answer: "Learn many different skills" }
        ],
        order: 14
    },
    {
        title: "Lesson 15: Financial Literacy for Professionals",
        language: "English",
        level: "Intermediate",
        description: "Understanding personal finance, investing basics, and budgeting for the future.",
        content: [
            { type: "text", value: "<strong>Mastering Your Money</strong><br>Financial literacy is the foundation of long-term security and freedom." },
            { type: "example", value: "• 'I've set up an automatic transfer to my savings account every payday.'\n• 'Understanding the difference between assets and liabilities is key.'\n• 'Investing early allows you to take advantage of compound interest.'" },
            { type: "text", value: "<strong>Vocabulary:</strong> Assets, Liabilities, Compound Interest, Budget, Inflation." }
        ],
        exercises: [
            { question: "What is an 'asset'?", options: ["Something that takes money out of your pocket", "Something that puts money into your pocket", "A debt", "A tax"], answer: "Something that puts money into your pocket" },
            { question: "What is 'compound interest'?", options: ["Interest calculated only on the principal", "Interest calculated on the principal and accumulated interest", "A fee paid to the bank", "A discount on a loan"], answer: "Interest calculated on the principal and accumulated interest" },
            { question: "A plan for how to spend your money is called a _______.", options: ["Wishlist", "Budget", "Contract", "Receipt"], answer: "Budget" }
        ],
        order: 15
    },
    {
        title: "Lesson 16: Health & Wellness for Busy Adults",
        language: "English",
        level: "Intermediate",
        description: "Balancing a career with physical and mental health.",
        content: [
            { type: "text", value: "<strong>The Wealth of Health</strong><br>You cannot pour from an empty cup. Prioritizing wellness is essential for productivity." },
            { type: "example", value: "• 'I make sure to take short breaks every hour to avoid burnout.'\n• 'Mindfulness and meditation help me manage work-related stress.'\n• 'Maintain a healthy work-life balance to sustain long-term performance.'" },
            { type: "text", value: "<strong>Vocabulary:</strong> Burnout, Mindfulness, Work-life balance, Ergonomics." }
        ],
        exercises: [
            { question: "What is 'burnout'?", options: ["A lightbulb breaking", "Physical or mental exhaustion from prolonged stress", "Running very fast", "Being fired from a job"], answer: "Physical or mental exhaustion from prolonged stress" },
            { question: "What does 'mindfulness' involve?", options: ["Thinking about everything at once", "Being present and aware in the current moment", "Daydreaming", "Worrying about the future"], answer: "Being present and aware in the current moment" },
            { question: "Achieving a good 'work-life balance' means _______.", options: ["Working 24/7", "Prioritizing your career over everything", "Dividing time and energy between work and personal life", "Not working at all"], answer: "Dividing time and energy between work and personal life" }
        ],
        order: 16
    },
    {
        title: "Lesson 17: Social Dynamics & Networking",
        language: "English",
        level: "Intermediate",
        description: "The science of building professional relationships and making a lasting impression.",
        content: [
            { type: "text", value: "<strong>The Power of Connection</strong><br>Success is often as much about who you know as what you know." },
            { type: "example", value: "• 'First impressions are often formed within the first few seconds of meeting someone.'\n• 'Using open body language can help you appear more approachable.'\n• 'Find common ground with others to build rapport quickly.'" },
            { type: "text", value: "<strong>Vocabulary:</strong> Rapport, Approachable, Impression, Body language." }
        ],
        exercises: [
            { question: "What is 'rapport'?", options: ["A legal document", "A harmonious relationship or connection", "A loud noise", "A type of car"], answer: "A harmonious relationship or connection" },
            { question: "Someone who is easy to talk to is _______.", options: ["Aggressive", "Approachable", "Distant", "KPI-focused"], answer: "Approachable" },
            { question: "Non-verbal communication using your physical posture and gestures is called _______.", options: ["Mindfulness", "Body language", "Soft skills", "Personal brand"], answer: "Body language" }
        ],
        order: 17
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = LESSONS_DATABASE;
}
