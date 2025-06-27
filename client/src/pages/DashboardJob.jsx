import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, removeJob } from "../features/job/jobSlice";
import JobModal from "../components/job/JobModal";
import CreateJobDrawer from "@/components/job/CreateJobDrawer";
import JobCard from "@/components/job/JobCard";
import Navbar from "@/components/Navbar";
import LoadingDots from "@/components/LoadingDots";

const DashboardJob = () => {
    const dispatch = useDispatch();
    const { jobs, loading } = useSelector((state) => state.job);
    const { user } = useSelector((state) => state.auth);

    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(removeJob(id));
        setSelectedJob(null);
    };

    if (loading) {
        return (
            <div className="fixed h-screen inset-0 z-50 flex items-center justify-center bg-white">
                <LoadingDots />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Navbar */}
            <Navbar />

            {/* Page Content */}
            <div className="px-6 py-10">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-black">Jobs</h2>
                    <CreateJobDrawer />
                </div>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job) => (
                        <JobCard key={job._id} job={job} onClick={setSelectedJob} />
                    ))}
                </div>

                <JobModal job={selectedJob} user={user} onClose={() => setSelectedJob(null)} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default DashboardJob;
