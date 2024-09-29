import { createData } from "@/core/http-service";
import { SignIn } from "./../types/signin-form";
import { useMutation } from "@tanstack/react-query";

type UseSignInOptions = {
  onSuccess?: () => void;
};

const signIn = (model: SignIn): Promise<void> =>
  createData<SignIn, void>("/signin", model);

export const useSingIn = ({ onSuccess }: UseSignInOptions) => {
  const { mutate: submit, isPending } = useMutation({
    mutationFn: signIn,
    onSuccess: onSuccess,
  });

  return {
    submit,
    isPending,
  };
};
