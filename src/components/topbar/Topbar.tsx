import './topbar.css';

import {
  IconUsers,
  IconProduct,
  IconInvoice,
  IconSettings,
} from '../../assets/icon';

const Topbar = () => {
  return (
    <div className="loading-wrapper">
      <div>
        <h4>Overview</h4>
        <div>
          <IconUsers />
          <h4>Clients</h4>
        </div>
        <div>
          <IconProduct />
          <h4>Products & Services</h4>
        </div>
        <div>
          <IconInvoice />
          <h4>Invoices</h4>
        </div>
      </div>

      <div>
        <IconSettings />
        <h4>Configure</h4>
      </div>
    </div>
  );
};

export default Topbar;
