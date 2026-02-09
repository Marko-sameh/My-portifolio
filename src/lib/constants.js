export const SCENES = [
  'prologue',
  'struggle', 
  'awakening',
  'architect',
  'beyond',
  'invitation'
];

export const TRANSITIONS = {
  FADE: 'fade',
  SLIDE: 'slide',
  ZOOM: 'zoom'
};

export const NAV_ITEMS = [
  { path: "/", label: "Home", ariaLabel: "Navigate to Home page" },
  { path: "/Identity", label: "Identity", ariaLabel: "Navigate to Identity page" },
  { path: "/Mastery", label: "Mastery", ariaLabel: "Navigate to Mastery page" },
  { path: "/Builds", label: "Builds", ariaLabel: "Navigate to Builds page" },
  { path: "/Core", label: "Core", ariaLabel: "Navigate to Core page" },
  { path: "/beyond", label: "Beyond", ariaLabel: "Navigate to Beyond page" },
  { path: "/Signal", label: "Signal", ariaLabel: "Navigate to Signal page" },
];

export const FOOTER_SECTIONS = [
  { name: "Home", path: "/" },
  { name: "Identity", path: "/Identity" },
  { name: "Mastery", path: "/Mastery" },
  { name: "Builds", path: "/Builds" },
  { name: "Core", path: "/Core" },
  { name: "Beyond", path: "/beyond" },
  { name: "Signal", path: "/Signal" }
];