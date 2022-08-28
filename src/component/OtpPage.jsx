import {
  Button,
  HStack,
  Img,
  PinInput,
  PinInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

function OtpPage() {
  const [pay, setPay] = useState(false);

  const handlePaymentSuccess = () => {
    setTimeout(() => {
      setPay(true);
    }, 1500);
  };

  return (
    <>
      <Stack align="center">
        <Text fontSize="2xl">Enter OTP</Text>
        <HStack>
          <PinInput otp>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
          <Button onClick={handlePaymentSuccess}>Submit</Button>
        </HStack>
        {pay ? (
          <Img src="https://gogoacarrentals.com/wp-content/uploads/2019/02/tick.gif" />
        ) : null}
      </Stack>
    </>
  );
}

export default OtpPage;
