import { TailSpin } from 'react-loader-spinner';
import { LoadWrapp } from 'components/Loader/Loader.styled';

export const Loader = () => {
  return (
    <LoadWrapp>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoadWrapp>
  );
};
