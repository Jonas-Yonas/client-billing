import './toast.css';
import ReactDOM from 'react-dom';
import { IconTickMark } from '../../assets/icon';
import { useStepper } from '../../store/store';

interface IChecked {
  checked: boolean;
}

const Toast = (props: IChecked) => {
  const {
    state: { step },
  } = useStepper();

  const { checked } = props;

  return ReactDOM.createPortal(
    <div
      className={`${step === 3 ? 'toast-wrapper' : 'hide-toast'} 
      ${checked ? 'fade' : ''}
      `}
    >
      <IconTickMark fillColor="#18BB4B" />

      <div>
        <div className="text-small">Stripe account connected successfully!</div>
        <span className="text-small">A SECOND AGO</span>
      </div>
    </div>,
    document.getElementById('toast-portal')!
  );
};

export default Toast;
