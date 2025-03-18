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
    isPrivate: true,
    description: "Explore the essential components of living organisms.",
    duration: "20 Min",
    numQuestions: 10,
    icon: science1img,
    tutorName: "Dr. Charitha Munasinghe",
    status: "notStarted",
    questions: [
      { text: "What is the basic unit of life?", options: ["Cell", "Atom", "Molecule", "Organ"], correctAnswers: [0] },
      { text: "Which parts are found in a cell? (Select multiple)", options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"], correctAnswers: [0, 1, 2] },
      { text: "What is the function of DNA?", options: ["Energy production", "Genetic instruction", "Defense", "Waste removal"], correctAnswers: [1] },
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
      { text: "What is a virus made of?", options: ["Proteins", "DNA/RNA", "Lipids", "All of the above"], correctAnswers: [3] },
      { text: "Which viruses affect humans? (Select multiple)", options: ["Influenza", "HIV", "Ebola", "Bacteriophage"], correctAnswers: [0, 1, 2] },
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
      { text: "What is the function of ribosomes?", options: ["Energy production", "Protein synthesis", "Defense", "Waste removal"], correctAnswers: [1] },
      { text: "Which are components of the cytoskeleton? (Select multiple)", options: ["Microtubules", "Actin filaments", "Intermediate filaments", "Lysosomes"], correctAnswers: [0, 1, 2] },
    ],
  },
];

export const recommendedQuizzes = [
  {
    image: science4img,
    subject: "Biology",
    title: "The Cell Structure",
    isPrivate: false,
    score: 80,
    tutorName: "Dr. Charitha Munasinghe",
    tutorSubject: "Biology",
    tutorIcon: tutorIcon,
    status: "completed",
    questions: [
      { text: "What is the main function of mitochondria?", options: ["DNA replication", "Photosynthesis", "Energy production", "Waste removal"], correctAnswers: [2] },
      { text: "Which organelles are found in plant cells? (Select multiple)", options: ["Chloroplast", "Mitochondria", "Vacuole", "Cilia"], correctAnswers: [0, 1, 2] },
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
      { text: "What is the function of the Golgi apparatus?", options: ["DNA replication", "Protein modification", "Oxygen transport", "Lipid synthesis"], correctAnswers: [1] },
      { text: "Which molecules serve as cell signaling messengers? (Select multiple)", options: ["Hormones", "Neurotransmitters", "Lipids", "Ions"], correctAnswers: [0, 1, 3] },
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
      { text: "Which scientist proposed the three laws of motion?", options: ["Newton", "Einstein", "Galileo", "Bohr"], correctAnswers: [0] },
      { text: "What forces act on a moving car? (Select multiple)", options: ["Gravity", "Friction", "Air resistance", "Magnetism"], correctAnswers: [0, 1, 2] },
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
      { text: "What is the derivative of x^2?", options: ["x", "2x", "x^3", "None"], correctAnswers: [1] },
      { text: "Which rules apply to differentiation? (Select multiple)", options: ["Product Rule", "Quotient Rule", "Power Rule", "Sum Rule"], correctAnswers: [0, 1, 2, 3] },
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
      { text: "What is the atomic number of oxygen?", options: ["6", "7", "8", "9"], correctAnswers: [2] },
      { text: "Which of these are noble gases? (Select multiple)", options: ["Helium", "Neon", "Argon", "Hydrogen"], correctAnswers: [0, 1, 2] },
    ],
  },
];

