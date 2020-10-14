import React, { useState, ReactText, useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import { pickerOption } from '../../types';

export interface SelectProps {
  options: pickerOption[]
  onChange: (option: ReactText | string) => void
}

const Select: React.SFC<SelectProps> = ({ options, onChange }) => {
  
    const [state, setState] = useState<ReactText | string>(options ? options[0].value : "");

    useEffect(() => {
      onChange(state)
    }, [state])
  
    return options ? (<View style={styles.pickerWrapper}>
        <Picker
            selectedValue={state}
            style={styles.picker}
            onValueChange={(itemValue: ReactText, itemIndex) =>
              setState(itemValue)
            }
        >
          {options.map(item => (<Picker.Item label={item.label} value={item.value} key={item.value} />))}
        </Picker>
      </View>) : null;
}

const styles = StyleSheet.create({
    pickerWrapper: {
        height: 40, 
        width: '90%',
        borderWidth: 1,
        marginHorizontal: "5%",
        marginBottom: 17,
        borderColor: "#e2e2e2"
      },
      picker: {
        width: "100%",
        height: "100%"   
      }
  });

export default Select;