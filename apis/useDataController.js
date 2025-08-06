
import { useQuery } from "@tanstack/react-query";
import { apiService } from "./axios";

export const useGetServices = () =>
  useQuery({
    queryKey: ["getServices"],
    queryFn: async () => {
      return await apiService.get(`/services123`);
    },
    retry: 0,
  });

export const useGetServiceDetails = (id) =>
  useQuery({
    queryKey: ["getServiceDetails", id],
    queryFn: async () => {
      return await apiService.get(`/services123?filters[id][$eq]=${id}`);
    },
    enabled: !!id, 
    retry: 0,
  });



export const useGetMembers = () =>
  useQuery({
    queryKey: ["getMembers"],
    queryFn: async () => {
      return await apiService.get(`/get-members?populate=image`);
    },
    retry: 0,
  });

export const useGetContents = () =>
  useQuery({
    queryKey: ["getContents"],
    queryFn: async () => {
      return await apiService.get(`/hero-contents?populate=image&populate=background`);
    },
    retry: 0,
  });


  export const useGetContentDetails = (id) =>
    useQuery({
      queryKey: ["getContentDetails", id],
      queryFn: async () => {
        return await apiService.get(`/hero-contents?filters[id][$eq]=${id}`);
      },
      enabled: !!id, 
      retry: 0,
    });
