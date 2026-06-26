/**
 * Photo manifest.
 *
 * Maps a logical name to its public path + descriptive alt text. Centralizing
 * alt text keeps it consistent, SEO-friendly, and easy to review. Components
 * render these with <Image fill> inside an aspect-ratio box, so intrinsic
 * dimensions aren't needed here.
 *
 * Paths are relative to /public. Only photos used by the in-scope pages
 * (Home + Polestar) are listed; add more as pages are built.
 *
 * NOTE: many portrait shots are stored EXIF-rotated. A one-off auto-orient
 * pass normalizes them upright (see plan's verification step).
 */

export type Photo = { src: string; alt: string };

const base = "/mvp-prototype/assets/photos";

export const photos = {
  // --- Studio ---
  studioReformerFloor: {
    src: `${base}/studio-interior/reformer-environment.jpg`,
    alt: "Bright, mirrored reformer studio at Motion Vitality Pilates in Markham, lined with Pilates reformers and TRX straps.",
  },
  heritageWall: {
    src: `${base}/studio-interior/pilates-wall-1.jpg`,
    alt: "Gallery wall of vintage black-and-white photographs of Joseph Pilates teaching the original Pilates method.",
  },
  polestarOnWall: {
    src: `${base}/studio-interior/polestar-on-wall.jpg`,
    alt: "Polestar Pilates sign displayed on the studio wall at Motion Vitality Pilates.",
  },
  polestarFrontDoor: {
    src: `${base}/studio-interior/polestar-frontdoor.jpg`,
    alt: "Front entrance of Motion Vitality Pilates featuring the Polestar Pilates branding.",
  },
  spineFigure: {
    src: `${base}/studio-interior/spine-figure.jpg`,
    alt: "Anatomical spine model used to explain movement and rehabilitation at the studio.",
  },

  // --- Equipment (one per signature class) ---
  reformer: {
    src: `${base}/equipment/reformer-1.jpg`,
    alt: "Pilates reformer with carriage, springs, and footbar at Motion Vitality Pilates.",
  },
  gyrotonic: {
    src: `${base}/equipment/gyrotonic-1.jpg`,
    alt: "GYROTONIC® pulley tower combination unit for circular, flowing movement.",
  },
  konnector: {
    src: `${base}/equipment/konnector-1.jpg`,
    alt: "Konnector® apparatus attached to a reformer for connected, full-body Pilates.",
  },
  wundaChair: {
    src: `${base}/equipment/wunda-chair-1.jpg`,
    alt: "Pilates Wunda chair used for strength and balance training.",
  },
  barrel: {
    src: `${base}/equipment/barrel-1.jpg`,
    alt: "Pilates ladder barrel used for spinal extension and stretching.",
  },

  // --- People ---
  team: {
    src: `${base}/instructor-team/team-under-polestar-logo.jpg`,
    alt: "The Motion Vitality Pilates instructor team smiling together beneath the Polestar Pilates sign.",
  },
  teamPolestar: {
    src: `${base}/instructor-team/team-mvp-polestar.jpg`,
    alt: "The Motion Vitality Pilates instructor team together, trained in the Polestar method.",
  },
  garyHeadshot: {
    src: `${base}/instructor-headshots/gary-headshot-1.jpg`,
    alt: "Portrait of Gary Fok, founder of Motion Vitality Pilates, in a Polestar Canada shirt.",
  },
  dorothyHeadshot: {
    src: `${base}/instructor-headshots/dorothy-headshot-1.jpg`,
    alt: "Portrait of Dorothy, Pilates instructor at Motion Vitality Pilates.",
  },
  florenceHeadshot: {
    src: `${base}/instructor-headshots/florance-headshot-1.jpg`,
    alt: "Portrait of Florence, Pilates instructor at Motion Vitality Pilates.",
  },

  // --- Movement / Polestar mood ---
  garyPose: {
    src: `${base}/pilates-pose/Gary/gary-pose-1.jpg`,
    alt: "Instructor demonstrating a controlled Pilates movement, showing strength and alignment.",
  },
  dorothyPose: {
    src: `${base}/pilates-pose/Dorothy/dorothy-pose-1.jpg`,
    alt: "Instructor demonstrating a Pilates pose emphasizing core control and flexibility.",
  },
  florencePose: {
    src: `${base}/pilates-pose/Florence/florance-pose-1.jpg`,
    alt: "Instructor demonstrating a graceful, balanced Pilates movement.",
  },

  // --- Teaching ---
  privateSession: {
    src: `${base}/instructor-teaching-students-private-class/Dorothy/dorothy-private-1.jpg`,
    alt: "Pilates instructor giving hands-on cues to a client during a private one-on-one reformer session.",
  },

  // --- Polestar community (teacher-training context) ---
  polestarFaculty: {
    src: `${base}/polestar-group/polestar-faculty.jpg`,
    alt: "Polestar Pilates faculty and trainees gathered on the steps of a Polestar Life Center training retreat.",
  },
  polestarCohort: {
    src: `${base}/polestar-group/polestar-cohort.jpg`,
    alt: "A Polestar Pilates teacher-training cohort together in the studio beneath the Polestar banner.",
  },
} as const satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

/**
 * Four Gary & Dorothy movement poses used as the 2×2 background collage behind
 * the Polestar "Learn to Move" heading. Order is row-major (top-left → bottom-
 * right). Rendered decoratively under a dark overlay.
 */
export const learnToMovePoses: Photo[] = [
  {
    src: `${base}/pilates-pose/Dorothy/dorothy-pose-3.jpg`,
    alt: "Dorothy demonstrating a controlled Pilates movement in the studio.",
  },
  {
    src: `${base}/pilates-pose/Gary/gary-pose-5.jpg`,
    alt: "Gary Fok performing a strong, balanced Pilates movement.",
  },
  {
    src: `${base}/pilates-pose/Gary/gary-pose-11.jpg`,
    alt: "Gary Fok showing strength and stability in a reformer exercise.",
  },
  {
    src: `${base}/pilates-pose/Dorothy/dorothy-pose-6.jpg`,
    alt: "Dorothy demonstrating a graceful, controlled Pilates movement.",
  },
];
