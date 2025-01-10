import { useAppSelector } from "../redux/hook";

const VerifyForm = () => {
  const selector = useAppSelector(state => state.auth.email);
  console.log(selector);

  return (
    <div>
      Verify OTP
    </div>
  )
}

export default VerifyForm;
