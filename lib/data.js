// Single source of truth for clients + blog posts.
// When the Notion blog is set up, swap getBlogPosts() with a Notion API fetch.

export const CLIENTS = [
  { name: 'Junction' },
  { name: 'Plain' },
  { name: 'Letty' },
  { name: 'Edra' },
  { name: 'ClaimsSorted' },
  { name: 'Capsa' },
  { name: 'Cosine' },
  { name: 'Attio' },
  { name: 'Linklaters' },
]

export const BLOG_POSTS = [
  {
    slug: 'why-we-started-ethiq',
    title: 'Why we started Ethiq',
    excerpt:
      'Most agencies treat hiring as a volume game. We thought there was a better way.',
    date: '2025-09-01',
    body: [
      { type: 'p', text: 'Most recruitment agencies operate on volume. The model rewards spray-and-pray sourcing, generic outreach, and treating candidates as throughput. We were tired of it.' },
      { type: 'p', text: 'Ethiq was set up to do the opposite. Work with a small number of clients. Hire for technical roles where the work actually matters. Treat candidates like adults.' },
      { type: 'h2', text: 'What that means in practice' },
      { type: 'p', text: 'Fewer roles, deeper understanding. We spend time with hiring managers before we open a search. We tell clients when a role is unhireable as written. We give candidates real updates.' },
      { type: 'p', text: 'It scales slower. That is the point.' },
    ],
  },
  {
    slug: 'how-to-write-a-job-spec-engineers-want-to-read',
    title: 'How to write a job spec engineers want to read',
    excerpt:
      'Most job specs are written for ATS systems and recruiters. Here is how to write one for the engineer you are trying to hire.',
    date: '2025-10-14',
    body: [
      { type: 'p', text: 'Most job specs read like a checklist a robot wrote. Vague responsibilities, ten years required experience in a five-year-old framework, no signal about the actual work. Engineers skim them and bounce.' },
      { type: 'p', text: 'A good spec answers four questions in the first 200 words: what will I build, what is the team like, why does this work matter, what does great look like in twelve months.' },
      { type: 'h2', text: 'What to cut' },
      { type: 'p', text: 'Cut the company boilerplate. Cut the diversity statement that reads like every other diversity statement. Cut the long list of nice-to-have skills. Engineers can read between the lines.' },
      { type: 'h2', text: 'What to add' },
      { type: 'p', text: 'Add a real description of the codebase. Add the most interesting problem the team is currently working on. Add the salary range.' },
    ],
  },
  {
    slug: 'specialist-vs-generalist-recruiters',
    title: 'Specialist vs generalist recruiters',
    excerpt:
      'When does niche matter? Short answer: more often than agencies admit, less often than candidates assume.',
    date: '2025-11-02',
    body: [
      { type: 'p', text: 'Specialist recruiters say their niche is the reason they place better. Generalists say their breadth means they see more of the market. Both are partially right and mostly self-serving.' },
      { type: 'p', text: 'What actually matters is whether the recruiter understands the work. A generalist who has placed twenty senior backend engineers is more useful than a self-described AI specialist who has placed two.' },
      { type: 'h2', text: 'How to tell the difference' },
      { type: 'p', text: 'Ask the recruiter to explain a recent placement. Ask what made the role hard. Ask what the candidate optimised for. If the answers are concrete, you have a useful person on your hands. If they are not, no amount of niche claims will save them.' },
    ],
  },
]

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug) || null
}

export function getAllPostSlugs() {
  return BLOG_POSTS.map((p) => p.slug)
}

export function formatPostDate(isoDate) {
  const d = new Date(isoDate)
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
