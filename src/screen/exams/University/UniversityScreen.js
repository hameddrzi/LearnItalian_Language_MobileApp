import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const UniversityScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const exams = [
    {
      id: 1,
      title: 'Exam 1',
      description: '1_Exam of university',
      duration: '45 Minutes',
      image: require('../../../../assets/pic/Exams/University/Exam1Pic.png'),
      route: 'ExamFirstUniversity'
    },
    {
      id: 2,
      title: 'Exam 2',
      description: '2_Exam of university',
      duration: '45 Minutes',
      image: require('../../../../assets/pic/Exams/University/Exam2Pic.png'),
      route: 'ExamSecondUniversity'
    },
    {
      id: 3,
      title: 'Exam 3',
      description: '3_Exam of university',
      duration: '45 Minutes',
      image: require('../../../../assets/pic/Exams/University/Exam3Pic.png'),
      route: 'ExamThirdUniversity'
    },
    {
      id: 4,
      title: 'Exam 4',
      description: '4_Exam of university',
      duration: '45 Minutes',
      image: require('../../../../assets/pic/Exams/University/Exam4Pic.png'),
      route: 'ExamFourthUniversity'
    }
  ];

  // Filter exams based on search query
  const filteredExams = exams.filter(exam => 
    exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exam.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExamPress = (route) => {
    // Navigate to the parent navigator (MainStack) instead of CourseStack
    if (route === 'ExamFirstUniversity') {
      const parentNavigator = navigation.getParent();
      if (parentNavigator) {
        parentNavigator.navigate('ExamFirstUniversity');
      }
    } else {
      navigation.navigate(route);
    }
  };

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>University</Text>
          <View style={styles.avatar}>
            <View style={styles.avatarCircle}>
              <View style={styles.avatarInner} />
            </View>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <View style={styles.searchIcon}>
              <Text style={styles.searchIconText}>🔍</Text>
            </View>
            <TextInput
              style={styles.searchInput}
              placeholder="Find Exam"
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={handleSearchChange}
              returnKeyType="search"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
                <Text style={styles.clearIcon}>✕</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Choice your Exam Title */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Choice your Exam</Text>
        </View>

        {/* Exam Cards */}
        <View style={styles.examsContainer}>
          {filteredExams.length > 0 ? (
            filteredExams.map((exam, index) => (
              <TouchableOpacity
                key={exam.id}
                style={styles.examCard}
                onPress={() => handleExamPress(exam.route)}
                activeOpacity={0.8}
              >
                <View style={styles.examImageContainer}>
                  <Image source={exam.image} style={styles.examImage} resizeMode="contain" />
                </View>
                <View style={styles.examContent}>
                  <Text style={styles.examTitle}>{exam.title}</Text>
                  <View style={styles.examDescription}>
                    <Text style={styles.examDescriptionIcon}>👤</Text>
                    <Text style={styles.examDescriptionText}>{exam.description}</Text>
                  </View>
                  <Text style={styles.examDuration}>{exam.duration}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : searchQuery.length > 0 ? (
            <View style={styles.noResultsContainer}>
              <Text style={styles.noResultsText}>No exams found for "{searchQuery}"</Text>
              <TouchableOpacity onPress={clearSearch} style={styles.clearSearchButton}>
                <Text style={styles.clearSearchText}>Clear Search</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 30,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FF6B9D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInner: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchIconText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#1F2937',
  },
  sectionHeader: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
  },
  examsContainer: {
    paddingHorizontal: 20,
  },
  examCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  examImageContainer: {
    width: 80,
    height: 80,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  examImage: {
    width: 70,
    height: 70,
  },
  examContent: {
    flex: 1,
    justifyContent: 'center',
  },
  examTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  examDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  examDescriptionIcon: {
    fontSize: 14,
    marginRight: 5,
  },
  examDescriptionText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#9CA3AF',
  },
  examDuration: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#FF6B35',
  },
  clearButton: {
    padding: 5,
    marginLeft: 5,
  },
  clearIcon: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  noResultsText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 20,
  },
  clearSearchButton: {
    backgroundColor: '#FF6B9D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  clearSearchText: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
  },
});

export default UniversityScreen;

