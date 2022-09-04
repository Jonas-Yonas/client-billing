import './alert.css';
import { IconAmplify } from '../../assets/icon';

const Alert = () => {
  return (
    <section className="alert-wrapper">
      <div className="left-alert-section">
        <span>
          <IconAmplify />
        </span>

        <div>
          <div>Upgrade to pay 0% transaction fee</div>
          <div>
            Pay 0% transaction fee and get added benefits by upgrading your
            account.
          </div>
        </div>
      </div>

      <div>
        <button className="btn btn-active">Upgrade</button>
      </div>
    </section>
  );
};

export default Alert;
