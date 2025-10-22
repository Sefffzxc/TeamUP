import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const SettingsScreen = () => {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const SettingsItem = ({ title, hasArrow = true, hasSwitch = false, switchValue, onSwitchChange, onPress }) => (
    <TouchableOpacity style={styles.settingsItem} onPress={onPress}>
      <Text style={styles.settingsItemText}>{title}</Text>
      {hasSwitch ? (
        <Switch
          value={switchValue}
          onValueChange={onSwitchChange}
          trackColor={{ false: '#E5E5E5', true: '#FF6B9D' }}
          thumbColor={switchValue ? '#FFFFFF' : '#FFFFFF'}
        />
      ) : hasArrow ? (
        <Text style={styles.arrow}>›</Text>
      ) : null}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Layer */}
      <View style={styles.backgroundLayer}>
        
        {/* Green Curved Background with Gradient */}
        <LinearGradient
          colors={['#0A423F', '#19A8A0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.greenBackground}
        >
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.settingsIcon}>
              <Feather name="settings" size={24} color="white" />
            </View>
            <Text style={styles.headerTitle}>Settings</Text>
          </View>
        </LinearGradient>
        
        {/* White Container */}
        <View style={styles.whiteContainer}>
          
          {/* Profile Section */}
          <TouchableOpacity style={styles.profileSection}>
            <View style={styles.profileInfo}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>Y</Text>
              </View>
              <Text style={styles.profileName}>Yennefer Doe</Text>
            </View>
            <Text style={styles.arrow}>‹</Text>
          </TouchableOpacity>
          
          {/* Account Settings Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Account Settings</Text>
            <Link href="/EditProfileScreen" asChild>
              <SettingsItem title="Edit profile" />
            </Link>
            <SettingsItem title="Change password" />
            <SettingsItem 
              title="Push notifications" 
              hasArrow={false} 
              hasSwitch={true}
              switchValue={pushNotifications}
              onSwitchChange={setPushNotifications}
            />
            <SettingsItem 
              title="Dark mode" 
              hasArrow={false} 
              hasSwitch={true}
              switchValue={darkMode}
              onSwitchChange={setDarkMode}
            />
          </View>
          
          {/* More Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>More</Text>
            <SettingsItem title="About us" />
            <SettingsItem title="Privacy policy" />
            <SettingsItem title="Terms and conditions" />
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundLayer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  greenBackground: {
    flex: 0.37,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 35,
  },
  settingsIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingsIconText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: -170,
    marginHorizontal: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    marginBottom: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatarText: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '600',
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  section: {
    marginBottom: 30,
    borderBottomWidth: 1,        
    borderBottomColor: '#F0F0F0',  
    paddingBottom: 10,            
  },
  sectionTitle: {
    fontSize: 12,
    color: '#999999',
    textTransform: 'uppercase',
    marginBottom: 15,
    fontWeight: '600',
    letterSpacing: 1,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 13,
  },
  settingsItemText: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '400',
  },
  arrow: {
    fontSize: 18,
    color: '#CCCCCC',
    fontWeight: '300',
  },
});

export default SettingsScreen;