import './alert.css';

const NoticeBar = () => {
  return (
    <section className="notice-bar">
      <span>!</span>
      <p>
        Note: Billing currency cannot be changed in the future. Please make sure
        you select the correct currency.
      </p>
    </section>
  );
};

export default NoticeBar;
