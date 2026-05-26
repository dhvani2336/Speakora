const mongoose = require("mongoose");
const Pronunciation = require("./models/Pronunciation");
const dns = require("dns");
require("dotenv").config();

// Fix for MongoDB SRV issue
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const PRONUNCIATION_TOPICS = [
    // BEGINNER (15 Topics)
    {
        topic: "Introduce Yourself",
        level: "Beginner",
        category: "Personal",
        ideas: ["My name and age", "Where I live", "What I do for a living", "My basic hobbies"],
        description: "Practice formal and informal introductions."
    },
    {
        topic: "My Family",
        level: "Beginner",
        category: "Personal",
        ideas: ["How many members are in my family?", "What my parents do", "My relationship with my siblings", "A favorite family memory"],
        description: "Describe your family members and relationships."
    },
    {
        topic: "My Daily Routine",
        level: "Beginner",
        category: "Daily Life",
        ideas: ["What time I wake up", "My morning preparations", "Work or study hours", "Evening relaxation"],
        description: "Talk about your usual day-to-day activities."
    },
    {
        topic: "Favorite Food",
        level: "Beginner",
        category: "Hobbies",
        ideas: ["My favorite dish", "Ingredients used", "Why I like it", "Where I usually eat it"],
        description: "Discuss cuisines and dishes you enjoy."
    },
    {
        topic: "My Hometown",
        level: "Beginner",
        category: "Places",
        ideas: ["Name and location", "Famous landmarks", "The weather there", "What people do for fun"],
        description: "Describe the place where you grew up."
    },
    {
        topic: "Hobbies and Interests",
        level: "Beginner",
        category: "Personal",
        ideas: ["What I do in my free time", "When I started this hobby", "Why it makes me happy", "Future hobbies I want to try"],
        description: "Share what you enjoy doing outside of work/study."
    },
    {
        topic: "Season and Weather",
        level: "Beginner",
        category: "Nature",
        ideas: ["My favorite season", "What the weather is like", "Activities I do in that season", "Clothes I wear"],
        description: "Talk about weather patterns and preferences."
    },
    {
        topic: "My Best Friend",
        level: "Beginner",
        category: "Personal",
        ideas: ["How we met", "What we do together", "Their personality", "Why we are close"],
        description: "Describe your relationship with your closest friend."
    },
    {
        topic: "Transport and Travel",
        level: "Beginner",
        category: "Daily Life",
        ideas: ["How I go to work/school", "Public transport I use", "A place I visited recently", "Dream destination"],
        description: "Discuss commuting and basic travel experiences."
    },
    {
        topic: "Health and Fitness",
        level: "Beginner",
        category: "Lifestyle",
        ideas: ["My favorite exercise", "Healthy food I eat", "How I stay active", "Importance of health"],
        description: "Talk about keeping your body healthy."
    },
    {
        topic: "Pets and Animals",
        level: "Beginner",
        category: "Nature",
        ideas: ["Do I have a pet?", "Favorite animal", "Why I like animals", "Animals in my country"],
        description: "Discuss domestic and wild animals."
    },
    {
        topic: "Shopping Habits",
        level: "Beginner",
        category: "Daily Life",
        ideas: ["Where I shop", "What I like to buy", "Online vs offline shopping", "Recent purchase"],
        description: "Share your experiences with shopping."
    },
    {
        topic: "Music and Movies",
        level: "Beginner",
        category: "Entertainment",
        ideas: ["Favorite genre", "A movie I watched recently", "Favorite singer or actor", "How often I watch movies"],
        description: "Discuss your preferences in media."
    },
    {
        topic: "My Typical Weekend",
        level: "Beginner",
        category: "Daily Life",
        ideas: ["Saturday activities", "Sunday relaxation", "Spending time with friends", "Preparing for the week"],
        description: "Describe how you spend your days off."
    },
    {
        topic: "Color and Fashion",
        level: "Beginner",
        category: "Personal",
        ideas: ["My favorite color", "Styles of clothes I like", "Shopping for clothes", "Traditional vs modern dress"],
        description: "Talk about your style and color preferences."
    },

    // INTERMEDIATE (15 Topics)
    {
        topic: "Environmental Concerns",
        level: "Intermediate",
        category: "Social Issues",
        ideas: ["Pollution in my city", "Recycling habits", "Reducing plastic use", "Climate change awareness"],
        description: "Discuss nature and how to protect it."
    },
    {
        topic: "Technology in Daily Life",
        level: "Intermediate",
        category: "Science",
        ideas: ["Gadgets I use every day", "Benefits of the internet", "Social media pros and cons", "Impact of AI"],
        description: "Explore how tech shapes our modern world."
    },
    {
        topic: "Work-Life Balance",
        level: "Intermediate",
        category: "Professional",
        ideas: ["Defining balance", "Stress management", "Setting boundaries", "Importance of leisure"],
        description: "Discuss the harmony between career and personal life."
    },
    {
        topic: "Dream Job",
        level: "Intermediate",
        category: "Career",
        ideas: ["What it is", "Required skills", "Why I want it", "Steps to achieve it"],
        description: "Describe your ideal professional role."
    },
    {
        topic: "Culture and Traditions",
        level: "Intermediate",
        category: "Society",
        ideas: ["Major festivals", "Traditional cuisine", "Customs and manners", "Cultural shifts over time"],
        description: "Discuss the heritage of your country or community."
    },
    {
        topic: "Education System",
        level: "Intermediate",
        category: "Society",
        ideas: ["School life experience", "Important subjects", "Teachers' roles", "Higher education goals"],
        description: "Share your thoughts on learning and schools."
    },
    {
        topic: "Travel Experiences",
        level: "Intermediate",
        category: "Travel",
        ideas: ["A memorable trip", "Challenges faced while traveling", "Solo vs group travel", "Tourist attractions visit"],
        description: "Narrate an interesting story from your travels."
    },
    {
        topic: "Internet Safety",
        level: "Intermediate",
        category: "Technology",
        ideas: ["Protecting personal data", "Cyberbullying", "Identifying fake news", "Secure passwords"],
        description: "Discuss how to stay safe online."
    },
    {
        topic: "Healthy Lifestyle",
        level: "Intermediate",
        category: "Health",
        ideas: ["Mental health awareness", "Balanced diet", "Sleep patterns", "Avoiding bad habits"],
        description: "A more in-depth look at physical and mental well-being."
    },
    {
        topic: "Social Media Influence",
        level: "Intermediate",
        category: "Communication",
        ideas: ["Staying connected", "FOMO (Fear Of Missing Out)", "Influencer culture", "Self-image online"],
        description: "Discuss the impact of social platforms on society."
    },
    {
        topic: "Public Transport Improvement",
        level: "Intermediate",
        category: "Urban Life",
        ideas: ["Traffic issues", "Suggested improvements", "Cost of transport", "Comparing cities"],
        description: "Propose ways to better city commuting."
    },
    {
        topic: "The Power of Reading",
        level: "Intermediate",
        category: "Self-Improvement",
        ideas: ["Favorite books", "Fiction vs Non-fiction", "Benefits of reading", "Libraries today"],
        description: "Discuss the importance of books and literature."
    },
    {
        topic: "Global Warming Effects",
        level: "Intermediate",
        category: "Environment",
        ideas: ["Rising sea levels", "Extreme weather events", "Impact on wildlife", "Global cooperation"],
        description: "Discuss the consequences of a warming planet."
    },
    {
        topic: "Modern Art and Music",
        level: "Intermediate",
        category: "Arts",
        ideas: ["Abstract art thoughts", "Streaming services", "Attending concerts", "Art in public spaces"],
        description: "Explore contemporary creative expressions."
    },
    {
        topic: "Future of Transportation",
        level: "Intermediate",
        category: "Future",
        ideas: ["Electric vehicles", "Flying cars", "Hyperloop", "Space tourism"],
        description: "Predict how we will move from place to place."
    },

    // ADVANCED (15 Topics)
    {
        topic: "Artificial Intelligence Ethics",
        level: "Advanced",
        category: "Technology",
        ideas: ["Job displacement", "Bias in algorithms", "Human-AI collaboration", "Future regulations"],
        description: "Deep dive into the moral implications of AI."
    },
    {
        topic: "Global Economy and Trade",
        level: "Advanced",
        category: "Economics",
        ideas: ["Globalization pros/cons", "Cryptocurrency", "Supply chain issues", "Economic inequality"],
        description: "Discuss complex world financial structures."
    },
    {
        topic: "Philosophy of Success",
        level: "Advanced",
        category: "Psychology",
        ideas: ["Defining success personally", "Failure as a teacher", "Luck vs Hard work", "Long-term fulfillment"],
        description: "Explore the abstract concepts behind 'winning' in life."
    },
    {
        topic: "Climate Change Policy",
        level: "Advanced",
        category: "Political Science",
        ideas: ["Carbon taxes", "Renewable energy transition", "International treaties", "Corporate responsibility"],
        description: "Discuss the political strategies to fight environmental issues."
    },
    {
        topic: "Human Rights and Equality",
        level: "Advanced",
        category: "Social Justice",
        ideas: ["Universal basic rights", "Gender equality", "Freedom of speech", "Systemic discrimination"],
        description: "Debate the state of human rights globally."
    },
    {
        topic: "Space Exploration and Colonization",
        level: "Advanced",
        category: "Science",
        ideas: ["Life on Mars", "Funding for space programs", "Private vs Public sector", "Search for extra-terrestrial life"],
        description: "Examine the ethics and feasibility of space missions."
    },
    {
        topic: "The Impact of Globalization",
        level: "Advanced",
        category: "Cultural Studies",
        ideas: ["Cultural homogenization", "Loss of languages", "Economic interdependence", "Global identity"],
        description: "Analyse how the world is becoming more connected."
    },
    {
        topic: "Medical Advancements and Ethics",
        level: "Advanced",
        category: "Biology",
        ideas: ["Genetic engineering", "Organ donation shortage", "Affordable healthcare", "Life expectancy extension"],
        description: "Discuss the tricky balance in modern medicine."
    },
    {
        topic: "Privacy in the Digital Age",
        level: "Advanced",
        category: "Digital Rights",
        ideas: ["Mass surveillance", "Data mining", "Right to be forgotten", "Encryption importance"],
        description: "Debate the loss of privacy due to technology."
    },
    {
        topic: "Sustainable Urban Development",
        level: "Advanced",
        category: "Architecture",
        ideas: ["Green buildings", "Smart cities", "Urban sprawl vs Density", "Renewable infrastructure"],
        description: "Discuss building cities for the future."
    },
    {
        topic: "Psychology of Motivation",
        level: "Advanced",
        category: "Psychology",
        ideas: ["Intrinsic vs Extrinsic", "Growth mindset", "Maslow's hierarchy", "Consistency over intensity"],
        description: "Delve into why humans do what they do."
    },
    {
        topic: "The Role of Media in Democracy",
        level: "Advanced",
        category: "Politics",
        ideas: ["Journalistic integrity", "Echo chambers", "Public opinion manipulation", "Investigative reporting"],
        description: "Analyse how information affects government and voting."
    },
    {
        topic: "Artificial Life and Bioethics",
        level: "Advanced",
        category: "Ethics",
        ideas: ["Cloning", "Designer babies", "Synthetic biology", "Defining 'Life'"],
        description: "Examine the boundaries of biological science."
    },
    {
        topic: "The Evolution of Language",
        level: "Advanced",
        category: "Linguistics",
        ideas: ["Dead languages", "Internet slang impact", "Language and cognitive thought", "Esperanto and global languages"],
        description: "Explore how the way we communicate changes over time."
    },
    {
        topic: "Existential Risks and Humanity",
        level: "Advanced",
        category: "General",
        ideas: ["Nuclear proliferation", "Pandemic preparedness", "Superintelligent AI", "Asteroid threats"],
        description: "Discuss the biggest threats to human civilization."
    },

    // EXTRA TOPICS TO REACH ~50 (5 more)
    {
        topic: "Time Management",
        level: "Intermediate",
        category: "Self-Improvement",
        ideas: ["Prioritization", "Procrastination causes", "Tools and apps", "Balancing urgency and importance"],
        description: "How to make the most of your 24 hours."
    },
    {
        topic: "Leadership Styles",
        level: "Advanced",
        category: "Professional",
        ideas: ["Autocratic vs Participation", "Servant leadership", "Emotional intelligence", "Mentorship"],
        description: "Discuss what makes an effective leader."
    },
    {
        topic: "Animal Welfare",
        level: "Intermediate",
        category: "Ethics",
        ideas: ["Testing on animals", "Endangered species", "Veganism/Vegetarianism", "Habitat loss"],
        description: "Talk about our responsibility to other creatures."
    },
    {
        topic: "Volunteer Work",
        level: "Beginner",
        category: "Social Service",
        ideas: ["Helping the community", "Why I volunteer", "Benefiting others", "Learning new skills"],
        description: "Share experiences of giving back."
    },
    {
        topic: "Future of Work",
        level: "Advanced",
        category: "Career",
        ideas: ["Remote work trends", "Gig economy", "Automation and jobs", "Lifelong learning"],
        description: "Predict how jobs will look in 20 years."
    }
];

async function seedDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI || process.env.MONGODB_URI);
        console.log("Connected to MongoDB for Pronunciation Seeding...");

        // Clear existing data
        await Pronunciation.deleteMany({});
        console.log("Cleared existing pronunciation topics.");

        // Insert new data
        await Pronunciation.insertMany(PRONUNCIATION_TOPICS);
        console.log(`Successfully seeded ${PRONUNCIATION_TOPICS.length} pronunciation topics!`);

        mongoose.connection.close();
        console.log("DB Connection closed.");
    } catch (err) {
        console.error("Error seeding Pronunciation DB:", err);
        process.exit(1);
    }
}

seedDB();
