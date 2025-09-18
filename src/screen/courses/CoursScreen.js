import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const CoursScreen = ({ navigation }) => {
  const courses = [
    {
      id: 'university',
      title: 'University',
      completed: 14,
      total: 24,
      progress: 0.58,
      backgroundColor: '#FFE4E6',
      progressColor: '#FF6B9D',
      playButtonColor: '#FF6B9D',
      route: 'University'
    },
    {
      id: 'b2',
      title: 'B2',
      completed: 12,
      total: 18,
      progress: 0.67,
      backgroundColor: '#E3F2FD',
      progressColor: '#2196F3',
      playButtonColor: '#2196F3',
      route: 'B2'
    },
    {
      id: 'b1',
      title: 'B1',
      completed: 10,
      total: 16,
      progress: 0.63,
      backgroundColor: '#E0F2F1',
      progressColor: '#26A69A',
      playButtonColor: '#26A69A',
      route: 'B1'
    },
    {
      id: 'a2',
      title: 'A2',
      completed: 10,
      total: 16,
      progress: 0.63,
      backgroundColor: '#FFF9C4',
      progressColor: '#FBC02D',
      playButtonColor: '#F57F17',
      route: 'A2'
    },
    {
      id: 'glossary',
      title: 'Glossary',
      completed: 10,
      total: 16,
      progress: 0.63,
      backgroundColor: '#E8EAF6',
      progressColor: '#5C6BC0',
      playButtonColor: '#3F51B5',
      route: 'Glossary',
      isFullWidth: true
    }
  ];

  const handleCoursePress = (route) => {
    navigation.navigate(route);
  };

  const renderCourseCard = (course, index) => {
    const cardStyle = course.isFullWidth 
      ? [styles.courseCard, styles.fullWidthCard, { backgroundColor: course.backgroundColor }]
      : [styles.courseCard, { backgroundColor: course.backgroundColor }];

    return (
      <TouchableOpacity
        key={course.id}
        style={cardStyle}
        onPress={() => handleCoursePress(course.route)}
        activeOpacity={0.8}
      >
        {/* Title */}
        <Text style={styles.courseTitle}>{course.title}</Text>
        
        {/* Progress Bar - in the middle */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <View 
              style={[
                styles.progressFill, 
                { 
                  width: `${course.progress * 100}%`,
                  backgroundColor: course.progressColor 
                }
              ]} 
            />
          </View>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <View style={styles.completedInfo}>
            <Text style={styles.completedLabel}>Completed</Text>
            <Text style={styles.completedNumbers}>
              {course.completed}/{course.total}
            </Text>
          </View>
          
          <TouchableOpacity 
            style={[styles.playButton, { backgroundColor: course.playButtonColor }]}
            onPress={() => handleCoursePress(course.route)}
          >
            <Text style={styles.playIcon}>▶</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>My courses</Text>
        </View>

        {/* Learned Today Card */}
        <View style={styles.progressCard}>
          <Text style={styles.progressLabel}>Learned today</Text>
          <View style={styles.timeSection}>
            <Text style={styles.timeText}>46min</Text>
            <Text style={styles.timeTarget}> / 60min</Text>
          </View>
          <View style={styles.dailyProgressContainer}>
            <View style={styles.dailyProgressBackground}>
              <View style={[styles.dailyProgressFill, { width: '77%' }]} />
            </View>
          </View>
        </View>

        {/* Course Cards */}
        <View style={styles.coursesContainer}>
          {/* First Row */}
          <View style={styles.courseRow}>
            {renderCourseCard(courses[0], 0)}
            {renderCourseCard(courses[1], 1)}
          </View>
          
          {/* Second Row */}
          <View style={styles.courseRow}>
            {renderCourseCard(courses[2], 2)}
            {renderCourseCard(courses[3], 3)}
          </View>
          
          {/* Third Row - Full Width */}
          <View style={styles.courseRow}>
            {renderCourseCard(courses[4], 4)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
    backgroundColor: '#F8F9FA',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // فضای کافی برای TabBar
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    textAlign: 'center',
  },
  progressCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 30,
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  progressLabel: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#9CA3AF',
    marginBottom: 8,
  },
  timeSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 12,
  },
  timeText: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
  },
  timeTarget: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#9CA3AF',
  },
  dailyProgressContainer: {
    height: 8,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
  },
  dailyProgressBackground: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
  },
  dailyProgressFill: {
    height: '100%',
    backgroundColor: '#FF6B35',
    borderRadius: 4,
  },
  coursesContainer: {
    paddingHorizontal: 20,
    marginTop:30,
  },
  courseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  courseCard: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 24,
    padding: 20,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    justifyContent: 'space-between',
  },
  fullWidthCard: {
    flex: 1,
    aspectRatio: 2.2,
    marginHorizontal: 0,
  },
  courseTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    marginBottom: 0,
  },
  progressContainer: {
    marginVertical: 15,
  },
  progressBackground: {
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  completedInfo: {
    flex: 1,
  },
  completedLabel: {
    fontSize: 11,
    fontFamily: 'Poppins-Regular',
    color: '#374151',
    marginBottom: 2,
    opacity: 0.8,
  },
  completedNumbers: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    lineHeight: 28,
  },
  playButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  playIcon: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 3,
    fontFamily: 'Poppins-Bold',
  },
});

export default CoursScreen;
