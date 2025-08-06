
"use client";
import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { useGetContentDetails } from '../../../apis/useDataController'
import Loader from '@/components/Loader';
import { toast } from 'react-toastify';

function ContentDetails() {
  const router = useRouter();
  const { id } = useParams();
  const { data, isLoading, error } = useGetContentDetails(id);

  useEffect(() => {
    if (error) {
      toast.error("Something Went Wrong");
    }
  }, [error]);

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-80 md:h-100 bg-cover bg-center"
        style={{
          backgroundImage: "url('/home.jpg')",
          filter: 'sepia(40%) saturate(70%) brightness(0.6) contrast(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className='text-center'>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Team</h3>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Services</h3>
              </div>
              <div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors hover:cursor-pointer mb-8"
            >
              <ArrowLeft size={20} />
              <span className="text-sm font-medium">Back</span>
            </button>
            {isLoading ? (
              <Loader />
            ) : (
              <>
                <div className="bg-white rounded-lg">
                  <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                      {data?.data[0]?.title || " Legal Services Overview"}

                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {data?.data[0]?.description ||
                        "Our comprehensive legal services are designed to meet the diverse needs of individuals businesses, and organizations. We provide expert legal counsel across multiple practice areas."
                      }
                    </p>
                  </div>
                </div>
              </>)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentDetails;