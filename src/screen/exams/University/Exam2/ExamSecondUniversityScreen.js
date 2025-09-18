import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';

const { width } = Dimensions.get('window');

const ExamFirstUniversityScreen = ({ navigation }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes in seconds

  const examQuestions = [
    {
      id: 1,
      question: "Trasforma il VERBO al passato prossimo.\nDi sera ci addormentiamo davanti alla tv.",
      options: [
        "ci abbiamo addormentato",
        "ti sono addormentato",
        "vi siete addormentati",
        "ci siamo addormentati",
        "ti hai addormentato"
      ],
      correctAnswer: 3
    },
    {
      id: 2,
      question: "Completa la frase con la forma verbale corretta del passato prossimo.\n... il mio lavoro appena in tempo.",
      options: [
        "Ho conclusso",
        "È concluso",
        "Ho concluduto",
        "Ho concluso",
        "Ho conclauso"
      ],
      correctAnswer: 3
    },
    {
      id: 3,
      question: "Completa la frase con la forma verbale corretta del passato prossimo.\nIeri la riunione ... alle 10.",
      options: [
        "è cominciato",
        "ha cominciato",
        "è cominciata",
        "ho cominciato",
        "ha cominciata"
      ],
      correctAnswer: 2
    },
    {
      id: 4,
      question: "Completa la frase con la forma verbale corretta del passato prossimo.\n... partire alle 2 di notte.",
      options: [
        "Siamo dovuti",
        "Ho dovuto",
        "Ha dovuto",
        "È dovuti",
        "Ha dovuta"
      ],
      correctAnswer: 0
    },
    {
      id: 5,
      question: "Completa la frase con l'indicativo imperfetto.\nDa piccola io ... sempre a nascondino.",
      options: [
        "giocava",
        "giocavo",
        "giocevo",
        "gioca",
        "giocavamo"
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "Completa la frase con la forma verbale corretta.\nQuando avevo 15 anni, ... sempre in piscina.",
      options: [
        "andavo",
        "sono andato",
        "vado",
        "andava",
        "andevo"
      ],
      correctAnswer: 0
    },
    {
      id: 7,
      question: "Completa la frase con la forma verbale corretta.\nPrima vivevo a Torino, poi ... a Roma.",
      options: [
        "mi abbiamo trasferiti",
        "mi ho trasferito",
        "mi trasferivo",
        "mi trasferisco",
        "mi sono trasferito"
      ],
      correctAnswer: 4
    },
    {
      id: 8,
      question: "Completa la frase con l'indicativo futuro.\nI miei genitori ... la mia nuova casa.",
      options: [
        "pagheranno",
        "pagherete",
        "pageranno",
        "pagerrete",
        "pagerete"
      ],
      correctAnswer: 0
    },
    {
      id: 9,
      question: "Completa la frase con l'indicativo futuro.\nQuanto ... voi qui a Torino?",
      options: [
        "rimanerete",
        "rimarrete",
        "rimanrete",
        "rimarremo",
        "rimaneremo"
      ],
      correctAnswer: 1
    },
    {
      id: 10,
      question: "Completa il testo con la parola appropriata.\nClaudio e Sonia abitano in una bell'appartamento, con un grande terrazzo pieno di fiori e di piante. La cucina è piuttosto ampia, c'è un bel ............. rettangolare, l'ideale per avere a cena molti ospiti.",
      options: [
        "frigo",
        "tavolo",
        "armadietto",
        "forno",
        "divano"
      ],
      correctAnswer: 1
    },
    {
      id: 11,
      question: "Completa il testo con la parola appropriata.\nIn salotto, sopra ad un bellissimo .............. pregiato, c'è un tavolino di vetro; davanti alla televisione ci sono due comodi divani e a fianco c'è uno scaffale.",
      options: [
        "divano",
        "armadio",
        "tappeto",
        "lavandino",
        "quadro"
      ],
      correctAnswer: 4
    },
    {
      id: 12,
      question: "Completa il testo con la parola appropriata.\nIn uno dei due bagni ci sono due .............e una vasca, mentre nell'altro bagno c'è la doccia.",
      options: [
        "avastoviglie",
        "lavandini",
        "comodini",
        "salotti",
        "librerie"
      ],
      correctAnswer: 1
    },
    {
      id: 13,
      question: "Completa la frase con il PRONOME DIRETTO corretto.\nMi piacciono le tagliatelle, ... cucino sempre!",
      options: [
        "la",
        "mi",
        "lo",
        "le",
        "li"
      ],
      correctAnswer: 3
    },
    {
      id: 14,
      question: "Completa la frase con il pronome diretto ed il passato prossimo corretti.\nHai mangiato i carciofi ripieni?\nNo, non ...",
      options: [
        "le ho ancora mangiate",
        "l'ho ancora mangiati",
        "l'ho ancora mangiato",
        "li ho ancora mangiato",
        "li ho ancora mangiati"
      ],
      correctAnswer: 4
    },
    {
      id: 15,
      question: "Completa la frase con il pronome ed il passato prossimo corretti.\nHai gia' fatto tutti i compiti?\nNo, mi devo sbrigare, ... solo tre!",
      options: [
        "ne ho fatti",
        "li ho fatti",
        "ne ho fatto",
        "l'ho fatti",
        "li ho fatto"
      ],
      correctAnswer: 2
    },
    {
      id: 16,
      question: "Completa la frase.\nVai spesso al cinema?\nNo, non ... vado molto spesso, scarico i film da internet.",
      options: [
        "ti",
        "lo",
        "ne",
        "ci",
        "mi"
      ],
      correctAnswer: 3
    },
    {
      id: 17,
      question: "Completa la frase.\nDevo correre in segreteria studenti e devo fare in fretta! ...",
      options: [
        "Sta per chiudendo",
        "Sta per chiudere",
        "Sta per chiude",
        "Sta chiudere",
        "Sta chiude"
      ],
      correctAnswer: 1
    },
    {
      id: 18,
      question: "Completa la frase con il PRONOME INDIRETTO corretto.\nRoberto si è trasferito in un'altra città e i suoi genitori ... telefonano sempre!",
      options: [
        "lo",
        "le",
        "ti",
        "gli",
        "li"
      ],
      correctAnswer: 3
    },
    {
      id: 19,
      question: "Completa la frase.\nBob è canadese, è in Italia da sei mesi e adesso ... la sua famiglia.",
      options: [
        "gli mancano",
        "si manca",
        "gli manca",
        "ti mancano",
        "mi mancano"
      ],
      correctAnswer: 2
    },
    {
      id: 20,
      question: "Completa la frase con un pronome diretto, indiretto o con il NE.\nSignor Rugiati, ... chiamo per avere informazioni su quel posto di lavoro…",
      options: [
        "La",
        "Le",
        "ti",
        "mi",
        "ne"
      ],
      correctAnswer: 0
    },
    {
      id: 21,
      question: "Completa il testo con la parola appropriata.\nVivo in un quartiere in ................ ,vicino alla zona industriale.",
      options: [
        "centro",
        "fuori",
        "periferia",
        "area",
        "spazio"
      ],
      correctAnswer: 2
    },
    {
      id: 22,
      question: "Completa la frase con l'imperativo informale.\nPietrino, ... ! Accomodati!",
      options: [
        "entrate",
        "entri",
        "entre",
        "entra",
        "entrino"
      ],
      correctAnswer: 3
    },
    {
      id: 23,
      question: "Completa la frase con l'imperativo informale negativo.\nPaolo, ... ! Devi finire i compiti!",
      options: [
        "non uscire",
        "non esci",
        "non esca",
        "non usci",
        "uscire non"
      ],
      correctAnswer: 0
    },
    {
      id: 24,
      question: "Trova il plurale di:\nBRACCIO",
      options: [
        "braccie",
        "bracci",
        "braccia",
        "bracce",
        "braccii"
      ],
      correctAnswer: 1
    },
    {
      id: 25,
      question: "Completa la frase con l'aggettivo possessivo corretto.\nAlberto ha organizzato una festa per ... fratello.",
      options: [
        "loro",
        "la sua",
        "il suo",
        "suo",
        "la mia"
      ],
      correctAnswer: 2
    },
    {
      id: 26,
      question: "Completa la frase con la preposizione corretta.\nL'anno prossimo vado a studiare ... Stati Uniti.",
      options: [
        "a",
        "in",
        "agli",
        "nei",
        "negli"
      ],
      correctAnswer: 4
    },
    {
      id: 27,
      question: "Completa la frase con la preposizione corretta.\nNon ci vedo, devo comprare un nuovo paio di occhiali ... vista.",
      options: [
        "dai",
        "di",
        "da",
        "per",
        "con"
      ],
      correctAnswer: 2
    },
    {
      id: 28,
      question: "Completa la frase con la parola appropriata.\nHo finito il prosciutto, devo andare in ...",
      options: [
        "salumiere",
        "salumeria",
        "mercato",
        "latteria",
        "panettiere"
      ],
      correctAnswer: 1
    },
    {
      id: 29,
      question: "Completa il testo con il tempo verbale appropriato.\nPietro è uno studente e ........il secondo anno di Ingegneria.",
      options: [
        "ha frequentato",
        "frequenterà",
        "frequenta",
        "frequentava",
        "è frequentato"
      ],
      correctAnswer: 2
    },
    {
      id: 30,
      question: "Completa il testo con il tempo verbale appropriato.\nL'anno scorso ha preso una borsa di studio Erasmus ed è partito per la Germania, dove è rimasto per sei mesi. In quel periodo lui ha fatto nuove conoscenze e ......... a tante feste.",
      options: [
        "andava",
        "è andato",
        "va",
        "si è andato",
        "andrà"
      ],
      correctAnswer: 1
    },
    {
      id: 31,
      question: "Trova l'INTRUSO.",
      options: [
        "pomodoro",
        "melanzana",
        "insalata",
        "albicocca",
        "peperone"
      ],
      correctAnswer: 3
    },
    {
      id: 32,
      question: "Trova l'INTRUSO.",
      options: [
        "camicia",
        "gonna",
        "asciugamano",
        "giacca",
        "maglione"
      ],
      correctAnswer: 2
    },
    {
      id: 33,
      question: "Completa la frase con la parola appropriata.\nMarta è appassionata di libri ... ed è più brava di Sherlock Holmes!",
      options: [
        "poesie",
        "verdi",
        "neri",
        "d'avventura",
        "gialli"
      ],
      correctAnswer: 4
    },
    {
      id: 34,
      question: "Completa la frase in modo corretto.\nArianna, sei troppo stanca, ... !",
      options: [
        "hai bisogno di rilassarti",
        "hai bisogno di ti rilassare",
        "ti hai bisogno di rilassare",
        "hai bisogno di rilassarte",
        "hai bisogno di ti rilassarti"
      ],
      correctAnswer: 0
    },
    {
      id: 35,
      question: "Trova l'espressione appropriata per la seguente situazione.\nUn tuo amico ha appena superato l'esame di italiano!",
      options: [
        "Buon viaggio!",
        "Buona fortuna!",
        "Buon appetito!",
        "Complimenti!",
        "In bocca al lupo!"
      ],
      correctAnswer: 3
    }
  ];

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinishExam = () => {
    // Calculate score
    let correctAnswers = 0;
    examQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / examQuestions.length) * 100);
    
    // Navigate to success or failure screen based on score
    if (score >= 60) {
      navigation.replace('SuccesExamFirst', { score, correctAnswers, totalQuestions: examQuestions.length });
    } else {
      navigation.replace('FaildExamFirst', { score, correctAnswers, totalQuestions: examQuestions.length });
    }
  };

  const confirmFinishExam = () => {
    Alert.alert(
      "Finish Test",
      "Are you sure you want to finish the test?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Finish",
          onPress: handleFinishExam
        }
      ]
    );
  };

  const currentQuestionData = examQuestions[currentQuestion];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => {
            // Navigate back to University screen
            navigation.navigate('MainTabs', {
              screen: 'Course',
              params: {
                screen: 'University'
              }
            });
          }}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Test</Text>
        <Text style={styles.timer}>{formatTime(timeRemaining)}</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Question Card */}
        <View style={styles.questionCard}>
          <View style={styles.questionHeader}>
            <Text style={styles.questionLabel}>Question</Text>
            <Text style={styles.questionProgress}>
              {currentQuestion + 1}/{examQuestions.length}
            </Text>
          </View>
          
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { width: `${((currentQuestion + 1) / examQuestions.length) * 100}%` }
              ]} 
            />
          </View>

          <Text style={styles.questionText}>{currentQuestionData.question}</Text>
        </View>

        {/* Answer Options */}
        <View style={styles.optionsContainer}>
          {currentQuestionData.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswers[currentQuestion] === index && styles.selectedOption
              ]}
              onPress={() => handleAnswerSelect(index)}
            >
              <Text style={[
                styles.optionText,
                selectedAnswers[currentQuestion] === index && styles.selectedOptionText
              ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Fixed Bottom Navigation */}
      <View style={styles.fixedBottomContainer}>
        {/* Navigation Buttons */}
        <View style={styles.navigationContainer}>
          <TouchableOpacity 
            style={[styles.navButton, styles.previousButton]}
            onPress={handlePrevious}
            disabled={currentQuestion === 0}
          >
            <Text style={styles.previousIcon}>←</Text>
            <Text style={styles.previousText}>Previous</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.navButton, styles.nextButton]}
            onPress={currentQuestion === examQuestions.length - 1 ? confirmFinishExam : handleNext}
          >
            <Text style={styles.nextText}>
              {currentQuestion === examQuestions.length - 1 ? 'Finish' : 'Next'}
            </Text>
            {currentQuestion !== examQuestions.length - 1 && (
              <Text style={styles.nextIcon}>→</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Finish Test Button */}
        <TouchableOpacity 
          style={styles.finishButton}
          onPress={confirmFinishExam}
        >
          <Text style={styles.finishButtonText}>Finish The Test</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6B9D',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  scrollContent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  fixedBottomContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
  },
  timer: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
  },
  questionCard: {
    backgroundColor: '#F8F9FE',
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  questionLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#6B7280',
  },
  questionProgress: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#6B7280',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginBottom: 20,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FBC02D',
    borderRadius: 3,
  },
  questionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#1F2937',
    lineHeight: 24,
  },
  optionsContainer: {
    marginBottom: 30,
  },
  optionButton: {
    backgroundColor: '#F8F9FE',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedOption: {
    backgroundColor: '#FF6B9D',
    borderColor: '#FF6B9D',
  },
  optionText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#1F2937',
    textAlign: 'center',
  },
  selectedOptionText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    minWidth: 120,
    justifyContent: 'center',
  },
  previousButton: {
    backgroundColor: '#F8F9FE',
  },
  nextButton: {
    backgroundColor: '#FF6B9D',
  },
  previousIcon: {
    fontSize: 16,
    color: '#6B7280',
    marginRight: 8,
    
  },
  previousText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#6B7280',
  },
  nextText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
  },
  nextIcon: {
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 8,
  },
  finishButton: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    alignItems: 'center',
  },
  finishButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#6B7280',
    textDecorationLine: 'underline',
  },
});

export default ExamSecondUniversityScreen;
