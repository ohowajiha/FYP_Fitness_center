import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';

import Colors from './../../colors/Colors';
import Strings from '../../strings/Strings';
import ActionBarWithBack from '../../components/ActionBarWithBack';
import HeadingAndCaption from '../../components/HeadingAndCaption';

function SignupParameters(props) {
  const [isheight, setHeight] = useState(0);
  const [isweight, setWeight] = useState(0);
  const [BmiResult, setBmiResult] = useState('');
  const [bmi, setbmi] = useState(0);

  const BMI = (height, weight) => {
    var result =
      (parseFloat(weight) * 10000) / (parseFloat(height) * parseFloat(height));
    result.toFixed(2);
    setbmi(result);
    if (result < 18.5) {
      setBmiResult('Underweight');
    } else if (result >= 18.5 && result < 25) {
      setBmiResult('Normal weight');
    } else if (result >= 25 && result < 30) {
      setBmiResult('Overweight');
    } else if (result >= 30) {
      setBmiResult('Obese');
    } else {
      // alert('Incorrect Input!');
      setBmiResult('');
    }
  };
  return (
    <>
      <ActionBarWithBack
        shiftBackScreen={props.shiftBackScreen}
        title={Strings.HeightLabelText}
      />

      <View style={styles.container}>
        {/* heaging and caption from component */}
        <HeadingAndCaption
          headingText={Strings.HeightHeadingText}
          captionText={Strings.HeightCaptionText}
        />

        {/* height input */}
        <View style={styles.inputFieldsContainer}>
          <TextInput
            placeholder={Strings.cmLabel}
            style={styles.inputField}
            onChangeText={text => setHeight(text)}
          />
        </View>

        <View style={styles.container2}>
          {/* heading and caption from component */}
          <HeadingAndCaption
            headingText={Strings.WeightHeadingText}
            captionText={Strings.WeightCaptionText}
          />

          {/*weight input */}
          <View style={styles.inputFieldsContainer2}>
            <TextInput
              placeholder={Strings.kgLabel}
              style={styles.inputField2}
              onChangeText={text => setWeight(text)}
              onPress={() => BMI(isheight, isweight)}
            />
          </View>

          {/* next button */}
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => BMI(isheight, isweight)}>
            <Text style={styles.nextButtonText}>Calculate </Text>
          </TouchableOpacity>
          <Text style={styles.label}>{bmi}</Text>
          <Text style={styles.resultText}>{BmiResult}</Text>
          <TouchableOpacity
            style={styles.nextButton2}
            onPress={props.shiftNextScreen}>
            <Text style={styles.nextButtonText}>{Strings.nextText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    alignItems: 'center',
  },
  container2: {
    flex: 2,
    alignItems: 'center',
  },
  inputFieldsContainer: {
    marginTop: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputFieldsContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputField: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    fontSize: 18,
    width: '60%',
    maxWidth: '60%',
    marginHorizontal: 2,
  },
  inputField2: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 2,
    fontSize: 18,
    width: '60%',
    maxWidth: '60%',
    marginHorizontal: 2,
    marginTop: 20,
  },
  nextButton: {
    width: 300,
    height: 38,
    marginTop: 40,
    backgroundColor: Colors.primary,
    padding: 6,
    borderRadius: 5,
  },
  nextButton2: {
    width: 300,
    height: 38,
    marginTop: 40,
    backgroundColor: '#9A2A2A',
    padding: 6,
    borderRadius: 5,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 16,
    justifyContent: 'center',
    textAlign: 'center',
  },
  resultText: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 30,
    color: '#E26F1E',
  },
  label: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 20,
  },
});
export default SignupParameters;
