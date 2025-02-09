import { Dispatch, SetStateAction } from 'react';
import Button from '../../components/button';
import { FormType } from './login-button';

interface Props {
  showFormType: FormType;
  setShowFormType: Dispatch<SetStateAction<FormType>>;
}

export default function AuthModalFooter({ showFormType, setShowFormType }: Props) {
  return (
    <div className="flex gap-3 justify-evenly py-4 order-t border-gray-300">
      {showFormType === 'forgot' ? (
        <Button
          size="sm"
          className="uppercase text-sm md:text-base"
          secondaryColor="secondary"
          variant="secondary"
          onClick={() => setShowFormType('login')}
        >
          Back to Login
        </Button>
      ) : showFormType === 'signup' ? (
        <>
          <Button
            size="sm"
            className="uppercase text-sm md:text-base"
            secondaryColor="secondary"
            variant="secondary"
            onClick={() => setShowFormType('forgot')}
          >
            Forgot Password
          </Button>
          <Button
            className="uppercase text-sm md:text-base"
            size="sm"
            secondaryColor="danger"
            variant="secondary"
            onClick={() => setShowFormType('login')}
          >
            Log In Instead
          </Button>
        </>
      ) : (
        <>
          <Button
            className="uppercase text-sm md:text-base"
            size="sm"
            secondaryColor="secondary"
            variant="secondary"
            onClick={() => setShowFormType('forgot')}
          >
            Forgot Password
          </Button>
          <Button
            className="uppercase text-sm"
            size="sm"
            secondaryColor="danger"
            variant="secondary"
            onClick={() => setShowFormType('signup')}
          >
            Create Account
          </Button>
        </>
      )}
    </div>
  );
}
