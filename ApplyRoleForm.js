import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from "expo-router";
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const ApplyRoleForm = () => {
  const { role, subtitle, iconName, iconBgColor } = useLocalSearchParams();
  const [fullName, setFullName] = useState('');
  const [facebookAccount, setFacebookAccount] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Application submitted:', {
      role,
      fullName,
      facebookAccount,
      email
    });
    router.push({
      pathname: "/RoleApplicationSuccess",
      params: { role }
    });
  };

return (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
    <SafeAreaView style={styles.container}>
      {/* Green gradient background */}
      <LinearGradient
        colors={['#0A423F', '#19A8A0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.greenBackground}
      >
        {/* Header section */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
            <Icon name="close" size={16} color="#FFFFFF" />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            <Text style={styles.todayText}>Today</Text>
            <Text style={styles.dateText}>Apr 08,2022</Text>
          </View>
        </View>

        <Text style={styles.title}>Apply Role</Text>

        {/* Selected Role Card */}
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

        {/* White container inside gradient */}
        <View style={styles.whiteContainer}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Instruction Text */}
            <Text style={styles.instructionText} numberOfLines={1} adjustsFontSizeToFit>
              Please take a moment to fill out this Evaluation
            </Text>

            {/* Form Fields */}
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Icon name="person-outline" size={20} color="#FFFFFF" style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Full Name"
                  placeholderTextColor="rgba(255, 255, 255, 0.8)"
                  value={fullName}
                  onChangeText={setFullName}
                />
              </View>

              <View style={styles.inputContainer}>
                <Icon name="logo-facebook" size={20} color="#FFFFFF" style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Facebook Account"
                  placeholderTextColor="rgba(255, 255, 255, 0.8)"
                  value={facebookAccount}
                  onChangeText={setFacebookAccount}
                />
              </View>

              <View style={styles.inputContainer}>
                <Icon name="mail-outline" size={20} color="#FFFFFF" style={styles.inputIcon} />
                <TextInput
                  style={styles.textInput}
                  placeholder="Email"
                  placeholderTextColor="rgba(255, 255, 255, 0.8)"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
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
    paddingBottom: 40,
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
    marginBottom: 4,
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
  selectedLabel: {
    fontSize: 12,
    color: '#999999',
    fontWeight: '500',
  },
  moreButton: {
    padding: 4,
  },
  instructionText: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2D8B7A',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 16,
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  submitButton: {
    backgroundColor: '#DC2626',
    borderRadius: 25,
    paddingVertical: 16,
    paddingHorizontal: 40,
    alignSelf: 'center',
    minWidth: 120,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ApplyRoleForm;