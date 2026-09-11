export type BlogArtworkKind = "landscape" | "diagnostic" | "growth" | "tasks" | "people" | "hands";
export type BlogSection = { id: string; title: string; paragraphs: string[]; checklist?: string[] };
export type BlogPost = {
  slug: string;
  title: string;
  category: "Strategy" | "Performance" | "Growth" | "Operations";
  date: string;
  excerpt: string;
  artwork: BlogArtworkKind;
  takeaway: string;
  sections: BlogSection[];
};

// Editorial templates: replace these sample articles here before publishing.
// Every entry automatically receives its own listing card and article route.
export const blogPosts: BlogPost[] = [
  {
    slug: "turn-website-data-into-your-next-best-move",
    title: "Turn your website data into your next best move.",
    category: "Strategy",
    date: "2026-09-10",
    excerpt: "More dashboards don’t always mean better decisions. Here’s how to connect the signals you collect to the work that actually matters.",
    artwork: "landscape",
    takeaway: "A useful dashboard should end with a decision, an owner, and a clear next step.",
    sections: [
      { id: "start-with-a-question", title: "Start with a question, not a metric", paragraphs: ["A dashboard can show a great deal of activity without explaining what a business should do next. Page views, visits, and clicks describe movement. On their own, they don’t tell you whether people found what they needed or whether the website helped them take a useful next step.", "Begin with a question your team can act on. Are potential customers reaching the enquiry form? Where do they hesitate? Which service pages help people decide? A focused question gives your data a purpose and keeps your next review from becoming a tour of every available chart."] },
      { id: "connect-the-signals", title: "Connect the signals across the journey", paragraphs: ["Look at the journey from arrival to enquiry. A visitor might discover an article, explore a service, open a contact form, and then leave. Each step offers a clue, but it is the relationship between those steps that makes the picture useful.", "Check that your measurements mean what you think they mean. A click on a submit button is different from a successfully delivered enquiry. Test important events yourself and document what each one represents before using it to prioritize work."], checklist: ["Choose one important visitor journey.", "Confirm that the key events are recorded correctly.", "Compare the same journey across devices and traffic sources."] },
      { id: "prioritize-the-next-step", title: "Turn the finding into a small, testable change", paragraphs: ["Suppose people regularly start your mobile form but rarely finish it. That is a useful place to investigate, not proof of a specific cause. Try the form on a real phone, inspect validation messages, and check whether every field is necessary.", "Write down the problem, the change you want to try, and what would count as improvement. Give the task an owner. A modest change with a clear hypothesis is easier to evaluate than a complete redesign whose effects are difficult to separate."] },
      { id: "build-a-review-rhythm", title: "Make the review a habit", paragraphs: ["Keep a short record of what changed and when. At your next review, compare the result with your starting point, allowing for changes in traffic and other work that happened at the same time. If there is too little evidence, keep observing rather than forcing a conclusion.", "The goal is a repeatable practice: ask a question, check the evidence, make a focused change, and learn from the result. Over time, that practice becomes more useful than any single report."] },
    ],
  },
  {
    slug: "website-health-check-before-your-next-campaign",
    title: "A website health check before your next campaign.",
    category: "Performance", date: "2026-09-08", artwork: "diagnostic",
    excerpt: "Make sure the journey after the click is ready. A practical checklist for forms, speed, and the pages that matter most.",
    takeaway: "Walk through the whole customer journey before paying to send more people into it.",
    sections: [
      { id: "walk-the-journey", title: "Walk the journey as a customer", paragraphs: ["Start at the exact landing page your campaign will use. Read the headline, follow the main call to action, and complete the form. Check whether the promise in the campaign matches what the page offers.", "Repeat the journey on a phone and a desktop. Small details such as a covered button, a confusing field, or an unclear confirmation can be easy to miss when you only review the design in isolation."] },
      { id: "test-the-handoff", title: "Test the enquiry handoff", paragraphs: ["A form is only part of a working enquiry flow. Submit a clearly marked test and check that it reaches the right destination. Confirm that the person responsible can see the information they need to reply.", "Also check failure states. A useful error should explain how to recover without erasing what someone has already entered."], checklist: ["Verify delivery of a test enquiry.", "Check required fields and error messages.", "Confirm the success message explains what happens next."] },
      { id: "review-the-load", title: "Review what loads first", paragraphs: ["Open the page with a slower connection and notice what becomes usable first. Large images, embedded widgets, and unnecessary scripts are good candidates for investigation.", "Prioritize the elements needed to understand the offer and take the next step. Record a baseline before making changes so you can compare the experience afterward."] },
      { id: "keep-a-launch-list", title: "Keep a small launch checklist", paragraphs: ["Write down the pages, devices, and enquiry paths you checked. Include an owner for each unresolved issue, and decide which issues should block the campaign.", "Use the same checklist after launch. A healthy campaign needs attention to the experience after the click as well as the message that earns it."] },
    ],
  },
  {
    slug: "measure-qualified-enquiries-not-just-traffic",
    title: "Measure qualified enquiries, not just traffic.",
    category: "Growth", date: "2026-09-06", artwork: "growth",
    excerpt: "Connect acquisition to conversations that matter with a clearer definition of a useful lead.",
    takeaway: "Define what makes an enquiry useful before deciding which channel deserves more investment.",
    sections: [
      { id: "define-quality", title: "Agree on what qualified means", paragraphs: ["Different teams can mean different things when they talk about a lead. One person counts every form submission. Another counts only conversations that match the business’s services and capacity.", "Create a simple shared definition. Consider the type of project, the problem to solve, and whether your team can help. Keep the definition practical enough that the person reviewing enquiries can apply it consistently."] },
      { id: "connect-source", title: "Connect the source to the conversation", paragraphs: ["Record where an enquiry came from when that information is available and appropriate to collect. Combine it with what your team learns during follow-up.", "Avoid asking analytics tools to tell the entire story. Attribution can be incomplete, and people often encounter a business several times before making contact. Treat source data as one input to a wider review."] },
      { id: "review-together", title: "Review volume and quality together", paragraphs: ["A channel that sends fewer visitors can still produce useful conversations. Review enquiries alongside the time and effort needed to respond to them.", "Look for repeated questions and mismatched expectations. These may suggest that a landing page needs a clearer explanation of who a service is for."], checklist: ["Use a consistent definition of a qualified enquiry.", "Review a sample of real conversations.", "Note recurring questions your content can answer."] },
      { id: "choose-an-experiment", title: "Choose one experiment", paragraphs: ["Try clarifying a service page, improving a campaign message, or adding an answer to a common question. State what you expect to change and give the experiment enough time to gather useful observations.", "Keep both the numbers and the conversations in view. The best next step often comes from understanding why a prospective customer reached out."] },
    ],
  },
  {
    slug: "build-a-maintenance-routine-that-sticks",
    title: "Build a maintenance routine that actually sticks.",
    category: "Operations", date: "2026-09-04", artwork: "tasks",
    excerpt: "Turn a growing backlog into a manageable rhythm of checks, owners, and focused improvements.",
    takeaway: "Small, owned tasks completed consistently are more useful than a long list nobody reviews.",
    sections: [
      { id: "make-work-visible", title: "Make the work visible", paragraphs: ["Website maintenance becomes difficult when requests live in inboxes, chats, and individual memory. Bring the work into one list and describe each issue in terms someone else can understand.", "Include the affected page, the steps to reproduce the issue, and the expected result. A clear description reduces the time spent rediscovering the problem."] },
      { id: "separate-urgency", title: "Separate urgency from importance", paragraphs: ["A broken enquiry route needs a different response from a small visual inconsistency. Agree on what requires immediate attention and what belongs in the next planned review.", "Give every accepted task an owner and a next action. If it is blocked, record the specific decision or information needed to move forward."] },
      { id: "set-a-rhythm", title: "Create a repeatable review", paragraphs: ["Set aside a regular time to check important journeys, review recent changes, and decide what to work on next. Keep the review short enough that the team can maintain it.", "Use a checklist as a starting point, then adapt it to the systems your site actually uses."], checklist: ["Test the main enquiry journey.", "Review recent deployments and reported issues.", "Check that backups and recovery procedures have an owner.", "Choose the next small improvement."] },
      { id: "close-the-loop", title: "Close the loop after each change", paragraphs: ["Once a fix is released, test the original problem again. Record what changed and let the requester know the outcome.", "That final step turns a task list into a reliable operating habit. It also gives future teammates a useful history when a similar issue appears."] },
    ],
  },
  {
    slug: "a-better-brief-for-your-next-website",
    title: "A better brief for your next website.",
    category: "Strategy", date: "2026-09-02", artwork: "people",
    excerpt: "Start the conversation with your customers, constraints, and goals before you choose the pages.",
    takeaway: "A strong brief explains the problem clearly enough for the team to make good decisions.",
    sections: [
      { id: "describe-the-problem", title: "Describe the problem you want to solve", paragraphs: ["A new website is a project. A clearer enquiry journey, a simpler publishing process, or a better explanation of your services is an outcome. Start the brief with the outcome.", "Explain what the current experience makes difficult and who experiences that difficulty. Include examples from customer questions and the people who operate the website."] },
      { id: "know-your-audience", title: "Describe who the website serves", paragraphs: ["Focus on what visitors need to understand and do. What brings them to the site? What information do they need before making contact? What might make them unsure?","These questions help shape the content and structure. They also keep a discussion about personal design preferences connected to the needs of the people using the site."] },
      { id: "name-constraints", title: "Name the practical constraints", paragraphs: ["List the systems that must connect to the website, who will maintain the content, and any dates that matter. Be clear about what is fixed and what can be discussed.", "Content ownership matters as much as technology. Decide who writes, reviews, and approves the information before a launch schedule depends on it."], checklist: ["Define the main outcome and visitor journey.", "List required integrations and content owners.", "Separate essential launch requirements from later improvements."] },
      { id: "define-done", title: "Agree on what done looks like", paragraphs: ["Describe how you will review the finished work. Include real tasks, such as finding a service, completing an enquiry, and publishing an update.", "A shared definition of completion helps the team make tradeoffs and gives you a better way to evaluate the result than whether it simply feels new."] },
    ],
  },
  {
    slug: "remove-friction-from-your-contact-form",
    title: "Remove the friction from your contact form.",
    category: "Growth", date: "2026-08-30", artwork: "hands",
    excerpt: "A helpful form feels like the start of a conversation. Make every field earn its place.",
    takeaway: "Ask for enough information to start a useful conversation, then make the next step clear.",
    sections: [
      { id: "ask-less", title: "Make every field earn its place", paragraphs: ["Read your form as someone who has never worked with your business. Are there questions they cannot answer yet? Are there fields your team never uses?","For each field, decide whether the answer is essential before the first conversation. Optional context can be helpful, but it should not prevent someone from getting in touch."] },
      { id: "help-people-recover", title: "Make errors easy to recover from", paragraphs: ["An error should identify the problem close to the affected field and explain the correction. Keep entered information intact so people do not have to start over.", "Test the form using only a keyboard. Check labels, focus order, and whether success and error messages are understandable without relying on color alone."] },
      { id: "explain-next", title: "Explain what happens next", paragraphs: ["Tell visitors what submitting the form does. Will someone reply by email? Is there a review first? Avoid promising a response time the team cannot reliably meet.", "The confirmation screen should acknowledge the enquiry and offer a useful next step. Make sure it appears only after the submission has actually succeeded."] },
      { id: "observe-improve", title: "Observe, then improve", paragraphs: ["Review completion patterns and feedback with the team that receives the enquiries. If information is consistently missing, consider whether the label or instructions need to be clearer.", "Make one focused change at a time and review the result. The goal is a form that works for both the visitor and the person starting the conversation."] },
    ],
  },
  {
    slug: "a-useful-weekly-website-review",
    title: "What belongs in a useful weekly website review?",
    category: "Operations", date: "2026-08-27", artwork: "landscape",
    excerpt: "A simple agenda to keep your team aligned on what changed, what matters, and what happens next.",
    takeaway: "Finish the review with a short list of decisions, not another collection of charts.",
    sections: [
      { id: "look-back", title: "Begin with what changed", paragraphs: ["Review the work released since the last meeting. Note content updates, technical changes, and campaigns that may have influenced the website experience.", "This context helps the team interpret the numbers and avoids attributing every movement to the most recent idea."] },
      { id: "review-signals", title: "Look at a small set of useful signals", paragraphs: ["Choose signals tied to the visitor journeys that matter to the business. Review enquiries, important form issues, and feedback from people using the site.", "When something changes unexpectedly, turn it into a question for investigation. A chart can point to an issue without explaining its cause."] },
      { id: "decide-work", title: "Decide what deserves attention", paragraphs: ["Discuss the impact of each issue and how much uncertainty remains. Sometimes the next task is a fix; sometimes it is a short investigation.", "Keep the list manageable. Make ownership and next steps explicit before moving on."], checklist: ["What changed since the last review?", "Which customer journey needs attention?", "What will we investigate or improve next?", "Who owns the next step?"] },
      { id: "keep-notes", title: "Leave a record the team can use", paragraphs: ["A few clear notes are enough: the decision, the reason, the owner, and when to revisit it. Keep these alongside the work so they are easy to find.", "Consistency makes the review valuable. A modest routine that leads to action will serve the team better than an elaborate report that goes unread."] },
    ],
  },
];

export function getPost(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function readingTime(post: BlogPost) {
  const words = post.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.checklist ?? [])]).join(" ").split(/\s+/).length;
  return `${Math.max(2, Math.ceil(words / 200))} min read`;
}
export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
