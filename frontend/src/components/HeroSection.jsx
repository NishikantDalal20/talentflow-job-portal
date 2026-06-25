import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { setSearchedQuery } from "@/redux/jobSlice";

const HeroSection = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setSearchedQuery("")); // ✅ reset on load
  }, []);

  useGetAllJobs();
  const { allJobs } = useSelector(store => store.job);

  const totalJobs = allJobs.length;
  const totalCompanies = [...new Set(allJobs.map(job => job.company?.name))].length;
  const totalApplications = allJobs.reduce((acc, job) => acc + (job.applications?.length || 0), 0);
  const companies = [...new Map(allJobs.map(job => [job.company?._id, job.company])).values()];

  return (
    <div className="text-center bg-linear-to-b from-purple-50 to-white py-16 px-4">
      
      {/* Badge */}
      <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-[#6A38C2] font-semibold text-sm mb-6">
        🚀 India's #1 Job Search Platform
      </span>

      {/* Heading */}
      <h1 className="text-5xl font-bold leading-tight mb-4">
        Find, Apply & <br /> Get Hired by{" "}
        <span className="text-[#6A38C2]">Top Companies</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
        Discover thousands of job opportunities. Apply instantly and kickstart your career with confidence.
      </p>

      {/* Stats */}
      <div className="flex justify-center gap-16 mb-12">
        <div>
          <h2 className="text-4xl font-bold text-[#6A38C2]">{totalJobs}+</h2>
          <p className="text-gray-500 text-sm mt-1">Live Jobs</p>
        </div>
        <div className="border-l border-gray-200 pl-16">
          <h2 className="text-4xl font-bold text-[#6A38C2]">{totalCompanies}+</h2>
          <p className="text-gray-500 text-sm mt-1">Companies Hiring</p>
        </div>
        <div className="border-l border-gray-200 pl-16">
          <h2 className="text-4xl font-bold text-[#6A38C2]">{totalApplications}+</h2>
          <p className="text-gray-500 text-sm mt-1">Applications Submitted</p>
        </div>
      </div>

      {/* Company Logos */}
      <div className="mb-4">
        <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-6">
          Trusted by top companies
        </p>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {companies.map((company) => (
            <img
              key={company?._id}
              src={company?.logo}
              alt={company?.name}
              className="h-10 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
