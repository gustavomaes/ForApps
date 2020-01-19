/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Platform } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import styled from 'styled-components/native';

const StyledMaskInput = styled(TextInputMask)`
  margin-bottom: ${Platform.OS === 'ios' ? 5 : -5};
  font-family: ${p => p.theme.fontFamily.input};
  font-size: ${p => p.theme.fontSize.input};
  color: ${p => (p.textColor === 'dark' ? p.theme.colors.text : p.theme.colors.textLight)};
  text-align: ${p => (p.center ? 'center' : 'left')};
  width: 100%;
`;

const StyledInput = styled.TextInput`
  margin-bottom: ${Platform.OS === 'ios' ? 5 : -5};
  font-family: ${p => p.theme.fontFamily.input};
  font-size: ${p => p.theme.fontSize.input};
  color: ${p => (p.textColor === 'dark' ? p.theme.colors.text : p.theme.colors.textLight)};
  text-align: ${p => (p.center ? 'center' : 'left')};
  width: 100%;
`;

const Wrapper = styled.View`
  margin-top: 20;
  align-self: ${p => (p.center ? 'center' : 'auto')};
  width: 80%;
  border-bottom-width: 1;
  border-bottom-color: ${p => p.theme.colors.border};
`;

const ErrorLabel = styled.Text`
  font-family: ${p => p.theme.fontFamily.regular};
  position: absolute;
  left: 0;
  bottom: -18;
  font-size: ${p => p.theme.fontSize.small};
  color: ${p => p.theme.colors.warning};
`;

const InputLine = ({
  value,
  placeholder,
  onChange,
  isVisible = false,
  errorMessage,
  mask = '',
  maxLength,
  enable = true,
  center = true,
  textColor = 'dark',
  returnKeyType = 'next',
  inputRef = null,
  ...rest
}) => {
  const [isFocused, setFocus] = useState(false);
  const [validate, setValidate] = useState(false);

  const handleFocus = () => setFocus(true);

  const handleBlur = () => {
    console.log('errorMessage', errorMessage);
    setValidate(true);

    if (value === '') {
      setFocus(false);
    }
  };

  return (
    <Wrapper center={center}>
      {mask ? (
        <StyledMaskInput
          {...rest}
          ref={inputRef}
          center={center}
          value={value}
          placeholder={placeholder}
          editable={enable}
          enable={enable}
          maxLength={maxLength}
          type={mask}
          onChangeText={val => onChange(val)}
          secureTextEntry={isVisible}
          autoCapitalize="none"
          textColor={textColor}
          isFocused={isFocused}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          returnKeyType={returnKeyType}
        />
      ) : (
          <StyledInput
            ref={inputRef}
            center={center}
            value={value}
            placeholder={placeholder}
            editable={enable}
            enable={enable}
            maxLength={maxLength}
            type={mask}
            onChangeText={val => onChange(val)}
            secureTextEntry={isVisible}
            autoCapitalize="none"
            textColor={textColor}
            isFocused={isFocused}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            returnKeyType={returnKeyType}
            {...rest}
          />
        )}
      {validate && errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
    </Wrapper>
  );
};

export default InputLine;
