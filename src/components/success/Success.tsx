import { useEffect, useState } from 'react';
import { useStepper } from '../../store/store';
import './success.css';

interface ISuccess {
  title: string;
  subTitle: string;
}

const Success = (props: ISuccess) => {
  const { title, subTitle } = props;

  const { dispatch } = useStepper();

  const [flag, setFlag] = useState<boolean>(true);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    setFlag(true);

    if (flag) {
      interval = setInterval(() => {
        dispatch('increment');
      }, 3000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [dispatch, flag]);

  return (
    <div>
      <div className="content">
        <div className="loading"></div>
        <h2>{title}</h2>
        <h5>{subTitle}</h5>
      </div>
    </div>
  );
};

export default Success;
