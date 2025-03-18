import tutorIcon from "../assets/person.png";
import science1img from "../assets/science.svg";
import science2img from "../assets/science-2.svg";
import science3img from "../assets/science-3.svg";
import gramerphone from "../assets/gramophone.svg";
import science4img from "../assets/science-4.svg";
import science5img from "../assets/science-5.svg";
import science6img from "../assets/science-6.svg";
import science7img from "../assets/science-7.svg";
import science8img from "../assets/science-8.svg";
import science9img from "../assets/science-9.svg";
import science10img from "../assets/science-10.svg";

export const quizCardData = [
  {
    image: science1img,
    subject: "Biology",
    title: "Building Blocks of Life",
    isPrivate: false,
    description: "Explore the essential components of living organisms.",
    duration: "20 Min",
    numQuestions: 10,
    icon: science1img,
    tutorName: "Dr. Charitha Munasinghe",
    status: "notStarted",
    guidelines: [
      "Read each question carefully before answering.",
      "Be mindful of the timer—it keeps track of your progress.",
      "You can select multiple answers if required.",
      "Once submitted, answers cannot be changed.",
    ],
    questions: [
      {
        text: "What is the basic unit of life?",
        options: ["Cell", "Atom", "Molecule", "Organ"],
        correctAnswers: [0], 
        hasIcon: true,
      },
      {
        text: "Which organelle generates energy in cells?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
        correctAnswers: [1],
      },
      {
        text: "What is DNA responsible for?",
        options: [
          "Genetic instruction",
          "Energy production",
          "Waste removal",
          "Oxygen transport",
        ],
        correctAnswers: [0], 
        hasIcon: true,
      },
      {
        text: "Which parts are found in a cell? (Select multiple)",
        options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"],
        correctAnswers: [0, 1, 2],
      },
    ],
  },
  {
    image: science4img,
    subject: "Biology",
    title: "Human Body Systems",
    isPrivate: false,
    description:
      "Explore the major systems of the human body and their functions.",
    duration: "20 Min",
    numQuestions: 10,
    icon: science4img,
    tutorName: "Dr. Sarah Green",
    status: "notStarted",
    questions: [
      {
        text: "What is the primary function of the circulatory system?",
        options: [
          "Transport oxygen",
          "Digest food",
          "Transmit signals",
          "Filter waste",
        ],
        correctAnswers: [0],
      },
      {
        text: "Which of these are parts of the nervous system? (Select multiple)",
        options: ["Brain", "Spinal Cord", "Nerves", "Heart"],
        correctAnswers: [0, 1, 2],
      },
      {
        text: "Which organ helps in detoxifying blood?",
        options: ["Liver", "Kidney", "Heart", "Lungs"],
        correctAnswers: [0],
      },
      {
        text: "What system includes bones and muscles?",
        options: ["Skeletal", "Digestive", "Respiratory", "Endocrine"],
        correctAnswers: [0],
      },
      {
        text: "Which hormone regulates blood sugar?",
        options: ["Insulin", "Adrenaline", "Estrogen", "Cortisol"],
        correctAnswers: [0],
      },
      {
        text: "Which of these are functions of the respiratory system? (Select multiple)",
        options: [
          "Gas exchange",
          "Oxygen transport",
          "Digestion",
          "Carbon dioxide removal",
        ],
        correctAnswers: [0, 1, 3],
      },
      {
        text: "Which organ is responsible for pumping blood?",
        options: ["Heart", "Lungs", "Liver", "Kidney"],
        correctAnswers: [0],
      },
      {
        text: "What part of the body produces insulin?",
        options: ["Pancreas", "Liver", "Heart", "Brain"],
        correctAnswers: [0],
      },
      {
        text: "Which organ helps in breaking down food?",
        options: ["Stomach", "Heart", "Liver", "Lungs"],
        correctAnswers: [0],
      },
      {
        text: "Which of these are sensory organs? (Select multiple)",
        options: ["Eyes", "Ears", "Skin", "Stomach"],
        correctAnswers: [0, 1, 2],
      },
    ],
  },

  
  {
    image: science9img,
    subject: "History",
    title: "Ancient Civilizations",
    isPrivate: true,
    description: "Explore the ancient empires and their historical significance.",
    duration: "25 Min",
    numQuestions: 10,
    icon: science9img,
    tutorName: "Prof. William Harris",
    status: "completed",
    guidelines: [
      "History questions may include multiple-choice and true/false.",
      "Use your knowledge and reasoning skills to pick the best answer.",
      "If unsure, try eliminating incorrect choices first.",
      "Do not rush—some questions require extra thought.",
    ],
    questions: [
      {
        text: "Which civilization built the pyramids?",
        options: ["Egyptians", "Romans", "Greeks", "Aztecs"],
        correctAnswers: [0],
      },
      {
        text: "Which of these civilizations flourished in Mesopotamia? (Select multiple)",
        options: ["Sumerians", "Babylonians", "Persians", "Mongols"],
        correctAnswers: [0, 1, 2],
      },
      {
        text: "Who was the first emperor of China?",
        options: [
          "Qin Shi Huang",
          "Genghis Khan",
          "Kublai Khan",
          "Sun Yat-sen",
        ],
        correctAnswers: [0],
      },
      {
        text: "What writing system did the Sumerians develop?",
        options: ["Cuneiform", "Hieroglyphics", "Alphabet", "Kanji"],
        correctAnswers: [0],
      },
      {
        text: "Which famous library was located in ancient Egypt?",
        options: [
          "Library of Alexandria",
          "Vatican Library",
          "Bodleian Library",
          "New York Public Library",
        ],
        correctAnswers: [0],
      },
      {
        text: "Which of these were part of the Roman Empire? (Select multiple)",
        options: ["Italy", "France", "Spain", "Japan"],
        correctAnswers: [0, 1, 2],
      },
      {
        text: "What empire built the Great Wall of China?",
        options: ["Qin Dynasty", "Ming Dynasty", "Han Dynasty", "Tang Dynasty"],
        correctAnswers: [0],
      },
      {
        text: "Who was the Greek god of war?",
        options: ["Ares", "Zeus", "Apollo", "Hades"],
        correctAnswers: [0],
      },
      {
        text: "Which civilization invented democracy?",
        options: ["Athens", "Sparta", "Rome", "Persia"],
        correctAnswers: [0],
      },
      {
        text: "Which of these civilizations practiced pyramid-building? (Select multiple)",
        options: ["Maya", "Egyptians", "Aztecs", "Romans"],
        correctAnswers: [0, 1, 2],
      },
    ],
  },

  {
    image: science10img,
    subject: "Geography",
    title: "World Geography",
    isPrivate: false,
    description: "Learn about countries, landscapes, and geographical wonders.",
    duration: "18 Min",
    numQuestions: 10,
    icon: science10img,
    tutorName: "Dr. Mark Richards",
    status: "notStarted",
    questions: [
      {
        text: "What is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        correctAnswers: [0],
      },
      {
        text: "Which countries are in South America? (Select multiple)",
        options: ["Brazil", "Argentina", "Colombia", "South Africa"],
        correctAnswers: [0, 1, 2],
      },
      {
        text: "What is the capital of Australia?",
        options: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
        correctAnswers: [0],
      },
      {
        text: "Which continent has the most countries?",
        options: ["Africa", "Europe", "Asia", "South America"],
        correctAnswers: [0],
      },
      {
        text: "Which is the largest ocean?",
        options: ["Pacific", "Atlantic", "Indian", "Arctic"],
        correctAnswers: [0],
      },
      {
        text: "Which countries have deserts? (Select multiple)",
        options: ["USA", "Australia", "Egypt", "Russia"],
        correctAnswers: [0, 1, 2],
      },
      {
        text: "What is the capital of Japan?",
        options: ["Tokyo", "Osaka", "Kyoto", "Sapporo"],
        correctAnswers: [0],
      },
      {
        text: "Which continent is Mount Everest located on?",
        options: ["Asia", "Europe", "South America", "Africa"],
        correctAnswers: [0],
      },
      {
        text: "Which is the largest island in the world?",
        options: ["Greenland", "Australia", "Madagascar", "Borneo"],
        correctAnswers: [0],
      },
      {
        text: "Which countries are in Europe? (Select multiple)",
        options: ["Germany", "France", "Spain", "Canada"],
        correctAnswers: [0, 1, 2],
      },
    ],
  },

  {
    image: gramerphone,
    subject: "Music",
    title: "Musical Instruments",
    isPrivate: false,
    description:
      "Discover different types of musical instruments and their history.",
    duration: "15 Min",
    numQuestions: 10,
    icon: gramerphone,
    tutorName: "Ms. Emily Carter",
    status: "notStarted",
    questions: [
      {
        text: "Which instrument has strings?",
        options: ["Guitar", "Drums", "Flute", "Piano"],
        correctAnswers: [0],
      },
      {
        text: "Which of these are percussion instruments? (Select multiple)",
        options: ["Drums", "Cymbals", "Tambourine", "Violin"],
        correctAnswers: [0, 1, 2],
      },
      {
        text: "What family does the trumpet belong to?",
        options: ["Brass", "Woodwind", "String", "Percussion"],
        correctAnswers: [0],
      },
      {
        text: "Which instrument uses a bow?",
        options: ["Violin", "Guitar", "Drums", "Trumpet"],
        correctAnswers: [0],
      },
      {
        text: "Which of these are woodwind instruments?",
        options: ["Flute", "Clarinet", "Oboe", "Saxophone"],
        correctAnswers: [0, 1, 2, 3],
      },
    ],
  },
  {
    image: science2img,
    subject: "Biology",
    title: "Cracking the Code of Viruses",
    isPrivate: true,
    description: "Understand viruses and how they impact health.",
    duration: "15 Min",
    numQuestions: 10,
    icon: science2img,
    tutorName: "Dr. Charitha Munasinghe",
    status: "notStarted",
    questions: [
      {
        text: "What is a virus made of?",
        options: ["Proteins", "DNA/RNA", "Lipids", "All of the above"],
        correctAnswers: [3],
      },
      {
        text: "Which viruses affect humans? (Select multiple)",
        options: ["Influenza", "HIV", "Ebola", "Bacteriophage"],
        correctAnswers: [0, 1, 2],
      },
    ],
  },
  {
    image: science3img,
    subject: "Biology",
    title: "Boarding Basics",
    isPrivate: true,
    description: "Learn the foundation of cell functions and structures.",
    duration: "25 Min",
    numQuestions: 10,
    icon: science3img,
    tutorName: "Dr. Charitha Munasinghe",
    status: "notStarted",
    questions: [
      {
        text: "What is the function of ribosomes?",
        options: [
          "Energy production",
          "Protein synthesis",
          "Defense",
          "Waste removal",
        ],
        correctAnswers: [1],
      },
      {
        text: "Which are components of the cytoskeleton? (Select multiple)",
        options: [
          "Microtubules",
          "Actin filaments",
          "Intermediate filaments",
          "Lysosomes",
        ],
        correctAnswers: [0, 1, 2],
      },
    ],
  },
];

export const recommendedQuizzes = [
  {
    image: science3img,
    subject: "Physics",
    title: "Laws of Motion",
    isPrivate: false,
    score: 90,
    tutorName: "Dr. Charitha Munasinghe",
    tutorSubject: "Physics",
    tutorIcon: tutorIcon,
    status: "completed",
    questions: [
      {
        text: "Which scientist proposed the three laws of motion?",
        options: ["Newton", "Einstein", "Galileo", "Bohr"],
        correctAnswers: [0],
        hasIcon: true,
      },
      {
        text: "What forces act on a moving car? (Select multiple)",
        options: ["Gravity", "Friction", "Air resistance", "Magnetism"],
        correctAnswers: [0, 1, 2],
      },
      {
        text: "Which of Newton's laws explains inertia?",
        options: ["First", "Second", "Third", "None"],
        correctAnswers: [0],
        hasIcon: true,
      },
      {
        text: "What happens when two forces act on an object?",
        options: [
          "They cancel out",
          "They add up",
          "They create friction",
          "They do nothing",
        ],
        correctAnswers: [1],
      },
      {
        text: "Which is a vector quantity? (Select multiple)",
        options: ["Velocity", "Speed", "Acceleration", "Mass"],
        correctAnswers: [0, 2],
        hasIcon: true,
      },
      {
        text: "What is the SI unit of force?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        correctAnswers: [0],
      },
      {
        text: "What causes acceleration in an object?",
        options: ["Mass", "Gravity", "Force", "Friction"],
        correctAnswers: [2],
        hasIcon: true,
      },
      {
        text: "Which of these are real forces? (Select multiple)",
        options: ["Centripetal", "Friction", "Gravitational", "Magnetic"],
        correctAnswers: [0, 1, 2, 3],
      },
      {
        text: "What is Newton's Third Law?",
        options: [
          "F=ma",
          "For every action, there is an equal and opposite reaction",
          "Gravity pulls objects down",
          "Momentum is conserved",
        ],
        correctAnswers: [1],
      },
      {
        text: "What happens when an object moves in a straight line at constant speed?",
        options: [
          "No force acts on it",
          "Balanced forces act",
          "Gravity disappears",
          "It stops",
        ],
        correctAnswers: [1],
      },
    ],
  },
  {
    image: science5img,
    subject: "Biology",
    title: "Cell Communication",
    isPrivate: true,
    score: 85,
    tutorName: "Dr. Charitha Munasinghe",
    tutorSubject: "Biology",
    tutorIcon: tutorIcon,
    status: "completed",
    questions: [
      {
        text: "What is the function of the Golgi apparatus?",
        options: [
          "DNA replication",
          "Protein modification",
          "Oxygen transport",
          "Lipid synthesis",
        ],
        correctAnswers: [1],
      },
      {
        text: "Which molecules serve as cell signaling messengers? (Select multiple)",
        options: ["Hormones", "Neurotransmitters", "Lipids", "Ions"],
        correctAnswers: [0, 1, 3],
      },
    ],
  },
  {
    image: science6img,
    subject: "Physics",
    title: "Laws of Motion",
    isPrivate: true,
    score: 90,
    tutorName: "Dr. Charitha Munasinghe",
    tutorSubject: "Physics",
    tutorIcon: tutorIcon,
    status: "completed",
    questions: [
      {
        text: "Which scientist proposed the three laws of motion?",
        options: ["Newton", "Einstein", "Galileo", "Bohr"],
        correctAnswers: [0],
      },
      {
        text: "What forces act on a moving car? (Select multiple)",
        options: ["Gravity", "Friction", "Air resistance", "Magnetism"],
        correctAnswers: [0, 1, 2],
      },
    ],
  },
  {
    image: science7img,
    subject: "Mathematics",
    title: "Calculus Simplified",
    isPrivate: true,
    score: 85,
    tutorName: "Anoma Rathnayake",
    tutorSubject: "Mathematics",
    tutorIcon: tutorIcon,
    status: "completed",
    questions: [
      {
        text: "What is the derivative of x^2?",
        options: ["x", "2x", "x^3", "None"],
        correctAnswers: [1],
      },
      {
        text: "Which rules apply to differentiation? (Select multiple)",
        options: ["Product Rule", "Quotient Rule", "Power Rule", "Sum Rule"],
        correctAnswers: [0, 1, 2, 3],
      },
    ],
  },
  {
    image: science8img,
    subject: "Chemistry",
    title: "Periodic Table",
    isPrivate: true,
    score: 88,
    tutorName: "Dr. Charitha Munasinghe",
    tutorSubject: "Chemistry",
    tutorIcon: tutorIcon,
    status: "completed",
    questions: [
      {
        text: "What is the atomic number of oxygen?",
        options: ["6", "7", "8", "9"],
        correctAnswers: [2],
      },
      {
        text: "Which of these are noble gases? (Select multiple)",
        options: ["Helium", "Neon", "Argon", "Hydrogen"],
        correctAnswers: [0, 1, 2],
      },
    ],
  },
];
