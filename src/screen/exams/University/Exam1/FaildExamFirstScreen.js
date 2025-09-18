import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const FaildExamFirstScreen = ({ navigation, route }) => {
  const { score, correctAnswers, totalQuestions } = route.params || {
    score: 0,
    correctAnswers: 0,
    totalQuestions: 35
  };

  const handleBackToUniversity = () => {
    const parentNavigator = navigation.getParent();
    if (parentNavigator) {
      parentNavigator.navigate('MainTabs', { 
        screen: 'Course', 
        params: { screen: 'University' }
      });
    }
  };

  const handleRetakeExam = () => {
    navigation.replace('ExamFirstUniversity');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>

          <Text style={styles.headerTitle}>Test Result</Text>
          <View style={styles.placeholder} />
        </View>

        {/* Failed Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.failedIcon}>
            <Text style={styles.failedIconText}>✗</Text>
          </View>
        </View>

        {/* Failed Message */}
        <Text style={styles.failedTitle}>Try Again!</Text>
        <Text style={styles.failedSubtitle}>Don't worry, you can retake the exam to improve your score</Text>

        {/* Score Card */}
        <View style={styles.scoreCard}>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Your Score:</Text>
            <Text style={styles.scoreValue}>{score}%</Text>
          </View>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Correct Answers:</Text>
            <Text style={styles.scoreValue}>{correctAnswers}/{totalQuestions}</Text>
          </View>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Required Score:</Text>
            <Text style={styles.scoreValue}>60%</Text>
          </View>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreLabel}>Status:</Text>
            <Text style={[styles.scoreValue, styles.failedText]}>FAILED</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.retakeButton]}
            onPress={handleRetakeExam}
          >
            <Text style={styles.retakeButtonText}>Retake Exam</Text>
          </TouchableOpacity>

          <TouchableOpacity
  style={[styles.button, styles.backButton2]}
  onPress={() =>
    navigation.navigate('ExamFirstResults', {
      ...route.params   // همه‌ی داده‌هایی که از امتحان گرفتی (score, answers, questions ...)
    })
  }
>
  <Text style={styles.backButtonText}>Check Results</Text>
</TouchableOpacity>

        </View>

        {/* Encouragement Message */}
        <View style={styles.encouragementContainer}>
          <Text style={styles.encouragementText}>
            💡 Study more and try again! You can do it!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF5722',
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#1F2937',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginLeft: 135,
  },
  placeholder: {
    width: 40,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  failedIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FF5722',
    justifyContent: 'center',
    alignItems: 'center',
  },
  failedIconText: {
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  failedTitle: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 10,
  },
  failedSubtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 40,
  },
  scoreCard: {
    backgroundColor: '#F8F9FA',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 25,
    marginBottom: 30,
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  scoreLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#6B7280',
  },
  scoreValue: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
  },
  failedText: {
    color: '#FF5722',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  retakeButton: {
    backgroundColor: '#FF5722',
  },
  retakeButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
  },
  backButton2: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  backButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#6B7280',
  },
  encouragementContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  encouragementText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default FaildExamFirstScreen;
