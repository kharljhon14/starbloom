import { Dispatch, SetStateAction } from 'react';
import Button from '../../components/button';
import { FormType } from './login-button';

interface Props {
  showFormType: FormType;
  setShowFormType: Dispatch<SetStateAction<FormType>>;
}

export default function AuthModalFooter({ showFormType, setShowFormType }: Props) {
  return (
    <div className="flex gap-3 justify-between p-6 border-t border-gray-300">
      {showFormType === 'forgot' ? (
        <Button
          secondaryColor="secondary"
          variant="secondary"
          onClick={() => setShowFormType('login')}
        >
          Back to Login
        </Button>
      ) : showFormType === 'signup' ? (
        <>
          <Button
            secondaryColor="secondary"
            variant="secondary"
            onClick={() => setShowFormType('forgot')}
          >
            Forgot Password
          </Button>
          <Button
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
            secondaryColor="secondary"
            variant="secondary"
            onClick={() => setShowFormType('forgot')}
          >
            Forgot Password
          </Button>
          <Button
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
