import { IconLink } from '../../assets/icon';
import { useStepper } from '../../store/store';
import './header.css';

const Header = () => {
  const {
    state: { step },
  } = useStepper();

  return (
    <section className="header-wrapper">
      <div className="left-header-section">
        <div>Client Billing </div>
        {step <= 2 && (
          <div>
            &nbsp; – A full payment solution for your business, free with{' '}
            {JSON.parse(localStorage.getItem("client")!) ? JSON.parse(localStorage.getItem('client')!)?.company : (
              '{company}'
            )}
          </div>
        )}
      </div>

      <div className="right-header-section">
        <h4>Docs</h4>
        <IconLink fillColor={'#000'} />
      </div>
    </section>
  );
};

export default Header;
