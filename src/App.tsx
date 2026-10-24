import { useMemo, useState } from 'react'

type IconName = 'search' | 'user' | 'bell' | 'arrow' | 'calendar' | 'briefcase' | 'file' | 'check' | 'download' | 'help' | 'chevron'

function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m15 8 4 4-4 4" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" /></>,
    file: <><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v5h5M9 13h6M9 17h6" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
    download: <><path d="M12 3v12m-4-4 4 4 4-4M5 21h14" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9.7 9a2.5 2.5 0 1 1 3.1 2.4c-.8.3-.8 1-.8 1.6M12 17h.01" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
  }
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

const jobs = [
  { title: 'Group-II Services', id: '11/2024', posts: 899, qualification: 'Any Bachelor’s Degree', close: '20 Mar 2025', days: 4, featured: true },
  { title: 'Forest Range Officer', id: '12/2024', posts: 37, qualification: 'Bachelor’s Degree in Science', close: '25 Mar 2025', days: 9 },
  { title: 'Assistant Executive Engineer', id: '09/2024', posts: 81, qualification: 'B.E. / B.Tech', close: '02 Apr 2025', days: 17 },
]

export default function App() {
  const [query, setQuery] = useState('')
  const [tab, setTab] = useState<'open' | 'upcoming'>('open')
  const filtered = useMemo(() => jobs.filter((job) => job.title.toLowerCase().includes(query.toLowerCase())), [query])

  return (
    <div className="min-h-screen bg-[#f6f8f7] text-[#17211d]">
      <div className="bg-[#093e2f] px-5 py-2 text-center text-xs text-white/80 sm:flex sm:justify-between sm:px-10">
        <span>Government of Andhra Pradesh</span>
        <div className="hidden items-center gap-5 sm:flex"><button>Skip to main content</button><button>Accessibility</button><button className="font-semibold text-white">English <span className="text-white/50">|</span> తెలుగు</button></div>
      </div>

      <header className="border-b border-[#dce4e0] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="APPSC logo" className="size-13" />
            <div><p className="text-lg font-bold leading-tight text-[#143f32]">Andhra Pradesh Public Service Commission</p><p className="mt-0.5 text-xs text-[#66736e]">Government of Andhra Pradesh</p></div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-[#3e4d47] lg:flex">
            <a className="text-[#09684d]" href="#jobs">Find Jobs</a><a href="#notifications">Notifications</a><a href="#results">Results</a><a href="#resources">Resources</a>
          </nav>
          <div className="flex items-center gap-2">
            <button aria-label="Notifications" className="relative grid size-10 place-items-center rounded-full text-[#46544f] hover:bg-[#f0f4f2]"><Icon name="bell" /><span className="absolute right-2 top-2 size-2 rounded-full bg-[#c75335]" /></button>
            <button className="hidden items-center gap-2 rounded-lg border border-[#b9c9c3] px-4 py-2.5 text-sm font-semibold text-[#174f3d] sm:flex"><Icon name="user" className="size-4" /> Candidate login</button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#0d513e] text-white">
          <div className="absolute -right-24 -top-44 size-[440px] rounded-full border-[80px] border-white/5" />
          <div className="absolute bottom-0 right-[24%] h-full w-px bg-white/10" />
          <div className="relative mx-auto grid max-w-7xl gap-9 px-5 py-14 lg:grid-cols-[1.3fr_.7fr] lg:px-8 lg:py-20">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#e9c66d]">Your path to public service</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[58px]">Build your career.<br /><span className="text-[#f2d488]">Serve Andhra Pradesh.</span></h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/72">Discover government opportunities, apply online, and track your application—all in one place.</p>
              <div className="mt-8 flex max-w-2xl overflow-hidden rounded-xl bg-white p-1.5 shadow-xl shadow-black/15">
                <Icon name="search" className="ml-3 mt-3 size-5 shrink-0 text-[#6f7b77]" />
                <input value={query} onChange={(e) => setQuery(e.target.value)} className="min-w-0 flex-1 px-3 py-2.5 text-sm text-[#17211d] outline-none" placeholder="Search by post, department or qualification" aria-label="Search jobs" />
                <button className="rounded-lg bg-[#c3922e] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#a87920]">Search jobs</button>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70"><span>Popular:</span><button className="underline decoration-white/30 underline-offset-4">Group II</button><button className="underline decoration-white/30 underline-offset-4">Engineering</button><button className="underline decoration-white/30 underline-offset-4">Forest services</button></div>
            </div>
            <aside className="self-end rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#efd27f]">Application snapshot</p>
              <div className="mt-5 grid grid-cols-2 gap-5"><div><p className="text-3xl font-semibold">14</p><p className="mt-1 text-sm text-white/65">Open notifications</p></div><div><p className="text-3xl font-semibold">1,248</p><p className="mt-1 text-sm text-white/65">Vacancies</p></div></div>
              <div className="mt-6 border-t border-white/15 pt-5"><button className="flex w-full items-center justify-between text-sm font-semibold"><span>View application calendar</span><Icon name="arrow" /></button></div>
            </aside>
          </div>
        </section>

        <section className="border-b border-[#ead8aa] bg-[#fff9e8]" aria-label="Important notice">
          <div className="mx-auto flex max-w-7xl items-start gap-3 px-5 py-3.5 text-sm lg:px-8">
            <span className="mt-0.5 rounded bg-[#a87418] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">New</span>
            <p className="flex-1 font-medium text-[#5d461b]"><strong>Online application submission for 2026 notifications is now open.</strong> Review eligibility and keep your OTR profile updated before applying.</p>
            <button className="hidden shrink-0 font-semibold text-[#8a6116] underline underline-offset-4 sm:block">View notice</button>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-5 px-5 pt-10 lg:grid-cols-[.42fr_.58fr] lg:px-8">
          <div className="rounded-xl bg-[#133f33] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e9c66d]">Candidate services</p>
            <h2 className="mt-2 text-2xl font-semibold">Start here</h2>
            <div className="mt-5 grid gap-2">
              {['One Time Profile Registration', 'Direct Recruitment', 'Departmental Tests', 'Half Yearly Examinations'].map((item, index) =>
                <button key={item} className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-medium hover:bg-white/10">
                  <span><span className="mr-3 text-white/35">0{index + 1}</span>{item}</span><Icon name="chevron" className="size-4 text-[#e9c66d]" />
                </button>
              )}
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-[#dce4e0] bg-white">
            <div className="flex items-center justify-between border-b border-[#e3e9e6] px-5 py-4">
              <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a3731d]">Latest updates</p><h2 className="mt-1 text-xl font-semibold">Announcements</h2></div>
              <button className="text-sm font-semibold text-[#0c6249]">View all</button>
            </div>
            <div className="divide-y divide-[#edf0ef]">
              {[
                ['13 Oct 2026', 'Brief notification for Deputy Commissioner of Endowments and Assistant Commissioner of Endowments'],
                ['13 Oct 2026', 'Brief notification for Assistant Chemical Examiner in A.P. Prohibition and Excise Subordinate Service'],
                ['13 Oct 2026', 'Direct recruitment to the post of Assistant Motor Vehicle Inspector in A.P. Transport Service'],
              ].map(([date, title]) =>
                <button key={title} className="group flex w-full items-start gap-4 px-5 py-4 text-left hover:bg-[#f8fbfa]">
                  <span className="mt-0.5 w-20 shrink-0 text-xs font-semibold text-[#8b6a28]">{date}</span>
                  <span className="flex-1 text-sm font-medium leading-5 text-[#34443e] group-hover:text-[#0c6249]">{title}</span>
                  <Icon name="arrow" className="mt-0.5 size-4 shrink-0 text-[#83908b]" />
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8" id="jobs">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="text-sm font-semibold text-[#a3731d]">RECRUITMENT</p><h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">Current opportunities</h2></div>
            <div className="flex rounded-lg bg-[#e9eeec] p-1 text-sm font-semibold"><button onClick={() => setTab('open')} className={`rounded-md px-4 py-2 ${tab === 'open' ? 'bg-white text-[#0b6249] shadow-sm' : 'text-[#65716c]'}`}>Open applications</button><button onClick={() => setTab('upcoming')} className={`rounded-md px-4 py-2 ${tab === 'upcoming' ? 'bg-white text-[#0b6249] shadow-sm' : 'text-[#65716c]'}`}>Upcoming</button></div>
          </div>

          {tab === 'open' ? <div className="grid gap-4">
            {filtered.map((job) => <article key={job.id} className="group grid gap-5 rounded-xl border border-[#dce4e0] bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#97b5aa] hover:shadow-lg hover:shadow-[#143f32]/5 md:grid-cols-[1fr_auto] md:items-center md:p-6">
              <div className="flex gap-4"><div className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#e9f3ef] text-[#126149]"><Icon name="briefcase" /></div><div><div className="flex flex-wrap items-center gap-2"><h3 className="text-lg font-semibold">{job.title}</h3>{job.featured && <span className="rounded-full bg-[#fff4d8] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[#94670d]">Closing soon</span>}</div><p className="mt-1 text-sm text-[#6a7671]">Notification no. {job.id}</p><div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#46544f]"><span><b className="text-[#17211d]">{job.posts}</b> vacancies</span><span>{job.qualification}</span><span className="flex items-center gap-1.5"><Icon name="calendar" className="size-4 text-[#9b7226]" /> Closes {job.close}</span></div></div></div>
              <div className="flex items-center justify-between gap-6 border-t border-[#edf0ef] pt-4 md:border-0 md:pt-0"><div className="text-right"><p className="text-xs text-[#7a8581]">Time remaining</p><p className="mt-1 text-sm font-semibold text-[#a55237]">{job.days} days</p></div><button className="grid size-11 place-items-center rounded-lg border border-[#afc2bb] text-[#0c5c45] transition group-hover:border-[#0d6048] group-hover:bg-[#0d6048] group-hover:text-white" aria-label={`View ${job.title}`}><Icon name="arrow" /></button></div>
            </article>)}
            {!filtered.length && <div className="rounded-xl border border-dashed border-[#bdcac5] bg-white py-12 text-center text-[#65716c]">No open roles match “{query}”. Try another keyword.</div>}
          </div> : <div className="rounded-xl border border-dashed border-[#bdcac5] bg-white py-14 text-center"><p className="font-semibold">Upcoming notifications will appear here</p><p className="mt-2 text-sm text-[#6a7671]">Check the application calendar for tentative recruitment dates.</p></div>}
          <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0c6249]">View all notifications <Icon name="arrow" className="size-4" /></button>
        </section>

        <section className="border-y border-[#dce4e0] bg-white">
          <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
            <div className="mb-6"><p className="text-sm font-semibold text-[#a3731d]">QUICK ACCESS</p><h2 className="mt-1 text-2xl font-semibold">Everything you need</h2></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['file', 'One Time Profile Registration', 'Create or update your candidate profile'],
                ['check', 'Application status', 'Track your submitted applications'],
                ['download', 'Hall tickets', 'Download for upcoming examinations'],
                ['help', 'Help & support', 'Find answers and contact our team'],
                ['calendar', 'Examination calendar', 'Plan around important examination dates'],
                ['file', 'Syllabus', 'View and download current syllabi'],
                ['check', 'Results', 'Check examination and selection results'],
                ['download', 'Keys & objections', 'Access answer keys and raise objections'],
              ].map(([icon, title, copy]) => <button key={title} className="group flex min-h-36 flex-col items-start rounded-xl border border-[#e0e6e3] p-5 text-left hover:border-[#91afa4] hover:bg-[#f8fbfa]"><Icon name={icon as IconName} className="size-6 text-[#166049]" /><span className="mt-5 flex w-full items-center justify-between font-semibold">{title}<Icon name="chevron" className="size-4 opacity-40 group-hover:opacity-100" /></span><span className="mt-1 text-sm leading-5 text-[#707b77]">{copy}</span></button>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#092f25] px-5 py-8 text-sm text-white/65">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 sm:flex-row sm:items-center lg:px-8"><div><p className="font-semibold text-white">Andhra Pradesh Public Service Commission</p><p className="mt-1 text-xs">Vijayawada, Andhra Pradesh — 520010</p></div><div className="flex flex-wrap gap-5"><a href="#contact">Contact us</a><a href="#privacy">Privacy</a><a href="#terms">Terms of use</a><a href="#sitemap">Sitemap</a></div></div>
      </footer>
    </div>
  )
}
