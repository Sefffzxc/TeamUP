import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RoleApplicationSuccess = () => {
  const params = useLocalSearchParams();
  const { role, subtitle, iconName, iconBgColor } = params;
  
  console.log('Success Screen Params:', params);

  const handleDone = () => {
    router.push("/(tabs)");
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#0A423F', '#19A8A0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.greenBackground}
        >
          {/* Header section */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
              <Icon name="close" size={16} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.todayText}>Today</Text>
              <Text style={styles.dateText}>Apr 08,2022</Text>
            </View>
          </View>
          
          <Text style={styles.title}>Apply Role</Text>

          {/* Selected Role Card - Shows applied role data */}
          <View style={styles.selectedRoleCard}>
            <View style={styles.roleHeader}>
              <View style={[styles.iconContainer, { backgroundColor: iconBgColor || "#FFE4E1" }]}>
                <Icon name={iconName || "search-outline"} size={24} color="#666666" />
              </View>
              <View style={styles.roleInfo}>
                <Text style={styles.roleTitle}>{role || "Role"}</Text>
                {subtitle && (
                  <View style={styles.subtitleContainer}>
                    <View style={styles.greenDot} />
                    <Text style={styles.roleSubtitle}>{subtitle}</Text>
                  </View>
                )}
              </View>
              <TouchableOpacity style={styles.moreButton}>
                <Icon name="ellipsis-vertical" size={20} color="#999999" />
              </TouchableOpacity>
            </View>
          </View>

          {/* White container inside green background */}
          <View style={styles.whiteContainer}>
            <View style={styles.contentContainer}>
              {/* Success Message */}
              <View style={styles.messageContainer}>
                <Text style={styles.thankYouText}>Thank You for Applying</Text>
                <Text style={styles.subText}>Wait for the Approval</Text>
              </View>

              {/* Done Button */}
              <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  greenBackground: {
    flex: 1,
    backgroundColor: '#2D8B7A',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  todayText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  dateText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginTop: 2,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  selectedRoleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    marginHorizontal: -10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  roleHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    flexShrink: 0,
  },
  roleInfo: {
    flex: 1,
  },
  roleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2D8B7A',
    marginRight: 8,
  },
  roleSubtitle: {
    fontSize: 14,
    color: '#666666',
    flex: 1,
  },
  moreButton: {
    padding: 4,
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
    marginHorizontal: -10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 60,
  },
  thankYouText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 8,
  },
  subText: {
    fontSize: 16,
    color: '#999999',
    textAlign: 'center',
  },
  doneButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#2D8B7A',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 32,
    minWidth: 100,
  },
  doneButtonText: {
    color: '#2D8B7A',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default RoleApplicationSuccess;