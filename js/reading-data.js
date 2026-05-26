const READING_DATABASE = [
    // ==========================================
    // BEGINNER CATEGORY (8 Stories)
    // ==========================================
    {
        id: "beg-1",
        title: "A Sunny Day at the Park",
        category: "Beginner",
        image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&q=80&w=800",
        excerpt: "Join Sam and his dog, Buddy, for a wonderful afternoon in the local park.",
        content: `It is a sunny Sunday. Sam goes to the park with his dog, Buddy. The park is very large and green. There are many trees and flowers. Sam wears a blue T-shirt and shorts. He has a red ball. He throws the ball, and Buddy runs to catch it. Buddy is very happy. They see a small pond in the middle of the park. Some ducks are swimming in the water. Sam gives them some bread. At noon, Sam sits under a big oak tree. He eats a sandwich and drinks some orange juice. Late in the afternoon, Sam walks home with Buddy. It was a wonderful day!`,
        questions: [
            { question: "What day is it today?", options: ["Monday", "Friday", "Sunday", "Saturday"], correctAnswer: 2, explanation: "The story starts with 'It is a sunny Sunday'." },
            { question: "Who is Buddy?", options: ["A cat", "A bird", "A dog", "A horse"], correctAnswer: 2, explanation: "Buddy is mentioned as Sam's dog." },
            { question: "Sam wears a blue T-shirt. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "The story says 'Sam wears a blue T-shirt'." },
            { question: "Where are the ducks?", options: ["In a tree", "In a house", "In the pond", "In the car"], correctAnswer: 2, explanation: "They see ducks swimming in the pond." },
            { question: "Sam eats a _______ under the tree.", options: ["Pizza", "Sandwich", "Burger", "Apple"], correctAnswer: 1, explanation: "He eats a sandwich at noon." }
        ]
    },
    {
        id: "beg-2",
        title: "Traveling to the Taj Mahal",
        category: "Beginner",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea023?auto=format&fit=crop&q=80&w=800",
        excerpt: "Rohan visits the beautiful Taj Mahal in Agra for the first time.",
        content: `Rohan is very happy today. He is traveling to Agra with his mother and father. They are going by a fast train. Rohan looks out of the window and sees many green fields. When they arrive in Agra, they go to see the Taj Mahal. It is a very big and white building made of marble. Rohan takes many photos with his phone. The gardens are beautiful. He buys a small toy Taj Mahal at a shop. At night, they eat tasty food and sleep at a hotel. Rohan loves traveling!`,
        questions: [
            { question: "Where is Rohan going?", options: ["Delhi", "Agra", "Mumbai", "Jaipur"], correctAnswer: 1, explanation: "He is traveling to Agra." },
            { question: "How do they travel?", options: ["By bus", "By plane", "By train", "By car"], correctAnswer: 2, explanation: "They are going by a fast train." },
            { question: "What is the Taj Mahal made of?", options: ["Brick", "Wood", "Marble", "Gold"], correctAnswer: 2, explanation: "It is a white building made of marble." },
            { question: "What does Rohan buy?", options: ["A book", "A toy Taj Mahal", "A T-shirt", "A hat"], correctAnswer: 1, explanation: "He buys a small toy Taj Mahal." },
            { question: "Rohan uses a _____ to take photos.", options: ["Laptop", "Camera", "Phone", "Tablet"], correctAnswer: 2, explanation: "He takes photos with his phone." }
        ]
    },
    {
        id: "beg-3",
        title: "The Busy Grocery Store",
        category: "Beginner",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
        excerpt: "Help Mr. Miller find everything on his shopping list in a crowded supermarket.",
        content: `It is Saturday morning. Emma and her father are at the supermarket. They have a long shopping list. First, they go to the fruit section. Emma picks six green apples and four yellow bananas. Next, they buy some vegetables. They get a bag of carrots and a big lettuce. Emma's father wants to make pasta for dinner. They find a box of spaghetti and a jar of tomato sauce. Finally, they pay at the checkout and walk to the car.`,
        questions: [
            { question: "When do they go shopping?", options: ["Monday", "Friday", "Saturday", "Sunday"], correctAnswer: 2, explanation: "The story begins with 'It is Saturday morning'." },
            { question: "How many apples does Emma pick?", options: ["Two", "Four", "Six", "Eight"], correctAnswer: 2, explanation: "Emma picks six green apples." },
            { question: "What is for dinner?", options: ["Pizza", "Pasta", "Rice", "Burger"], correctAnswer: 1, explanation: "Her father wants to make pasta." },
            { question: "Which section do they visit first?", options: ["Toy", "Meat", "Fruit", "Bakery"], correctAnswer: 2, explanation: "First, they go to the fruit section." },
            { question: "What color are the bananas?", options: ["Green", "Red", "Yellow", "Blue"], correctAnswer: 2, explanation: "She picks four yellow bananas." }
        ]
    },
    {
        id: "beg-4",
        title: "My New Kitten",
        category: "Beginner",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800",
        excerpt: "Sam gets a special surprise for his birthday - a fluffy new friend.",
        content: `Molly is walking in the street. She finds a small cat under a big car. The cat is white and grey. It is very thin and hungry. Molly gives the cat some milk in a small bowl. The cat says 'meow' and drinks everything. Molly takes the cat to her house. She names the cat 'Snowy'. Snowy has a soft bed to sleep on. Now, Snowy is a happy cat and Molly's best friend.`,
        questions: [
            { question: "Where was the cat found?", options: ["In a tree", "In a box", "Under a car", "At the park"], correctAnswer: 2, explanation: "She finds it under a big car." },
            { question: "What color is Snowy?", options: ["Black", "White and grey", "Yellow", "Brown"], correctAnswer: 1, explanation: "The cat is white and grey." },
            { question: "What does Snowy drink?", options: ["Water", "Juice", "Milk", "Tea"], correctAnswer: 2, explanation: "Molly gives the cat some milk." },
            { question: "What is the cat's name?", options: ["Misty", "Snowy", "Luna", "Kitty"], correctAnswer: 1, explanation: "She names the cat 'Snowy'." },
            { question: "The cat was hungry at first. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "The story says it was very thin and hungry." }
        ]
    },
    {
        id: "beg-5",
        title: "The Hardworking Ant",
        category: "Beginner",
        image: "https://images.unsplash.com/photo-1559190394-df5a28aab5c5?auto=format&fit=crop&q=80&w=800",
        excerpt: "A motivational story about a little ant who never gives up.",
        content: `Little Andy is a small ant. One day, he finds a big piece of sugar. It is much bigger than him! Andy tries to pull the sugar. He pulls and pulls, but it does not move. A grasshopper sees him and laughs. "Go play, Andy! You are too small," says the grasshopper. But Andy does not stop. He calls his friends. Ten ants come to help. Together, they carry the sugar to their home. Andy is very proud.`,
        questions: [
            { question: "What does Andy find?", options: ["A leaf", "A piece of sugar", "A stone", "A seed"], correctAnswer: 1, explanation: "He finds a big piece of sugar." },
            { question: "Who laughs at Andy?", options: ["A bird", "A bee", "A grasshopper", "A worm"], correctAnswer: 2, explanation: "A grasshopper laughs at him." },
            { question: "How many friends help?", options: ["Two", "Five", "Ten", "Twenty"], correctAnswer: 2, explanation: "Ten ants come to help." },
            { question: "Andy is too small to move the sugar alone. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "He pulls and pulls but it does not move." },
            { question: "What did Andy learn?", options: ["Dancing is fun", "Teamwork works", "Sugar is sweet", "Grasshoppers are mean"], correctAnswer: 1, explanation: "They carried it together." }
        ]
    },
    {
        id: "beg-6",
        title: "Tim's Little Garden",
        category: "Beginner",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
        excerpt: "Tim learns how to grow his own vegetables in the backyard.",
        content: `Tim has a small garden in his backyard. He loves plants. Every morning, he waters the flowers and the vegetables. In his garden, there are red tomatoes, green peas, and orange carrots. Tim uses a small shovel to dig the dirt. He puts seeds in the ground and waits for them to grow. His grandfather helps him. "Plants need sun and water," his grandfather says. Tim is proud of his little garden.`,
        questions: [
            { question: "Where is the garden?", options: ["Inside", "Backyard", "Roof", "Park"], correctAnswer: 1, explanation: "It's in his backyard." },
            { question: "What does Tim do every morning?", options: ["Sleep", "Play", "Water plants", "Eat"], correctAnswer: 2, explanation: "He waters the flowers and vegetables." },
            { question: "Who helps Tim?", options: ["Brother", "Friend", "Grandfather", "Cat"], correctAnswer: 2, explanation: "His grandfather helps him." },
            { question: "What color are the tomatoes?", options: ["Orange", "Green", "Red", "Yellow"], correctAnswer: 2, explanation: "The story mentions red tomatoes." },
            { question: "What do plants need?", options: ["Toys", "Milk", "Sun and water", "Bread"], correctAnswer: 2, explanation: "They need sun and water." }
        ]
    },
    {
        id: "beg-7",
        title: "Leo at the Zoo",
        category: "Beginner",
        image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&q=80&w=800",
        excerpt: "Leo explores the zoo and sees funny monkeys and tall giraffes.",
        content: `Leo is at the zoo with his family. He sees monkeys jumping on trees. They are eating bananas. Next, he sees the lions. Lions are very big and brown. They have loud voices. Leo likes the giraffes best. They are very tall and have long necks. He sees a blue parrot flying in the sky. Finally, he sees the elephants. They are using their trunks to wash. Leo loves the zoo animals!`,
        questions: [
            { question: "What are the monkeys eating?", options: ["Apples", "Bananas", "Meat", "Fish"], correctAnswer: 1, explanation: "They are eating bananas." },
            { question: "What color are the lions?", options: ["Black", "White", "Brown", "Grey"], correctAnswer: 2, explanation: "Lions are big and brown." },
            { question: "Which animal does Leo like best?", options: ["Monkey", "Lion", "Giraffe", "Elephant"], correctAnswer: 2, explanation: "Leo likes the giraffes best." },
            { question: "What animal is blue?", options: ["Monkey", "Parrot", "Lion", "Elephant"], correctAnswer: 1, explanation: "He sees a blue parrot." },
            { question: "Elephants wash with their _______.", options: ["Feet", "Tails", "Trunks", "Ears"], correctAnswer: 2, explanation: "They use their trunks." }
        ]
    },
    {
        id: "beg-8",
        title: "The Kind King Ashoka",
        category: "Beginner",
        image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800",
        excerpt: "A simple story about a powerful king who chose peace over war.",
        content: `Long ago, there was a great king named Ashoka. He was very powerful and won many wars. But after a big battle, he felt very sad. He saw many people get hurt. Ashoka decided to stop fighting. He learned about peace and kindness. He planted trees and built hospitals for people and animals. He sent messages of love to other countries. People called him 'Ashoka the Great' because he was a kind and wise ruler.`,
        questions: [
            { question: "Was Ashoka a king?", options: ["Yes", "No"], correctAnswer: 0, explanation: "Yes, he was a great king." },
            { question: "Why did he feel sad?", options: ["He lost his crown", "People got hurt in war", "He was hungry", "It was raining"], correctAnswer: 1, explanation: "He was sad because he saw people get hurt." },
            { question: "What did he build?", options: ["Tall walls", "Hospitals", "Prisons", "Toy shops"], correctAnswer: 1, explanation: "He built hospitals for people and animals." },
            { question: "He decided to stop _______.", options: ["Eating", "Sleeping", "Fighting", "Running"], correctAnswer: 2, explanation: "He decided to stop fighting." },
            { question: "Ashoka chose _______ over war.", options: ["Gold", "Peace", "Anger", "Food"], correctAnswer: 1, explanation: "He chose peace and kindness." }
        ]
    },

    // ==========================================
    // INTERMEDIATE CATEGORY (8 Stories)
    // ==========================================
    {
        id: "int-1",
        title: "The Science of Social Media",
        category: "Intermediate",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
        excerpt: "How social science explains our behavior on digital platforms like Netflix and Instagram.",
        content: `Social media has changed how we communicate. Platform like Netflix and Instagram use complex algorithms to keep us engaged. These algorithms study what we like, what we watch, and who we follow. Psychologically, getting a 'like' or a notification releases dopamine in our brains, which makes us want to use the apps more. This is called a 'feedback loop.' Social scientists are studying how this affects our focus and our relationships. While social media helps us stay connected, it is important to take breaks and spend time in the real world. Digital balance is the key to a healthy modern life.`,
        questions: [
            { question: "What do algorithms study?", options: ["Our age", "Our preferences", "Our health", "Our bank details"], correctAnswer: 1, explanation: "They study what we like and watch." },
            { question: "What chemical is released by 'likes'?", options: ["Adrenaline", "Dopamine", "Insulin", "Oxygen"], correctAnswer: 1, explanation: "Getting a like releases dopamine." },
            { question: "What is a 'feedback loop'?", options: ["A repetitive process", "A broken app", "A loud noise", "A new computer"], correctAnswer: 0, explanation: "It refers to the cycle of engagement." },
            { question: "Social media only has negative effects. (True/False)", options: ["True", "False"], correctAnswer: 1, explanation: "It helps us stay connected." },
            { question: "What is the key to a healthy digital life?", options: ["Never using apps", "Buying new phones", "Digital balance", "More notifications"], correctAnswer: 2, explanation: "Digital balance is mentioned as the key." }
        ]
    },
    {
        id: "int-2",
        title: "Chandragupta Maurya: The First Emperor",
        category: "Intermediate",
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=800",
        excerpt: "Discover the history of the great king who founded the Maurya Empire.",
        content: `Many centuries ago, India was divided into small kingdoms. A young man named Chandragupta Maurya dreamed of uniting them. With the help of his wise teacher, Chanakya, he built a powerful army. He fought against the Nanda kings and won. He then started the Maurya Empire, the largest empire in India at that time. Chandragupta was not just a great warrior but also a smart ruler. He built roads, improved trade, and ensured justice for his people.`,
        questions: [
            { question: "Who was the teacher?", options: ["Buddha", "Chanakya", "Akbar", "Birbal"], correctAnswer: 1, explanation: "His teacher was Chanakya." },
            { question: "Which empire did he start?", options: ["Gupta", "Mughal", "Maurya", "Chola"], correctAnswer: 2, explanation: "He founded the Maurya Empire." },
            { question: "Who did he defeat?", options: ["Porus", "Alexander", "Nanda kings", "Rajputs"], correctAnswer: 2, explanation: "He fought against the Nanda kings." },
            { question: "Chandragupta united India. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "He dreamed of and succeeded in uniting kingdoms." },
            { question: "He improved _____ and trade.", options: ["Ships", "Roads", "Walls", "Temples"], correctAnswer: 1, explanation: "He built roads to improve trade." }
        ]
    },
    {
        id: "int-3",
        title: "The Colors of Jaipur",
        category: "Intermediate",
        image: "https://images.unsplash.com/photo-1599661046289-e31897e9371e?auto=format&fit=crop&q=80&w=800",
        excerpt: "Explore the 'Pink City' and its magnificent heritage palaces.",
        content: `Last winter, I traveled to Jaipur, the capital city of Rajasthan. It is famously known as the 'Pink City' because many buildings are painted in a terracotta pink color. This tradition started in 1876 to welcome the Prince of Wales. My first stop was the Hawa Mahal, a beautiful palace with nearly a thousand small windows. I also visited the Amber Fort, which is located high on a hill. Jaipur is a perfect mix of history and vibrant culture.`,
        questions: [
            { question: "What is Jaipur's nickname?", options: ["Blue City", "Pink City", "Golden City", "White City"], correctAnswer: 1, explanation: "It is known as the Pink City." },
            { question: "When did the tradition start?", options: ["1776", "1850", "1876", "1947"], correctAnswer: 2, explanation: "It started in 1876." },
            { question: "What is the Hawa Mahal famous for?", options: ["Its garden", "Its windows", "Its lake", "Its height"], correctAnswer: 1, explanation: "It has nearly a thousand small windows." },
            { question: "Jaipur is the capital of which state?", options: ["Gujarat", "Punjab", "Rajasthan", "Bihar"], correctAnswer: 2, explanation: "It is the capital of Rajasthan." },
            { question: "Amber Fort is located on a ____.", options: ["Beach", "Island", "Hill", "Forest"], correctAnswer: 2, explanation: "It is located high on a hill." }
        ]
    },
    {
        id: "int-4",
        title: "The Digital Nomad Lifestyle",
        category: "Intermediate",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
        excerpt: "Liam lives in Portugal while working remotely for a company in New York.",
        content: `Liam is a software developer who works from anywhere. He is what people call a 'Digital Nomad'. Currently, he is living in a small coastal town in Portugal. Every morning, he takes his laptop to a café near the beach. He uses high-speed internet to talk to his team in New York. While he loves the freedom of traveling, he faces certain challenges like working across different time zones.`,
        questions: [
            { question: "What is Liam's job?", options: ["Doctor", "Developer", "Driver", "Designer"], correctAnswer: 1, explanation: "He is a software developer." },
            { question: "What is a 'Digital Nomad'?", options: ["A robot", "A traveler who works online", "A local farmer", "A student"], correctAnswer: 1, explanation: "It refers to someone working while traveling." },
            { question: "Where is Liam now?", options: ["New York", "London", "Portugal", "Spain"], correctAnswer: 2, explanation: "He is living in Portugal." },
            { question: "What is one challenge he faces?", options: ["Food", "Internet", "Time zones", "Taxes"], correctAnswer: 2, explanation: "Time zone differences can be tiring." },
            { question: "He works at a café. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "He takes his laptop to a café." }
        ]
    },
    {
        id: "int-5",
        title: "A Weekend in the Mountains",
        category: "Intermediate",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800",
        excerpt: "Three friends find adventure and fresh air in the Great Alps.",
        content: `Three friends—Alex, Ben, and Clara—decided to escape the noise of the city for a weekend. They packed their hiking gear and drove to the Great Alps. The air was fresh and cold. They hiked for five hours until they reached a beautiful blue lake. Just as they arrived, it started to rain. They quickly set up their tent and boiled water for tea. The next morning, the sun was shining, and they felt refreshed.`,
        questions: [
            { question: "How many friends went?", options: ["2", "3", "4", "5"], correctAnswer: 1, explanation: "Alex, Ben, and Clara went." },
            { question: "Where did they go?", options: ["Beach", "Desert", "Mountains", "Forest"], correctAnswer: 2, explanation: "They went to the Great Alps." },
            { question: "How long was the hike?", options: ["1 hour", "3 hours", "5 hours", "10 hours"], correctAnswer: 2, explanation: "They hiked for five hours." },
            { question: "What was the weather like when they arrived?", options: ["Sunny", "Snowy", "Rainy", "Windy"], correctAnswer: 2, explanation: "It started to rain as they reached." },
            { question: "They slept in a _______.", options: ["Hotel", "Cave", "Tent", "Car"], correctAnswer: 2, explanation: "They set up their tent." }
        ]
    },
    {
        id: "int-6",
        title: "Thomas Edison's Persistence",
        category: "Intermediate",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
        excerpt: "The story of how 1,000 failures led to the invention of the light bulb.",
        content: `Thomas Edison is famous for inventing the electric light bulb. However, he failed thousands of times before he succeeded. When asked about his failures, Edison said, \"I didn't fail 1,000 times. The light bulb was an invention with 1,000 steps.\" This story teaches us that what we often see as 'failure' is actually just a part of the learning process. Edison believed that genius is 99% hard work.`,
        questions: [
            { question: "What did Edison invent?", options: ["Phone", "Plane", "Light bulb", "Car"], correctAnswer: 2, explanation: "He invented the electric light bulb." },
            { question: "How many times did he fail?", options: ["Once", "Ten", "Thousands", "Zero"], correctAnswer: 2, explanation: "He failed thousands of times." },
            { question: "Genius is 99% _______.", options: ["Luck", "Talent", "Hard work", "Money"], correctAnswer: 2, explanation: "He credited 99% to 'perspiration' or hard work." },
            { question: "He saw failures as 'steps'. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "He called them'steps in invention'." },
            { question: "Edison never gave up. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "His persistence led to success." }
        ]
    },
    {
        id: "int-7",
        title: "The Golden Opportunity",
        category: "Intermediate",
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
        excerpt: "Maya wins a business grant in Silverlake through hard work.",
        content: `In Silverlake, Maya dreamed of opening her own café. She spent every morning studying business and every evening baking treats. When a $10,000 grant was announced, she worked day and night on her proposal. She focused on using local ingredients and creating a warm community space. Maya won the prize and realized that success comes to those who prepare well.`,
        questions: [
            { question: "What was Maya's dream?", options: ["Travel", "Cafe", "Teaching", "Painting"], correctAnswer: 1, explanation: "She wanted to open her own café." },
            { question: "How much was the grant?", options: ["$1,000", "$5,000", "$10,000", "$50,000"], correctAnswer: 2, explanation: "It was a $10,000 grant." },
            { question: "What ingredients did she use?", options: ["Imported", "Local", "Frozen", "Dry"], correctAnswer: 1, explanation: "She focused on local ingredients." },
            { question: "What was the town name?", options: ["Goldlake", "Silverlake", "Riverlake", "Greenlake"], correctAnswer: 1, explanation: "The town was Silverlake." },
            { question: "Success comes to those who _______.", options: ["Sleep", "Prepare", "Complain", "Wait"], correctAnswer: 1, explanation: "Preparation was the key." }
        ]
    },
    {
        id: "int-8",
        title: "The Mystery of Stonehenge",
        category: "Intermediate",
        image: "https://images.unsplash.com/photo-1503718117266-418721cca683?auto=format&fit=crop&q=80&w=800",
        excerpt: "Explore one of the world's most mysterious historical wonders in England.",
        content: `Stonehenge is a massive stone circle in England. It was built over 4,000 years ago, but nobody knows exactly how or why. The stones are very heavy, and some came from hundreds of miles away. Some scientists think it was a giant calendar to track the sun. Others believe it was a place for healing. Today, thousands of tourists visit Stonehenge to see these giant rocks and wonder about the ancient people who moved them.`,
        questions: [
            { question: "Where is Stonehenge located?", options: ["France", "USA", "England", "India"], correctAnswer: 2, explanation: "It is located in England." },
            { question: "How old is it?", options: ["100 years", "500 years", "1,000 years", "4,000 years"], correctAnswer: 3, explanation: "It was built over 4,000 years ago." },
            { question: "What do some people think it was?", options: ["A castle", "A calendar", "A library", "A bridge"], correctAnswer: 1, explanation: "Some think it was a giant calendar." },
            { question: "The stones are very light. (True/False)", options: ["True", "False"], correctAnswer: 1, explanation: "False, the stones are very heavy." },
            { question: "People travel there as _______.", options: ["Soldiers", "Tourists", "Kings", "Farmers"], correctAnswer: 1, explanation: "Many tourists visit it today." }
        ]
    },

    // ==========================================
    // ADVANCED CATEGORY (9 Stories)
    // ==========================================
    {
        id: "adv-1",
        title: "Artificial Intelligence: The Silicon Brain",
        category: "Advanced",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        excerpt: "An in-depth look at how AI mimics human intelligence and its future potential.",
        content: `Artificial Intelligence (AI) has progressed from a science fiction concept to a transformative reality. At its core, modern AI relies on 'Machine Learning,' where systems learn from vast amounts of data. Within this field, Deep Learning uses multi-layered 'neural networks' inspired by the human brain to recognize complex patterns. Today, AI is used in everything from diagnosing diseases to creating autonomous vehicles. However, the rise of AI also brings significant ethical questions about bias and regulation.`,
        questions: [
            { question: "What technology allows AI to learn?", options: ["Manual coding", "Machine Learning", "Steam power", "Radio"], correctAnswer: 1, explanation: "AI relies on Machine Learning." },
            { question: "Neural networks are inspired by the _______.", options: ["Heart", "Brain", "Stars", "Engines"], correctAnswer: 1, explanation: "They are inspired by the human brain." },
            { question: "What is a major concern with AI?", options: ["Color", "Bias", "Noise", "Speed"], correctAnswer: 1, explanation: "Ethical questions about bias are critical." },
            { question: "Deep Learning is a subset of ML. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "It is a specific type of machine learning." },
            { question: "AI is used in autonomous vehicles. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "Self-driving cars are a key AI application." }
        ]
    },
    {
        id: "adv-2",
        title: "Shivaji Maharaj: The Visionary King",
        category: "Advanced",
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=800",
        excerpt: "A deep dive into the administrative and military genius of the founder of the Maratha Empire.",
        content: `Chhatrapati Shivaji Maharaj was a 17th-century Indian warrior-king and the founder of the Maratha Empire. Shivaji was a pioneer in using 'guerrilla warfare,' where his small army used the Sahyadri mountains to defeat larger forces. He was also known as the 'Father of the Indian Navy' because he built a strong naval force. Beyond war, Shivaji implemented a fair tax system and respected women's rights and personal freedom.`,
        questions: [
            { question: "What strategy did Shivaji master?", options: ["Trench", "Guerrilla", "Aerial", "Naval"], correctAnswer: 1, explanation: "He was a pioneer in guerrilla warfare." },
            { question: "What is he called in relation to the Navy?", options: ["Captain", "Admiral", "Father", "King"], correctAnswer: 2, explanation: "He is known as the Father of the Indian Navy." },
            { question: "Which mountain range did he use?", options: ["Himalayas", "Sahyadri", "Alps", "Rockies"], correctAnswer: 1, explanation: "He used the Sahyadri mountains." },
            { question: "His administration was known for being fair. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "He implemented a fair tax system." },
            { question: "He founded the Mughal Empire. (True/False)", options: ["True", "False"], correctAnswer: 1, explanation: "He founded the Maratha Empire." }
        ]
    },
    {
        id: "adv-3",
        title: "The Global Village & Globalization",
        category: "Advanced",
        image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=800",
        excerpt: "An analysis of globalization and how it impacts culture and economics.",
        content: `In the 21st century, the world is often described as a 'Global Village.' Globalization is the process by which businesses and cultures develop international influence. Driven by digital communication, it has allowed for the flow of capital but also increased the gap between rich and poor. Culturally, it has led to 'homogenization,' where global brands can overshadow local traditions. Understanding these forces is essential for being a global citizen.`,
        questions: [
            { question: "What drives globalization?", options: ["Laws", "Communication/Transport", "Isolation", "War"], correctAnswer: 1, explanation: "Digital communication and transport are drivers." },
            { question: "What is 'homogenization'?", options: ["Variety", "Diversity", "Becoming same", "Closing borders"], correctAnswer: 2, explanation: "It refers to things becoming uniform worldwide." },
            { question: "Globalization only involves money. (True/False)", options: ["True", "False"], correctAnswer: 1, explanation: "It is economic, social, and cultural." },
            { question: "The world is called a Global _______.", options: ["Ocean", "Village", "Forest", "Island"], correctAnswer: 1, explanation: "It refers to our interconnection." },
            { question: "It has decreased the rich-poor gap. (True/False)", options: ["True", "False"], correctAnswer: 1, explanation: "It has often increased the gap." }
        ]
    },
    {
        id: "adv-4",
        title: "The Ethics of AI & Algorithms",
        category: "Advanced",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        excerpt: "Exploring bias, accountability, and the future of machine learning.",
        content: `As AI permeates life, 'algorithmic bias' becomes a critical issue. AI systems can inherit the prejudices of the humans who programmed them. This can lead to discrimination in hiring and policing. Another concern is accountability: if a self-driving car crashes, who is responsible? The goal of 'Interpretable AI' is to create systems whose decisions can be explained. We must ensure machines align with human values.`,
        questions: [
            { question: "What is algorithmic bias?", options: ["Software bug", "Inherited prejudice", "Speed", "Power"], correctAnswer: 1, explanation: "It refers to AI inheriting human prejudices." },
            { question: "Interpretable AI aims to _______ decisions.", options: ["Hide", "Explain", "Ignore", "Cancel"], correctAnswer: 1, explanation: "It aims to make AI logic understandable." },
            { question: "Accountability in AI is simple. (True/False)", options: ["True", "False"], correctAnswer: 1, explanation: "It is a complex and debated topic." },
            { question: "AI can lead to discrimination. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "Bias can cause unfair hiring or policing." },
            { question: "Machines must align with _______ values.", options: ["Robot", "Human", "Fast", "None"], correctAnswer: 1, explanation: "They must align with human ethics." }
        ]
    },
    {
        id: "adv-5",
        title: "Smart Cities of 2050",
        category: "Advanced",
        image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=800",
        excerpt: "Urbanization, sustainability, and the rise of smart city technology.",
        content: `By 2050, 70% of the world will live in urban areas. 'Smart Cities' use sensors and data to manage traffic, waste, and energy. 'Sustainability' is driving urban design toward biophilic elements like vertical gardens. However, critics argue that constant monitoring raises privacy concerns. Balancing efficiency, privacy, and green spaces is the ultimate challenge for future urban planners.`,
        questions: [
            { question: "What % will live in cities by 2050?", options: ["50", "60", "70", "80"], correctAnswer: 2, explanation: "The estimate is 70%." },
            { question: "Smart cities use _______ to manage resources.", options: ["Magic", "Data/Sensors", "More cars", "Old maps"], correctAnswer: 1, explanation: "They use data and analytics." },
            { question: "Vertical gardens are _______ design.", options: ["Biophilic", "Industrial", "Waste", "Dead"], correctAnswer: 0, explanation: "It's nature-integrated design." },
            { question: "Monitoring raises _______ concerns.", options: ["Traffic", "Privacy", "Trees", "Economy"], correctAnswer: 1, explanation: "Constant tracking affects privacy." },
            { question: "Urban populations are shrinking. (True/False)", options: ["True", "False"], correctAnswer: 1, explanation: "Massive urbanization is occurring." }
        ]
    },
    {
        id: "adv-6",
        title: "The Psychology of Resilience",
        category: "Advanced",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
        excerpt: "A motivational analysis of how humans overcome extreme adversity.",
        content: `Resilience is the psychological capacity to recover from difficulties. It is not a fixed trait but involves behaviors anyone can learn. One key factor is 'cognitive reframing'—seeing negative situations as challenges rather than threats. Resilient individuals have strong social networks and a sense of purpose. Developing resilience is like building a muscle; it requires effort and time.`,
        questions: [
            { question: "What is Resilience?", options: ["Muscle", "Luck", "Toughness/Recovery", "Fear"], correctAnswer: 2, explanation: "It is the capacity to recover from difficulty." },
            { question: "What is 'cognitive reframing'?", options: ["Ignore", "View as challenge", "Run away", "Sleep"], correctAnswer: 1, explanation: "It's about changing your perspective on threats." },
            { question: "You are born with a fixed amount of it. (True/False)", options: ["True", "False"], correctAnswer: 1, explanation: "It can be learned and developed." },
            { question: "Strong social networks help. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "Social support is a key pillar." },
            { question: "It is like building a _______.", options: ["House", "Computer", "Muscle", "Car"], correctAnswer: 2, explanation: "It requires time and effort." }
        ]
    },
    {
        id: "adv-7",
        title: "Climate Change & Policy",
        category: "Advanced",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
        excerpt: "Analyzing the complex science and global policy behind our warming planet.",
        content: `Climate change is caused by increased Greenhouse Gases like carbon dioxide. The consequences include melting ice caps and rising sea levels. The Paris Agreement aims to limit warming to below 2 degrees Celsius. Transitioning to renewable energy like solar and wind is critical. Individual action must be paired with wide-scale systemic change to ensure a livable future for all.`,
        questions: [
            { question: "What causes climate change?", options: ["Moon", "GHG increase", "Ocean", "Stars"], correctAnswer: 1, explanation: "Greenhouse gases trap heat." },
            { question: "What is a major consequence?", options: ["More ice", "Sea level rise", "Cleaner air", "Cold"], correctAnswer: 1, explanation: "Melting ice and rising seas are major effects." },
            { question: "The Paris Agreement target is _______ degrees.", options: ["1", "2", "5", "10"], correctAnswer: 1, explanation: "The target is below 2 degrees." },
            { question: "Solar and wind are _______ energy.", options: ["Fossil", "Renewable", "Nuclear", "Broken"], correctAnswer: 1, explanation: "They are clean, renewable sources." },
            { question: "Individual action is enough. (True/False)", options: ["True", "False"], correctAnswer: 1, explanation: "Systemic change is also required." }
        ]
    },
    {
        id: "adv-8",
        title: "Neuroplasticity: The Adaptable Brain",
        category: "Advanced",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
        excerpt: "Understand how your brain physically changes as you learn new skills.",
        content: `Neuroplasticity is the brain's ability to reorganize itself by forming new neural connections throughout life. This means that our brains aren't 'hard-wired' at birth. Instead, they are highly adaptable. When you learn a new language or musical instrument, your brain creates new pathways. This discovery has changed how we treat brain injuries and has provided hope that we can keep our minds sharp even in old age.`,
        questions: [
            { question: "What is neuroplasticity?", options: ["Brain surgery", "Brain's ability to change", "A type of headache", "Memory loss"], correctAnswer: 1, explanation: "It is the brain's ability to reorganize itself." },
            { question: "Are brains 'hard-wired' at birth?", options: ["Yes", "No"], correctAnswer: 1, explanation: "No, they are highly adaptable." },
            { question: "How does the brain change during learning?", options: ["It gets smaller", "It forms new neural connections", "It stops working", "It becomes harder"], correctAnswer: 1, explanation: "It forms new pathways and connections." },
            { question: "It only happens in children. (True/False)", options: ["True", "False"], correctAnswer: 1, explanation: "False, it happens throughout life." },
            { question: "Learning a language helps the brain. (True/False)", options: ["True", "False"], correctAnswer: 0, explanation: "Yes, learning skills creates new pathways." }
        ]
    },
    {
        id: "adv-9",
        title: "Cybersecurity in the Modern World",
        category: "Advanced",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        excerpt: "An analysis of digital threats, encryption, and data privacy in the 21st century.",
        content: `As our lives move online, cybersecurity has become a global priority. From personal data theft to attacks on national infrastructure, digital threats are evolving. 'Encryption' is the primary defense, turning readable data into code that only authorized parties can decipher. However, as quantum computing advances, current encryption methods may become obsolete. Experts argue that a 'zero-trust' model, where no device or user is trusted by default, is the future of digital safety.`,
        questions: [
            { question: "What is the primary defense in cybersecurity?", options: ["Antivirus", "Encryption", "Passwords", "Firewalls"], correctAnswer: 1, explanation: "Encryption is the primary defense." },
            { question: "What is 'Encryption'?", options: ["Deleting data", "Turning data into code", "Storing data on cloud", "Copying data"], correctAnswer: 1, explanation: "It turns readable data into secret code." },
            { question: "What technology might make encryption obsolete?", options: ["Smartphones", "Quantum computing", "5G", "Blockchain"], correctAnswer: 1, explanation: "Quantum computing could break current codes." },
            { question: "What is the 'zero-trust' model?", options: ["Trust everyone", "Trust only family", "No user is trusted by default", "Delete all data"], correctAnswer: 2, explanation: "It means no user or device is trusted automatically." },
            { question: "Digital threats are decreasing. (True/False)", options: ["True", "False"], correctAnswer: 1, explanation: "False, threats are evolving and increasing." }
        ]
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = READING_DATABASE;
}
