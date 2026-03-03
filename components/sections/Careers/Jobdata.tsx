// sections/Careers/jobsData.ts

export interface Job {
    title: string;
    location: string;
    type: string;
    department: string;
    hasDetail?: boolean;
}

export const jobs: Job[] = [
    // Sales & Marketing
    { title: 'Head Of Sales and Marketing', location: 'East London, ZA', type: 'Full-Time / Contract', department: 'Sales & Marketing', hasDetail: true },
    { title: 'Business Analyst Assistance', location: 'East London, ZA', type: 'Full-Time', department: 'Sales & Marketing' },
    // Operations
    { title: 'Project Manager', location: 'East London, ZA', type: 'Full-Time', department: 'Operations' },
    { title: 'Cleaner', location: 'East London, ZA', type: 'Full-Time', department: 'Operations' },
    // Technology
    { title: 'Frontend Specialist', location: 'Remote / East London, ZA', type: 'Contract', department: 'Business Solutions' },
];

// Group jobs by department preserving insertion order
export const groupedJobs: { department: string; jobs: Job[] }[] = [];
jobs.forEach((job) => {
    const existing = groupedJobs.find((g) => g.department === job.department);
    if (existing) {
        existing.jobs.push(job);
    } else {
        groupedJobs.push({ department: job.department, jobs: [job] });
    }
});

//suppose to be Jobdata.ts