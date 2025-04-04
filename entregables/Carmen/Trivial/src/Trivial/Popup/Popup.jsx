import { Box, Container, Inside } from './Popup.styles';

const Popup = ({ visible, lost }) => (
  <Container visible={visible || lost}>
    <Box>
      <Inside>
        <p>{lost ? '¡ P · E · R · D · I · S · T · E !' : '¡ G · A · N · A · S · T · E !'}</p>
      </Inside>
    </Box>
  </Container>
);

export default Popup;
