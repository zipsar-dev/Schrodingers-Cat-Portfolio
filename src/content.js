/**
 * Central content/config file — every {{TOKEN}} from the master brief lives here.
 * The client can edit copy, links, team members, programmes, events, etc.
 * without touching any layout or component code.
 *
 * Icon names are strings resolved through src/components/Icon.js — swap or
 * extend the registry there if a different icon set is adopted.
 */

export const YEAR = new Date().getFullYear();

/* ------------------------------------------------------------------ */
/* Global                                                              */
/* ------------------------------------------------------------------ */

export const site = {
  orgName: "Schrödinger's Cat Think Tank",
  shortName: "SCCTT",
  footerBlurb:
    "A youth-led research and think-tank organization that identifies pressing societal issues, involves young minds in rigorous inquiry, publishes its findings, and turns research into meaningful debate and action.",
  addressLine: "123 Catalyst Lane, Innovation District, Bengaluru 560001, India",
  phoneNumber: "+91 98765 43210",
  email: "hello@schrodingerscatthinktank.org",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    twitter: "https://x.com/",
  },
};

/** Nav + footer links (Events page is routed at /events but kept out of the nav per wireframe). */
export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Research", to: "/research" },
  { label: "Programme", to: "/programme" },
  { label: "Club", to: "/club" },
  { label: "Career", to: "/career" },
  { label: "Contact us", to: "/contact" },
];

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const home = {
  hero: {
    eyebrow: "A Youth Research & Think Tank",
    heading: "Schrödinger's Cat",
    tagline:
      "We believe the most interesting questions are the ones that are simultaneously true and false, possible and impossible — until someone looks. We are the young minds looking, questioning, and researching the issues that shape our society.",
    knowMoreLabel: "Know More",
    knowMoreAnchor: "#vision-mission",
    image: "/images/hero.jpg",
    imageAlt:
      "Young researchers collaborating around a table with laptops and open notebooks",
    tabs: [
      { label: "About Us", anchor: "#vision-mission" },
      { label: "Feedback", anchor: "#feedback" },
    ],
  },
  vision: {
    eyebrow: "01",
    title: "Our Vision",
    icon: "target",
    image: "/images/vision.jpg",
    imageAlt: "A telescope pointed toward a night sky full of stars",
    text: [
      "A world where every young person's curiosity is treated as a serious instrument of social change.",
      "We envision societies that make decisions on evidence, empathy, and open debate — not on assumption or inertia.",
      "A generation of youth who can hold a thought in superposition: questioning what is, imagining what could be, and committing to what should be.",
      "Research led by young people, for everyone.",
    ],
  },
  mission: {
    eyebrow: "02",
    title: "Our Mission",
    icon: "handshake",
    image: "/images/mission.jpg",
    imageAlt: "A team stacking their hands together before starting a project",
    text: [
      "To identify the most pressing societal issues of our time and hand them to young minds with the tools to investigate.",
      "To conduct in-depth, ethical, and youth-led research that produces publishable findings.",
      "To open every finding to public debate through publications, dialogues, and our clubs.",
      "To build a national network of student researchers, thinkers, and doers.",
    ],
  },
  ensure: {
    eyebrow: "03",
    title: "We Ensure That",
    icon: "shield-check",
    items: [
      {
        title: "Curiosity Is Taken Seriously",
        description:
          "Every question a young researcher brings is treated with the same rigour as a funded study.",
      },
      {
        title: "Research Stays Ethical",
        description:
          "Informed consent, honest data, and transparent methods are non-negotiable in every project.",
      },
      {
        title: "Findings Reach the Public",
        description:
          "Nothing we learn stays in a drawer — it becomes a published piece, a debate, or an action.",
      },
    ],
  },
  model: {
    eyebrow: "04",
    title: "Our Model",
    icon: "lightbulb",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "Identify Societal Issues",
        description:
          "We listen to communities and scan the public sphere for the problems nobody is asking about yet.",
      },
      {
        number: "02",
        icon: "users",
        title: "Involve Young Minds",
        description:
          "Students and early-career researchers join the project as investigators, not spectators.",
      },
      {
        number: "03",
        icon: "microscope",
        title: "Conduct In-Depth Research",
        description:
          "Structured methods, mentorship, and peer review turn questions into credible evidence.",
      },
      {
        number: "04",
        icon: "book-open",
        title: "Publish Findings",
        description:
          "Every study is written up, edited, and published in accessible formats for a wide audience.",
      },
      {
        number: "05",
        icon: "message-circle",
        title: "Engage in Debates",
        description:
          "Published work comes alive in club debates, public dialogues, and policy conversations.",
      },
    ],
  },
  reach: {
    eyebrow: "05",
    title: "Our Reach",
    icon: "globe",
    text: [
      "From school classrooms to university campuses, our programmes and clubs now operate across 12 cities, engaging more than 4,000 young researchers each year.",
      "Our publications have been read in 30+ countries, and our debates have been hosted in partnership with universities, libraries, and civic bodies.",
    ],
    imageAlt: "Illustration of a world map dotted with research hubs",
  },
  impact: {
    eyebrow: "06",
    title: "Our Impact",
    icon: "sparkles",
    text: [
      "Over 150 youth-led research projects completed, with findings cited in local policy discussions and community campaigns.",
      "Alumni of our programmes now study and work in public policy, data science, journalism, and academia — carrying the questioning habit with them.",
    ],
    imageAlt: "Illustration of upward growth bars with a rising sun",
  },
  feedback: {
    eyebrow: "07",
    title: "Feedback",
    icon: "message-circle",
    testimonials: [
      {
        name: "Ananya Sharma",
        role: "Researcher, Cohort 2024",
        quote:
          "Nobody had ever asked me what I thought about the city's water crisis. Here, my survey became a published study — and the municipality actually read it.",
      },
      {
        name: "Rahul Menon",
        role: "Club Lead, Debate Club",
        quote:
          "The debates changed how I argue. I learned that a strong claim without evidence is just an opinion with a louder voice.",
      },
      {
        name: "Dr. Kavita Rao",
        role: "Advisory Panel Member",
        quote:
          "The rigour these young researchers bring is genuinely publishable. I have mentored graduate students with less discipline.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  whyName: {
    eyebrow: "About · 01",
    title: "Why This Name?",
    icon: "cat",
    text:
      "In Schrödinger's famous thought experiment, a cat inside a sealed box is both alive and dead until someone opens the box and observes it. For us, that box is society: every issue we study contains multiple simultaneous realities — what is, what could be, and what people believe. Research is the act of opening the box. Our name is a promise that we will always be willing to look, to question, and to let evidence collapse our assumptions.",
  },
  story: {
    eyebrow: "About · 02",
    title: "Our Story",
    icon: "book-open",
    text:
      "We began in 2021 as a small reading circle of six students who were frustrated that their questions about the world had no place to go. A year later we had published our first study. By 2023 we were a registered think-tank with clubs in four cities. Today we are a network of young researchers, mentors, and partners who believe the most important discoveries are made not in laboratories alone, but in the questions a society refuses to ask.",
    image: "/images/story.jpg",
    imageAlt: "Stacked books and journals on a library table",
  },
  team: {
    eyebrow: "About · 03",
    title: "Who are we..? / Meet our Team",
    icon: "users",
    members: [
      { name: "Aarav Kapoor", role: "Founder & Executive Director", image: "/images/p1.jpg" },
      { name: "Meera Iyer", role: "Head of Research", image: "/images/p2.jpg" },
      { name: "Zoya Khan", role: "Head of Programmes", image: "/images/p3.jpg" },
      { name: "Arjun Nair", role: "Head of Clubs & Outreach", image: "/images/p4.jpg" },
      { name: "Sana Qureshi", role: "Editor & Publications Lead", image: "/images/p5.jpg" },
      { name: "Dev Patel", role: "Community & Partnerships Lead", image: "/images/p6.jpg" },
    ],
  },
  advisory: {
    eyebrow: "About · 04",
    title: "Our Advisory Panel",
    icon: "award",
    members: [
      {
        name: "Dr. Kavita Rao",
        role: "Professor of Sociology, National University",
        image: "/images/a1.jpg",
        quote:
          "Youth-led research is not a training exercise — it is a genuine source of public knowledge. This organization treats it that way.",
      },
      {
        name: "Suresh Menon",
        role: "Former Editor, The Daily Chronicle",
        image: "/images/a2.jpg",
        quote:
          "Their publications read like journalism with the patience of a research paper. We need more of that in public life.",
      },
      {
        name: "Prof. Elena Fernandes",
        role: "Economist & Policy Advisor",
        image: "/images/a3.jpg",
        quote:
          "The model of identify → involve → research → publish → debate is the most sensible pipeline for civic education I have seen.",
      },
    ],
  },
  partners: {
    eyebrow: "About · 05",
    title: "Partners",
    icon: "building-2",
    intro:
      "We collaborate with institutions that share our belief in evidence-led youth participation. Each partner contributes expertise, platforms, or resources that help our research reach further.",
    logos: [
      { label: "Partner 1", alt: "Logo of partner organization one" },
      { label: "Partner 2", alt: "Logo of partner organization two" },
      { label: "Partner 3", alt: "Logo of partner organization three" },
      { label: "Partner 4", alt: "Logo of partner organization four" },
      { label: "Partner 5", alt: "Logo of partner organization five" },
      { label: "Partner 6", alt: "Logo of partner organization six" },
    ],
  },
  supports: {
    eyebrow: "About · 06",
    title: "Our Supports",
    icon: "heart-handshake",
    intro:
      "Our work is sustained by individual donors and supporter organizations who fund scholarships, research grants, and club operations.",
    logos: [
      { label: "Supporter 1", alt: "Logo of supporting organization one" },
      { label: "Supporter 2", alt: "Logo of supporting organization two" },
      { label: "Supporter 3", alt: "Logo of supporting organization three" },
    ],
  },
  govtPartners: {
    eyebrow: "About · 07",
    title: "Our Government Partners",
    icon: "landmark",
    intro:
      "We work with public institutions on studies and civic dialogues that inform local and state-level decisions.",
    members: [
      { name: "Municipal Water Board", role: "City of Bengaluru" },
      { name: "State Youth Commission", role: "Government of Karnataka" },
      { name: "Public Library Network", role: "Ministry of Culture" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Research (Blog & Videos)                                            */
/* ------------------------------------------------------------------ */

export const research = {
  blogs: {
    eyebrow: "Research · 01",
    title: "Blogs",
    icon: "newspaper",
    posts: [
      {
        title: "The Box Is Open: Why Youth Research Matters Now",
        excerpt:
          "When a generation inherits complex problems, the cheapest solution is to start asking better questions earlier. Here is why we think school is the right place for it.",
        image: "/images/blog1.jpg",
        imageAlt: "Researchers planning a study around a table covered with documents",
      },
      {
        title: "Water, Data, and Trust: Lessons from a City Survey",
        excerpt:
          "Four hundred households, one season of fieldwork, and a surprising finding about who trusts the water they drink. Our researchers break down the numbers.",
        image: "/images/blog2.jpg",
        imageAlt: "City skyline at dusk where the water survey was carried out",
      },
      {
        title: "How to Disagree Without Being Disagreeable",
        excerpt:
          "A field guide from our Debate Club on argument structure, evidence standards, and the lost art of changing your mind in public.",
        image: "/images/blog3.jpg",
        imageAlt: "Audience at a public debate listening to a speaker on stage",
      },
      {
        title: "Publishing at Seventeen: A Researcher's Diary",
        excerpt:
          "From a first research question to a byline in a public journal — one of our youngest authors reflects on the journey, and the revisions.",
        image: "/images/blog4.jpg",
        imageAlt: "Hands writing notes with a pen on a journal page",
      },
    ],
  },
  videos: {
    eyebrow: "Research · 02",
    title: "Videos",
    icon: "film",
    items: [
      {
        title: "Inside Our Model: A 5-Minute Explainer",
        image: "/images/vid1.jpg",
        imageAlt: "Thumbnail of the animated explainer video about our research model",
      },
      {
        title: "Debate Night: Should Cities Ban Cars on Weekends?",
        image: "/images/vid2.jpg",
        imageAlt: "Thumbnail of a recorded debate between two youth teams",
      },
      {
        title: "Field Notes: The Water Survey, Behind the Scenes",
        image: "/images/vid3.jpg",
        imageAlt: "Thumbnail of documentary footage from a city water survey",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Programme                                                           */
/* ------------------------------------------------------------------ */

export const programme = {
  heading: {
    eyebrow: "Programme",
    title: "Our Programmes",
    icon: "graduation-cap",
  },
  tabs: [
    { id: "all", label: "All" },
    { id: "fellowships", label: "Fellowships" },
    { id: "camps", label: "Research Camps" },
  ],    programmes: [
    {
      id: "fellowships",
      name: "Youth Research Fellowship",
      description:
        "A six-month fellowship where student researchers design, conduct, and publish a study of their own with a mentor by their side. Open to ages 14–24.",
      image: "/images/prog1.jpg",
      imageAlt: "Students in a classroom working together on a research task",
    },
    {
      id: "fellowships",
      name: "Editorial Internship",
      description:
        "Work inside our publications team — commissioning, editing, and fact-checking stories that turn research into readable public knowledge.",
      image: "/images/prog2.jpg",
      imageAlt: "A manuscript draft being reviewed with a laptop nearby",
    },
    {
      id: "camps",
      name: "Summer Research Camp",
      description:
        "Two intensive weeks of methods, fieldwork, and writing with a cohort of 30 young researchers from across the country.",
      image: "/images/prog3.jpg",
      imageAlt: "Campers gathered around a campfire under the night sky",
    },
    {
      id: "camps",
      name: "Debate & Public Speaking Camp",
      description:
        "A weekend bootcamp on argument construction, evidence handling, and public speaking, run by our Debate Club leads and alumni.",
      image: "/images/prog4.jpg",
      imageAlt: "A speaker addressing an audience from a conference stage",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Events                                                              */
/* ------------------------------------------------------------------ */

export const events = {
  heading: {
    eyebrow: "Events",
    title: "Events",
    icon: "calendar",
    sublabel: "All Upcoming Updates",
  },
  list: [
    {
      name: "National Youth Research Summit 2026",
      date: "October 16–18, 2026",
      description:
        "Our flagship annual gathering. Three days of paper presentations, keynote dialogues, and workshops connecting young researchers from every city where we work. Submissions for papers open in August; early-bird registration closes on September 15.",
    },
    {
      name: "Open Debate Night: The AI Election",
      date: "September 5, 2026",
      description:
        "Public debate hosted with the city library on whether AI-generated campaign content should be labelled, regulated, or left alone. Two teams of club members, one independent panel, and an audience that gets to vote at the end.",
    },
    {
      name: "Fieldwork Workshop: Listening to a Neighbourhood",
      date: "August 22, 2026",
      description:
        "A hands-on methods workshop where participants design interview guides, practise consent conversations, and run a mini-survey in a real neighbourhood. No experience needed — curiosity required.",
    },
    {
      name: "Publishing Clinic with The Public Journal",
      date: "July 11, 2026",
      description:
        "Editors from our partner journal review draft manuscripts, explain the review process, and answer questions about turning coursework into citable public research.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Club                                                                */
/* ------------------------------------------------------------------ */

export const club = {
  heading: {
    eyebrow: "Club",
    title: "Our Clubs",
    icon: "compass",
    intro:
      "Clubs are where our community lives week to week. Any student can join a club in their city or start one at their school — each club runs on a shared toolkit we provide.",
  },
  clubs: [
    {
      name: "Debate Club",
      icon: "message-circle",
      description:
        "Weekly motions, evidence clinics, and public debate nights. Members learn to construct arguments, weigh sources, and change their minds with grace — the core skill of a think-tank.",
    },
    {
      name: "Art Club",
      icon: "palette",
      description:
        "Research doesn't have to live only in paragraphs. Our art club turns findings into zines, posters, comics, and data illustrations that travel further than any abstract.",
    },
    {
      name: "Social Club",
      icon: "heart-handshake",
      description:
        "The connective tissue of the community: field trips, volunteer drives, and peer support circles that keep young researchers healthy, connected, and grounded.",
    },
    {
      name: "Travel Club",
      icon: "plane",
      description:
        "Field research needs feet on the ground. The travel club organizes study visits, community immersion trips, and cross-city exchanges that put research in real places.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Career                                                              */
/* ------------------------------------------------------------------ */

export const career = {
  heading: {
    eyebrow: "Career",
    title: "Work With Us",
    icon: "briefcase",
  },
  intro:
    "Whether you are a researcher, writer, designer, organiser, or someone who simply wants to spend their time on questions that matter — there is a place for you here. We hire employees, take interns, and welcome volunteers across all our programmes.",
  cta: {
    heading: "Apply for the job offer for Now...!",
    text: "We are currently hiring for the 2026–27 cycle: Research Associates, Programme Coordinators, and Editorial Interns. Applications are reviewed on a rolling basis — send yours in before the next cohort call.",
    buttonLabel: "Apply Now",
    buttonTo: "/contact",
  },
  lifeAtOrg: {
    eyebrow: "Career · 01",
    title: `Life at Schrödinger's Cat Think Tank`,
    icon: "sparkles",
    text:
      "A typical week involves a methods workshop on Tuesday, a manuscript edit on Wednesday, and a debate on Friday night. We keep teams small, trust high, and meetings short. Every member of staff mentors at least one young researcher — because we think the best way to stay sharp is to teach curiosity.",
    image: "/images/life.jpg",
    imageAlt: "A bright office with plants and people collaborating at desks",
  },
  whyWork: {
    eyebrow: "Career · 02",
    title: "Why Work with Us..?",
    icon: "star",
    text:
      "You will never wonder whether your work matters. Our alumni work in policy, journalism, and academia; our team gets to see a question become a published study become a policy conversation — usually within a year. We offer fair pay, flexible hours, and an organisation that actually reads its own research on how to treat people well.",
    image: "/images/why.jpg",
    imageAlt: "A small team working together around a shared desk",
  },
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact = {
  heading: {
    eyebrow: "Contact",
    title: "Get in Touch",
    icon: "mail",
  },
  intro:
    "Questions about joining a club, partnering on a study, or sponsoring a researcher? Write to us — a human reads every message, and most are answered within two working days.",
  form: {
    // Wire this to a real endpoint (Formspree, an API route, an email
    // service, etc.) once the client decides how submissions are handled.
    endpoint: "",
    fields: {
      username: {
        label: "Username",
        placeholder: "Your name",
        error: "Please enter your name (at least 2 characters).",
      },
      email: {
        label: "Email",
        placeholder: "you@example.com",
        error: "Please enter a valid email address.",
      },
      message: {
        label: "Message",
        placeholder: "Tell us what's on your mind...",
        error: "Please write a message (at least 10 characters).",
      },
    },
    submitLabel: "Submit",
    successHeading: "Thank you!",
    successText:
      "Your message is in the box — we'll get back to you within two working days.",
    failureText:
      "Something went wrong while sending your message. Please try again, or write to us directly at " + "hello@schrodingerscatthinktank.org",
  },
  image: "/images/contact.jpg",
  imageAlt:
    "A person working at a desk with a laptop, representing where to reach us",
};
