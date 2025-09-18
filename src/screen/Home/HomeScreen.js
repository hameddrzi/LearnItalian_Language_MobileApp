import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import BackgroundGradientAnimation from '../../components/ui/BackgroundGradientAnimation';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ userName = "Kristin" }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4C6EF5" />
      
      <ScrollView 
        style={styles.scrollView} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section with Animated Gradient */}
        <BackgroundGradientAnimation style={styles.headerContainer}>
          {/* Content Overlay */}
          <View style={styles.contentOverlay}>
            {/* Top Status Bar Area */}
            <View style={styles.statusBarArea}>
              
              <View style={styles.statusIcons}>


              </View>
            </View>

            {/* Main Header */}
            <View style={styles.mainHeader}>
              <View style={styles.welcomeSection}>
                <Text style={styles.greeting}>Hi, {userName}</Text>
                <Text style={styles.subtitle}>Let's start learning</Text>
              </View>
              
              {/* Character Avatar */}
              <View style={styles.avatarContainer}>
                <Image
                  source={require('../../../assets/pic/HomeAssets/Character.png')}
                  style={styles.characterImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Progress Card */}
            <View style={styles.progressCard}>
              <View style={styles.progressHeader}>
                <View style={styles.learnedSection}>
                  <Text style={styles.learnedLabel}>Learned today</Text>
                  <View style={styles.timeProgress}>
                    <Text style={styles.timeMain}>46min</Text>
                    <Text style={styles.timeTarget}> / 60min</Text>
                  </View>
                  <View style={styles.progressBar}>
                    <View style={styles.progressFill} />
                  </View>
                </View>
                
                <TouchableOpacity style={styles.coursesButton}>
                  <Text style={styles.coursesText}>My courses</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BackgroundGradientAnimation>

        {/* Learning Section */}
        <View style={styles.learningSection}>
          <View style={styles.learningCard}>
            <View style={styles.learningContent}>
              <View style={styles.learningTextSection}>
                <Text style={styles.learningTitle}>What do you want to learn today ?</Text>
                <TouchableOpacity style={styles.getStartedButton}>
                  <Text style={styles.getStartedText}>Get Started</Text>
                </TouchableOpacity>
              </View>
              
              <View style={styles.learningImageSection}>
                <Image
                  source={require('../../../assets/pic/HomeAssets/learn.png')}
                  style={styles.learningImage}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Talk with AI Section */}
        <View style={styles.aiSection}>
          <Text style={styles.aiSectionTitle}>Talk with AI</Text>
          <TouchableOpacity style={styles.aiCard}>
            <View style={styles.aiContent}>
              <View style={styles.aiTextSection}>
                <Text style={styles.aiTitle}>You can start with Ai to learn Italian</Text>
              </View>
              
              <View style={styles.aiImageSection}>
                <Image
                  source={require('../../../assets/pic/HomeAssets/robot.png')}
                  style={styles.aiRobotImage}
                  resizeMode="contain"
                />
              </View>
            </View>
           </TouchableOpacity>
         </View>

         {/* Word of the Day Section */}
         <View style={styles.wordSection}>
           <Text style={styles.wordSectionTitle}>Word of the day</Text>
           <View style={styles.wordCard}>
             <Text style={styles.wordText}>Ciao</Text>
             <Text style={styles.wordTranslation}>Hello / Goodbye</Text>
             <Text style={styles.wordExample}>Ciao bella! - Hello beautiful</Text>
           </View>
         </View>
       </ScrollView>
     </SafeAreaView>
   );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C6EF5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20, // حداقل فضای لازم
  },
  headerContainer: {
    height: 280, // ارتفاع دقیق تا نصف کارت progress
    width: '100%',
  },
  contentOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    paddingBottom: 20,
  },
  statusBarArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  timeText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50,
    padding: 10
  },
  signalBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
  },
  bar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  bar1: {
    width: 3,
    height: 4,
  },
  bar2: {
    width: 3,
    height: 6,
  },
  bar3: {
    width: 3,
    height: 8,
  },
  wifiIcon: {
    marginLeft: 5,
  },
  iconText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  batteryIcon: {
    marginLeft: 5,
  },
  battery: {
    width: 24,
    height: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
  mainHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  welcomeSection: {
    flex: 1,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
  },
  subtitle: {
    color: '#E0E7FF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  characterImage: {
    width: 50,
    height: 50,
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  learnedSection: {
    flex: 1,
  },
  learnedLabel: {
    color: '#9CA3AF',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 8,
  },
  timeProgress: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 12,
  },
  timeMain: {
    color: '#1F2937',
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },
  timeTarget: {
    color: '#9CA3AF',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  progressBar: {
    width: '80%',
    height: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    width: '76%', // 46/60 = 76%
    height: '100%',
    backgroundColor: '#F97316',
    borderRadius: 3,
  },
  coursesButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  coursesText: {
    color: '#4C6EF5',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  learningSection: {
    backgroundColor: '#F8F9FA',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  learningCard: {
    backgroundColor: '#E0F2FE',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  learningContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  learningTextSection: {
    flex: 1,
    paddingRight: 15,
  },
  learningTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
    lineHeight: 28,
  },
  getStartedButton: {
    backgroundColor: '#F97316',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    shadowColor: '#F97316',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-SemiBold',
  },
  learningImageSection: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  learningImage: {
    width: 110,
    height: 110,
  },
  aiSection: {
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  aiSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    fontFamily: 'Poppins-Bold',
    marginBottom: 16,
  },
  aiCard: {
    backgroundColor: '#EE4060',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  aiContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  aiTextSection: {
    flex: 1,
    paddingRight: 15,
  },
  aiTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
    lineHeight: 26,
  },
  aiImageSection: {
    width: 140,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aiRobotImage: {
    width: 250,
    height: 250,
  },
  wordSection: {
    backgroundColor: '#F3E8FF', // Light purple background
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 90, // فقط فضای کافی برای TabBar
  },
  wordSectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7C3AED', // Purple text
    fontFamily: 'Poppins-Bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  wordCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  wordText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#DC2626', // Red color for "Ciao"
    fontFamily: 'Poppins-Bold',
    marginBottom: 8,
  },
  wordTranslation: {
    fontSize: 18,
    color: '#1F2937',
    fontFamily: 'Poppins-Regular',
    marginBottom: 16,
  },
  wordExample: {
    fontSize: 16,
    color: '#059669', // Green color for example
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default HomeScreen;