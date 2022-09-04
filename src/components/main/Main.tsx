import React, { ReactNode, useEffect, useState } from 'react';
import { State } from '../../store/store';
import Card from '../card/Card';

import Success from '../success/Success';

import './main.css';

const Main = ({ step }: State) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [target, setTarget] = useState<ReactNode | undefined>(undefined);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (step > 2) {
      setCurrent(1);
    } else {
      setCurrent(0);
    }
    if (step === 3) {
      setDisabled(true);
    }
  }, [step]);

  useEffect(() => {
    if (step <= 2 || step > 5) {
      setTarget(
        <Card
          title="Connect Stripe Account"
          subTitle="Client Billing requires a free Stripe account, connect your existing account or create a new one to get started."
          btnLabel="Get Started"
          showLogo={true}
          linkText="Find out more about Client Billing"
          disabled={disabled}
        />
      );
    } else if (step === 3) {
      setTarget(
        <Card
          title="Choose Billing Currency"
          subTitle="Select the currency you want to use to bill your clients."
          btnLabel="Finish Setup"
          confirmText="I am aware that I cannot change currency later"
          disabled={disabled}
          onChecked={(isChecked: boolean) => {
            handleChecked(isChecked);
          }}
        />
      );
    } else if (step === 4) {
      setTarget(
        <Success
          title="Importing Stripe Configurations"
          subTitle="Please wait while we are importing your Stripe configurations. It will only take a few seconds…"
        />
      );
    } else if (step === 5) {
      setTarget(
        <Card
          title="Connect Stripe Account"
          btnLabel="Continue"
          disabled={disabled}
        />
      );
    }
  }, [step, disabled]);

  const handleChecked = (isChecked?: boolean) => {
    if (isChecked) {
      setDisabled(isChecked);
    }
  };

  return (
    <div className="main-section">
      {step !== 4 ? (
        <React.Fragment>
          <div className="heading">
            <div>Getting Started</div>
            {step < 4 && (
              <div>
                <div>Step {step <= 2 ? '1' : step - 1} of 2</div>

                {Array.from({ length: 2 }, (_, i) => (
                  <div
                    key={i}
                    className={`${i === current ? 'active' : 'inactive'}`}
                  ></div>
                ))}
              </div>
            )}
          </div>

          <div className="box box-color">{target}</div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="box">{target}</div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Main;
