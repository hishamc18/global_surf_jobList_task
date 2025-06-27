import React from "react";
import { Button } from "../ui/button";
import { Building2, MapPin, CalendarDays } from "lucide-react";

const JobModal = ({ job, user, onClose, onDelete }) => {
  
  if (!job) return null;

  const deadline = new Date(job.deadline).toLocaleDateString();

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div
        className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl p-8 relative border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-5 text-gray-500 text-3xl hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-2 scrollbar-hidden">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900">{job.title}</h2>
          
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center gap-2 text-sm">
              <Building2 size={18} className="text-gray-500" />
              <span className="font-medium">{job.company}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={18} className="text-gray-500" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CalendarDays size={18} className="text-gray-500" />
              <span>Deadline: {deadline}</span>
            </div>
          </div>

          {/* Description */}
          <div className="text-sm text-gray-700 border border-gray-200 rounded-md p-4 bg-gray-50 max-h-[40vh] overflow-y-auto scrollbar-hidden whitespace-pre-line break-words leading-relaxed">
            {job.description}
          </div>

          {/* Delete Button */}
          <Button
            className="w-full bg-black text-white hover:bg-neutral-800"
            variant="destructive"
            disabled={user?._id !== job.user._id}
            onClick={() => onDelete(job._id)}
          >
            {user?._id === job.user._id ? "Delete Job" : "Only owner can delete"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobModal;
