import { View, Button, Alert } from 'react-native';

import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
const ImagePicker = () => {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permission!',
        'You need to grant camera permission to use this app.'
      );
      return false;
    }
    return true;
  };

  const captureImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log(image);
  };
  return (
    <View>
      <View></View>
      <Button title='Capture Image' onPress={captureImageHandler} />
    </View>
  );
};

export default ImagePicker;
