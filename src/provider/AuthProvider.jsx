import axiosInstance from "@/config/AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const {
    data: user,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["User"],
    queryFn: async () => {
      const response = await axiosInstance.get("/auth/me", {
        withCredentials: true,
      });
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
  const value = { user, isLoading, isError, refetch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};
