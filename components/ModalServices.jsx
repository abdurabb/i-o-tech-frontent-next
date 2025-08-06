
"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useGetServices } from '../apis/useDataController';
import Loader from './Loader';
import { toast } from 'react-toastify';

const ModalServices = ({ onClose }) => {
  const router = useRouter();
  const { data, isLoading, error } = useGetServices();


  useEffect(() => {
    if (error) {
      toast.error('Something went wrong');
    }
  }, [error]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50  flex justify-center items-start pt-16"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#4B2615] w-full max-w-6xl mx-auto h-1/2 pt-10 px-6 md:px-12 lg:px-16 xl:px-24 text-white overflow-y-auto rounded shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-1 right-6 mt-8 text-white text-2xl font-bold"
        >
          &times;
        </button>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6 text-sm">
            {(data?.data || []).map((service, index) => (
              <div
                key={index}
                onClick={() => {
                  onClose();
                  router.push(`/services/${service?.id}`)
                }}
                className="leading-relaxed hover:cursor-pointer hover:text-gray-300 transition-colors"
              >
                {service?.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalServices;
