import { Dispatch, SetStateAction } from 'react';
import Button from '../../components/button';

interface Props {
  isLogin: boolean;
  setIslogin: Dispatch<SetStateAction<boolean>>;
}

export default function AuthModalFooter({ isLogin, setIslogin }: Props) {
  return (
    <>
      {isLogin ? (
        <div className="flex gap-3 justify-between p-6">
          <Button
            secondaryColor="secondary"
            variant="secondary"
          >
            Forgot Password
          </Button>
          <Button
            secondaryColor="primary"
            variant="secondary"
            onClick={() => setIslogin(false)}
          >
            Create Account
          </Button>
        </div>
      ) : (
        <div className="flex gap-3 justify-between p-6">
          <Button
            secondaryColor="secondary"
            variant="secondary"
          >
            Forgot Password
          </Button>
          <Button
            secondaryColor="danger"
            variant="secondary"
            onClick={() => setIslogin(true)}
          >
            Login in Account
          </Button>
        </div>
      )}
    </>
  );
}
