import { TailSpin } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <TailSpin
      height='20'
      width='20'
      color='#fff'
      ariaLabel='tail-spin-loading'
      radius='0'
      visible={true}
    />
  );
};

export default Spinner;
