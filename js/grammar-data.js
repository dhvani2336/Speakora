const GRAMMAR_DATABASE = [
    // LEVEL 1 – VERY BASICS
    {
        sequence: 1,
        level: "Level 1",
        title: "Alphabet & Pronunciation",
        definition: "The English alphabet is the fundamental system of 26 letters used for reading and writing. However, English pronunciation is complex because these 26 letters create 44 distinct sounds known as phonemes.",
        purpose: "To master the sounds of the language for clear speaking and accurate spelling.",
        rules: [
            "Rule 1: Every English word has at least one vowel sound.",
            "Rule 2 (Phonics): Letters have a name (A, B, C) and a sound (/æ/, /b/, /k/).",
            "Rule 3 (Silent E): A final 'e' often makes the first vowel say its name (e.g., 'Cap' vs 'Cape').",
            "Rule 4 (C & G Sounds): C sounds like 's' before E, I, Y (City, Cell). G sounds like 'j' before E, I, Y (Gentle, Gym).",
            "Rule 5 (Silent Letters): Many words have unpronounced letters. Common ones include: K in Knife, W in Write, B in Doubt, L in Talk, H in Hour."
        ],
        types: [
            { name: "26 Alphabets", description: "5 Vowels (A, E, I, O, U) and 21 Consonants.", examples: ["A, B, C... Z"] },
            { name: "Short Vowel Sounds", description: "Quick sounds usually found in 3-letter words.", examples: ["Cat, Egg, Pig, Dog, Bus"] },
            { name: "Long Vowel Sounds", description: "Vowels that sound like their alphabet name.", examples: ["Cake, Pete, Ice, Rose, Use"] },
            { name: "Vowel Digraphs", description: "Two vowels making one sound.", examples: ["'ea' in Tea, 'oa' in Boat, 'ai' in Rain"] },
            { name: "Consonant Blends", description: "Two consonants pronounced together.", examples: ["'bl' in Blue, 'str' in Street"] }
        ],
        structures: [
            { pattern: "CVC (Consonant-Vowel-Consonant)", explanation: "Usually produces a short vowel sound (MAT, PEN)." },
            { pattern: "CVC+e (Magic E)", explanation: "Adding E at the end patterns long vowels (MATE, PINE)." }
        ],
        examples: [
            { sentence: "The quick brown fox jumps over the lazy dog.", meaning: "Contains all 26 letters.", type: "Positive" },
            { sentence: "Speak clearly and listen carefully.", meaning: "Focus on pronouncing the 'ly' endings.", type: "Positive" }
        ],
        commonMistakes: [
            { wrong: "Pronouncing the 'k' in Know.", correct: "Know (pronounced 'no')", reason: "K followed by N is silent." },
            { wrong: "Pronouncing 'Psychology' with a P.", correct: "Psychology (starts with S sound)", reason: "P is silent before S." }
        ],
        summary: "English spelling doesn't always match its sound. Learn phonics rules to bridge the gap.",
        practice: ["Pronounce: Through, Though, Thought, Thorough.", "Find silent letters in: Debt, Ghost, Island, Wrap."]
    },
    {
        sequence: 2,
        level: "Level 1",
        title: "Parts of Speech",
        definition: "Every word in English belongs to one of 8 categories based on its function in a sentence.",
        purpose: "To identify word roles and build correct sentence structures.",
        rules: [
            "Rule 1: A word's part of speech is determined by its usage (e.g., 'Watch' can be a Noun or a Verb).",
            "Rule 2: Every complete sentence must have a Subject (Noun/Pronoun) and a Predicate (Verb)."
        ],
        types: [
            { name: "Noun", description: "Names人, place, thing.", examples: ["Dog, Paris, Love"] },
            { name: "Pronoun", description: "Replaces Noun.", examples: ["I, You, She"] },
            { name: "Verb", description: "Action or State.", examples: ["Run, Is, Have"] },
            { name: "Adjective", description: "Describes Noun.", examples: ["Big, Blue, Happy"] },
            { name: "Adverb", description: "Describes Verb.", examples: ["Quickly, Well, Very"] },
            { name: "Preposition", description: "Shows relationship.", examples: ["In, On, At"] },
            { name: "Conjunction", description: "Connects words.", examples: ["And, But, Or"] },
            { name: "Interjection", description: "Expresses emotion.", examples: ["Wow, Ouch"] }
        ],
        summary: "Parts of speech are the 8 building blocks of English.",
        practice: ["Label: 'The small bird sang sweetly on the branch.'"]
    },
    {
        sequence: 3,
        level: "Level 1",
        title: "Noun",
        definition: "A noun is a word that names a person, place, thing, animal, or an abstract idea/feeling.",
        purpose: "To identify the 'who', 'where', or 'what' in a sentence. It acts as a naming word.",
        rules: [
            "Rule 1: Proper nouns (Specific names like 'Rahul', 'India') always start with a CAPITAL letter.",
            "Rule 2: Uncountable nouns (Rice, Milk) generally do not have plural forms.",
            "Rule 3: Adjectives usually come before the noun to describe it (e.g., 'Beautiful girl')."
        ],
        types: [
            { name: "Proper Noun", description: "Specific name of a person, place, or thing.", examples: ["Rahul, India, Monday, Taj Mahal"] },
            { name: "Common Noun", description: "General name for person, place, or thing.", examples: ["Boy, girl, city, book"] },
            { name: "Collective", description: "Name of a group or collection.", examples: ["Team, class, crowd, army, bunch"] },
            { name: "Abstract", description: "Refers to qualities, feelings, ideas (cannot be touched).", examples: ["Love, honesty, beauty, anger"] },
            { name: "Concrete", description: "Things you can physically see or touch.", examples: ["Chair, apple, car, teacher"] },
            { name: "Material", description: "Name of substances or materials.", examples: ["Gold, milk, water, iron"] },
            { name: "Countable", description: "Things that can be counted (have singular/plural).", examples: ["Pen (one pen), books (two books)"] },
            { name: "Uncountable", description: "Things that cannot be counted directly.", examples: ["Sugar, information, rice, milk"] }
        ],
        infoBlocks: [
            {
                title: "Singular & Plural Rules",
                icon: "🔢",
                items: [
                    { label: "Rule 1: Standard", content: "Add 's' -> (book -> books, pen -> pens)" },
                    { label: "Rule 2: s, sh, ch, x", content: "Add 'es' -> (bus -> buses, box -> boxes)" },
                    { label: "Rule 3: Y-ending", content: "Replace 'y' with 'ies' -> (city -> cities)" },
                    { label: "Rule 4: f / fe", content: "Replace with 'ves' -> (leaf -> leaves, knife -> knives)" },
                    { label: "Rule 5: Irregular", content: "Special changes -> (man -> men, child -> children, mouse -> mice)" }
                ]
            },
            {
                title: "Gender of Nouns",
                icon: "👤",
                items: [
                    { label: "Masculine", content: "Male gender (boy, king, lion)" },
                    { label: "Feminine", content: "Female gender (girl, queen, lioness)" },
                    { label: "Common", content: "Either male or female (student, child, teacher)" },
                    { label: "Neuter", content: "Non-living things (table, book, pen)" }
                ]
            },
            {
                title: "Usage & Position",
                icon: "📍",
                items: [
                    { label: "As Subject", content: "Ram plays. (Ram is the doer)" },
                    { label: "As Object", content: "I like tea. (Tea is the receiver)" },
                    { label: "Possessive", content: "Singular: Boy's book | Plural: Boys' room" },
                    { label: "Noun Phrase", content: "Noun + describing words (a beautiful girl, the red car)" }
                ]
            }
        ],
        examples: [
            { sentence: "Honesty is the best policy.", meaning: "Using abstract nouns.", type: "Positive" },
            { sentence: "The group of students is studying.", meaning: "Collective noun usage.", type: "Positive" },
            { sentence: "Rahul lives in Delhi.", meaning: "Proper nouns with capitalization.", type: "Positive" }
        ],
        commonMistakes: [
            { wrong: "She gave me informations.", correct: "She gave me information.", reason: "Uncountable nouns have no plural form." },
            { wrong: "Furniture are costly.", correct: "Furniture is costly.", reason: "Furniture is treated as singular/uncountable." },
            { wrong: "I bought breads.", correct: "I bought bread.", reason: "Bread is uncountable; use 'loaves of bread' for plural." }
        ],
        summary: "Noun = Naming Word. It can be a person, place, thing, or even a feeling (Abstract).",
        practice: ["Identify the collective noun: 'A crowd gathered at the Taj Mahal.'", "Make the plural: 'The knife is on the table.'"]
    },
    {
        sequence: 4,
        level: "Level 1",
        title: "Pronoun",
        definition: "A pronoun is used in place of a noun to make communication efficient.",
        purpose: "To avoid repeating the same noun over and over.",
        rules: [
            "Rule 1 (Agreement): A pronoun must match its noun in number (Singular/Plural) and gender.",
            "Rule 2 (Personal Forms): Use Subject Pronouns (I, He, We) as doers. Use Object Pronouns (Me, Him, Us) as receivers.",
            "Rule 3 (Possessive): Mine, Yours, His, Hers, Ours - these show ownership without a noun following."
        ],
        types: [
            { name: "Personal", examples: ["I, You, He, She, It, We, They (Subjective)", "Me, You, Him, Her, It, Us, Them (Objective)"] },
            { name: "Possessive", examples: ["Mine, Yours, His, Hers, Ours, Theirs"] },
            { name: "Reflexive", description: "Action reflects on the subject.", examples: ["Myself, Yourself, Himself, Themselves"] },
            { name: "Demonstrative", description: "Pointing to objects.", examples: ["This, That, These, Those"] }
        ],
        examples: [
            { sentence: "Rahul is a pilot. He flies planes.", meaning: "Replacing Rahul with He.", type: "Positive" },
            { sentence: "This car is mine.", meaning: "Showing ownership.", type: "Positive" }
        ],
        summary: "Pronouns are the substitutes that keep sentences flowing smoothly.",
        practice: ["Replace: 'The boys took the boys' bags to the boys' room.'", "Fill: '___ (Me/I) like to study.'"]
    },
    {
        sequence: 5,
        level: "Level 1",
        title: "Verb",
        definition: "A verb is the most important word in a sentence. It expresses an action (walk) or a state (is/being).",
        purpose: "To serve as the engine of the sentence that tells us what is happening or existing.",
        rules: [
            "Rule 1: No English sentence is complete without a verb.",
            "Rule 2: Subject-Verb Agreement - He 'goes' (Singular) vs They 'go' (Plural).",
            "Rule 3: Tense markers - Verbs change their form (V1, V2, V3 etc.) to show time."
        ],
        verbsMaster: {
            regular: [
                { v1: "Add", hindi: "जोड़ना", v2: "Added", v3: "Added", v4: "Adds", v5: "Adding" },
                { v1: "Access", hindi: "पहुँचना", v2: "Accessed", v3: "Accessed", v4: "Accesses", v5: "Accessing" },
                { v1: "Alert", hindi: "सतर्क करना", v2: "Alerted", v3: "Alerted", v4: "Alerts", v5: "Alerting" },
                { v1: "Amuse", hindi: "मन बहलाना", v2: "Amused", v3: "Amused", v4: "Amuses", v5: "Amusing" },
                { v1: "Admire", hindi: "प्रशंसा करना", v2: "Admired", v3: "Admired", v4: "Admires", v5: "Admiring" },
                { v1: "Avoid", hindi: "बचना", v2: "Avoided", v3: "Avoided", v4: "Avoids", v5: "Avoiding" },
                { v1: "Ask", hindi: "पूछना", v2: "Asked", v3: "Asked", v4: "Asks", v5: "Asking" },
                { v1: "Appear", hindi: "प्रकट होना", v2: "Appeared", v3: "Appeared", v4: "Appears", v5: "Appearing" },
                { v1: "Allow", hindi: "अनुमति देना", v2: "Allowed", v3: "Allowed", v4: "Allows", v5: "Allowing" },
                { v1: "Arrange", hindi: "व्यवस्था करना", v2: "Arranged", v3: "Arranged", v4: "Arranges", v5: "Arranging" },
                { v1: "Attract", hindi: "आकर्षित करना", v2: "Attracted", v3: "Attracted", v4: "Attracts", v5: "Attracting" },
                { v1: "Answer", hindi: "उत्तर देना", v2: "Answered", v3: "Answered", v4: "Answers", v5: "Answering" },
                { v1: "Annoy", hindi: "परेशान करना", v2: "Annoyed", v3: "Annoyed", v4: "Annoys", v5: "Annoying" },
                { v1: "Argue", hindi: "बहस करना", v2: "Argued", v3: "Argued", v4: "Argues", v5: "Arguing" },
                { v1: "Admit", hindi: "स्वीकार करना", v2: "Admitted", v3: "Admitted", v4: "Admits", v5: "Admitting" },
                { v1: "Assist", hindi: "सहायता करना", v2: "Assisted", v3: "Assisted", v4: "Assists", v5: "Assisting" },
                { v1: "Attend", hindi: "शामिल होना", v2: "Attended", v3: "Attended", v4: "Attends", v5: "Attending" },
                { v1: "Attach", hindi: "संलग्न करना", v2: "Attached", v3: "Attached", v4: "Attaches", v5: "Attaching" },
                { v1: "Analyse", hindi: "विश्लेषण करना", v2: "Analysed", v3: "Analysed", v4: "Analyses", v5: "Analysing" },
                { v1: "Bake", hindi: "पकाना", v2: "Baked", v3: "Baked", v4: "Bakes", v5: "Baking" },
                { v1: "Belong", hindi: "संबंधित होना", v2: "Belonged", v3: "Belonged", v4: "Belongs", v5: "Belonging" },
                { v1: "Beg", hindi: "भीख माँगना", v2: "Begged", v3: "Begged", v4: "Begs", v5: "Begging" },
                { v1: "Boil", hindi: "उबालना", v2: "Boiled", v3: "Boiled", v4: "Boils", v5: "Boiling" },
                { v1: "Brush", hindi: "ब्रश करना", v2: "Brushed", v3: "Brushed", v4: "Brushes", v5: "Brushing" },
                { v1: "Burn", hindi: "जलना", v2: "Burned", v3: "Burned", v4: "Burns", v5: "Burning" },
                { v1: "Borrow", hindi: "उधार लेना", v2: "Borrowed", v3: "Borrowed", v4: "Borrows", v5: "Borrowing" },
                { v1: "Call", hindi: "बुलाना", v2: "Called", v3: "Called", v4: "Calls", v5: "Calling" },
                { v1: "Complete", hindi: "पूरा करना", v2: "Completed", v3: "Completed", v4: "Completes", v5: "Completing" },
                { v1: "Change", hindi: "बदलना", v2: "Changed", v3: "Changed", v4: "Changes", v5: "Changing" },
                { v1: "Collect", hindi: "इकट्ठा करना", v2: "Collected", v3: "Collected", v4: "Collects", v5: "Collecting" },
                { v1: "Close", hindi: "बंद करना", v2: "Closed", v3: "Closed", v4: "Closes", v5: "Closing" },
                { v1: "Continue", hindi: "जारी रखना", v2: "Continued", v3: "Continued", v4: "Continues", v5: "Continuing" },
                { v1: "Correct", hindi: "सही करना", v2: "Corrected", v3: "Corrected", v4: "Corrects", v5: "Correcting" },
                { v1: "Connect", hindi: "जोड़ना", v2: "Connected", v3: "Connected", v4: "Connects", v5: "Connecting" },
                { v1: "Deliver", hindi: "पहुंचाना", v2: "Delivered", v3: "Delivered", v4: "Delivers", v5: "Delivering" },
                { v1: "Describe", hindi: "वर्णन करना", v2: "Described", v3: "Described", v4: "Describes", v5: "Describing" },
                { v1: "Destroy", hindi: "नष्ट करना", v2: "Destroyed", v3: "Destroyed", v4: "Destroys", v5: "Destroying" },
                { v1: "Enjoy", hindi: "आनंद लेना", v2: "Enjoyed", v3: "Enjoyed", v4: "Enjoys", v5: "Enjoying" },
                { v1: "Explain", hindi: "समझाना", v2: "Explained", v3: "Explained", v4: "Explains", v5: "Explaining" },
                { v1: "Follow", hindi: "पीछा करना", v2: "Followed", v3: "Followed", v4: "Follows", v5: "Following" },
                { v1: "Help", hindi: "मदद करना", v2: "Helped", v3: "Helped", v4: "Helps", v5: "Helping" },
                { v1: "Hope", hindi: "आशा करना", v2: "Hoped", v3: "Hoped", v4: "Hopes", v5: "Hoping" },
                { v1: "Improve", hindi: "सुधारना", v2: "Improved", v3: "Improved", v4: "Improves", v5: "Improving" },
                { v1: "Join", hindi: "जुड़ना", v2: "Joined", v3: "Joined", v4: "Joins", v5: "Joining" },
                { v1: "Listen", hindi: "सुनना", v2: "Listened", v3: "Listened", v4: "Listens", v5: "Listening" },
                { v1: "Look", hindi: "देखना", v2: "Looked", v3: "Looked", v4: "Looks", v5: "Looking" },
                { v1: "Love", hindi: "प्यार करना", v2: "Loved", v3: "Loved", v4: "Loves", v5: "Loving" },
                { v1: "Manage", hindi: "प्रबंध करना", v2: "Managed", v3: "Managed", v4: "Manages", v5: "Managing" },
                { v1: "Open", hindi: "खोलना", v2: "Opened", v3: "Opened", v4: "Opens", v5: "Opening" },
                { v1: "Play", hindi: "खेलना", v2: "Played", v3: "Played", v4: "Plays", v5: "Playing" },
                { v1: "Push", hindi: "धक्का देना", v2: "Pushed", v3: "Pushed", v4: "Pushes", v5: "Pushing" },
                { v1: "Question", hindi: "सवाल करना", v2: "Questioned", v3: "Questioned", v4: "Questions", v5: "Questioning" },
                { v1: "Reach", hindi: "पहुँचना", v2: "Reached", v3: "Reached", v4: "Reaches", v5: "Reaching" },
                { v1: "Search", hindi: "खोजना", v2: "Searched", v3: "Searched", v4: "Searches", v5: "Searching" },
                { v1: "Smile", hindi: "मुस्कुराना", v2: "Smiled", v3: "Smiled", v4: "Smiles", v5: "Smiling" },
                { v1: "Start", hindi: "शुरू करना", v2: "Started", v3: "Started", v4: "Starts", v5: "Starting" },
                { v1: "Stop", hindi: "रुकना", v2: "Stopped", v3: "Stopped", v4: "Stops", v5: "Stopping" },
                { v1: "Talk", hindi: "बात करना", v2: "Talked", v3: "Talked", v4: "Talks", v5: "Talking" },
                { v1: "Try", hindi: "कोशिश करना", v2: "Tried", v3: "Tried", v4: "Tries", v5: "Trying" },
                { v1: "Use", hindi: "उपयोग करना", v2: "Used", v3: "Used", v4: "Uses", v5: "Using" },
                { v1: "Visit", hindi: "यात्रा करना", v2: "Visited", v3: "Visited", v4: "Visits", v5: "Visiting" },
                { v1: "Wait", hindi: "इंतजार करना", v2: "Waited", v3: "Waited", v4: "Waits", v5: "Waiting" },
                { v1: "Walk", hindi: "पैदल चलना", v2: "Walked", v3: "Walked", v4: "Walks", v5: "Walking" },
                { v1: "Wash", hindi: "धोना", v2: "Washed", v3: "Washed", v4: "Washes", v5: "Washing" },
                { v1: "Work", hindi: "काम करना", v2: "Worked", v3: "Worked", v4: "Works", v5: "Working" },
                { v1: "Yell", hindi: "चिल्लाना", v2: "Yelled", v3: "Yelled", v4: "Yells", v5: "Yelling" }
            ],
            irregular: [
                { v1: "Arise", hindi: "उठना", v2: "Arose", v3: "Arisen", v4: "Arises", v5: "Arising" },
                { v1: "Awake", hindi: "जागना", v2: "Awoke", v3: "Awaken", v4: "Awakes", v5: "Awaking" },
                { v1: "Begin", hindi: "शुरू करना", v2: "Began", v3: "Begun", v4: "Begins", v5: "Beginning" },
                { v1: "Bend", hindi: "झुकना", v2: "Bent", v3: "Bent", v4: "Bends", v5: "Bending" },
                { v1: "Beat", hindi: "पीटना", v2: "Beat", v3: "Beat", v4: "Beats", v5: "Beating" },
                { v1: "Become", hindi: "बनना", v2: "Became", v3: "Become", v4: "Becomes", v5: "Becoming" },
                { v1: "Bring", hindi: "लाना", v2: "Brought", v3: "Brought", v4: "Brings", v5: "Bringing" },
                { v1: "Buy", hindi: "खरीदना", v2: "Bought", v3: "Bought", v4: "Buys", v5: "Buying" },
                { v1: "Blow", hindi: "फूँकना", v2: "Blew", v3: "Blown", v4: "Blows", v5: "Blowing" },
                { v1: "Break", hindi: "तोड़ना", v2: "Broke", v3: "Broken", v4: "Breaks", v5: "Breaking" },
                { v1: "Catch", hindi: "पकड़ना", v2: "Caught", v3: "Caught", v4: "Catches", v5: "Catching" },
                { v1: "Choose", hindi: "चुनना", v2: "Chose", v3: "Chosen", v4: "Chooses", v5: "Choosing" },
                { v1: "Come", hindi: "आना", v2: "Came", v3: "Come", v4: "Comes", v5: "Coming" },
                { v1: "Cut", hindi: "काटना", v2: "Cut", v3: "Cut", v4: "Cuts", v5: "Cutting" },
                { v1: "Do", hindi: "करना", v2: "Did", v3: "Done", v4: "Does", v5: "Doing" },
                { v1: "Drink", hindi: "पीना", v2: "Drank", v3: "Drunk", v4: "Drinks", v5: "Drinking" },
                { v1: "Drive", hindi: "चलाना", v2: "Drove", v3: "Driven", v4: "Drives", v5: "Driving" },
                { v1: "Eat", hindi: "खाना", v2: "Ate", v3: "Eaten", v4: "Eats", v5: "Eating" },
                { v1: "Feel", hindi: "महसूस करना", v2: "Felt", v3: "Felt", v4: "Feels", v5: "Feeling" },
                { v1: "Fall", hindi: "गिरना", v2: "Fell", v3: "Fallen", v4: "Falls", v5: "Falling" },
                { v1: "Fly", hindi: "उड़ना", v2: "Flew", v3: "Flown", v4: "Flies", v5: "Flying" },
                { v1: "Forget", hindi: "भूलना", v2: "Forgot", v3: "Forgotten", v4: "Forgets", v5: "Forgetting" },
                { v1: "Give", hindi: "देना", v2: "Gave", v3: "Given", v4: "Gives", v5: "Giving" },
                { v1: "Go", hindi: "जाना", v2: "Went", v3: "Gone", v4: "Goes", v5: "Going" },
                { v1: "Grow", hindi: "बढ़ना", v2: "Grew", v3: "Grown", v4: "Grows", v5: "Growing" },
                { v1: "Hear", hindi: "सुनना", v2: "Heard", v3: "Heard", v4: "Hears", v5: "Hearing" },
                { v1: "Keep", hindi: "रखना", v2: "Kept", v3: "Kept", v4: "Keeps", v5: "Keeping" },
                { v1: "Know", hindi: "जानना", v2: "Knew", v3: "Known", v4: "Knows", v5: "Knowing" },
                { v1: "Leave", hindi: "छोड़ना", v2: "Left", v3: "Left", v4: "Leaves", v5: "Leaving" },
                { v1: "Make", hindi: "बनाना", v2: "Made", v3: "Made", v4: "Makes", v5: "Making" },
                { v1: "Meet", hindi: "मिलना", v2: "Met", v3: "Met", v4: "Meets", v5: "Meeting" },
                { v1: "Pay", hindi: "भुगतान करना", v2: "Paid", v3: "Paid", v4: "Pays", v5: "Paying" },
                { v1: "Put", hindi: "रखना", v2: "Put", v3: "Put", v4: "Puts", v5: "Putting" },
                { v1: "Run", hindi: "दौड़ना", v2: "Ran", v3: "Run", v4: "Runs", v5: "Running" },
                { v1: "Say", hindi: "कहना", v2: "Said", v3: "Said", v4: "Says", v5: "Saying" },
                { v1: "See", hindi: "देखना", v2: "Saw", v3: "Seen", v4: "Sees", v5: "Seeing" },
                { v1: "Shut", hindi: "बंद करना", v2: "Shut", v3: "Shut", v4: "Shuts", v5: "Shutting" },
                { v1: "Sing", hindi: "गाना", v2: "Sang", v3: "Sung", v4: "Sings", v5: "Singing" },
                { v1: "Sleep", hindi: "सोना", v2: "Slept", v3: "Slept", v4: "Sleeps", v5: "Sleeping" },
                { v1: "Speak", hindi: "बोलना", v2: "Spoke", v3: "Spoken", v4: "Speaks", v5: "Speaking" },
                { v1: "Take", hindi: "लेना", v2: "Took", v3: "Taken", v4: "Takes", v5: "Taking" },
                { v1: "Teach", hindi: "पढ़ाना", v2: "Taught", v3: "Taught", v4: "Teaches", v5: "Teaching" },
                { v1: "Tell", hindi: "बताना", v2: "Told", v3: "Told", v4: "Tells", v5: "Telling" },
                { v1: "Think", hindi: "सोचना", v2: "Thought", v3: "Thought", v4: "Thinks", v5: "Thinking" },
                { v1: "Understand", hindi: "समझना", v2: "Understood", v3: "Understood", v4: "Understands", v5: "Understanding" },
                { v1: "Wear", hindi: "पहनना", v2: "Wore", v3: "Worn", v4: "Wears", v5: "Wearing" },
                { v1: "Win", hindi: "जीतना", v2: "Won", v3: "Won", v4: "Wins", v5: "Winning" },
                { v1: "Write", hindi: "लिखना", v2: "Wrote", v3: "Written", v4: "Writes", v5: "Writing" }
            ]
        },
        questions: [
            {
                question: "What is V1 V2 V3 V4 V5?",
                answer: "V1 (Base form): Root word (e.g., eat).<br>V2 (Past form): Used for past simple (e.g., ate).<br>V3 (Past Participle): Used with 'has/have/had' (e.g., eaten).<br>V4 (Third-person singular): Used with He/She/It (e.g., eats).<br>V5 (Present Participle): Used with 'is/am/are -ing' (e.g., eating)."
            },
            {
                question: "List 10 V1 V2 V3 V4 V5 common words.",
                answer: "1. Ask/Asked/Asked/Asks/Asking<br>2. Work/Worked/Worked/Works/Working<br>3. Call/Called/Called/Calls/Calling<br>4. Help/Helped/Helped/Helps/Helping<br>5. Look/Looked/Looked/Looks/Looking<br>6. Try/Tried/Tried/Tries/Trying<br>7. Use/Used/Used/Uses/Using<br>8. Visit/Visited/Visited/Visits/Visiting<br>9. Wait/Waited/Waited/Waits/Waiting<br>10. Walk/Walked/Walked/Walks/Walking"
            },
            {
                question: "List 10 V1 V2 V3 V4 V5 irregular verbs.",
                answer: "1. Begin/Began/Begun/Begins/Beginning<br>2. Buy/Bought/Bought/Buys/Buying<br>3. Come/Came/Come/Comes/Coming<br>4. Do/Did/Done/Does/Doing<br>5. Drink/Drank/Drunk/Drinks/Drinking<br>6. Eat/Ate/Eaten/Eats/Eating<br>7. Give/Gave/Given/Gives/Giving<br>8. Go/Went/Gone/Goes/Going<br>9. Take/Took/Taken/Takes/Taking<br>10. Write/Wrote/Written/Writes/Writing"
            }
        ],
        summary: "Verbs are the engine of communication, driving every sentence with action or existence.",
        practice: ["Search 'Drink' in the list and find its V2 and V3.", "Explain the difference between 'Speak' and 'Speaks' using Subject-Verb agreement."]
    },
    {
        sequence: 6,
        level: "Level 1",
        title: "Adjective",
        definition: "An adjective describes or modifies a noun or pronoun.",
        purpose: "To provide detail, quantity, and quality to our subjects.",
        rules: [
            "Rule 1 (Order): Opinion > Size > Age > Shape > Color > Origin > Material > Purpose.",
            "Rule 2 (Comparatives): Add 'er' for short words (Hotter) or 'more' for long words (More beautiful).",
            "Rule 3 (Superlatives): Add 'est' (Hottest) or 'most' (Most beautiful)."
        ],
        types: [
            { name: "Descriptive", examples: ["Beautiful, large, old, green"] },
            { name: "Quantitative", examples: ["Some, many, few, five"] },
            { name: "Demonstrative", examples: ["This, that, these, those"] }
        ],
        structures: [
            { pattern: "Adjective + Noun", explanation: "The 'Red' Apple." },
            { pattern: "Noun + Linking Verb + Adjective", explanation: "The apple 'is' Red." }
        ],
        examples: [
            { sentence: "I saw a beautiful, large, antique wooden clock.", meaning: "Correct adjective order.", type: "Positive" }
        ],
        summary: "Adjectives bring color and life to nouns.",
        practice: ["Describe a 'House' using size, age, and color in correct order."]
    },
    {
        sequence: 7,
        level: "Level 1",
        title: "Adverb",
        definition: "An adverb is a word that modifies a verb, adjective, or another adverb.",
        purpose: "To answer How, When, Where, or How much an action happened.",
        rules: [
            "Rule 1: Many adverbs end in '-ly' (Quickly) but not all (Well, Fast).",
            "Rule 2 (Placement): Adverbs of frequency (Always, Never) usually go before the verb.",
            "Rule 3: Adverbs of time/place usually go at the end."
        ],
        types: [
            { name: "Manner", description: "How?", examples: ["Gracefully, loudly, well"] },
            { name: "Time", description: "When?", examples: ["Yesterday, soon, now"] },
            { name: "Place", description: "Where?", examples: ["Here, there, everywhere"] },
            { name: "Frequency", description: "How often?", examples: ["Always, daily, never"] },
            { name: "Degree", description: "How much?", examples: ["Very, extremely, almost"] }
        ],
        examples: [
            { sentence: "She ran very quickly yesterday.", meaning: "Degree, Manner, and Time adverbs used together.", type: "Positive" }
        ],
        commonMistakes: [
            { wrong: "He ran fastly.", correct: "He ran fast.", reason: "Fast is both adj and adv; fastly doesn't exist." },
            { wrong: "He sings good.", correct: "He sings well.", reason: "Use adverbs (well) to describe actions." }
        ],
        summary: "Adverbs provide the context and background for the action.",
        practice: ["Change to adverbs: Happy, Brave, Patient, Good."]
    },
    {
        sequence: 8,
        level: "Level 1",
        title: "Preposition",
        definition: "A word that shows the relationship (space, time, or logic) between a noun and other words.",
        purpose: "To specify location, timing, and direction.",
        rules: [
            "Rule 1: A preposition is always followed by a Noun or Pronoun (Object of the preposition).",
            "Rule 2 (At/On/In for Time): At (exact time), On (days), In (months/years)."
        ],
        types: [
            { name: "Place", examples: ["In, on, at, under, behind, among"] },
            { name: "Time", examples: ["Since, for, during, until, by"] },
            { name: "Direction", examples: ["To, into, through, across"] }
        ],
        examples: [
            { sentence: "The book is on the table.", meaning: "Surface location.", type: "Positive" },
            { sentence: "I will see you at 5:00 PM.", meaning: "Specific time.", type: "Positive" }
        ],
        summary: "Prepositions act as 'position' markers in sentences.",
        practice: ["Fill: 'He lives ___ London ___ a small flat.'"]
    },
    {
        sequence: 9,
        level: "Level 1",
        title: "Conjunction",
        definition: "Words that act as the 'glue' to connect words, phrases, or clauses.",
        purpose: "To combine thoughts and build complex sentences.",
        rules: [
            "Rule 1 (FANBOYS): Coordinating conjunctions connect equal parts (For, And, Nor, But, Or, Yet, So).",
            "Rule 2: Subordinating conjunctions join a dependent clause to an independent one (Because, If, While)."
        ],
        types: [
            { name: "Coordinating", description: "Equal links.", examples: ["I like tea and coffee."] },
            { name: "Subordinating", description: "Dependent links.", examples: ["I'll come if you call."] },
            { name: "Correlative", description: "Paired links.", examples: ["Either...or, Neither...nor, Not only...but also"] }
        ],
        examples: [
            { sentence: "He is poor but honest.", meaning: "Using 'but' for contrast.", type: "Positive" },
            { sentence: "Although it was raining, we went out.", meaning: "Using subordinating conjunction.", type: "Positive" }
        ],
        summary: "Conjunctions prevent short, choppy sentences.",
        practice: ["Join: 'I am hungry. The fridge is empty.'"]
    },
    {
        sequence: 10,
        level: "Level 1",
        title: "Interjection",
        definition: "Words used to express sudden or strong feelings.",
        rules: [
            "Rule 1: Often followed by an exclamation mark (!).",
            "Rule 2: They have no grammatical link to the rest of the sentence."
        ],
        types: [
            { name: "Joy", examples: ["Yay, Hurray, Wow"] },
            { name: "Grief", examples: ["Alas, Uh-oh"] },
            { name: "Attention", examples: ["Hey, Listen, Look"] },
            { name: "Pain", examples: ["Ouch, Ow"] }
        ],
        summary: "Interjections are the emotional sound effects of language.",
        practice: ["Write a sentence for: 'Alas!'"]
    },
    {
        sequence: 11,
        level: "Level 1",
        title: "Articles (a, an, the)",
        definition: "Articles define a noun as specific (unique) or general (any).",
        rules: [
            "Rule 1 (A/An): Use 'A' before consonant sounds (A car). Use 'An' before vowel sounds (An apple, An hour).",
            "Rule 2 (The): Use for specific things (The sun, The bike I bought yesterday, The front door).",
            "Rule 3 (Zero): No article for general plurals (Dogs bark) or mass nouns (I love water)."
        ],
        examples: [
            { sentence: "I saw a movie. The movie was boring.", meaning: "Generic movie first, then specific one.", type: "Positive" }
        ],
        commonMistakes: [
            { wrong: "He is honest man.", correct: "He is an honest man.", reason: "Singular count nouns MUST have an article." },
            { wrong: "I saw an unicorn.", correct: "I saw a unicorn.", reason: "Unicorn starts with 'y' sound (consonant sound)." }
        ],
        summary: "Articles prepare the reader to understand if the noun is known or new.",
        practice: ["Fill: '___ apple a day keeps ___ doctor away.'"]
    },
    {
        sequence: 12,
        level: "Level 1",
        title: "Subject & Predicate",
        definition: "Every complete sentence has two parts: The 'Subject' (Who/What) and 'Predicate' (What is done).",
        rules: [
            "The Subject is the doer (Person/Thing).",
            "The Predicate contains the verb and tells something about the subject."
        ],
        examples: [
            { sentence: "[The black cat] [is sleeping on the rug].", meaning: "Subject + Predicate.", type: "Positive" }
        ],
        summary: "Identify the doer and the action to understand any sentence.",
        practice: ["Divide: 'The brave soldier fought for the country.'"]
    },
    {
        sequence: 13,
        level: "Level 1",
        title: "Singular and Plural",
        definition: "Refers to the count (number) of nouns.",
        rules: [
            "Rule 1: Add 's' to most (Book -> Books).",
            "Rule 2: Ending in s/sh/ch/x add 'es' (Bus -> Buses).",
            "Rule 3: Ending in consonant + Y -> 'ies' (Fly -> Flies).",
            "Rule 4 (Irregular): Man-Men, Woman-Women, Foot-Feet, Tooth-Teeth, Mouse-Mice, Child-Children.",
            "Rule 5 (No change): Sheep, Deer, Fish, Series."
        ],
        summary: "Singular = One; Plural = Many.",
        practice: ["Give plurals: Wife, Box, Baby, Person, Leaf."]
    },
    {
        sequence: 14,
        level: "Level 1",
        title: "Gender",
        definition: "Indicates the male, female, or neutral status of nouns.",
        types: [
            { name: "Masculine", examples: ["King, Father, Son, Actor"] },
            { name: "Feminine", examples: ["Queen, Mother, Daughter, Actress"] },
            { name: "Common", description: "Either sex.", examples: ["Doctor, Teacher, Friends, Parent"] },
            { name: "Neuter", description: "Objects/Non-living.", examples: ["Chair, Table, River, Happiness"] }
        ],
        summary: "English primarily uses natural gender for living things.",
        practice: ["Identify gender: Princess, Hero, Baby, Stone."]
    },
    {
        sequence: 15,
        level: "Level 1",
        title: "Countable & Uncountable Nouns",
        definition: "Distinguishes items we can count as individual stars from mass substances (water).",
        rules: [
            "Rule 1: Countable nouns have plurals and can use A/An/Numbers.",
            "Rule 2: Uncountable nouns have no plural forms. Cannot use A/An.",
            "Rule 3: Use 'Many/Few' for countable. Use 'Much/Little' for uncountable."
        ],
        examples: [
            { sentence: "I have many friends.", meaning: "Countable usage.", type: "Positive" },
            { sentence: "I have much work to do.", meaning: "Uncountable usage.", type: "Positive" }
        ],
        commonMistakes: [
            { wrong: "He gave me many advices.", correct: "He gave me much advice.", reason: "Advice is uncountable." }
        ],
        summary: "Knowing countability is key to using much, many, few, and little correctly.",
        practice: ["Classify: Sand, Pencil, Luck, Chair, Soup."]
    },

    // LEVEL 2 – SENTENCE BUILDING
    {
        sequence: 16,
        level: "Level 2",
        title: "Types of Sentences",
        definition: "Sentences are classified according to their purpose—whether they make a statement, ask a question, give a command, or express strong emotion.",
        purpose: "To choose the right sentence form for effective communication.",
        rules: [
            "Rule 1 (Declarative): Ends with a period (.).",
            "Rule 2 (Interrogative): Ends with a question mark (?).",
            "Rule 3 (Imperative): Can end with a period or exclamation mark (!). Direct subject 'You' is often hidden.",
            "Rule 4 (Exclamatory): Ends with an exclamation mark (!). Starts with 'What' or 'How'."
        ],
        types: [
            { name: "Assertive / Declarative", description: "Provides information or states a fact.", examples: ["The sun rises in the east.", "I do not like tea."] },
            { name: "Interrogative", description: "Asks a question.", examples: ["What is your name?", "Have you eaten?"] },
            { name: "Imperative", description: "Expresses a command, request, or advice.", examples: ["Please close the door.", "Never tell a lie.", "Stop!"] },
            { name: "Exclamatory", description: "Expresses strong sudden feelings like joy, sorrow, or surprise.", examples: ["What a beautiful day!", "How cold it is!"] }
        ],
        examples: [
            { sentence: "Clean your room immediately.", meaning: "Imperative - Command.", type: "Positive" },
            { sentence: "How wonderful the story is!", meaning: "Exclamatory - Surprise.", type: "Positive" }
        ],
        summary: "The four types of sentences are the foundation of all English dialogue.",
        practice: ["Change 'He is a great player' into an Exclamatory sentence.", "Identify the type: 'Do not make a noise.'"]
    },
    {
        sequence: 17,
        level: "Level 2",
        title: "Sentence Structure",
        definition: "English sentences follow a specific logical order to convey meaning clearly. The most common pattern is Subject-Verb-Object (SVO).",
        purpose: "To organize words so the listener understands 'who' did 'what' to 'whom'.",
        rules: [
            "Rule 1 (Order): Basic English sentences use Subject + Verb + Object.",
            "Rule 2 (Complements): Some sentences need an adjective or noun after the verb (Subject + Verb + Complement).",
            "Rule 3 (Inversion): In questions, the verb or helping verb moves before the subject."
        ],
        structures: [
            { pattern: "S + V", explanation: "Birds (S) fly (V)." },
            { pattern: "S + V + O", explanation: "She (S) likes (V) apples (O)." },
            { pattern: "S + V + C", explanation: "The flower (S) is (V) beautiful (C)." },
            { pattern: "S + V + IO + DO", explanation: "He (S) gave (V) me (IO) a pen (DO)." }
        ],
        summary: "Word order is the single most important factor in English sentence logic.",
        practice: ["Rearrange: 'The / chased / cat / mouse / the'.", "Identify S, V, O in: 'We are learning English grammar.'"]
    },
    {
        sequence: 18,
        level: "Level 2",
        title: "Helping Verbs",
        definition: "Helping verbs (auxiliary verbs) are used together with a main verb to show the verb's tense or to form a negative or question.",
        purpose: "To provide time context and functional flexibility to main verbs.",
        rules: [
            "Rule 1: Primary βοηθούμενα (Primary helpers) are Be, Have, and Do.",
            "Rule 2: 'Be' forms (is, am, are, was, were) show continuous action.",
            "Rule 3: 'Have' forms (has, have, had) show completed action.",
            "Rule 4: 'Do' forms (do, does, did) are used for emphasis, negatives, and questions."
        ],
        types: [
            { name: "Be-verbs", description: "Show ongoing state/action.", examples: ["I 'am' playing.", "They 'were' singing."] },
            { name: "Have-verbs", description: "Show possession or completion.", examples: ["I 'have' a car.", "She 'has' finished."] },
            { name: "Do-verbs", description: "Used for questions/negatives.", examples: ["'Do' you like it?", "I 'did' not see him."] }
        ],
        summary: "Helping verbs are essential for building 10 out of the 12 English tenses.",
        practice: ["Circle the helping verb: 'She will be coming tomorrow.'"]
    },
    {
        sequence: 19,
        level: "Level 2",
        title: "Tenses (MOST IMPORTANT)",
        definition: "Tense is a category of the verb that expresses the time of an action (Past, Present, or Future) and its status (Complete or Continuous).",
        purpose: "To tell the listener EXACTLY when something happened.",
        rules: [
            "There are 12 tenses formed by combining 3 times with 4 aspects.",
            "Present = Now / General Facts",
            "Past = Finished / Yesterday",
            "Future = Will happen / Tomorrow"
        ],
        tensesMaster: [
            {
                name: "Simple Present",
                category: "Present Tense ✅",
                usage: "Daily routines, general truths, habits, and fixed schedules.",
                helpingVerb: "Do / Does (Used in Negative/Question)",
                mainVerb: "V1 (add s/es for third-person singular: He/She/It)",
                formulas: {
                    positive: "Subject + V1 (s/es) + Object",
                    negative: "Subject + do/does + not + V1 + Object",
                    question: "Do/Does + Subject + V1 + Object?"
                },
                signalWords: "Always, usually, often, daily, every week, never, seldom.",
                examples: [
                    { type: "Positive", text: "He drinks tea every morning." },
                    { type: "Negative", text: "He does not drink tea every morning." },
                    { type: "Question", text: "Does he drink tea every morning?" }
                ]
            },
            {
                name: "Present Continuous",
                category: "Present Tense ✅",
                usage: "Actions happening right now, or temporary situations.",
                helpingVerb: "Is / Am / Are",
                mainVerb: "V-ing (V1 + ing)",
                formulas: {
                    positive: "Subject + is/am/are + V-ing + Object",
                    negative: "Subject + is/am/are + not + V-ing + Object",
                    question: "Is/Am/Are + Subject + V-ing + Object?"
                },
                signalWords: "Now, at the moment, currently, today, at present.",
                examples: [
                    { type: "Positive", text: "They are playing football now." },
                    { type: "Negative", text: "They are not playing football now." },
                    { type: "Question", text: "Are they playing football now?" }
                ]
            },
            {
                name: "Present Perfect",
                category: "Present Tense ✅",
                usage: "Completed actions with a result in the present; life experiences.",
                helpingVerb: "Has / Have",
                mainVerb: "V3 (Past Participle)",
                formulas: {
                    positive: "Subject + has/have + V3 + Object",
                    negative: "Subject + has/have + not + V3 + Object",
                    question: "Has/Have + Subject + V3 + Object?"
                },
                signalWords: "Just, already, yet, ever, never, so far, recently.",
                examples: [
                    { type: "Positive", text: "I have finished my homework." },
                    { type: "Negative", text: "I have not finished my homework." },
                    { type: "Question", text: "Have you finished your homework?" }
                ]
            },
            {
                name: "Present Perfect Continuous",
                category: "Present Tense ✅",
                usage: "Action started in the past and is still continuing now.",
                helpingVerb: "Has been / Have been",
                mainVerb: "V-ing",
                formulas: {
                    positive: "Subject + has/have + been + V-ing + Object",
                    negative: "Subject + has/have + not + been + V-ing + Object",
                    question: "Has/Have + Subject + been + V-ing + Object?"
                },
                signalWords: "Since (point of time), For (duration of time).",
                examples: [
                    { type: "Positive", text: "She has been waiting for two hours." },
                    { type: "Negative", text: "She has not been waiting for two hours." },
                    { type: "Question", text: "Has she been waiting for two hours?" }
                ]
            },
            {
                name: "Simple Past",
                category: "Past Tense ✅",
                usage: "Actions that were completed at a specific time in the past.",
                helpingVerb: "Did (Used in Negative/Question)",
                mainVerb: "V2 (Positive) / V1 (with 'Did')",
                formulas: {
                    positive: "Subject + V2 + Object",
                    negative: "Subject + did + not + V1 + Object",
                    question: "Did + Subject + V1 + Object?"
                },
                signalWords: "Yesterday, last night, in 2010, two days ago.",
                examples: [
                    { type: "Positive", text: "I saw a movie yesterday." },
                    { type: "Negative", text: "I did not see a movie yesterday." },
                    { type: "Question", text: "Did you see a movie yesterday?" }
                ]
            },
            {
                name: "Past Continuous",
                category: "Past Tense ✅",
                usage: "Actions that were ongoing at a specific point in the past.",
                helpingVerb: "Was / Were",
                mainVerb: "V-ing",
                formulas: {
                    positive: "Subject + was/were + V-ing + Object",
                    negative: "Subject + was/were + not + V-ing + Object",
                    question: "Was/Were + Subject + V-ing + Object?"
                },
                signalWords: "While, when, at that time, all day yesterday.",
                examples: [
                    { type: "Positive", text: "She was cooking when I arrived." },
                    { type: "Negative", text: "She was not cooking when I arrived." },
                    { type: "Question", text: "Was she cooking when you arrived?" }
                ]
            },
            {
                name: "Past Perfect",
                category: "Past Tense ✅",
                usage: "Action completed before another past action (The 'Past of the Past').",
                helpingVerb: "Had",
                mainVerb: "V3",
                formulas: {
                    positive: "Subject + had + V3 + Object",
                    negative: "Subject + had + not + V3 + Object",
                    question: "Had + Subject + V3 + Object?"
                },
                signalWords: "Before, already, after, by the time.",
                examples: [
                    { type: "Positive", text: "The train had left before I reached." },
                    { type: "Negative", text: "The train had not left before I reached." },
                    { type: "Question", text: "Had the train left before you reached?" }
                ]
            },
            {
                name: "Past Perfect Continuous",
                category: "Past Tense ✅",
                usage: "Action that was ongoing until another point/action in the past.",
                helpingVerb: "Had been",
                mainVerb: "V-ing",
                formulas: {
                    positive: "Subject + had + been + V-ing + Object",
                    negative: "Subject + had + not + been + V-ing + Object",
                    question: "Had + Subject + been + V-ing + Object?"
                },
                signalWords: "For, since, before.",
                examples: [
                    { type: "Positive", text: "He had been working for 5 hours before sleeping." },
                    { type: "Negative", text: "He had not been working for 5 hours before sleeping." },
                    { type: "Question", text: "Had he been working for 5 hours before sleeping?" }
                ]
            },
            {
                name: "Simple Future",
                category: "Future Tense ✅",
                usage: "Actions that will happen in the future; predictions; promises.",
                helpingVerb: "Will",
                mainVerb: "V1",
                formulas: {
                    positive: "Subject + will + V1 + Object",
                    negative: "Subject + will + not + V1 + Object",
                    question: "Will + Subject + V1 + Object?"
                },
                signalWords: "Tomorrow, next week, soon, in the future.",
                examples: [
                    { type: "Positive", text: "I will go to London next month." },
                    { type: "Negative", text: "I will not go to London next month." },
                    { type: "Question", text: "Will you go to London next month?" }
                ]
            },
            {
                name: "Future Continuous",
                category: "Future Tense ✅",
                usage: "Action that will be ongoing at a specific time in the future.",
                helpingVerb: "Will be",
                mainVerb: "V-ing",
                formulas: {
                    positive: "Subject + will + be + V-ing + Object",
                    negative: "Subject + will + not + be + V-ing + Object",
                    question: "Will + Subject + be + V-ing + Object?"
                },
                signalWords: "At this time tomorrow, in a few days.",
                examples: [
                    { type: "Positive", text: "I will be flying to Dubai at 9 AM tomorrow." },
                    { type: "Negative", text: "I will not be flying to Dubai at 9 AM tomorrow." },
                    { type: "Question", text: "Will you be flying to Dubai at 9 AM tomorrow?" }
                ]
            },
            {
                name: "Future Perfect",
                category: "Future Tense ✅",
                usage: "Action that will be finished by a specific point in the future.",
                helpingVerb: "Will have",
                mainVerb: "V3",
                formulas: {
                    positive: "Subject + will + have + V3 + Object",
                    negative: "Subject + will + not + have + V3 + Object",
                    question: "Will + Subject + have + V3 + Object?"
                },
                signalWords: "By, by then, by next year, in two months.",
                examples: [
                    { type: "Positive", text: "I will have completed my degree by 2026." },
                    { type: "Negative", text: "I will not have completed my degree by 2026." },
                    { type: "Question", text: "Will you have completed your degree by 2026?" }
                ]
            },
            {
                name: "Future Perfect Continuous",
                category: "Future Tense ✅",
                usage: "Action that will continue up until a point in the future.",
                helpingVerb: "Will have been",
                mainVerb: "V-ing",
                formulas: {
                    positive: "Subject + will + have + been + V-ing + Object",
                    negative: "Subject + will + not + have + been + V-ing + Object",
                    question: "Will + Subject + have + been + V-ing + Object?"
                },
                signalWords: "For, by early next month.",
                examples: [
                    { type: "Positive", text: "I will have been learning English for 10 years by 2030." },
                    { type: "Negative", text: "I will not have been learning English for 10 years." },
                    { type: "Question", text: "Will you have been learning English for 10 years?" }
                ]
            }
        ],
        structures: [
            { pattern: "Continuous Aspect", explanation: "Always uses 'Be' verb + V-ing (Continuous form)." },
            { pattern: "Perfect Aspect", explanation: "Always uses 'Have' verb + V3 (Past Participle form)." }
        ],
        summary: "The 12 tenses are the heartbeat of English speech; master them to master the language.",
        practice: ["Conjugate 'Sleep' in all 12 tenses.", "Identify the tense: 'I will have finished my dinner by then.'"]
    },

    // LEVEL 3 – INTERMEDIATE GRAMMAR
    {
        sequence: 20,
        level: "Level 3",
        title: "Modals",
        definition: "Modal auxiliaries are special helping verbs used with a main verb to show mood, attitude, or potential (ability, permission, possibility, etc.). They NEVER come alone and always appear before a main verb.",
        purpose: "To provide the specific context of 'willingness', 'necessity', or 'ability' to an action.",
        rules: [
            "Rule 1 (Universal): Modal + Base Verb (V1). NO 'to', NO 's/es/ed'. (e.g., He can play ✅, He can plays ❌)",
            "Rule 2: They never change their form regardless of whether the subject is singular or plural.",
            "Rule 3: Only ONE modal can be used in a single sentence. (e.g., He will be able to come ✅, He will can come ❌)"
        ],
        modalsMaster: [
            {
                name: "CAN",
                functions: "Ability, Permission, Possibility, Offer",
                structures: [
                    { label: "Affirmative", pattern: "Subject + can + V1" },
                    { label: "Negative", pattern: "Subject + cannot (can't) + V1" },
                    { label: "Question", pattern: "Can + Subject + V1?" }
                ],
                usageDetails: [
                    { title: "Ability (Present)", explanation: "Shows what someone is able to do right now.", examples: ["I can swim.", "She can speak English.", "He can drive a car."] },
                    { title: "Informal Permission", explanation: "Used casually with friends/family.", examples: ["Can I sit here?", "Can we go outside?"] },
                    { title: "Possibility", explanation: "General chances or truths.", examples: ["Anyone can make mistakes.", "It can rain today."] },
                    { title: "Offer / Help", explanation: "Proposing assistance.", examples: ["Can I help you?", "Can I carry your bag?"] }
                ],
                proTips: "Rule 1: NO 'to' after CAN. Rule 2: NO verb changes (no dance/dances)."
            },
            {
                name: "COULD",
                functions: "Past Ability, Polite Request, Weak Possibility",
                structures: [
                    { label: "General", pattern: "Subject + could + V1" }
                ],
                usageDetails: [
                    { title: "Past Ability", explanation: "Things you were able to do in the past.", examples: ["I could run fast when I was young.", "She could sing very well."] },
                    { title: "Polite Request", explanation: "More respectful than 'can'.", examples: ["Could you open the door?", "Could you help me?"] },
                    { title: "Weak Possibility", explanation: "A slight chance.", examples: ["It could be true.", "She could come later."] }
                ]
            },
            {
                name: "MAY",
                functions: "Formal Permission, Possibility (Medium)",
                structures: [
                    { label: "Affirmative", pattern: "Subject + may + V1" },
                    { label: "Negative", pattern: "Subject + may not + V1" }
                ],
                usageDetails: [
                    { title: "Formal Permission", explanation: "Used in schools, offices, or with elders.", examples: ["May I come in?", "May I use your phone?"] },
                    { title: "Possibility", explanation: "A good chance of happening (medium chance).", examples: ["He may arrive today.", "She may be at home."] }
                ]
            },
            {
                name: "MIGHT",
                functions: "Very Weak Possibility",
                structures: [
                    { label: "General", pattern: "Subject + might + V1" }
                ],
                usageDetails: [
                    { title: "Very Weak Possibility", explanation: "Less certain than 'may'.", examples: ["It might rain.", "He might call tonight."] }
                ],
                proTips: "May = Possible (50%) | Might = Less Possible (20-30%)."
            },
            {
                name: "MUST",
                functions: "Strong Obligation, Logical Conclusion, Prohibition",
                structures: [
                    { label: "General", pattern: "Subject + must + V1" },
                    { label: "Negative", pattern: "Subject + must not (mustn't) + V1" }
                ],
                usageDetails: [
                    { title: "Strong Obligation", explanation: "Mandatory actions or rules.", examples: ["You must obey parents.", "Students must wear uniform."] },
                    { title: "Logical Conclusion", explanation: "A strong guess based on evidence.", examples: ["She must be tired.", "He must be rich."] },
                    { title: "Prohibition (must not)", explanation: "Strictly forbidden.", examples: ["You must not smoke here.", "You mustn't lie."] }
                ]
            },
            {
                name: "SHALL",
                functions: "Formal Future, Suggestion/Offer",
                structures: [
                    { label: "I / We only", pattern: "I/We + shall + V1" }
                ],
                usageDetails: [
                    { title: "Formal Future", explanation: "Used mostly in UK English for future intent.", examples: ["I shall return soon."] },
                    { title: "Suggestion / Offer", explanation: "Asking for agreement.", examples: ["Shall we go for a walk?", "Shall I help you?"] }
                ]
            },
            {
                name: "SHOULD",
                functions: "Advice, Moral Duty, Expectation",
                structures: [
                    { label: "General", pattern: "Subject + should + V1" }
                ],
                usageDetails: [
                    { title: "Advice", explanation: "Giving a suggestion.", examples: ["You should study daily.", "You should drink more water."] },
                    { title: "Moral Duty", explanation: "What is right to do.", examples: ["We should respect elders/teachers."] },
                    { title: "Expectation", explanation: "Something that is likely to happen.", examples: ["The train should arrive soon."] }
                ]
            },
            {
                name: "WILL",
                functions: "Future Action, Promise, Willingness, Habit",
                structures: [
                    { label: "General", pattern: "Subject + will + V1" },
                    { label: "Negative", pattern: "Subject + will not (won't) + V1" }
                ],
                usageDetails: [
                    { title: "Future Action", explanation: "Planned or spontaneous future intent.", examples: ["I will call you.", "She will come tomorrow."] },
                    { title: "Promise", explanation: "Expressing commitment.", examples: ["I will help you."] },
                    { title: "Habit", explanation: "Repeated behavior.", examples: ["He will talk for hours if you let him."] }
                ]
            },
            {
                name: "WOULD",
                functions: "Polite Request, Past Habit, Imaginary Situation",
                structures: [
                    { label: "General", pattern: "Subject + would + V1" }
                ],
                usageDetails: [
                    { title: "Polite Request", explanation: "Very formal and respectful.", examples: ["Would you help me?", "Would you pass the salt?"] },
                    { title: "Past Habit", explanation: "Something you used to do.", examples: ["He would play every evening."] },
                    { title: "Imaginary Situation", explanation: "Hypothetical scenarios.", examples: ["I would travel if I had money."] }
                ]
            },
            {
                name: "OUGHT TO",
                functions: "Strong Advice / Duty",
                structures: [
                    { label: "General", pattern: "Subject + ought to + V1" }
                ],
                usageDetails: [
                    { title: "Strong Advice / Duty", explanation: "Expressing a moral requirement.", examples: ["You ought to respect elders.", "She ought to apologize."] }
                ],
                proTips: "Ought to is the ONLY modal that includes the word 'to' in its structure."
            }
        ],
        masterRules: [
            "Only ONE modal in a sentence: Use 'will be able to' instead of 'will can'.",
            "Base verb always: Use 'She must go' instead of 'She must goes'.",
            "Question formation: Modal + Subject + V1? (e.g., Can you swim?)",
            "Negative formation: Modal + not + V1 (e.g., cannot, should not, might not)"
        ],
        comparison: [
            { pair: "Can vs Could", diff: "Ability (Present) vs Ability (Past) / Polite" },
            { pair: "May vs Might", diff: "Possibility (50%) vs Weaker Possibility (20%)" },
            { pair: "Must vs Should", diff: "Compulsion / Strong Rule vs Advice / Suggestion" },
            { pair: "Will vs Would", diff: "Future Intent vs Polite Request / Past Habit" }
        ],
        commonMistakes: [
            { wrong: "He can to play guitar.", correct: "He can play guitar.", reason: "Don't use 'to' after can/could/must/should/will." },
            { wrong: "She must goes now.", correct: "She must go now.", reason: "Always use base verb (V1) after modals; no 's/es'." },
            { wrong: "He will can come.", correct: "He will be able to come.", reason: "You cannot use two modals together." }
        ],
        summary: "Can → Ability | May → Permission | Must → Compulsion | Should → Advice | Will → Future.",
        practice: ["Correct this sentence: 'I could to swim well.'", "Find the modal: 'Shall we dance?'"]
    },
    {
        sequence: 21,
        level: "Level 3",
        title: "Active & Passive Voice",
        definition: "Voice indicates whether the subject of the sentence performs the action (Active) or receives the action (Passive).",
        purpose: "To change the focus of the sentence between the 'doer' and the 'result'.",
        rules: [
            "Rule 1: In Passive voice, the object of the active sentence becomes the subject.",
            "Rule 2: Always use the 'Be' verb (in the correct tense) + V3 (Past Participle).",
            "Rule 3: Use 'by' to mention the doer if necessary.",
            "Rule 4: Intransitive verbs (like go, sit, sleep) cannot be changed to passive."
        ],
        structures: [
            { pattern: "Present Simple Passive", explanation: "Am/Is/Are + V3 (e.g., 'The cake is eaten')." },
            { pattern: "Past Simple Passive", explanation: "Was/Were + V3 (e.g., 'The cake was eaten')." },
            { pattern: "Future Simple Passive", explanation: "Will be + V3 (e.g., 'The cake will be eaten')." }
        ],
        examples: [
            { sentence: "The chef cooked the dinner.", meaning: "Active - Focus on the chef.", type: "Positive" },
            { sentence: "The dinner was cooked by the chef.", meaning: "Passive - Focus on the dinner.", type: "Positive" }
        ],
        summary: "Use Active for directness; use Passive when the doer is unknown or less important.",
        practice: ["Change to Passive: 'The police caught the thief.'", "Change to Active: 'A song was sung by Mary.'"]
    },
    {
        sequence: 22,
        level: "Level 3",
        title: "Direct & Indirect Speech",
        definition: "Direct speech quotes the exact words spoken. Indirect (reported) speech conveys the meaning without the exact words.",
        purpose: "To report conversations and information to others.",
        rules: [
            "Rule 1 (Quotes): Direct speech uses quotation marks (' '); Indirect does not.",
            "Rule 2 (Tense Backshift): In Indirect speech, present tenses usually change to past (Is -> Was, Can -> Could).",
            "Rule 3 (Pronouns): Pronouns change to match the reporter's perspective (I -> He/She).",
            "Rule 4 (Time/Place): Today -> That day, Here -> There, Now -> Then."
        ],
        examples: [
            { sentence: "He said, 'I am happy.'", meaning: "Direct Speech.", type: "Positive" },
            { sentence: "He said that he was happy.", meaning: "Indirect Speech (Backshifted).", type: "Positive" }
        ],
        summary: "Indirect speech requires 'back-shifting' the time and adjusting the pronouns.",
        practice: ["Change to Indirect: She said, 'I will call you tomorrow.'", "Change to Direct: He told me that he was tired."]
    },
    {
        sequence: 23,
        level: "Level 3",
        title: "Question Formation",
        definition: "The process of converting a statement into an inquiry.",
        rules: [
            "Rule 1 (Inversion): Swap the subject and the helping verb (He is -> Is he?).",
            "Rule 2 (Do-Support): For Simple Present/Past without a helper, use Do, Does, or Did.",
            "Rule 3 (WH-Words): Add WH-word at the beginning (Where, Why) before the inverted verb."
        ],
        structures: [
            { pattern: "Auxiliary + S + Main Verb?", explanation: "Are you coming?" },
            { pattern: "Do/Does/Did + S + V1?", explanation: "Do you like tea?" }
        ],
        summary: "Questions always move a part of the verb before the subject.",
        practice: ["Form a question for: 'They lived in New York.'", "Form a question for: 'She can play piano.'"]
    },
    {
        sequence: 24,
        level: "Level 3",
        title: "Negatives",
        definition: "Sentences that deny a fact or action using 'Not'.",
        rules: [
            "Rule 1: Add 'not' after the helping verb (is not, have not, will not).",
            "Rule 2: Contractions like 'don't', 'isn't', 'won't' are common in speech.",
            "Rule 3: Use 'Never' or 'No' for strong negative statements without a verb modification."
        ],
        examples: [
            { sentence: "I do not (don't) believe you.", meaning: "Using Do-support for negative.", type: "Negative" },
            { sentence: "There is no sugar in my tea.", meaning: "Using 'No' as a determiner.", type: "Negative" }
        ],
        summary: "Negatives usually need a helping verb to carry the 'Not'.",
        practice: ["Make negative: 'She arrived late yesterday.'", "'He has finished the report.'"]
    },
    {
        sequence: 25,
        level: "Level 3",
        title: "WH Questions",
        definition: "Questions used to gather specific information, starting with W or H words.",
        types: [
            { name: "Who", description: "Asks about a person." },
            { name: "What", description: "Asks about a thing/info." },
            { name: "Where", description: "Asks about a place." },
            { name: "When", description: "Asks about time." },
            { name: "Why", description: "Asks about reason." },
            { name: "How", description: "Asks about manner/count." }
        ],
        summary: "WH questions are 'open' questions—they cannot be answered with a simple Yes or No.",
        practice: ["Choose 'What' or 'Who': '______ is your best friend?'", "'______ are you doing?'"]
    },
    {
        sequence: 26,
        level: "Level 3",
        title: "Prepositions (Detailed)",
        definition: "An in-depth look at the most common prepositions of time and place.",
        rules: [
            "Rule 1 (AT): Use for specific points of time (At 10 AM) and specific addresses/spots.",
            "Rule 2 (ON): Use for days/dates (On Monday) and surfaces (On the wall).",
            "Rule 3 (IN): Use for months/years/seasons (In June) and enclosed spaces (In a box).",
            "Rule 4 (BY): Means 'near' or 'not later than'."
        ],
        examples: [
            { sentence: "I'll be there by 5 PM.", meaning: "Time limit.", type: "Positive" },
            { sentence: "She sat by the river.", meaning: "Location - near.", type: "Positive" }
        ],
        summary: "Prepositions are small words with large logical responsibilities.",
        practice: ["Fill: 'The meeting is ____ Friday ____ 3 PM ____ the office.'"]
    },
    {
        sequence: 27,
        level: "Level 3",
        title: "Adjectives & Degrees of Comparison",
        definition: "Changing the form of an adjective to compare two or more things.",
        types: [
            { name: "Positive", description: "Simple quality.", examples: ["Good, Fast, Big"] },
            { name: "Comparative", description: "Comparing two things.", examples: ["Better, Faster, Bigger"] },
            { name: "Superlative", description: "Comparing three or more.", examples: ["Best, Fastest, Biggest"] }
        ],
        rules: [
            "Rule 1: Add 'er/est' for 1-syllable words.",
            "Rule 2: Use 'more/most' for 3+ syllables.",
            "Rule 3: Irregular: Good-Better-Best, Bad-Worse-Worst, Far-Farther-Farthest."
        ],
        summary: "Comparison adds relative value to adjectives.",
        practice: ["Compare: 'Airplane' is _______ (fast) than 'Car'."]
    },
    {
        sequence: 28,
        level: "Level 3",
        title: "Conjunctions & Connectors",
        definition: "Advanced linking words used to transition between sentences and paragraphs.",
        types: [
            { name: "Addition", examples: ["Furthermore, Moreover, In addition"] },
            { name: "Contrast", examples: ["However, Nevertheless, On the other hand"] },
            { name: "Result", examples: ["Therefore, Consequently, As a result"] },
            { name: "Sequence", examples: ["Firstly, Finally, Meanwhile"] }
        ],
        summary: "Connectors create 'flow' and logical progression in writing.",
        practice: ["Link: 'He was late. ______, he missed the meeting.' (Result)"]
    },

    // LEVEL 4 – ADVANCED
    {
        sequence: 29,
        level: "Level 4",
        title: "Clauses",
        definition: "A clause is a group of words that contains a subject and a verb.",
        purpose: "To build complex sentences by combining different layers of meaning.",
        types: [
            { name: "Independent Clause", description: "Can stand alone as a sentence.", examples: ["I love music."] },
            { name: "Dependent Clause", description: "Cannot stand alone; starts with a subordinating conjunction.", examples: ["Because I love music..."] },
            { name: "Relative Clause", description: "Describes a noun.", examples: ["The man 'who is standing there' is my brother."] }
        ],
        summary: "Mastering clauses allows you to move beyond simple sentences to professional writing.",
        practice: ["Underline the dependent clause: 'I will go there if he invites me.'"]
    },
    {
        sequence: 30,
        level: "Level 4",
        title: "Conditional Sentences",
        definition: "Sentences that discuss known factors or hypothetical situations and their consequences.",
        purpose: "To talk about possibilities, regrets, and scientific facts.",
        rules: [
            "Rule 1 (Zero): If + Present Simple, Present Simple. (Universal truths).",
            "Rule 2 (1st): If + Present Simple, Will + V1. (Real future possibility).",
            "Rule 3 (2nd): If + Past Simple, Would + V1. (Imaginary/Unreal present).",
            "Rule 4 (3rd): If + Past Perfect, Would have + V3. (Past regrets/Impossible)."
        ],
        examples: [
            { sentence: "If you heat ice, it melts.", meaning: "Zero Conditional.", type: "Positive" },
            { sentence: "If I win the lottery, I will buy a car.", meaning: "1st Conditional.", type: "Positive" },
            { sentence: "If I were the President, I would change the law.", meaning: "2nd Conditional.", type: "Positive" },
            { sentence: "If I had studied harder, I would have passed.", meaning: "3rd Conditional.", type: "Positive" }
        ],
        summary: "Conditionals are the 'If-Then' logic of the English language.",
        practice: ["Finish: 'If it rains tomorrow, ...'", "Identify: 'If he had arrived on time, he wouldn't have missed the flight.'"]
    },
    {
        sequence: 31,
        level: "Level 4",
        title: "Gerund & Infinitive",
        definition: "A Gerund is a verb ending in 'ing' that acts as a noun. An Infinitive is 'To + Verb' that also acts as a noun.",
        purpose: "To use verbs as subjects or objects in a sentence.",
        rules: [
            "Rule 1: Use Gerunds after prepositions (e.g., Interested in 'playing').",
            "Rule 2: Use Infinitives to show purpose (e.g., I went 'to buy' milk).",
            "Rule 3: Some verbs like 'Enjoy, Avoid, Mind' take Gerunds. Verbs like 'Want, Hope, Decide' take Infinitives."
        ],
        examples: [
            { sentence: "Swimming is good exercise.", meaning: "Gerund as Subject.", type: "Positive" },
            { sentence: "I want to swim.", meaning: "Infinitive as Object.", type: "Positive" }
        ],
        summary: "Choosing between Gerund and Infinitive depends mostly on the preceding verb.",
        practice: ["Choose: 'I enjoy ______ (reading / to read) books.'", "'He promised ______ (helping / to help) me.'"]
    },
    {
        sequence: 32,
        level: "Level 4",
        title: "Question Tags",
        definition: "Short questions added to the end of a statement to ask for confirmation.",
        rules: [
            "Rule 1: If the statement is Positive, the tag is Negative.",
            "Rule 2: If the statement is Negative, the tag is Positive.",
            "Rule 3: The tag uses the same helping verb as the main sentence."
        ],
        examples: [
            { sentence: "You are a doctor, aren't you?", meaning: "Positive statement -> Negative tag.", type: "Positive" },
            { sentence: "She doesn't like coffee, does she?", meaning: "Negative statement -> Positive tag.", type: "Positive" }
        ],
        summary: "Question tags are the most common way to turn a statement into a interactive conversation.",
        practice: ["Add tag: 'They have finished the work, ______?'", "'It is raining, ______?'"]
    },
    {
        sequence: 33,
        level: "Level 4",
        title: "Phrasal Verbs",
        definition: "A verb combined with an adverb or preposition to create a completely new meaning.",
        purpose: "To sound natural and idiomatic in English conversation.",
        examples: [
            { sentence: "Give up", meaning: "To stop trying.", type: "Positive" },
            { sentence: "Look for", meaning: "To search.", type: "Positive" },
            { sentence: "Call off", meaning: "To cancel.", type: "Positive" },
            { sentence: "Break down", meaning: "To stop functioning (car/machine).", type: "Positive" }
        ],
        summary: "Phrasal verbs are informal but essential for fluent communication.",
        practice: ["What does 'Put off' mean? (Cancel / Postpone)."]
    },
    {
        sequence: 34,
        level: "Level 4",
        title: "Common Errors & Corrections",
        definition: "Analysis of frequently made mistakes by English learners.",
        commonMistakes: [
            { wrong: "I am having a car.", correct: "I have a car.", reason: "Don't use continuous tense for possession." },
            { wrong: "He is senior than me.", correct: "He is senior to me.", reason: "Words ending in 'ior' like Senior, Junior, Prior take 'to' not 'than'." },
            { wrong: "One of my friend is here.", correct: "One of my friends is here.", reason: "After 'one of', the noun must be plural." }
        ],
        summary: "Avoiding common pitfalls is the fastest way to improve your score in exams.",
        practice: ["Correct: 'She is more clever than any girl in the class.'"]
    },
    {
        sequence: 35,
        level: "Level 4",
        title: "Paragraph & Essay Structure",
        definition: "The formal way of organizing thoughts into cohesive written pieces.",
        rules: [
            "Rule 1 (Paragraph): Must have a Topic Sentence, Supporting Details, and a Concluding Sentence.",
            "Rule 2 (Essay): Introduction (Hook/Thesis), Body Paragraphs (Evidence), and Conclusion (Summary/Final thought)."
        ],
        structures: [
            { pattern: "The Hook", explanation: "The first sentence that grabs attention." },
            { pattern: "The Thesis", explanation: "The main argument of your essay." }
        ],
        summary: "Structure is what separates a list of sentences from a professional document.",
        practice: ["Write a topic sentence for an essay about 'Importance of Trees'."]
    }
];

window.GRAMMAR_DATABASE = GRAMMAR_DATABASE;
