import { Audio } from 'react-loader-spinner';
import { Overlay } from 'components';
export const Loader = () => {
  return (
    <Overlay>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
      />
    </Overlay>
  );
};
