import React, { useRef, useState } from 'react';
import groupImg from '../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';

interface Job {
  id: number;
  role: string;
  department: string;
  deadline: string;
  location: string;
}

const JOBS_LIST: Job[] = [
  {
    id: 1,
    role: 'Assistant Manager - Business Development',
    department: 'Marketing & Sales',
    deadline: 'Aug 15, 2026',
    location: 'Dhaka Head Office',
  },
  {
    id: 2,
    role: 'Executive - Digital Marketing & PR',
    department: 'IT & Branding',
    deadline: 'Aug 20, 2026',
    location: 'Dhaka Head Office',
  },
  {
    id: 3,
    role: 'Customer Relations Executive',
    department: 'CRM & Accounts',
    deadline: 'Aug 25, 2026',
    location: 'Dhaka Head Office',
  },
];

const CareerPage: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setUploadSuccess(true);
      setTimeout(() => {
        setUploadSuccess(false);
        setSelectedFile(null);
      }, 3000);
    }
  };

  return (
    <main id="career-page" className="pt-24 bg-slate-50">

      {/* ── 1. WE ARE HIRING HERO BANNER ───────────────────────────────── */}
      <section className="relative h-[65vh] min-h-[420px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={groupImg}
            alt="Goldsands Group Team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(10,10,30,0.85),rgba(26,35,126,0.75))' }} />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1
            className="text-white text-5xl md:text-7xl font-black tracking-[0.25em] uppercase drop-shadow-lg"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            WE ARE HIRING
          </h1>
          <p className="font-bold tracking-widest text-sm md:text-base mt-4 uppercase" style={{ color: '#C9A84C' }}>
            Build Your Future with Goldsands Group
          </p>
        </div>
      </section>

      {/* ── 2. FIND YOUR OPPORTUNITY SECTION ───────────────────────────── */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#e0f2fe] rounded-3xl p-8 md:p-12 shadow-lg border border-sky-100 flex flex-col lg:flex-row gap-8 items-center">
            {/* Left — Text */}
            <div className="flex-1 space-y-6">
              <h2
                className="font-black text-2xl md:text-3xl leading-tight"
                style={{ fontFamily: 'Playfair Display, serif', color: '#1a237e' }}
              >
                Find Your Opportunity with Goldsands Group
              </h2>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Goldsands is a leading real estate/property developer company in Bangladesh.
                Established in 2016 and with an experience of more than 3 decades, Goldsands has
                garnered the reputation of a branded company who values hard work, honesty, talent
                and passion for work. Our vision is to build a world class organization and for that
                we are constantly on the lookout for talented people who want to build their career
                in one of the leading companies in the country. We provide job opportunities in
                various functions and disciplines to suit the organization's needs.
              </p>
              <a
                href="#jobs-list"
                className="inline-block font-bold text-sm px-8 py-3 rounded-full shadow-md transition-colors text-white"
                style={{ background: '#1a237e' }}
              >
                Learn More
              </a>
            </div>

            {/* Right — Photo */}
            <div className="flex-1 w-full max-w-lg">
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white aspect-[16/10]">
                <img
                  src={groupImg}
                  alt="Goldsands Employees"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. JOBS LISTING TABLE ──────────────────────────────────────── */}
      <section id="jobs-list" className="py-8 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="bg-sky-50 border-b border-gray-100 px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 font-bold text-sm tracking-wider uppercase" style={{ color: '#1a237e' }}>
            <div>Role</div>
            <div className="hidden md:block">Department</div>
            <div className="hidden md:block">Deadline</div>
            <div className="text-right md:text-left">Location</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-100">
            {JOBS_LIST.map((job) => (
              <div
                key={job.id}
                className="px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-center hover:bg-sky-50/40 transition-colors duration-200 group"
              >
                <div className="font-bold text-gray-800 text-sm md:text-base group-hover:text-navy-600 transition-colors">
                  {job.role}
                </div>
                <div className="hidden md:block text-gray-600 text-sm font-medium">{job.department}</div>
                <div className="hidden md:block text-gray-500 text-sm">{job.deadline}</div>
                <div className="text-right md:text-left flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <span className="text-gray-600 text-xs md:text-sm font-medium">{job.location}</span>
                  <a
                    href={`mailto:hr@goldsandsgroup.com?subject=Application for ${job.role}`}
                    className="inline-block font-bold text-xs px-4 py-2 rounded-full border transition-all duration-200 text-center"
                    style={{ background: '#f0f4ff', color: '#1a237e', borderColor: '#c5cff5' }}
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ACTION CARDS (UPLOAD CV & LINKEDIN) ────────────────────── */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 — Upload CV */}
          <div className="bg-white rounded-3xl p-8 border-2 border-dashed border-sky-200 shadow flex flex-col items-center text-center space-y-4 hover:border-yellow-400 transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-3xl">
              📤
            </div>
            <h3 className="font-extrabold text-xl" style={{ color: '#1a237e' }}>Upload Your CV</h3>
            <p className="text-gray-500 text-sm max-w-sm">
              Click on the button to upload your CV and our HR will be in touch with you.
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="hidden"
            />
            <button
              onClick={handleUploadClick}
              className="text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors shadow-sm"
              style={{ background: '#0284c7' }}
            >
              {selectedFile ? 'CV Selected ✓' : 'Upload CV'}
            </button>
            {uploadSuccess && (
              <p className="text-green-600 text-xs font-semibold mt-2">
                ✓ CV Uploaded Successfully!
              </p>
            )}
          </div>

          {/* Card 2 — LinkedIn */}
          <div className="bg-white rounded-3xl p-8 border-2 border-dashed border-sky-200 shadow flex flex-col items-center text-center space-y-4 hover:border-yellow-400 transition-colors duration-300">
            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-2xl font-black">
              in
            </div>
            <h3 className="font-extrabold text-xl" style={{ color: '#1a237e' }}>Follow us on LinkedIn</h3>
            <p className="text-gray-500 text-sm max-w-sm">
              Stay connected with us and our latest news by connecting on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/company/goldsandsgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold text-sm px-6 py-2.5 rounded-full transition-colors shadow-sm"
              style={{ background: '#0284c7' }}
            >
              Follow Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
};

export default CareerPage;
