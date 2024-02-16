import type { Session } from "next-auth";
import { useMutation } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetchData";
import routes from "@/lib/routes";
import { RegistrationPayload } from "@/lib/validators/registrationValidator";
import axios from "axios";

export const useRegister = (data: RegistrationPayload) => {
  const { mutateAsync, isError, error, reset } = useMutation({
    mutationFn: async () => {
      const method = "POST";
      const url = routes.auth.register;
      const config = {
        method,
        url,
        data,
      };
      const response = await axios(config);
      console.log(response);
    },
    onError: (error) => {
      throw error;
    },
  });

  return { mutateAsync, isError, error, reset };
};
