import React from "react";
import { Building2, MapPin, CalendarDays, MoreVertical } from "lucide-react";

const JobCard = ({ job, onClick }) => {
  const deadlineDate = new Date(job.deadline);
  const isExpired = deadlineDate < new Date();

  return (
    <div
      className="relative bg-white w-full min-h-[220px] flex flex-col justify-between border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-200 cursor-pointer"
      onClick={() => onClick(job)}
    >
      {/* Three Dot Menu */}
      <div className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors">
        <MoreVertical size={20} />
      </div>

      {/* Job Info */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-black pr-8 break-words">{job.title}</h3>

        <div className="flex items-center gap-2 text-sm text-gray-700 flex-wrap">
          <Building2 size={16} className="text-gray-500" />
          <span>{job.company}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-700 flex-wrap">
          <MapPin size={16} className="text-gray-500" />
          <span>{job.location}</span>
        </div>

        <p className="text-sm text-gray-600 leading-snug break-words">
          {job.description.length > 80
            ? `${job.description.slice(0, 80)}...`
            : job.description}
        </p>
      </div>

      {/* Deadline Badge */}
      <div className="flex justify-end mt-4">
        <span
          className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium ${
            isExpired
              ? "bg-red-100 text-red-600 border border-red-300"
              : "bg-gray-100 text-gray-700 border border-gray-300"
          }`}
        >
          <CalendarDays size={14} />
          {isExpired
            ? "Expired"
            : `Deadline: ${deadlineDate.toLocaleDateString()}`}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
