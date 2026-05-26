const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dns = require('dns');
const gTTS = require('gtts');
const path = require('path');
const fs = require('fs');

// Set DNS servers
dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();

const ListeningQuestion = require('./models/ListeningQuestion');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

const stories = [
    // Easy Stories
    {
        level: 'easy',
        text: "Tom woke up early on Monday morning. He ate two eggs for breakfast and drank cold milk. He wore his blue jacket and walked miles to reach the train station. The train was very late today.",
        questions: [
            { q: "Who woke up early?", a: "Tom" },
            { q: "What day was it?", a: "Monday" },
            { q: "How many eggs did he eat?", a: "Two" },
            { q: "What did he drink?", a: "Cold milk" },
            { q: "Which meal was he having?", a: "Breakfast" },
            { q: "What color was his jacket?", a: "Blue" },
            { q: "How did he travel to the station?", a: "He walked" },
            { q: "Where was he going?", a: "Train station" },
            { q: "How long was the walk?", a: "Miles" },
            { q: "What was the status of the train?", a: "Very late" }
        ]
    },
    {
        level: 'easy',
        text: "Jenny planted a small sunflower seed in her backyard. She watered it every evening with a green hose. After three weeks, a beautiful yellow flower bloomed brightly under the warm summer sun.",
        questions: [
            { q: "Who planted the seed?", a: "Jenny" },
            { q: "What kind of seed was planted?", a: "Sunflower" },
            { q: "Where was it planted?", a: "Backyard" },
            { q: "When did she water it?", a: "Every evening" },
            { q: "What did she use to water it?", a: "A green hose" },
            { q: "How long did it take to bloom?", a: "Three weeks" },
            { q: "What color was the flower?", a: "Yellow" },
            { q: "How did it bloom?", a: "Brightly" },
            { q: "What season is mentioned?", a: "Summer" },
            { q: "What is mentioned about the sun?", a: "It was warm" }
        ]
    },
    {
        level: 'easy',
        text: "Sam decided to bake a chocolate cake for his sister's birthday. He bought flour, sugar, and dark chocolate from the market. The cake baked in the oven for forty minutes and smelled delicious.",
        questions: [
            { q: "Who decided to bake?", a: "Sam" },
            { q: "What kind of cake did he bake?", a: "Chocolate cake" },
            { q: "Whose birthday was it?", a: "His sister's" },
            { q: "What was the first ingredient he bought?", a: "Flour" },
            { q: "What sweet ingredient did he buy?", a: "Sugar" },
            { q: "What type of chocolate did he use?", a: "Dark chocolate" },
            { q: "Where did he buy the ingredients?", a: "The market" },
            { q: "Where did the cake bake?", a: "In the oven" },
            { q: "How long did it bake?", a: "Forty minutes" },
            { q: "How did it smell?", a: "Delicious" }
        ]
    },
    {
        level: 'easy',
        text: "Emma visited the city zoo on a windy Tuesday. She saw tall giraffes eating green leaves from the highest branches. Later, she ate a quickly prepared sandwich while watching the funny monkeys play.",
        questions: [
            { q: "Who visited the zoo?", a: "Emma" },
            { q: "How was the weather?", a: "Windy" },
            { q: "What day was it?", a: "Tuesday" },
            { q: "Which animal did she see first?", a: "Giraffes" },
            { q: "How are the giraffes described?", a: "Tall" },
            { q: "What were they eating?", a: "Green leaves" },
            { q: "Where were the leaves located?", a: "The highest branches" },
            { q: "What did Emma eat?", a: "A sandwich" },
            { q: "How was her food prepared?", a: "Quickly" },
            { q: "Which animals were playing?", a: "Monkeys" }
        ]
    },
    {
        level: 'easy',
        text: "Paul loves playing football in the local park with his friends. They play every Saturday afternoon until the streetlights turn on. Last week, Paul scored three goals and his team won the match easily.",
        questions: [
            { q: "Who loves playing sports?", a: "Paul" },
            { q: "What sport does he play?", a: "Football" },
            { q: "Where do they play?", a: "The local park" },
            { q: "Who does he play with?", a: "His friends" },
            { q: "What day do they play?", a: "Saturday" },
            { q: "What time of day do they play?", a: "Afternoon" },
            { q: "When do they stop playing?", a: "When streetlights turn on" },
            { q: "When did the last match happen?", a: "Last week" },
            { q: "How many goals did Paul score?", a: "Three goals" },
            { q: "How did his team win?", a: "Easily" }
        ]
    },

    // Medium Stories
    {
        level: 'medium',
        text: "The old library on Main Street closed its doors yesterday. It held over five thousand rare books. A modern digital center will replace it next year, but many locals feel sad about losing the books.",
        questions: [
            { q: "What building closed its doors?", a: "A library" },
            { q: "Where was the library located?", a: "Main Street" },
            { q: "When did it close?", a: "Yesterday" },
            { q: "How many rare books did it hold?", a: "Five thousand" },
            { q: "What kind of books were mentioned?", a: "Rare books" },
            { q: "What will replace the old library?", a: "A digital center" },
            { q: "When will the replacement happen?", a: "Next year" },
            { q: "How do many locals feel?", a: "Sad" },
            { q: "What are they specifically sad about?", a: "Losing the books" },
            { q: "What word describes the new center?", a: "Modern" }
        ]
    },
    {
        level: 'medium',
        text: "Captain Smith sailed his wooden ship across the Atlantic ocean. The journey took forty days through heavy storms and strong winds. They finally discovered a hidden island filled with fresh fruit.",
        questions: [
            { q: "Who sailed the ship?", a: "Captain Smith" },
            { q: "What material was the ship made of?", a: "Wooden" },
            { q: "Which ocean did they cross?", a: "Atlantic" },
            { q: "How long did the journey take?", a: "Forty days" },
            { q: "What kind of weather did they face?", a: "Heavy storms" },
            { q: "What type of winds were mentioned?", a: "Strong" },
            { q: "What did they discover?", a: "A hidden island" },
            { q: "When did they discover it?", a: "Finally" },
            { q: "What filled the discovered place?", a: "Fresh fruit" },
            { q: "What verb describes what they did to the island?", a: "Discovered" }
        ]
    },
    {
        level: 'medium',
        text: "The city council announced a massive upgrade to the public bus system. They will introduce fifty new electric buses next spring to reduce pollution. Citizens are happy because ticket prices will remain unchanged.",
        questions: [
            { q: "Who announced the upgrade?", a: "The city council" },
            { q: "What system is being upgraded?", a: "Public bus system" },
            { q: "How would you describe the upgrade?", a: "Massive" },
            { q: "How many vehicles are being introduced?", a: "Fifty" },
            { q: "What type of vehicles are they?", a: "Electric buses" },
            { q: "When will they be introduced?", a: "Next spring" },
            { q: "What is the primary goal?", a: "To reduce pollution" },
            { q: "Who is happy about this?", a: "Citizens" },
            { q: "What will happen to ticket prices?", a: "Remain unchanged" },
            { q: "Are the prices going to increase?", a: "No" }
        ]
    },
    {
        level: 'medium',
        text: "The annual local food festival attracted thousands of hungry visitors this weekend. Chefs from twenty different countries prepared authentic international dishes. The spicy Mexican tacos were definitely the crowd favorite this year.",
        questions: [
            { q: "What event took place?", a: "Local food festival" },
            { q: "How often does it happen?", a: "Annual" },
            { q: "How many visitors attended?", a: "Thousands" },
            { q: "When did this happen?", a: "This weekend" },
            { q: "Who prepared the food?", a: "Chefs" },
            { q: "How many countries were represented?", a: "Twenty" },
            { q: "What type of dishes were prepared?", a: "Authentic international dishes" },
            { q: "Which specific dish was mentioned?", a: "Mexican tacos" },
            { q: "How were the tacos described?", a: "Spicy" },
            { q: "What was the overall reception of the tacos?", a: "Crowd favorite" }
        ]
    },
    {
        level: 'medium',
        text: "The science museum opened a breathtaking new space exhibit yesterday evening. Visitors can touch a real meteorite and use interactive screens to explore the galaxy. The exhibit will stay open throughout the winter months.",
        questions: [
            { q: "What type of museum is it?", a: "Science museum" },
            { q: "What new attraction opened?", a: "Space exhibit" },
            { q: "How was the attraction described?", a: "Breathtaking" },
            { q: "When did it open?", a: "Yesterday evening" },
            { q: "What can visitors touch?", a: "A real meteorite" },
            { q: "What kind of screens are available?", a: "Interactive screens" },
            { q: "What can visitors explore using the screens?", a: "The galaxy" },
            { q: "How long will the exhibit remain open?", a: "Throughout the winter" },
            { q: "Is the meteorite fake?", a: "No, it is real" },
            { q: "What season is explicitly mentioned?", a: "Winter" }
        ]
    },

    // Advanced Stories
    {
        level: 'advanced',
        text: "Quantum computing remains a complex but fascinating technological frontier. Engineers construct highly sensitive circuits cooled to extreme temperatures. These systems execute calculations instantly.",
        questions: [
            { q: "What topic is being discussed?", a: "Quantum computing" },
            { q: "How is it described?", a: "Complex but fascinating" },
            { q: "What kind of frontier is it?", a: "Technological" },
            { q: "Who constructs these systems?", a: "Engineers" },
            { q: "What do the builders construct?", a: "Circuits" },
            { q: "How sensitive are the components?", a: "Highly" },
            { q: "What must happen to the components?", a: "Cooled" },
            { q: "To what level are they cooled?", a: "Extreme temperatures" },
            { q: "What do these systems execute?", a: "Calculations" },
            { q: "How fast are the actions executed?", a: "Instantly" }
        ]
    },
    {
        level: 'advanced',
        text: "The intricate nuances of global economic policies often remain obscured from deep public scrutiny. Experts constantly debate the unpredictable inflation rates while governments attempt market stability.",
        questions: [
            { q: "What kind of features do the policies have?", a: "Intricate nuances" },
            { q: "What scale of policies are mentioned?", a: "Global" },
            { q: "What sector do these policies affect?", a: "Economic" },
            { q: "What happens to these intricacies?", a: "Remain obscured" },
            { q: "What do they remain hidden from?", a: "Deep public scrutiny" },
            { q: "Who constantly debates?", a: "Experts" },
            { q: "What is deemed unpredictable?", a: "Inflation rates" },
            { q: "What do governments attempt?", a: "Market stability" },
            { q: "What verb describes the expert activity?", a: "Debate" },
            { q: "How often do they debate?", a: "Constantly" }
        ]
    },
    {
        level: 'advanced',
        text: "Neurological research indicates that the adult human brain maintains astonishing neuroplasticity throughout life. This flexibility allows individuals to continuously forge novel synaptic connections, facilitating lifelong cognitive adaptability.",
        questions: [
            { q: "What field of research is discussed?", a: "Neurological research" },
            { q: "What organ is the focus of the study?", a: "The adult human brain" },
            { q: "What incredible property does the brain maintain?", a: "Neuroplasticity" },
            { q: "How is this property described?", a: "Astonishing" },
            { q: "How long does this property last?", a: "Throughout life" },
            { q: "What does this flexibility allow?", a: "Forging novel synaptic connections" },
            { q: "How often can connections be forged?", a: "Continuously" },
            { q: "What type of connections are forged?", a: "Synaptic connections" },
            { q: "What does this forgery facilitate?", a: "Lifelong cognitive adaptability" },
            { q: "Are synaptic connections described as old or new?", a: "Novel" }
        ]
    },
    {
        level: 'advanced',
        text: "Integrating renewable energy into an obsolete national grid presents monumental infrastructural challenges. Technicians must seamlessly balance erratic solar integration against consistent baseload power demands without triggering catastrophic blackouts.",
        questions: [
            { q: "What integrates into the grid?", a: "Renewable energy" },
            { q: "How is the national grid described?", a: "Obsolete" },
            { q: "What kind of challenges does this present?", a: "Monumental infrastructural challenges" },
            { q: "Who is responsible for managing this?", a: "Technicians" },
            { q: "What must they balance?", a: "Erratic solar integration" },
            { q: "What is solar integration balanced against?", a: "Consistent baseload power demands" },
            { q: "How must this balance be achieved?", a: "Seamlessly" },
            { q: "What negative outcome must be avoided?", a: "Triggering catastrophic blackouts" },
            { q: "How are the blackouts described?", a: "Catastrophic" },
            { q: "Is solar energy described as predictable or erratic?", a: "Erratic" }
        ]
    },
    {
        level: 'advanced',
        text: "Deep sea expeditions recently uncovered prehistoric bioluminescent organisms residing near thermal vents. These extraordinary lifeforms survive extreme hydrostatic pressure by synthesizing chemicals entirely devoid of any solar radiation.",
        questions: [
            { q: "What type of expeditions are mentioned?", a: "Deep sea expeditions" },
            { q: "What did they uncover?", a: "Bioluminescent organisms" },
            { q: "How old are these organisms believed to be?", a: "Prehistoric" },
            { q: "Where do they reside?", a: "Near thermal vents" },
            { q: "How are these lifeforms described?", a: "Extraordinary" },
            { q: "What extreme condition do they survive?", a: "Extreme hydrostatic pressure" },
            { q: "How do they survive?", a: "By synthesizing chemicals" },
            { q: "What exactly are they devoid of?", a: "Solar radiation" },
            { q: "Do they use any sunlight at all?", a: "Entirely devoid" },
            { q: "When were they uncovered?", a: "Recently" }
        ]
    }
];

const listeningQuestions = [];

async function generateAudioAndSeed() {
    try {
        await ListeningQuestion.deleteMany({});
        console.log('Cleared DB.');

        for (let i = 0; i < stories.length; i++) {
            const story = stories[i];
            const audioFileName = `story_gen_${i + 1}.mp3`;
            const audioFilePath = path.join(__dirname, '../assets/audio', audioFileName);
            const relativeAudioUrl = `assets/audio/${audioFileName}`;

            // Create Audio File
            const gtts = new gTTS(story.text, 'en');
            await new Promise((resolve, reject) => {
                gtts.save(audioFilePath, function (err, result) {
                    if (err) return reject(err);
                    console.log(`Generated audio: ${audioFileName}`);
                    resolve();
                });
            });

            // 1. Short Answer Version (Replaces MCQ but features 3 dynamic radio options)
            listeningQuestions.push({
                level: story.level,
                type: 'short_answer',
                audioUrl: relativeAudioUrl,
                transcript: story.text,
                questions: story.questions.map((q, idx) => {
                    const allAnswers = story.questions.map(x => x.a);
                    let wrongOptions = allAnswers.filter((a, i) => i !== idx);
                    // Shuffle and pick 2 completely random wrong answers from the same story context
                    wrongOptions = wrongOptions.sort(() => 0.5 - Math.random()).slice(0, 2);

                    // Final 3 options array shuffled
                    let options = [q.a, ...wrongOptions].sort(() => 0.5 - Math.random());

                    return {
                        questionText: q.q,
                        options: options,
                        correctAnswer: q.a,
                        explanation: `The audio directly states info aligning with '${q.a}'.`
                    };
                }),
                difficultWords: []
            });

            // 2. Dictation Version
            listeningQuestions.push({
                level: story.level,
                type: 'dictation',
                audioUrl: relativeAudioUrl,
                transcript: story.text,
                difficultWords: []
            });
        }

        await ListeningQuestion.insertMany(listeningQuestions);
        console.log(`Seeded fully! Total items mapped to audio: ${listeningQuestions.length}`);
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

generateAudioAndSeed();
