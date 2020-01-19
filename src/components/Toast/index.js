import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import CommonText from 'components/common/CommonText';

// Redux
import { connect } from 'react-redux';
import { toastClose } from 'redux/actions/toast';

const ToastContainer = styled(Animatable.View)`
  ${p => {
    switch (p.type) {
      case 'success':
        return 'background-color: green';
      case 'info':
        return 'background-color: yellow';
      default:
        return `background-color: ${p.theme.colors.warning}`;
    }
  }};
  elevation: 2;
  flex: 1;
  max-height: ${Platform.OS === 'ios' ? '92px' : '72px'};
  min-height: ${Platform.OS === 'ios' ? '92px' : '72px'};
  min-width: 100%;
  padding-top: 44;
  padding-bottom: 16;
  position: absolute;
  z-index: 7;
`;

const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  flex-direction: row;
  padding-horizontal: 20;
`;

const TextLabelContent = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const CloseAreaContent = styled.View`
  flex: 1;
  max-width: 40px;
  padding-right: 10px;
  justify-content: center;
  align-items: flex-end;
`;

const CloseIcon = styled(Icon).attrs({
  name: 'close',
  size: 25,
  color: 'white',
})`
  align-self: flex-end;
`;

const Toast = ({
  toast: {
    data: { title, description, type },
  },
  close,
}) => {
  return (
    <ToastContainer animation="slideInDown" duration={700} type={type && type}>
      <TouchableOpacity
        onPress={() => {
          close();
        }}
      >
        <TextLabelContent>
          {title && (
            <CommonText color="light" bold>
              {title}
            </CommonText>
          )}
          {description && <CommonText color="light">{description}</CommonText>}
        </TextLabelContent>
        <CloseAreaContent>
          <CloseIcon name="close" />
        </CloseAreaContent>
      </TouchableOpacity>
    </ToastContainer>
  );
};

const mapStateToProps = state => ({
  toast: state.toast,
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(toastClose()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
