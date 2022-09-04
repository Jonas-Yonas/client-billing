import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react';

const defaultState = { step: 1 };

export type Action = 'increment' | 'decrement';
export type Dispatch = (action: Action) => void;
export type State = typeof defaultState;

const StepperContext = createContext<
  | {
      state: State;
      dispatch: Dispatch;
    }
  | undefined
>(undefined);

const account = {
  company: 'Stripe',
  username: 'Yonas Gashaw',
  email: 'Yonas1520@gmail.com',
};

function StepperReducer(state: State, action: Action) {
  switch (action) {
    case 'increment':
      return {
        step: state.step + 1,
      };
    case 'decrement':
      return {
        step: state.step - 1,
      };
  }
}

export function StepperProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(StepperReducer, defaultState);

  useEffect(() => {
    const currentClient = JSON.parse(localStorage.getItem('client')!);

    if (!currentClient) {
      localStorage.setItem('client', JSON.stringify(account));
    }
  }, []);

  return (
    <StepperContext.Provider value={{ state, dispatch }}>
      {children}
    </StepperContext.Provider>
  );
}

export function useStepper() {
  const context = useContext(StepperContext);

  if (!context) throw new Error('Something terribly went wrong');

  return context;
}
