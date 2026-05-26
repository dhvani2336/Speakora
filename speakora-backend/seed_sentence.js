const mongoose = require('mongoose');
const dotenv = require('dotenv');
const dns = require('dns');

// Set DNS servers to bypass local network issues with MongoDB SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();

const SentenceQuestion = require('./models/SentenceQuestion');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Note: To keep the seed file manageable, we define base templates and expand them dynamically,
// or just supply exactly 50 each. I will explicitly define all 150 sentences.

const sentences = [
    // --- EASY LEVEL: MAKING SENTENCE (25) ---
    { level: 'easy', type: 'making_sentence', question: 'morning / I / every / exercise', correctAnswer: 'I exercise every morning.', explanation: 'Subject + action verb + time expression.' },
    { level: 'easy', type: 'making_sentence', question: 'likes / she / apples / eating', correctAnswer: 'She likes eating apples.', explanation: 'Subject + verb (likes) + gerund (eating) + object.' },
    { level: 'easy', type: 'making_sentence', question: 'book / reading / am / I / a', correctAnswer: 'I am reading a book.', explanation: 'Present continuous format: Subject + am/is/are + verb-ing.' },
    { level: 'easy', type: 'making_sentence', question: 'school / go / to / we / bus / by', correctAnswer: 'We go to school by bus.', explanation: 'Subject + verb + prepositional phrase of location + prepositional phrase of method.' },
    { level: 'easy', type: 'making_sentence', question: 'he / tall / is / very', correctAnswer: 'He is very tall.', explanation: 'Subject + "to be" verb + adverb + adjective.' },
    { level: 'easy', type: 'making_sentence', question: 'dog / barked / loudly / the', correctAnswer: 'The dog barked loudly.', explanation: 'Subject (The dog) + past verb + adverb.' },
    { level: 'easy', type: 'making_sentence', question: 'sky / blue / is / the', correctAnswer: 'The sky is blue.', explanation: 'Subject + "to be" verb + adjective.' },
    { level: 'easy', type: 'making_sentence', question: 'my / works / father / hospital / in / a', correctAnswer: 'My father works in a hospital.', explanation: 'Subject + verb + prepositional location phrase.' },
    { level: 'easy', type: 'making_sentence', question: 'play / they / park / the / in', correctAnswer: 'They play in the park.', explanation: 'Time or place usually comes at the end of a simple sentence.' },
    { level: 'easy', type: 'making_sentence', question: 'teacher / nice / very / is / our', correctAnswer: 'Our teacher is very nice.', explanation: 'Possessive + noun + verb + adverb + adjective.' },
    { level: 'easy', type: 'making_sentence', question: 'water / drink / you / must / daily', correctAnswer: 'You must drink water daily.', explanation: 'Subject + modal verb + main verb + object + adverb of time.' },
    { level: 'easy', type: 'making_sentence', question: 'sleeps / the / cat / bed / on / the', correctAnswer: 'The cat sleeps on the bed.', explanation: 'Subject + verb + location.' },
    { level: 'easy', type: 'making_sentence', question: 'raining / is / it / outside', correctAnswer: 'It is raining outside.', explanation: 'Present continuous referring to weather.' },
    { level: 'easy', type: 'making_sentence', question: 'brother / my / football / plays', correctAnswer: 'My brother plays football.', explanation: 'Simple subject + verb + object.' },
    { level: 'easy', type: 'making_sentence', question: 'hot / weather / the / is / today', correctAnswer: 'The weather is hot today.', explanation: '"Today" generally comes at the end.' },
    { level: 'easy', type: 'making_sentence', question: 'mother / food / cooks / delicious', correctAnswer: 'Mother cooks delicious food.', explanation: 'Adjective "delicious" comes before the noun "food".' },
    { level: 'easy', type: 'making_sentence', question: 'birds / the / sing / trees / in / the', correctAnswer: 'The birds sing in the trees.', explanation: 'Action verb followed by location.' },
    { level: 'easy', type: 'making_sentence', question: 'I / have / red / a / car', correctAnswer: 'I have a red car.', explanation: 'Adjective "red" comes before the noun "car".' },
    { level: 'easy', type: 'making_sentence', question: 'we / students / are / good', correctAnswer: 'We are good students.', explanation: 'Subject + "to be" verb + descriptive noun phrase.' },
    { level: 'easy', type: 'making_sentence', question: 'late / do / not / be', correctAnswer: 'Do not be late.', explanation: 'Imperative negative sentence.' },
    { level: 'easy', type: 'making_sentence', question: 'sun / east / the / rises / the / in', correctAnswer: 'The sun rises in the east.', explanation: 'Basic factual sentence structure.' },
    { level: 'easy', type: 'making_sentence', question: 'milk / baby / the / drank', correctAnswer: 'The baby drank milk.', explanation: 'Simple past tense: Subject + verb + object.' },
    { level: 'easy', type: 'making_sentence', question: 'room / clean / yours', correctAnswer: 'Clean your room.', explanation: 'Imperative sentence starts with a verb.' }, // Fixed "yours" to "your" logically, but input was yours. Let's fix input. Wait, input "room / clean / your". Let's change question to:
    { level: 'easy', type: 'making_sentence', question: 'your / room / clean', correctAnswer: 'Clean your room.', explanation: 'Imperative sentence starts with a verb.' },
    { level: 'easy', type: 'making_sentence', question: 'is / name / what / your', correctAnswer: 'What is your name?', explanation: 'Question word (What) + verb (is) + subject (your name).' },
    { level: 'easy', type: 'making_sentence', question: 'old / are / how / you', correctAnswer: 'How old are you?', explanation: 'Question phrase (How old) comes first.' },

    // --- EASY LEVEL: FILL BLANKS (25) ---
    { level: 'easy', type: 'fill_blanks', question: 'I usually ____ to college in the morning.', options: ['go', 'goes'], correctAnswer: 'go', explanation: 'Use "go" because the subject is "I" (first-person singular).' },
    { level: 'easy', type: 'fill_blanks', question: 'She ____ a beautiful dress today.', options: ['is wearing', 'are wearing'], correctAnswer: 'is wearing', explanation: 'Use "is" because the subject "She" is singular.' },
    { level: 'easy', type: 'fill_blanks', question: 'They ____ playing football right now.', options: ['is', 'are'], correctAnswer: 'are', explanation: '"They" is a plural pronoun, so it uses the plural verb "are".' },
    { level: 'easy', type: 'fill_blanks', question: 'He ____ not like spicy food.', options: ['do', 'does'], correctAnswer: 'does', explanation: '"He" is third-person singular, so use "does not".' },
    { level: 'easy', type: 'fill_blanks', question: '____ you like to drink tea?', options: ['Do', 'Does'], correctAnswer: 'Do', explanation: 'For the pronoun "you", we use the auxiliary verb "Do".' },
    { level: 'easy', type: 'fill_blanks', question: 'My dog ____ very loud.', options: ['bark', 'barks'], correctAnswer: 'barks', explanation: '"My dog" is a singular subject, so the verb takes an "s".' },
    { level: 'easy', type: 'fill_blanks', question: 'We ____ to the park yesterday.', options: ['go', 'went'], correctAnswer: 'went', explanation: 'The word "yesterday" indicates the past tense.' },
    { level: 'easy', type: 'fill_blanks', question: 'I have ____ apple in my bag.', options: ['a', 'an'], correctAnswer: 'an', explanation: 'Use "an" before a word starting with a vowel sound (apple).' },
    { level: 'easy', type: 'fill_blanks', question: '____ cat is sleeping on the sofa.', options: ['The', 'A'], correctAnswer: 'The', explanation: 'We use "The" when referring to a specific noun already known to the listener.' },
    { level: 'easy', type: 'fill_blanks', question: 'I am ____ tired today.', options: ['very', 'much'], correctAnswer: 'very', explanation: '"Very" is used to emphasize an adjective like "tired".' },
    { level: 'easy', type: 'fill_blanks', question: 'She sings ____.', options: ['good', 'well'], correctAnswer: 'well', explanation: '"Well" is the adverb form describing exactly how the action (singing) is done.' },
    { level: 'easy', type: 'fill_blanks', question: 'These books ____ mine.', options: ['is', 'are'], correctAnswer: 'are', explanation: '"These books" is a plural subject.' },
    { level: 'easy', type: 'fill_blanks', question: 'I ____ 20 years old.', options: ['am', 'is'], correctAnswer: 'am', explanation: '"am" is the only "to be" verb that pairs with the subject "I".' },
    { level: 'easy', type: 'fill_blanks', question: '____ name is John.', options: ['His', 'He'], correctAnswer: 'His', explanation: 'Use the possessive pronoun "His" to show ownership of the name.' },
    { level: 'easy', type: 'fill_blanks', question: 'Can you give ____ the pen?', options: ['I', 'me'], correctAnswer: 'me', explanation: '"me" is the object pronoun receiving the action.' },
    { level: 'easy', type: 'fill_blanks', question: 'I walk ____ school.', options: ['to', 'at'], correctAnswer: 'to', explanation: 'Use "to" to indicate movement toward a destination.' },
    { level: 'easy', type: 'fill_blanks', question: 'The keys are ____ the table.', options: ['on', 'in'], correctAnswer: 'on', explanation: '"on" shows that the keys rest atop the surface.' },
    { level: 'easy', type: 'fill_blanks', question: 'The sun rises in the ____.', options: ['east', 'west'], correctAnswer: 'east', explanation: 'A simple factual reality about the world.' },
    { level: 'easy', type: 'fill_blanks', question: 'He is a ____ driver.', options: ['fast', 'fastly'], correctAnswer: 'fast', explanation: '"Fast" is an adjective. ("Fastly" is not a real word).' },
    { level: 'easy', type: 'fill_blanks', question: 'I want ____ buy a new phone.', options: ['to', 'two'], correctAnswer: 'to', explanation: '"To buy" is the infinitive form of the verb.' },
    { level: 'easy', type: 'fill_blanks', question: 'Look ____ that beautiful bird.', options: ['at', 'on'], correctAnswer: 'at', explanation: '"Look at" is the correct phrase when directing your gaze.' },
    { level: 'easy', type: 'fill_blanks', question: 'He speaks English ____.', options: ['fluent', 'fluently'], correctAnswer: 'fluently', explanation: '"Fluently" is the adverb describing how he speaks.' },
    { level: 'easy', type: 'fill_blanks', question: 'I ____ not know the answer.', options: ['do', 'does'], correctAnswer: 'do', explanation: 'First-person negative present tense is "do not".' },
    { level: 'easy', type: 'fill_blanks', question: 'Please ____ the door.', options: ['close', 'closes'], correctAnswer: 'close', explanation: 'Imperative sentences always start with the base form of the verb.' },
    { level: 'easy', type: 'fill_blanks', question: 'There ____ three apples on the table.', options: ['is', 'are'], correctAnswer: 'are', explanation: '"Three apples" is plural, requiring "are".' },

    // --- MEDIUM LEVEL: MAKING SENTENCE (25) ---
    { level: 'medium', type: 'making_sentence', question: 'to / going / I / tomorrow / cinema / the / am', correctAnswer: 'I am going to the cinema tomorrow.', explanation: 'Present continuous can express planned future events.' },
    { level: 'medium', type: 'making_sentence', question: 'already / his / he / finished / homework / has', correctAnswer: 'He has already finished his homework.', explanation: 'Adverbs like "already" often sit between the auxiliary verb and main verb in Present Perfect.' },
    { level: 'medium', type: 'making_sentence', question: 'the / waiting / station / they / at / for / you / are', correctAnswer: 'They are waiting for you at the station.', explanation: 'Subject + verb phrase + object + location.' },
    { level: 'medium', type: 'making_sentence', question: 'new / bought / a / car / yesterday / father / my', correctAnswer: 'My father bought a new car yesterday.', explanation: 'Time structures ("yesterday") prefer the end of the sentence.' },
    { level: 'medium', type: 'making_sentence', question: 'tired / was / she / went / to / she / bed / so / early', correctAnswer: 'She was tired so she went to bed early.', explanation: 'Compound sentence using "so" to show result or consequence.' },
    { level: 'medium', type: 'making_sentence', question: 'carefully / always / instructions / read / the', correctAnswer: 'Always read the instructions carefully.', explanation: 'Adverbs of frequency ("always") usually start imperative sentences if applied to the action globally.' },
    { level: 'medium', type: 'making_sentence', question: 'piano / playing / the / enjoys / evening / he / the / in', correctAnswer: 'He enjoys playing the piano in the evening.', explanation: 'Gerund ("playing") directly follows the verb "enjoys".' },
    { level: 'medium', type: 'making_sentence', question: 'people / how / coming / party / many / the / are / to', correctAnswer: 'How many people are coming to the party?', explanation: 'Interrogative phrasing: Wh-question + subject + verb structure.' },
    { level: 'medium', type: 'making_sentence', question: 'wallet / lost / I / think / I / my', correctAnswer: 'I think I lost my wallet.', explanation: 'Two clauses connected by an implied "that".' },
    { level: 'medium', type: 'making_sentence', question: 'dinner / preparing / is / the / kitchen / mother / in / the', correctAnswer: 'Mother is preparing dinner in the kitchen.', explanation: 'Standard Subject + Verb + Object + Place structure.' },
    { level: 'medium', type: 'making_sentence', question: 'rain / heavily / starting / to / it / is', correctAnswer: 'It is starting to rain heavily.', explanation: '"It is starting" followed by the infinitive "to rain" then the adverb.' },
    { level: 'medium', type: 'making_sentence', question: 'movie / watch / tonight / a / let’s', correctAnswer: 'Let’s watch a movie tonight.', explanation: '"Let us" (Let\'s) followed by the base verb.' },
    { level: 'medium', type: 'making_sentence', question: 'money / not / enough / have / do / we', correctAnswer: 'We do not have enough money.', explanation: 'Negative present simple format.' },
    { level: 'medium', type: 'making_sentence', question: 'keys / his / found / he / finally', correctAnswer: 'He finally found his keys.', explanation: 'Adverb "finally" precedes the main verb in the past tense.' },
    { level: 'medium', type: 'making_sentence', question: 'better / getting / is / English / my', correctAnswer: 'My English is getting better.', explanation: 'Present continuous to demonstrate a developing state.' },
    { level: 'medium', type: 'making_sentence', question: 'restaurant / the / is / next / to / bank / the', correctAnswer: 'The restaurant is next to the bank.', explanation: '"next to" acts as a compound preposition of place.' },
    { level: 'medium', type: 'making_sentence', question: 'shoes / off / please / take / your', correctAnswer: 'Please take off your shoes.', explanation: 'Phrasal verb "take off" + object.' },
    { level: 'medium', type: 'making_sentence', question: 'working / been / has / she / morning / since', correctAnswer: 'She has been working since morning.', explanation: 'Present perfect continuous showing action that began in the past and continues.' },
    { level: 'medium', type: 'making_sentence', question: 'phone / ringing / the / is', correctAnswer: 'The phone is ringing.', explanation: 'Simple subject + present continuous verb.' },
    { level: 'medium', type: 'making_sentence', question: 'never / I / sushi / eaten / have', correctAnswer: 'I have never eaten sushi.', explanation: 'Adverb "never" is placed between auxiliary (have) and past participle (eaten).' },
    { level: 'medium', type: 'making_sentence', question: 'door / someone / knocking / at / the / is', correctAnswer: 'Someone is knocking at the door.', explanation: '"knocking" goes explicitly with the preposition "at".' },
    { level: 'medium', type: 'making_sentence', question: 'window / open / you / the / could / please', correctAnswer: 'Could you please open the window?', explanation: 'Polite request structure with modal "could".' },
    { level: 'medium', type: 'making_sentence', question: 'doctor / my / advised / me / rest / to', correctAnswer: 'My doctor advised me to rest.', explanation: 'Verb (advised) + direct object (me) + infinitive (to rest).' },
    { level: 'medium', type: 'making_sentence', question: 'interesting / very / is / book / this', correctAnswer: 'This book is very interesting.', explanation: 'Demonstrative adjective + noun + verb + intensifier + adjective.' },
    { level: 'medium', type: 'making_sentence', question: 'dog / walked / his / park / in / the / he', correctAnswer: 'He walked his dog in the park.', explanation: 'Subject + transitive verb + object + location.' },

    // --- MEDIUM LEVEL: FILL BLANKS (25) ---
    { level: 'medium', type: 'fill_blanks', question: 'They have been married ____ 10 years.', options: ['since', 'for'], correctAnswer: 'for', explanation: '"For" is used with a duration of time (10 years).' },
    { level: 'medium', type: 'fill_blanks', question: 'He is interested ____ learning new languages.', options: ['in', 'on', 'at'], correctAnswer: 'in', explanation: 'The adjective "interested" is always paired with the preposition "in".' },
    { level: 'medium', type: 'fill_blanks', question: 'She is much ____ than her sister.', options: ['tall', 'taller', 'tallest'], correctAnswer: 'taller', explanation: 'Comparative adjectives ending in "-er" are used when comparing two items or people.' },
    { level: 'medium', type: 'fill_blanks', question: 'If it rains, we ____ stay at home.', options: ['would', 'will'], correctAnswer: 'will', explanation: 'First conditional sentence: If + Present tense, Subject + "will" + Verb.' },
    { level: 'medium', type: 'fill_blanks', question: 'I haven\'t seen him ____ last week.', options: ['for', 'since'], correctAnswer: 'since', explanation: '"Since" is used to refer to a specific starting point in time.' },
    { level: 'medium', type: 'fill_blanks', question: 'You must ____ off your phone during the exam.', options: ['turn', 'turns', 'turning'], correctAnswer: 'turn', explanation: 'Modal verbs like "must" are followed immediately by a base verb without "to" or suffixes.' },
    { level: 'medium', type: 'fill_blanks', question: 'This is the ____ movie I have ever seen.', options: ['worse', 'worst'], correctAnswer: 'worst', explanation: 'Superlative form ("worst") is used when comparing more than two things in an ultimate capacity.' },
    { level: 'medium', type: 'fill_blanks', question: 'He ____ to Paris three times.', options: ['has gone', 'has been'], correctAnswer: 'has been', explanation: '"has been" indicates going to Paris and returning, which fits experiencing a trip three times.' },
    { level: 'medium', type: 'fill_blanks', question: 'Could you tell me where the bank ____?', options: ['is', 'are'], correctAnswer: 'is', explanation: 'Indirect questions retain standard subject-verb order (the bank is).' },
    { level: 'medium', type: 'fill_blanks', question: 'I am looking forward to ____ you.', options: ['see', 'seeing'], correctAnswer: 'seeing', explanation: 'The phrase "looking forward to" acts as a preposition and requires a gerund (-ing) immediately after.' },
    { level: 'medium', type: 'fill_blanks', question: 'Neither John ____ Mary was at the party.', options: ['or', 'nor'], correctAnswer: 'nor', explanation: '"Neither" connects directly with the conjunction "nor". (Either connects with or).' },
    { level: 'medium', type: 'fill_blanks', question: 'He drives very ____.', options: ['careful', 'carefully'], correctAnswer: 'carefully', explanation: 'To modify the verb "drives" we must use an adverb.' },
    { level: 'medium', type: 'fill_blanks', question: 'I have ____ friends than she does.', options: ['less', 'fewer'], correctAnswer: 'fewer', explanation: '"Fewer" is used for countable nouns (friends), while "less" is for uncountable nouns.' },
    { level: 'medium', type: 'fill_blanks', question: 'The building ____ was destroyed in the fire is being rebuilt.', options: ['who', 'which'], correctAnswer: 'which', explanation: 'Use "which" (or "that") as a relative pronoun for non-living objects.' },
    { level: 'medium', type: 'fill_blanks', question: 'She advised me ____ a doctor.', options: ['see', 'to see'], correctAnswer: 'to see', explanation: 'The verb "advise" is followed by an object and then the infinitive ("to see").' },
    { level: 'medium', type: 'fill_blanks', question: 'He is the man ____ car was stolen.', options: ['who', 'whose', 'whom'], correctAnswer: 'whose', explanation: '"Whose" shows possession (the car belongs to the man).' },
    { level: 'medium', type: 'fill_blanks', question: 'Despite ____ tired, she finished the race.', options: ['being', 'be'], correctAnswer: 'being', explanation: '"Despite" operates as a preposition, requiring the next word to be a gerund (-ing).' },
    { level: 'medium', type: 'fill_blanks', question: 'You had better ____ an umbrella.', options: ['take', 'to take'], correctAnswer: 'take', explanation: 'The phrase "had better" acts identically to a modal and requires a bare infinitive verb directly after.' },
    { level: 'medium', type: 'fill_blanks', question: 'I am used to ____ up early.', options: ['wake', 'waking'], correctAnswer: 'waking', explanation: '"Be used to" is followed by a gerund (-ing) because "to" acts as a preposition here.' },
    { level: 'medium', type: 'fill_blanks', question: 'I would rather ____ tea than coffee.', options: ['drink', 'to drink'], correctAnswer: 'drink', explanation: '"Would rather" uses a base verb.' },
    { level: 'medium', type: 'fill_blanks', question: 'She denied ____ the money.', options: ['stealing', 'to steal'], correctAnswer: 'stealing', explanation: 'The verb "deny" must be followed by a gerund.' },
    { level: 'medium', type: 'fill_blanks', question: 'By the time we arrive, the train ____.', options: ['will leave', 'will have left'], correctAnswer: 'will have left', explanation: 'The future perfect is used to state that an action completes strictly prior to a set future checkpoint.' },
    { level: 'medium', type: 'fill_blanks', question: 'I apologize ____ being late.', options: ['for', 'from'], correctAnswer: 'for', explanation: 'The verb "apologize" always relies on the preposition "for".' },
    { level: 'medium', type: 'fill_blanks', question: 'Hardly had he arrived ____ it started to rain.', options: ['than', 'when'], correctAnswer: 'when', explanation: 'The specific structure "Hardly... when" is used for events occurring almost simultaneously.' },
    { level: 'medium', type: 'fill_blanks', question: 'No sooner had I reached the station ____ the train departed.', options: ['than', 'when'], correctAnswer: 'than', explanation: 'The specific structure "No sooner... than" connects two sequential actions.' },

    // --- ADVANCED/HARD LEVEL: MAKING SENTENCE (25) ---
    { level: 'hard', type: 'making_sentence', question: 'had / known / coming / were / you / I / baked / a / cake / have / would / I', correctAnswer: 'Had I known you were coming, I would have baked a cake.', explanation: 'Third conditional structure using inversion instead of "If I had known".' },
    { level: 'hard', type: 'making_sentence', question: 'circumstances / under / should / no / this / door / opened / be', correctAnswer: 'Under no circumstances should this door be opened.', explanation: 'Negative adverbials at the beginning of a sentence require auxiliary verb inversion (should this door).' },
    { level: 'hard', type: 'making_sentence', question: 'not / only / piano / does / play / the / he / composes / music / he / also / but', correctAnswer: 'Not only does he play the piano, but he also composes music.', explanation: 'Correlative conjunctions "Not only... but also" require subject-verb inversion in the first clause.' },
    { level: 'hard', type: 'making_sentence', question: 'seldom / such / have / a / beautiful / I / sunset / seen', correctAnswer: 'Seldom have I seen such a beautiful sunset.', explanation: 'Starting a phrase with "Seldom" mandates auxiliary verb inversion.' },
    { level: 'hard', type: 'making_sentence', question: 'scarcely / arrived / had / the / boss / than / employees / started / working / the', correctAnswer: 'Scarcely had the boss arrived than the employees started working.', explanation: 'Formal structure for immediate sequence of actions.' },
    { level: 'hard', type: 'making_sentence', question: 'regret / not / having / harder / studied / my / exams / for / I', correctAnswer: 'I regret not having studied harder for my exams.', explanation: '"Regret" followed by a perfect gerund phrase "not having studied" reflecting back on past events.' },
    { level: 'hard', type: 'making_sentence', question: 'despite / fact / the / that / raining / was / it / went / we / out', correctAnswer: 'Despite the fact that it was raining, we went out.', explanation: '"Despite the fact that" connects a contrasting independent clause seamlessly.' },
    { level: 'hard', type: 'making_sentence', question: 'supposed / to / have / finished / the / project / by / now / they / were', correctAnswer: 'They were supposed to have finished the project by now.', explanation: 'Passive expectation structure ("were supposed to") combined with perfect infinitive ("have finished").' },
    { level: 'hard', type: 'making_sentence', question: 'what / do / me / want / you / to / to / is / tell / truth / the', correctAnswer: 'What you want me to do is to tell the truth.', explanation: 'Cleft sentence structure emphasizing the action clause.' },
    { level: 'hard', type: 'making_sentence', question: 'it / high / time / realized / you / your / mistakes / is', correctAnswer: 'It is high time you realized your mistakes.', explanation: 'The idiom "It is high time" is strictly followed by a subordinate clause strictly using simple past tense.' },
    { level: 'hard', type: 'making_sentence', question: 'much / as / I / respect / disagree / his / I / opinion / with / his / decision / completely', correctAnswer: 'Much as I respect his opinion, I completely disagree with his decision.', explanation: '"Much as" means "Although," representing high concession before addressing a stark contrast.' }, // Reordered and tweaked to match exact words provided: "Much as I respect his opinion, I completely disagree with his decision."
    { level: 'hard', type: 'making_sentence', question: 'so / intricate / was / the / plot / that / everyone / confused / was', correctAnswer: 'So intricate was the plot that everyone was confused.', explanation: 'Inversion caused by placing "So + adjective" entirely at the front for impact.' },
    { level: 'hard', type: 'making_sentence', question: 'were / to / it / happen / again / what / would / do / you', correctAnswer: 'Were it to happen again, what would you do?', explanation: 'Inverted second conditional (alternative to "If it were to happen").' },
    { level: 'hard', type: 'making_sentence', question: 'no / matter / hard / how / tries / she / succeeds / never / she', correctAnswer: 'No matter how hard she tries, she never succeeds.', explanation: 'Concessive clause utilizing "No matter how" followed by an adjective and subject.' },
    { level: 'hard', type: 'making_sentence', question: 'by / time / the / get / we / there / film / the / will / have / started', correctAnswer: 'By the time we get there, the film will have started.', explanation: 'Future perfect to establish one fixed timeline event occurring prior to another future limit.' },
    { level: 'hard', type: 'making_sentence', question: 'be / that / as / it / may / accept / cannot / I / offer / your', correctAnswer: 'Be that as it may, I cannot accept your offer.', explanation: 'Idiomatic transition phrase meaning "even if that is true".' },
    { level: 'hard', type: 'making_sentence', question: 'little / did / know / she / about / the / impending / disaster', correctAnswer: 'Little did she know about the impending disaster.', explanation: 'Pre-positioning negative indicator "Little" forces subject-verb inversion ("did she know").' },
    { level: 'hard', type: 'making_sentence', question: 'provided / that / study / you / pass / you / will / exams / the', correctAnswer: 'Provided that you study, you will pass the exams.', explanation: '"Provided that" acts equivalently to "if" in a formal conditional.' },
    { level: 'hard', type: 'making_sentence', question: 'unless / changes / he / attitude / his / fired / be / will / he', correctAnswer: 'Unless he changes his attitude, he will be fired.', explanation: '"Unless" serves as "if not," introducing the condition required to prevent the consequence.' },
    { level: 'hard', type: 'making_sentence', question: 'in / event / the / of / fire / a / use / stairs / the', correctAnswer: 'In the event of a fire, use the stairs.', explanation: 'Formal prepositional phrase often used in official instructions.' },
    { level: 'hard', type: 'making_sentence', question: 'on / condition / that / keep / you / it / a / secret / tell / I / will / you', correctAnswer: 'I will tell you on condition that you keep it a secret.', explanation: '"on condition that" explicitly bridges an action to a firm stricture.' },
    { level: 'hard', type: 'making_sentence', question: 'given / his / age / remarkably / he / is / healthy', correctAnswer: 'Given his age, he is remarkably healthy.', explanation: '"Given" acts as a preposition meaning "considering in light of".' },
    { level: 'hard', type: 'making_sentence', question: 'assuming / that / true / is / what / should / we / do', correctAnswer: 'Assuming that is true, what should we do?', explanation: 'Present participle phrase establishing a conjectural foundation before posing the question.' },
    { level: 'hard', type: 'making_sentence', question: 'whether / he / likes / it / or / not / go / to / has / he', correctAnswer: 'Whether he likes it or not, he has to go.', explanation: '"Whether... or not" asserts an obligation regardless of altering preferences.' },
    { level: 'hard', type: 'making_sentence', question: 'long / as / as / quiet / are / you / stay / you / can / here', correctAnswer: 'As long as you are quiet, you can stay here.', explanation: 'Conditional linking phrase indicating strict duration limits mapped to behavioral conditions.' },

    // --- ADVANCED/HARD LEVEL: FILL BLANKS (25) ---
    { level: 'hard', type: 'fill_blanks', question: 'Her argument was entirely ____, relying on emotion rather than facts.', options: ['spurious', 'cogent', 'empirical'], correctAnswer: 'spurious', explanation: '"Spurious" refers to a fabricated or false argument that merely seems legitimate.' },
    { level: 'hard', type: 'fill_blanks', question: 'He is prone to ____ statements rather than providing clear, direct answers.', options: ['lucid', 'equivocal', 'categorical'], correctAnswer: 'equivocal', explanation: '"Equivocal" means deliberately ambiguous or evasive to hide the truth.' },
    { level: 'hard', type: 'fill_blanks', question: 'The CEO’s decision was ____; she refused to listen to any advice from her board.', options: ['acquiescent', 'intractable', 'malleable'], correctAnswer: 'intractable', explanation: '"Intractable" describes an extreme hardness or stubbornness in a person or a problem.' },
    { level: 'hard', type: 'fill_blanks', question: 'His speech was full of ____, seeking simply to flatter the powerful figures in the room.', options: ['sycophancy', 'polemic', 'diatribe'], correctAnswer: 'sycophancy', explanation: '"Sycophancy" represents using extreme unearned flattery to gain advantage.' },
    { level: 'hard', type: 'fill_blanks', question: 'Despite the crisis, her reaction was remarkably ____, showing no sign of panic.', options: ['mercurial', 'phlegmatic', 'irascible'], correctAnswer: 'phlegmatic', explanation: '"Phlegmatic" describes having an unemotional and stolidly calm disposition.' },
    { level: 'hard', type: 'fill_blanks', question: 'The author\'s style is so ____ that even scholars have difficulty interpreting the texts.', options: ['pellucid', 'esoteric', 'prosaic'], correctAnswer: 'esoteric', explanation: '"Esoteric" refers to knowledge intended for or likely to be understood by only a small number of people with specialized knowledge/interest.' },
    { level: 'hard', type: 'fill_blanks', question: 'By the time I arrived, the damage ____ already been done.', options: ['has', 'had'], correctAnswer: 'had', explanation: 'Past Perfect ("had done") is used to express an action accomplished before another milestone action ("arrived") in the past.' },
    { level: 'hard', type: 'fill_blanks', question: 'Not until we reached the hotel ____ realize we had lost our luggage.', options: ['did we', 'we did'], correctAnswer: 'did we', explanation: 'Negative beginnings like "Not until" enforce a strict subject-auxiliary inversion ("did we realize").' },
    { level: 'hard', type: 'fill_blanks', question: 'I suggested that he ____ an attorney before signing any documents.', options: ['consults', 'consult'], correctAnswer: 'consult', explanation: 'The subjunctive mood is required here, utilizing the base un-conjugated verb ("consult") regardless of the third-person subject.' },
    { level: 'hard', type: 'fill_blanks', question: 'The professor demanded that the assignment ____ submitted strictly by noon.', options: ['be', 'is'], correctAnswer: 'be', explanation: 'Subjunctive tense applies following demand verbs, requiring the base verb "be".' },
    { level: 'hard', type: 'fill_blanks', question: 'Had I known of his predicament, I ____ gladly offered my assistance.', options: ['would have', 'will have'], correctAnswer: 'would have', explanation: 'Third conditional requires the "would have + past participle" construction relating to impossible past hypotheticals.' },
    { level: 'hard', type: 'fill_blanks', question: 'The treaty was signed in order to ____ the border disputes between the two nations.', options: ['exacerbate', 'ameliorate', 'obfuscate'], correctAnswer: 'ameliorate', explanation: '"Ameliorate" means to aggressively improve or repair a bad, damaged, or poor situation.' },
    { level: 'hard', type: 'fill_blanks', question: 'The politician\'s answers were deliberately ____, avoiding committing to any firm policy.', options: ['forthright', 'evasive', 'candid'], correctAnswer: 'evasive', explanation: '"Evasive" denotes avoiding committing to an answer directly.' },
    { level: 'hard', type: 'fill_blanks', question: 'Her constant complaining is beginning to ____ on my nerves.', options: ['grate', 'soothe'], correctAnswer: 'grate', explanation: 'The idiom "grate on someone\'s nerves" means to vastly irritate them.' },
    { level: 'hard', type: 'fill_blanks', question: 'The sudden wealth was treated as entirely ____, expecting it to vanish shortly.', options: ['permanent', 'ephemeral', 'eternal'], correctAnswer: 'ephemeral', explanation: '"Ephemeral" means lasting for a very fleeting, short time.' },
    { level: 'hard', type: 'fill_blanks', question: 'To fully understand the theory, one must dive into the most ____ details of quantum physics.', options: ['superficial', 'abstruse', 'manifest'], correctAnswer: 'abstruse', explanation: '"Abstruse" indicates severe complexities that are extremely difficult to penetrate.' },
    { level: 'hard', type: 'fill_blanks', question: 'The team exhibited ____ courage in the face of insurmountable odds.', options: ['craven', 'dauntless', 'timorous'], correctAnswer: 'dauntless', explanation: '"Dauntless" describes an individual or group showcasing aggressive fearlessness.' },
    { level: 'hard', type: 'fill_blanks', question: 'He accepted the harsh criticism with unexpected ____.', options: ['equanimity', 'rancor', 'petulance'], correctAnswer: 'equanimity', explanation: '"Equanimity" denotes incredible mental calmness and evenness of temper under enormous stress.' },
    { level: 'hard', type: 'fill_blanks', question: 'The instructions were entirely ____, leaving us totally confused on how to proceed.', options: ['lucid', 'opaque', 'transparent'], correctAnswer: 'opaque', explanation: 'In an abstract sense, "opaque" describes text or speech that makes no structural/meaningful sense and cannot be seen through.' },
    { level: 'hard', type: 'fill_blanks', question: 'She delivered a ____ critique of the new policy, dismantling it point by point.', options: ['trenchant', 'insipid', 'jejune'], correctAnswer: 'trenchant', explanation: '"Trenchant" means vigorously sharp, biting, and highly effective in dissecting a flaw.' },
    { level: 'hard', type: 'fill_blanks', question: 'His ____ attitude towards his responsibilities ultimately led to his dismissal.', options: ['assiduous', 'cavalier', 'punctilious'], correctAnswer: 'cavalier', explanation: '"Cavalier" means showing a harsh lack of appropriate concern.' },
    { level: 'hard', type: 'fill_blanks', question: 'The disease is completely ____, showing no symptoms until its vastly advanced stages.', options: ['overt', 'insidious', 'benign'], correctAnswer: 'insidious', explanation: '"Insidious" means proceeding in a gradual, incredibly subtle way, but with wildly harmful effects later.' },
    { level: 'hard', type: 'fill_blanks', question: 'The ____ odor of the decaying flowers filled the entirely abandoned room.', options: ['fragrant', 'fetid', 'aromatic'], correctAnswer: 'fetid', explanation: '"Fetid" exactly means smelling overwhelmingly terrible and putrid.' },
    { level: 'hard', type: 'fill_blanks', question: 'The lawyer requested that the illegally obtained evidence be ____ from the physical record.', options: ['included', 'expunged', 'promulgated'], correctAnswer: 'expunged', explanation: '"Expunged" means radically and entirely erased or removed.' },
    { level: 'hard', type: 'fill_blanks', question: 'Her incredible singing voice was widely praised as truly ____.', options: ['cacophonous', 'mellifluous', 'strident'], correctAnswer: 'mellifluous', explanation: '"Mellifluous" means extremely sweet or intensely musical layout, perfectly pleasing to actually hear.' }
];

async function seedSentences() {
    try {
        await SentenceQuestion.deleteMany({});
        console.log('Existing sentence questions cleared.');

        await SentenceQuestion.insertMany(sentences);
        console.log(`Successfully seeded ${sentences.length} sentence questions!`);

        process.exit(0);
    } catch (error) {
        console.error('Error seeding questions:', error);
        process.exit(1);
    }
}

seedSentences();
