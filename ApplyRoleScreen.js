import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ApplyRoleScreen = () => {
  const roleList = [
    {
      id: 1,
      title: "Researcher",
      subtitle: "Maaayo mo Prompt sa GPT",
      iconName: "search-outline",
      applicants: 24,
      iconBgColor: "#FFE4E1"
    },
    {
      id: 2,
      title: "Front End Dev",
      subtitle: "Professional mo gamit React Native",
      iconName: "laptop-outline",
      applicants: 32,
      iconBgColor: "#E8E4FF"
    },
    {
      id: 3,
      title: "Back End Dev",
      subtitle: "Mas prefer namo kemao apache cassandra",
      iconName: "server-outline",
      applicants: 16,
      iconBgColor: "#FFF4E6"
    },
  ];

  const handleRolePress = (role) => {
    router.push({
      pathname: "/ApplyRoleForm",
      params: { 
        role: role.title,
        subtitle: role.subtitle,
        iconName: role.iconName,
        iconBgColor: role.iconBgColor
      }
    });
  };

  const renderRoleCard = (role) => (
    <TouchableOpacity 
      key={role.id} 
      style={styles.roleCard}
      onPress={() => handleRolePress(role)}
    >
      <View style={styles.roleHeader}>
        <View style={[styles.iconContainer, { backgroundColor: role.iconBgColor }]}>
          <Icon name={role.iconName} size={24} color="#666666" />
        </View>
        <View style={styles.roleInfo}>
          <Text style={styles.roleTitle}>{role.title}</Text>
          {role.subtitle ? (
            <View style={styles.subtitleContainer}>
              <View style={styles.greenDot} />
              <Text style={styles.roleSubtitle}>{role.subtitle}</Text>
            </View>
          ) : null}
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Icon name="ellipsis-vertical" size={20} color="#999999" />
        </TouchableOpacity>
      </View>
      {role.applicants > 0 && (
        <View style={styles.applicantsContainer}>
          <View style={styles.avatarsContainer}>
            <View style={[styles.avatar, styles.avatar1]} />
            <View style={[styles.avatar, styles.avatar2]} />
            <View style={[styles.avatar, styles.avatar3]} />
          </View>
          <Text style={styles.applicantsText}>+{role.applicants}</Text>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#FFFFFF"
        hidden={false}
        translucent={false}
      />
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#0A423F', '#19A8A0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.greenBackground}
        >
          <View style={styles.header}>
            <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.todayText}>Today</Text>
              <Text style={styles.dateText}>Apr 08,2022</Text>
            </View>
          </View>
          
          <Text style={styles.title}>Apply Role</Text>

          <View style={styles.whiteContainer}>
            <ScrollView 
              style={styles.scrollView}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.scrollContent}
            >
              {roleList.map(renderRoleCard)}
            </ScrollView>
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
  closeText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
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
  whiteContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 20,
    marginHorizontal: -10,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 7,
  },
  roleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  roleHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
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
  applicantsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  avatarsContainer: {
    flexDirection: 'row',
    marginRight: 8,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginLeft: -6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  avatar1: {
    backgroundColor: '#D1D5DB',
    marginLeft: 0,
  },
  avatar2: {
    backgroundColor: '#E5E7EB',
  },
  avatar3: {
    backgroundColor: '#F3F4F6',
  },
  applicantsText: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '500',
  },
});

export default ApplyRoleScreen;