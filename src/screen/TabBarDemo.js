import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

/**
 * نمونه‌ای از نحوه استفاده از TabBar در صفحات مختلف
 * 
 * این کامپوننت نشان می‌دهد که چگونه محتوای صفحات را طراحی کنید
 * تا با TabBar ثابت در پایین هماهنگ باشد
 */

const TabBarDemo = ({ navigation, route }) => {
  const screenName = route?.name || 'Demo';
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>صفحه {screenName}</Text>
          <Text style={styles.subtitle}>نمونه استفاده از TabBar</Text>
        </View>

        {/* Content Cards */}
        <View style={styles.contentContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>ویژگی‌های TabBar</Text>
            <Text style={styles.cardText}>
              • نویگیشن ساده و سریع{'\n'}
              • طراحی زیبا و مدرن{'\n'}
              • انیمیشن‌های نرم{'\n'}
              • سازگار با همه صفحات
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>راهنمای استفاده</Text>
            <Text style={styles.cardText}>
              برای تغییر صفحه، روی آیکون‌های پایین ضربه بزنید.
              صفحه فعلی با رنگ آبی مشخص شده است.
            </Text>
          </View>

          {/* Navigation Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.navButton}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.buttonText}>خانه</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.navButton}
              onPress={() => navigation.navigate('Course')}
            >
              <Text style={styles.buttonText}>دوره‌ها</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.navButton}
              onPress={() => navigation.navigate('Search')}
            >
              <Text style={styles.buttonText}>جستجو</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // فضای کافی برای TabBar
  },
  header: {
    backgroundColor: '#4C6EF5',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#E8F0FE',
    textAlign: 'center',
    marginTop: 8,
  },
  contentContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666666',
    lineHeight: 22,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  navButton: {
    backgroundColor: '#4C6EF5',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    minWidth: 80,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
});

export default TabBarDemo;







