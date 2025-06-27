import React, { useState, useEffect } from "react";
import { Drawer, DrawerContent, DrawerTrigger, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { createJob, fetchJobs } from "../../features/job/jobSlice";

const LOCAL_STORAGE_KEY = "createJobForm";

const CreateJobDrawer = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const defaultForm = {
        title: "",
        company: "",
        location: "",
        description: "",
        deadline: "",
    };

    const [form, setForm] = useState(defaultForm);

    // Load form from localStorage
    useEffect(() => {
        const savedForm = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedForm) {
            setForm(JSON.parse(savedForm));
        }
    }, []);

    // Save form to localStorage
    const handleChange = (e) => {
        const updatedForm = { ...form, [e.target.name]: e.target.value };
        setForm(updatedForm);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedForm));
    };

    // Submit the form and clear localStorage
    const handleCreate = () => {
        dispatch(createJob(form)).then(() => {
            dispatch(fetchJobs());
        });
        setOpen(false);
        setForm(defaultForm);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    };

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button className="bg-black text-white hover:bg-neutral-800">+ Add Job</Button>
            </DrawerTrigger>
<DrawerContent className="p-0 flex flex-col h-[90vh]">
  <DrawerHeader className="p-6 border-b">
    <DrawerTitle>Create New Job</DrawerTitle>
  </DrawerHeader>

  {/* Scrollable form section */}
  <div className="flex-1 overflow-y-auto px-6 py-4">
    {["title", "company", "location", "description", "deadline"].map((field) => (
      <div className="mb-4" key={field}>
        <Label className="capitalize mb-1 block" htmlFor={field}>
          {field}
        </Label>
        <Input
          id={field}
          name={field}
          type={field === "deadline" ? "date" : "text"}
          value={form[field]}
          onChange={handleChange}
        />
      </div>
    ))}
  </div>

  {/* Sticky footer actions */}
  <div className="px-6 py-4 border-t">
    <Button
      className="w-full bg-black text-white hover:bg-neutral-800"
      onClick={handleCreate}
    >
      Submit
    </Button>
    <DrawerClose asChild>
      <Button variant="outline" className="w-full mt-2">
        Cancel
      </Button>
    </DrawerClose>
  </div>
</DrawerContent>

        </Drawer>
    );
};

export default CreateJobDrawer;
