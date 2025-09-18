import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const { width } = Dimensions.get('window');

const TabBar = ({ state, descriptors, navigation }) => {
  const tabs = [
    { name: 'Home',    icon: require('../../assets/pic/barFooter/Home.png'),    label: 'Home',    route: 'Home' },
    { name: 'Course',  icon: require('../../assets/pic/barFooter/Cours.png'),   label: 'Course',  route: 'Course' },
    { name: 'Search',  icon: require('../../assets/pic/barFooter/Search.png'),  label: 'Search',  route: 'Search' },
    { name: 'Message', icon: require('../../assets/pic/barFooter/Message.png'), label: 'Message', route: 'Message' },
    { name: 'Account', icon: require('../../assets/pic/barFooter/Account.png'), label: 'Account', route: 'Account' },
  ];

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require('../../assets/pic/barFooter/Bar.png')}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      {/* Tab Items */}
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => {
          const isFocused = state.index === index;
          const route = state.routes[index]; // route تب فعلی

          const onPress = () => {
            if (tab.route === 'Course') {
              // همیشه و فقط CoursMain را باز کن
              navigation.navigate('Course', { screen: 'CoursMain' });
              return;
            }

            // رفتار استاندارد برای تب‌های دیگر
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (event.defaultPrevented) return;

            navigation.navigate(tab.route);
          };

          return (
            <TouchableOpacity
              key={tab.name}
              style={[styles.tabItem, isFocused && styles.activeTabItem]}
              onPress={onPress}
              activeOpacity={0.7}
            >
              <View style={[styles.iconContainer, isFocused && styles.activeIconContainer]}>
                <Image
                  source={tab.icon}
                  style={[styles.tabIcon, isFocused && styles.activeTabIcon]}
                  resizeMode="contain"
                />
              </View>
              <Text style={[styles.tabLabel, isFocused && styles.activeTabLabel]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 90, backgroundColor: 'transparent' },
  backgroundImage: { position: 'absolute', width: '100%', height: '100%', bottom: 0 },
  tabContainer: { flexDirection: 'row', height: '100%', paddingHorizontal: 20, paddingTop: 10, paddingBottom: 15, justifyContent: 'space-around', alignItems: 'center' },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 5 },
  activeTabItem: { transform: [{ scale: 1.1 }] },
  iconContainer: { width: 28, height: 28, alignItems: 'center', justifyContent: 'center', marginBottom: 4 },
  activeIconContainer: { shadowColor: '#4C6EF5', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 4, elevation: 5 },
  tabIcon: { width: 24, height: 24, tintColor: '#8E8E8E' },
  activeTabIcon: { tintColor: '#4C6EF5', width: 26, height: 26 },
  tabLabel: { fontSize: 10, fontFamily: 'Poppins-Regular', color: '#8E8E8E', textAlign: 'center', marginTop: 2 },
  activeTabLabel: { color: '#4C6EF5', fontFamily: 'Poppins-SemiBold', fontSize: 11 },
});

export default TabBar;
