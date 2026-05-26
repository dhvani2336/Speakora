const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dns = require("dns");

// Set DNS servers to bypass local network issues with MongoDB SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config();

const VocabWord = require('./models/VocabWord');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const words = [
    // Easy Level (50 words)
    { word: "happy", meaning: "Feeling or showing pleasure or contentment", hint: "Opposite of sad", level: "easy" },
    { word: "book", meaning: "A written or printed work consisting of pages glued or sewn together", hint: "You read this", level: "easy" },
    { word: "water", meaning: "A transparent, tasteless, odorless, and nearly colorless chemical substance", hint: "You drink this", level: "easy" },
    { word: "house", meaning: "A building for human habitation", hint: "A place where you live", level: "easy" },
    { word: "dog", meaning: "A domesticated carnivorous mammal that typically has a long snout", hint: "Man's best friend", level: "easy" },
    { word: "cat", meaning: "A small domesticated carnivorous mammal with soft fur", hint: "It meows", level: "easy" },
    { word: "sun", meaning: "The star around which the earth orbits", hint: "It gives light and heat during the day", level: "easy" },
    { word: "moon", meaning: "The natural satellite of the earth", hint: "You see it at night", level: "easy" },
    { word: "tree", meaning: "A woody perennial plant, typically having a single stem or trunk", hint: "It has leaves and branches", level: "easy" },
    { word: "food", meaning: "Any nutritious substance that people or animals eat or drink", hint: "You eat this when you are hungry", level: "easy" },
    { word: "car", meaning: "A four-wheeled road vehicle", hint: "You drive it on the road", level: "easy" },
    { word: "friend", meaning: "A person whom one knows and with whom one has a bond of mutual affection", hint: "Someone you like spending time with", level: "easy" },
    { word: "school", meaning: "An institution for educating children", hint: "Where you go to learn", level: "easy" },
    { word: "teacher", meaning: "A person who teaches, especially in a school", hint: "They help you learn", level: "easy" },
    { word: "student", meaning: "A person who is studying at a school or college", hint: "You are one of these if you are learning", level: "easy" },
    { word: "game", meaning: "A form of play or sport, especially a competitive one", hint: "You play this for fun", level: "easy" },
    { word: "music", meaning: "Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form", hint: "You listen to this", level: "easy" },
    { word: "movie", meaning: "A story or event recorded by a camera as a set of moving images", hint: "You watch this at a theater", level: "easy" },
    { word: "color", meaning: "The property possessed by an object of producing different sensations on the eye", hint: "Red, blue, green are examples of this", level: "easy" },
    { word: "number", meaning: "An arithmetical value, expressed by a word, symbol, or figure", hint: "1, 2, 3 are examples of this", level: "easy" },
    { word: "day", meaning: "A period of twenty-four hours", hint: "There are 7 of these in a week", level: "easy" },
    { word: "night", meaning: "The period of darkness in each twenty-four hours", hint: "When it is dark outside", level: "easy" },
    { word: "time", meaning: "The indefinite continued progress of existence and events in the past, present, and future", hint: "Measured in hours, minutes, seconds", level: "easy" },
    { word: "family", meaning: "A group of one or more parents and their children living together", hint: "Your parents and siblings", level: "easy" },
    { word: "boy", meaning: "A male child or young man", hint: "A young male", level: "easy" },
    { word: "girl", meaning: "A female child or young woman", hint: "A young female", level: "easy" },
    { word: "name", meaning: "A word or set of words by which a person, animal, place, or thing is known", hint: "What people call you", level: "easy" },
    { word: "city", meaning: "A large town", hint: "A big populated area", level: "easy" },
    { word: "animal", meaning: "A living organism that feeds on organic matter", hint: "Dogs, cats, lions are examples", level: "easy" },
    { word: "plant", meaning: "A living organism of the kind exemplified by trees, shrubs, herbs", hint: "Trees, flowers, grass are examples", level: "easy" },
    { word: "work", meaning: "Activity involving mental or physical effort done in order to achieve a purpose or result", hint: "What you do at a job", level: "easy" },
    { word: "play", meaning: "Engage in activity for enjoyment and recreation rather than a serious or practical purpose", hint: "What kids do for fun", level: "easy" },
    { word: "read", meaning: "Look at and comprehend the meaning of (written or printed matter)", hint: "You do this to a book", level: "easy" },
    { word: "write", meaning: "Mark (letters, words, or other symbols) on a surface, typically paper, with a pen, pencil", hint: "You do this with a pen", level: "easy" },
    { word: "speak", meaning: "Say something in order to convey information, an opinion, or a feeling", hint: "You do this with your mouth", level: "easy" },
    { word: "listen", meaning: "Give one's attention to a sound", hint: "You do this with your ears", level: "easy" },
    { word: "see", meaning: "Perceive with the eyes; discern visually", hint: "You do this with your eyes", level: "easy" },
    { word: "hear", meaning: "Perceive with the ear the sound made by (someone or something)", hint: "You do this with your ears", level: "easy" },
    { word: "look", meaning: "Direct one's gaze toward someone or something or in a specified direction", hint: "You do this with your eyes", level: "easy" },
    { word: "feel", meaning: "Be aware of (a person or object) through touching or being touched", hint: "You do this with your hands or emotions", level: "easy" },
    { word: "good", meaning: "To be desired or approved of", hint: "Opposite of bad", level: "easy" },
    { word: "bad", meaning: "Of poor quality or a low standard", hint: "Opposite of good", level: "easy" },
    { word: "big", meaning: "Of considerable size, extent, or intensity", hint: "Opposite of small", level: "easy" },
    { word: "small", meaning: "Of a size that is less than normal or usual", hint: "Opposite of big", level: "easy" },
    { word: "hot", meaning: "Having a high degree of heat or a high temperature", hint: "Opposite of cold", level: "easy" },
    { word: "cold", meaning: "Of or at a low or relatively low temperature", hint: "Opposite of hot", level: "easy" },
    { word: "fast", meaning: "Moving or capable of moving at high speed", hint: "Opposite of slow", level: "easy" },
    { word: "slow", meaning: "Moving or operating, or designed to do so, only at a low speed", hint: "Opposite of fast", level: "easy" },
    { word: "old", meaning: "Having lived for a long time; no longer young", hint: "Opposite of young or new", level: "easy" },
    { word: "new", meaning: "Not existing before; made, introduced, or discovered recently", hint: "Opposite of old", level: "easy" },

    // Medium Level (50 words)
    { word: "beautiful", meaning: "Pleasing the senses or mind aesthetically", hint: "Very pretty", level: "medium" },
    { word: "difficult", meaning: "Needing much effort or skill to accomplish, deal with, or understand", hint: "Not easy", level: "medium" },
    { word: "important", meaning: "Of great significance or value", hint: "Something that matters a lot", level: "medium" },
    { word: "interesting", meaning: "Arousing curiosity or interest; holding or catching the attention", hint: "Not boring", level: "medium" },
    { word: "different", meaning: "Not the same as another or each other; unlike in nature, form, or quality", hint: "Not the same", level: "medium" },
    { word: "together", meaning: "With or in proximity to another person or people", hint: "Not alone", level: "medium" },
    { word: "always", meaning: "At all times; on all occasions", hint: "Not never", level: "medium" },
    { word: "never", meaning: "At no time in the past or future; on no occasion; not ever", hint: "Not always", level: "medium" },
    { word: "sometimes", meaning: "Occasionally, rather than all of the time", hint: "Not always, not never", level: "medium" },
    { word: "usually", meaning: "Under normal conditions; generally", hint: "Most of the time", level: "medium" },
    { word: "because", meaning: "For the reason that; since", hint: "Used to give a reason", level: "medium" },
    { word: "although", meaning: "In spite of the fact that; even though", hint: "Despite the fact", level: "medium" },
    { word: "however", meaning: "Used to introduce a statement that contrasts with or seems to contradict something that has been said previously", hint: "But, on the other hand", level: "medium" },
    { word: "therefore", meaning: "For that reason; consequently", hint: "As a result", level: "medium" },
    { word: "example", meaning: "A thing characteristic of its kind or illustrating a general rule", hint: "For instance", level: "medium" },
    { word: "experience", meaning: "Practical contact with and observation of facts or events", hint: "Something you have lived through", level: "medium" },
    { word: "knowledge", meaning: "Facts, information, and skills acquired by a person through experience or education", hint: "What you know", level: "medium" },
    { word: "information", meaning: "Facts provided or learned about something or someone", hint: "Data you receive", level: "medium" },
    { word: "education", meaning: "The process of receiving or giving systematic instruction, especially at a school or university", hint: "What you get from school", level: "medium" },
    { word: "government", meaning: "The governing body of a nation, state, or community", hint: "They make laws and rule", level: "medium" },
    { word: "company", meaning: "A commercial business", hint: "A business organization", level: "medium" },
    { word: "problem", meaning: "A matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome", hint: "An issue to be solved", level: "medium" },
    { word: "system", meaning: "A set of things working together as parts of a mechanism or an interconnecting network", hint: "An organized complex whole", level: "medium" },
    { word: "question", meaning: "A sentence worded or expressed so as to elicit information", hint: "What you ask", level: "medium" },
    { word: "answer", meaning: "A thing said, written, or done to deal with or as a reaction to a question, statement, or situation", hint: "What you reply with", level: "medium" },
    { word: "reason", meaning: "A cause, explanation, or justification for an action or event", hint: "Why something happened", level: "medium" },
    { word: "result", meaning: "A consequence, effect, or outcome of something", hint: "The outcome", level: "medium" },
    { word: "effect", meaning: "A change which is a result or consequence of an action or other cause", hint: "The consequence of an action", level: "medium" },
    { word: "decision", meaning: "A conclusion or resolution reached after consideration", hint: "A choice made", level: "medium" },
    { word: "development", meaning: "The process of developing or being developed", hint: "Growth or progress", level: "medium" },
    { word: "environment", meaning: "The surroundings or conditions in which a person, animal, or plant lives or operates", hint: "Nature and surroundings", level: "medium" },
    { word: "understand", meaning: "Perceive the intended meaning of (words, a language, or a speaker)", hint: "To comprehend", level: "medium" },
    { word: "remember", meaning: "Have in or be able to bring to one's mind an awareness of (someone or something that one has seen, known, or experienced in the past)", hint: "Not forget", level: "medium" },
    { word: "consider", meaning: "Think carefully about (something), typically before making a decision", hint: "Think about thoroughly", level: "medium" },
    { word: "explain", meaning: "Make (an idea, situation, or problem) clear to someone by describing it in more detail or revealing relevant facts or ideas", hint: "Make clear to others", level: "medium" },
    { word: "describe", meaning: "Give an account in words of (someone or something), including all the relevant characteristics, qualities, or events", hint: "Tell what something looks like", level: "medium" },
    { word: "suggest", meaning: "Put forward for consideration", hint: "Offer an idea", level: "medium" },
    { word: "provide", meaning: "Make available for use; supply", hint: "Give or supply", level: "medium" },
    { word: "require", meaning: "Need for a particular purpose", hint: "Need absolutely", level: "medium" },
    { word: "involve", meaning: "Have or include (something) as a necessary or integral part or result", hint: "Include as part", level: "medium" },
    { word: "include", meaning: "Comprise or contain as part of a whole", hint: "Contain within", level: "medium" },
    { word: "develop", meaning: "Grow or cause to grow and become more mature, advanced, or elaborate", hint: "Grow and progress", level: "medium" },
    { word: "create", meaning: "Bring (something) into existence", hint: "Make something new", level: "medium" },
    { word: "discover", meaning: "Find (something or someone) unexpectedly or in the course of a search", hint: "Find something unknown", level: "medium" },
    { word: "improve", meaning: "Make or become better", hint: "Make better", level: "medium" },
    { word: "increase", meaning: "Become or make greater in size, amount, intensity, or degree", hint: "Go up in number", level: "medium" },
    { word: "decrease", meaning: "Make or become smaller or fewer in size, amount, intensity, or degree", hint: "Go down in number", level: "medium" },
    { word: "continue", meaning: "Persist in an activity or process", hint: "Keep going", level: "medium" },
    { word: "happen", meaning: "Take place; occur", hint: "To occur", level: "medium" },
    { word: "believe", meaning: "Accept (something) as true; feel sure of the truth of", hint: "Think it is true", level: "medium" },

    // Advanced Level (50 words)
    { word: "aberration", meaning: "A departure from what is normal, usual, or expected, typically one that is unwelcome", hint: "An anomaly", level: "advanced" },
    { word: "capricious", meaning: "Given to sudden and unaccountable changes of mood or behavior", hint: "Unpredictable, fickle", level: "advanced" },
    { word: "ephemeral", meaning: "Lasting for a very short time", hint: "Fleeting, short-lived", level: "advanced" },
    { word: "fastidious", meaning: "Very attentive to and concerned about accuracy and detail", hint: "Meticulous, fussy", level: "advanced" },
    { word: "garrulous", meaning: "Excessively talkative, especially on trivial matters", hint: "Talkative, loquacious", level: "advanced" },
    { word: "harangue", meaning: "A lengthy and aggressive speech", hint: "A tirade or lecture", level: "advanced" },
    { word: "iconoclast", meaning: "A person who attacks cherished beliefs or institutions", hint: "A critic of conventions", level: "advanced" },
    { word: "juxtapose", meaning: "Place or deal with close together for contrasting effect", hint: "Place side by side", level: "advanced" },
    { word: "kaleidoscope", meaning: "A constantly changing pattern or sequence of elements", hint: "A complex, changing pattern", level: "advanced" },
    { word: "lackadaisical", meaning: "Lacking enthusiasm and determination; carelessly lazy", hint: "Lazy, indifferent", level: "advanced" },
    { word: "magnanimous", meaning: "Generous or forgiving, especially toward a rival or less powerful person", hint: "Generous and forgiving", level: "advanced" },
    { word: "nefarious", meaning: "(typically of an action or activity) wicked or criminal", hint: "Wicked or villainous", level: "advanced" },
    { word: "obfuscate", meaning: "Render obscure, unclear, or unintelligible", hint: "To confuse or blur", level: "advanced" },
    { word: "paradigm", meaning: "A typical example or pattern of something; a model", hint: "A standard model", level: "advanced" },
    { word: "quixotic", meaning: "Exceedingly idealistic; unrealistic and impractical", hint: "Idealistic but impractical", level: "advanced" },
    { word: "recalcitrant", meaning: "Having an obstinately uncooperative attitude toward authority or discipline", hint: "Stubbornly disobedient", level: "advanced" },
    { word: "sycophant", meaning: "A person who acts obsequiously toward someone important in order to gain advantage", hint: "A flatterer or yes-man", level: "advanced" },
    { word: "trepidation", meaning: "A feeling of fear or agitation about something that may happen", hint: "Fear or anxiety", level: "advanced" },
    { word: "ubiquitous", meaning: "Present, appearing, or found everywhere", hint: "Everywhere, omnipresent", level: "advanced" },
    { word: "vacillate", meaning: "Alternate or waver between different opinions or actions; be indecisive", hint: "To waver or be indecisive", level: "advanced" },
    { word: "winsome", meaning: "Attractive or appealing in appearance or character", hint: "Attractive in a sweet way", level: "advanced" },
    { word: "xenophobia", meaning: "Dislike of or prejudice against people from other countries", hint: "Fear of foreigners", level: "advanced" },
    { word: "zealous", meaning: "Having or showing zeal; passionate", hint: "Enthusiastic and passionate", level: "advanced" },
    { word: "alleviate", meaning: "Make (suffering, deficiency, or a problem) less severe", hint: "To ease or relieve", level: "advanced" },
    { word: "cacophony", meaning: "A harsh discordant mixture of sounds", hint: "A bad, loud noise", level: "advanced" },
    { word: "dichotomy", meaning: "A division or contrast between two things that are or are represented as being opposed or entirely different", hint: "A contrast between two things", level: "advanced" },
    { word: "enigma", meaning: "A person or thing that is mysterious, puzzling, or difficult to understand", hint: "A mystery or puzzle", level: "advanced" },
    { word: "facade", meaning: "An outward appearance that is maintained to conceal a less pleasant or creditable reality", hint: "A false front or appearance", level: "advanced" },
    { word: "gregarious", meaning: "(of a person) fond of company; sociable", hint: "Sociable and outgoing", level: "advanced" },
    { word: "hubris", meaning: "Excessive pride or self-confidence", hint: "Arrogance", level: "advanced" },
    { word: "idiosyncrasy", meaning: "A mode of behavior or way of thought peculiar to an individual", hint: "A peculiar habit", level: "advanced" },
    { word: "lethargic", meaning: "Affected by lethargy; sluggish and apathetic", hint: "Sluggish and lazy", level: "advanced" },
    { word: "meticulous", meaning: "Showing great attention to detail; very careful and precise", hint: "Extremely careful with details", level: "advanced" },
    { word: "nonchalant", meaning: "(of a person or manner) feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm", hint: "Coolly unconcerned", level: "advanced" },
    { word: "ostentatious", meaning: "Characterized by vulgar or pretentious display; designed to impress or attract notice", hint: "Showy to attract attention", level: "advanced" },
    { word: "pragmatic", meaning: "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations", hint: "Practical and sensible", level: "advanced" },
    { word: "quagmire", meaning: "An awkward, complex, or hazardous situation", hint: "A difficult situation or swamp", level: "advanced" },
    { word: "resilient", meaning: "(of a person or animal) able to withstand or recover quickly from difficult conditions", hint: "Tough, able to bounce back", level: "advanced" },
    { word: "scrutinize", meaning: "Examine or inspect closely and thoroughly", hint: "Examine very closely", level: "advanced" },
    { word: "tenacious", meaning: "Tending to keep a firm hold of something; clinging or adhering closely", hint: "Persistent and determined", level: "advanced" },
    { word: "unprecedented", meaning: "Never done or known before", hint: "Never seen before", level: "advanced" },
    { word: "venerable", meaning: "Accorded a great deal of respect, especially because of age, wisdom, or character", hint: "Respected due to age", level: "advanced" },
    { word: "wary", meaning: "Feeling or showing caution about possible dangers or problems", hint: "Cautious and careful", level: "advanced" },
    { word: "ameliorate", meaning: "Make (something bad or unsatisfactory) better", hint: "To improve or make better", level: "advanced" },
    { word: "benevolent", meaning: "Well meaning and kindly", hint: "Kind and generous", level: "advanced" },
    { word: "cogent", meaning: "(of an argument or case) clear, logical, and convincing", hint: "Convincing and logical", level: "advanced" },
    { word: "despicable", meaning: "Deserving hatred and contempt", hint: "Hateful, bad", level: "advanced" },
    { word: "elucidate", meaning: "Make (something) clear; explain", hint: "To explain or clarify", level: "advanced" },
    { word: "flamboyant", meaning: "(of a person or their behavior) tending to attract attention because of their exuberance, confidence, and stylishness", hint: "Showy and stylish", level: "advanced" },
    { word: "gratuitous", meaning: "Uncalled for; lacking good reason; unwarranted", hint: "Unnecessary or uncalled for", level: "advanced" }
];

async function seedVocab() {
    try {
        await VocabWord.deleteMany({});
        console.log('Existing vocab words cleared.');

        await VocabWord.insertMany(words);
        console.log(`Successfully seeded ${words.length} vocab words!`);

        process.exit(0);
    } catch (error) {
        console.error('Error seeding vocab words:', error);
        process.exit(1);
    }
}

seedVocab();
