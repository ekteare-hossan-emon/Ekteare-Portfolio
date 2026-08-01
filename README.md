# Ekteare Hossan Emon — Personal Portfolio Website
### Cybersecurity, Computer Networking & Account Management Portfolio

A premium, dark, editorial, and minimal personal portfolio website built for a Computer Science student specializing in **Cybersecurity**, **Computer Networking**, **Account Management**, and student leadership as **Senior Executive at UIU English Language Forum**.

---

## 🚀 Key Features

- **Dark Editorial Aesthetic**: Deep monochrome base (`#080808`), subtle cyan accents (`#22D3EE`), and typography pairing (Space Grotesk, Inter, JetBrains Mono).
- **Hero Section with Metrics**: Status indicator, headline, supporting bio, action buttons, studio portrait card with cyan rim glow, and live metric counters.
- **Structured About Panel**: Biography, career objectives, professional philosophy, location, availability, and copy-email tool with toast confirmation.
- **Filterable Expertise**: Grouped categories for Cybersecurity, Networking, Technical Tools, and Business Communication with proficiency badges (*Proficient*, *Working Knowledge*, *Familiar*, *Learning*).
- **Vertical Experience Timeline**: Detailed Account Manager and IT Network Assistant role descriptions, responsibilities, and technology tags.
- **Deep-Dive Projects & Case Studies**: Filterable project grid with interactive Case Study modals detailing problem statements, system architectures, tools, security challenges, and measurable results.
- **Leadership & Forum Gallery**: UIU English Language Forum Senior Executive highlights with an interactive photo carousel.
- **Credentials & Education**: Verified certification cards with ID badges and UIU Computer Science coursework breakdown.
- **Functional Contact Interface**: Client-side form validation, subject selection, anti-spam indicator, and copy-to-clipboard email tool.
- **Interactive Cyber Terminal CLI**: Recruiter CLI drawer allowing keyboard terminal commands (`help`, `whoami`, `skills`, `projects`, `contact`, `cv`, `clear`).
- **Interactive CV Viewer**: In-browser Curriculum Vitae modal with print and text file download capabilities.

---

## 🛠️ Project Setup & Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The application will launch on `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```

---

## 📝 How to Edit & Manage Portfolio Content

All personal information, projects, skills, certifications, and experience entries are centrally managed in a single editable file:

**`src/data/portfolio.ts`**

### How to Replace the Portrait Image
1. Place your professional photo in the `public/` directory (e.g., `public/my-portrait.jpg`).
2. Open `src/data/portfolio.ts`.
3. Update the `portraitUrl` property inside `portfolioData.personal`:
   ```ts
   portraitUrl: "/my-portrait.jpg"
   ```

### How to Add or Link a CV File
1. Add your PDF resume to the `public/` folder (e.g., `public/MD_ATIQ_CV.pdf`).
2. In `src/data/portfolio.ts`, set:
   ```ts
   cvUrl: "/MD_ATIQ_CV.pdf"
   ```

### How to Add or Edit Projects
In `src/data/portfolio.ts`, append a new object to the `projects` array:
```ts
{
  id: "proj-new",
  title: "My New Security Project",
  category: "Cybersecurity", // "Cybersecurity" | "Networking" | "Web Development" | "Academic Project"
  summary: "A brief one-sentence overview.",
  description: "Detailed description.",
  imageUrl: "https://images.unsplash.com/...",
  stack: ["Python", "Wireshark", "Linux"],
  problemAddressed: "What problem was solved.",
  keyContribution: "Your specific contribution.",
  githubUrl: "https://github.com/...",
  demoUrl: "https://...",
  featured: true
}
```

---

## 🌐 Deploying to Vercel

1. Push your code repository to GitHub.
2. Sign in to [Vercel](https://vercel.com).
3. Click **Add New Project** and import your GitHub repository.
4. Set Build Settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**.

---

## 📄 License
Created with clarity, security, and purpose for **Ekteare Hossan Emon**.
