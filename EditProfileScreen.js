import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import RNPickerSelect from 'react-native-picker-select';

const EditProfileScreen = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('Sabrina');
  const [lastName, setLastName] = useState('Aryan');
  const [username, setUsername] = useState('@Sabrina');
  const [email, setEmail] = useState('@SabrinaAryan2018@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('+234    904 6470');
  const [role, setRole] = useState('Role');

  const actionSheetRef = useRef();

  const showActionSheet = () => {
    actionSheetRef.current.show();
  };

  const handleAction = (index) => {
    if (index === 0) console.log('Take Photo pressed');
    if (index === 1) console.log('Select From Gallery pressed');
    if (index === 2) console.log('View Photo pressed');
  };

  const handleBackPress = () => {
    router.push('/SettingsScreen')
  };

  // Reusable Input Field
  const InputField = ({ label, value, onChangeText, placeholder }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999999"
      />
    </View>
  );

  // Reusable Dropdown Field
  const DropdownField = ({ label, value, onValueChange }) => (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <View style={styles.dropdownContainer}>
        <RNPickerSelect
          onValueChange={onValueChange}
          items={[
            { label: 'Back End Developer', value: 'Back End Developer' },
            { label: 'Front End Developer', value: 'Front End Developer' },
            { label: 'Researcher', value: 'Researcher' },
          ]}
          value={value}
          style={{
            inputIOS: styles.dropdownText,
            inputAndroid: styles.dropdownText,
          }}
          placeholder={{ label: 'Select Role', value: null }}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundLayer}>
        {/* Gradient Header Background */}
        <LinearGradient
          colors={['#0A423F', '#19A8A0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.greenBackground}
        >
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
              <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Edit Profile</Text>
          </View>
        </LinearGradient>

        {/* White Foreground Card */}
        <View style={styles.whiteContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Avatar Section */}
            <View style={styles.avatarSection}>
              <View style={styles.avatarContainer}>
                <View style={styles.avatar} />
                <TouchableOpacity style={styles.editIcon} onPress={showActionSheet}>
                  <Feather name="edit-2" size={16} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.formTitle}>Edit Profile</Text>

            {/* Form Fields */}
            <View style={styles.formContainer}>
              <InputField
                label="First Name"
                value={firstName}
                onChangeText={setFirstName}
                placeholder="First Name"
              />

              <InputField
                label="Last Name"
                value={lastName}
                onChangeText={setLastName}
                placeholder="Last Name"
              />

              <InputField
                label="Username"
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
              />

              <InputField
                label="Email"
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
              />

              <InputField
                label="Phone Number"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="Phone Number"
              />

              <DropdownField
                label="Role"
                value={role}
                onValueChange={(value) => setRole(value)}
              />
            </View>

            {/* Update Button */}
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Update Profile</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      {/* Action Sheet */}
      <ActionSheet
        ref={actionSheetRef}
        title={'Profile Photo'}
        options={['Take Photo', 'Select From Gallery', 'View Photo', 'Cancel']}
        cancelButtonIndex={3}
        destructiveButtonIndex={3}
        onPress={(index) => handleAction(index)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundLayer: { flex: 1, backgroundColor: '#FFFFFF' },

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
  backButton: {
    width: 24,
    height: 24,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: '600' },

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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  avatarSection: { alignItems: 'center', marginBottom: 20, marginTop: 10 },
  avatarContainer: { position: 'relative' },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#E0E0E0' },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#4ECDC4',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  formTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 25,
    textAlign: 'left',
  },

  formContainer: { flex: 1 },
  inputContainer: { marginBottom: 20 },
  inputLabel: { fontSize: 12, color: '#999999', marginBottom: 8, fontWeight: '500' },

  textInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#FFFFFF',
  },

  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    height: 48,
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333333',
    paddingVertical: 0,
  },

  updateButton: {
    backgroundColor: '#4ECDC4',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EditProfileScreen;