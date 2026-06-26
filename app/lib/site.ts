/**
 * Central business + navigation config.
 *
 * Single source of truth for NAP (name / address / phone), nav structure,
 * and brand strings. Anything the client may correct lives here so updates
 * are one-file changes. Items marked TODO need confirmation from the client.
 */

export const site = {
  name: "Motion Vitality Pilates",
  shortName: "MVP",
  tagline: "Strong Mind Starts with a Fit Body",
  description:
    "Motion Vitality Pilates is a Polestar-certified Pilates and GYROTONIC® studio in Markham, Ontario, offering reformer, mat, rehab, and teacher-training programs for every body.",
  url: "https://www.motionvitalitypilates.com",

  phone: "+16475883098",
  phoneDisplay: "(647) 588-3098",
  email: "info@motionvitalitypilates.com",

  address: {
    // TODO: confirm exact street address with the client
    street: "Markham, Ontario",
    locality: "Markham",
    region: "ON",
    country: "CA",
    postalCode: "", // TODO
  },

  // TODO: confirm hours with the client
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 9:00 PM" },
    { days: "Saturday – Sunday", time: "8:00 AM – 4:00 PM" },
  ],

  social: {
    // TODO: confirm handle/URL
    instagram: "https://www.instagram.com/motionvitalitypilates/",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  /** Optional dropdown sub-links (desktop) / nested links (mobile). */
  children?: NavItem[];
};

/** Primary navigation — kept to 6 top-level items (down from ~10 Wix tabs). */
export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "/classes" },
  { label: "Pricing & Booking", href: "/pricing" },
  {
    label: "Polestar",
    href: "/polestar",
    children: [
      { label: "Overview", href: "/polestar" },
      { label: "Teacher Training", href: "/polestar/teacher-training" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Footer link groups — policies live here, not in the main nav. */
export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Explore",
    items: [
      { label: "Classes & Services", href: "/classes" },
      { label: "Pricing & Booking", href: "/pricing" },
      { label: "Polestar Pilates", href: "/polestar" },
      { label: "Teacher Training", href: "/polestar/teacher-training" },
    ],
  },
  {
    heading: "Studio",
    items: [
      { label: "About Us", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Policies",
    items: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Emergency & Sickness", href: "/policies" },
    ],
  },
];
