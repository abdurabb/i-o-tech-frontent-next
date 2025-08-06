'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useGetServiceDetails } from '@/apis/useDataController';
import Loader from '@/components/Loader';
import { toast } from 'react-toastify';

export default function ServiceDetails() {
  const router = useRouter();
  const { id } = useParams();
  const { data, isLoading, error } = useGetServiceDetails(id);

  useEffect(() => {
    if (error) {
      toast.error("Something Went Wrong");
    }
  }, [error]);

  const serviceData = {
    title: "Legal Consultation Services",
    description: "Our firm is one of the leading legal offices that offer exceptional advisory services for both individuals and companies. Our mission is to provide comprehensive and professional legal support that help clients solve legal issues and make informed decisions in various legal matters.",
    sections: [
      {
        title: "General Legal Consultations",
        items: [
          "Legal advice and accurate understanding of legal foundations from our clients' view.",
          "Legal analysis of cases and situations to find the best solutions for all commercial litigation based on strong understanding of local and international laws."
        ]
      },
      {
        title: "Commercial Legal Consultations",
        items: [
          "Legal advice and full representation of the companies and commercial companies including civil contracting work.",
          "Assistance in contract preparation",
          "Assistance in partnership and corporation",
          "Drafting commercial agreements",
          "Assistance with acquisitions and mergers",
          "Legal advice and recommendations on legal actions"
        ]
      },
      {
        title: "Individual Legal Consultations",
        items: [
          "Legal advice and initial legal assistance to individuals, including:",
          "Assistance in personal matters dealing with:",
          "- Family law cases",
          "- Property and real estate issues",
          "- Employment and labor law disputes",
          "- Civil disputes and administrative procedures"
        ]
      }
    ],
    footer: "Law Firm that can be trusted to play legal services in various ways from civil law divisions legal Advocacy, Contact us today to receive comprehensive legal representation and support."
  };

  return (
    <div className="min-h-screen bg-white">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage: "url('/details.jpg')",
          filter: 'sepia(30%) saturate(80%) brightness(0.6)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-12">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 p-4 text-black hover:text-black transition-colors hover:cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span className="text-sm">Back</span>
        </button>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
              {data?.data[0]?.title}
            </h1>

            <div className="mb-12">
              <p className="text-gray-600 leading-relaxed text-lg">
                {data?.data[0]?.descripyion}
              </p>
            </div>

            <div className="space-y-10">
              {serviceData.sections.map((section, index) => (
                <div key={index} className="pl-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {section?.title}
                  </h2>
                  <div className='pl-4 ml-4 flex gap-5 border-l-1 border-[#4B2615]'>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#4B2615] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600 leading-relaxed">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-gray-700 leading-relaxed font-medium">
                {serviceData?.footer}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
