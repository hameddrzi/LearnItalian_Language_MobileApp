import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';

// Import your screens
import HomeScreen from './Home/HomeScreen';
import TabBar from './TabBar';
import ScreenWrapper from '../components/ScreenWrapper';
import CoursScreen from './courses/CoursScreen';
import UniversityScreen from './exams/University/UniversityScreen';
import B2Screen from './exams/B2/B2Screen';
import B1Screen from './exams/B1/B1Screen';
import A2Screen from './exams/A2/A2Screen';
import A1Screen from './exams/A1/A1Screen'; 
import GlossaryScreen from './glossary/GlossaryScreen';

//Exam univerity 1
import ExamFirstUniversityScreen from './exams/University/Exam1/ExamFirstUniversityScreen';
import SuccesExamFirstScreen from './exams/University/Exam1/SuccesExamFirstScreen';
import FaildExamFirstScreen from './exams/University/Exam1/FaildExamFirstScreen';
import ExamFirstResultScreen from './exams/University/Exam1/ExamFirstResultScreen';


// Create Stack Navigator for Course screens (with TabBar)
const CourseStack = createStackNavigator();

const CourseStackNavigator = () => (
  <CourseStack.Navigator 
    initialRouteName="CoursMain"
    screenOptions={{ 
      headerShown: false,
      cardStyle: { backgroundColor: 'transparent' }
    }}
  >
    <CourseStack.Screen 
      name="CoursMain" 
      component={CoursScreen}
      options={{ 
        title: 'Courses',
        // Reset stack when navigating to this screen
        headerBackVisible: false
      }}
    />
    <CourseStack.Screen 
      name="University" 
      component={UniversityScreen}
      options={{ title: 'University' }}
    />
    <CourseStack.Screen name="B2" component={B2Screen} />
    <CourseStack.Screen name="B1" component={B1Screen} />
    <CourseStack.Screen name="A2" component={A2Screen} />
    <CourseStack.Screen name="A1" component={A1Screen} />
    <CourseStack.Screen name="Glossary" component={GlossaryScreen} />
  </CourseStack.Navigator>
);

// Main Stack Navigator that contains TabNavigator and Exam screens
const MainStack = createStackNavigator();

// Placeholder screens for other tabs
const SearchScreen = () => (
  <ScreenWrapper>
    <View style={styles.content}>
      <Text style={styles.screenText}>Search Screen</Text>
      <Text style={styles.description}>Search screen</Text>
    </View>
  </ScreenWrapper>
);

const MessageScreen = () => (
  <ScreenWrapper>
    <View style={styles.content}>
      <Text style={styles.screenText}>Message Screen</Text>
      
    </View>
  </ScreenWrapper>
);

const AccountScreen = () => (
  <ScreenWrapper>
    <View style={styles.content}>
      <Text style={styles.screenText}>Account Screen</Text>
      <Text style={styles.description}>صفحه حساب کاربری</Text>
    </View>
  </ScreenWrapper>
);

const Tab = createBottomTabNavigator();

// TabNavigator component
const TabNavigator = () => (
  <Tab.Navigator
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Home"
  >
    <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{ title: 'Home' }}
    />
    <Tab.Screen 
      name="Course" 
      component={CourseStackNavigator}
      options={{ title: 'Course' }}
    />
    <Tab.Screen 
      name="Search" 
      component={SearchScreen}
      options={{ title: 'Search' }}
    />
    <Tab.Screen 
      name="Message" 
      component={MessageScreen}
      options={{ title: 'Message' }}
    />
    <Tab.Screen 
      name="Account" 
      component={AccountScreen}
      options={{ title: 'Account' }}
    />
  </Tab.Navigator>
);

// Main Navigator with full-screen exam support
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="MainTabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="MainTabs" component={TabNavigator} />
        <MainStack.Screen name="ExamFirstUniversity" component={ExamFirstUniversityScreen} />
        <MainStack.Screen name="SuccesExamFirst" component={SuccesExamFirstScreen} />
        <MainStack.Screen name="FaildExamFirst" component={FaildExamFirstScreen} />
        <MainStack.Screen name="ExamFirstResults" component={ExamFirstResultScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  screenText: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#4C6EF5',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#666666',
    textAlign: 'center',
  },
});

export default MainNavigator;
