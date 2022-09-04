import React, { useState } from "react";
import { IconArrow, IconLink, IconLogo, IconTickMark } from "../../assets/icon";
import { useStepper } from "../../store/store";
import NoticeBar from "../alert/NoticeBar";
import Toast from "../toast/Toast";
import "./card.css";

interface ICard {
  title: string;
  subTitle?: string;
  btnLabel: string;
  showLogo?: boolean;
  confirmText?: string;
  linkText?: string;
  disabled: boolean;
  onChecked?: (isChecked: boolean) => void;
}

const currencies = [
  {
    value: "usd",
    name: "USD - United States Dollars",
  },
  {
    value: "pound",
    name: "Pound - UK Pound Sterling",
  },
  {
    value: "shilling",
    name: "Shilling - Kenyan Shilling",
  },
  {
    value: "rmb",
    name: "RMB - Chinese Renminbi",
  },
];

const Card = (props: ICard) => {
  const { title, subTitle, btnLabel, confirmText, linkText } = props;

  const [checked, setChecked] = useState<boolean>(false);

  const {
    state: { step },
    dispatch,
  } = useStepper();

  const onChecked = (flag: boolean) => {
    setChecked(flag);
  };

  return (
    <div>
      {/* logo */}
      {(step <= 2 || step === 5) && (
        <div className="logo-wrapper">
          <IconLogo />
        </div>
      )}

      {/* back button */}
      {step === 3 && (
        <div className="btn-back">
          <button
            onClick={() => {
              dispatch("decrement");
            }}
          >
            <IconArrow />
            <span>Back</span>
          </button>
        </div>
      )}

      {/* content */}
      <div className="content">
        <h2>{title}</h2>
        {subTitle && <h5>{subTitle}</h5>}

        {step === 3 && <NoticeBar />}

        <div className={`deal-box ${step === 3 && "p"}`}>
          {step <= 2 && (
            <React.Fragment>
              <h2>Transaction Fee</h2>
              <h2>5%</h2>
            </React.Fragment>
          )}

          {step === 3 && (
            <div>
              <select name="currency" id="currency">
                {currencies.map((currency) => (
                  <option value={currency.value} key={currency.value}>
                    {currency.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {step === 5 && (
            <div>
              <div>
                <div className="box-title">
                  {" "}
                  {JSON.parse(localStorage.getItem("client")!) ? (
                    JSON.parse(localStorage.getItem('client')!)?.username.split(
                      ' '
                    )[0] + '\'s' 
                  ) : (
                    '{name}'
                  )} {' '}
                  Stripe Account
                </div>
                <span className="text-small">
                  {" "}
                  {JSON.parse(localStorage.getItem("client")!) ? JSON.parse(localStorage.getItem("client")!)?.email : 
                  ('{email}')}
                </span>
              </div>

              <div>
                <div className="box-title">Connected</div>
                <div>
                  <IconTickMark fillColor="#fff" />
                </div>
              </div>
            </div>
          )}
        </div>
        {step === 3 && (
          <div className="confirm-text">
            <div
              className={`checkbox ${checked && "btn-active"}`}
              onClick={() => onChecked(!checked)}
            >
              {checked && <IconTickMark fillColor="#fff" />}
            </div>
            <h5>{confirmText}</h5>
          </div>
        )}

        <Toast checked={checked} />

        <button
          className={`btn ${
            step === 3 && !checked ? "disabled" : "btn-active"
          }`}
          onClick={() => {
            dispatch("increment");
          }}
          disabled={(step === 3 && !checked) || step >= 5}
        >
          {btnLabel}
        </button>

        {linkText && (
          <div className="learn-more">
            <span>
              {linkText}
              <IconLink fillColor={"#286EF1"} />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
