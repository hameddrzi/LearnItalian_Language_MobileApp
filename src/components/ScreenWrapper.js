import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';

/**
 * کامپوننت کمکی برای wrap کردن صفحات
 * تا با TabBar سازگار باشند و محتوا پشت آن قایم نشود
 */
const ScreenWrapper = ({ 
  children, 
  style, 
  scrollable = false, 
  backgroundColor = '#F8F9FA',
  showsVerticalScrollIndicator = false 
}) => {
  if (scrollable) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor }, style]}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]}>
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // فضای کافی برای TabBar
  },
  content: {
    flex: 1,
    paddingBottom: 100, // فضای کافی برای TabBar
  },
});

export default ScreenWrapper;







