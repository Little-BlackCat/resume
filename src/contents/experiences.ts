// Import Expoerience Icon

import graduation from "../assets/icons/graduation-cap.svg"
import syringe from "../assets/icons/syringe.svg"
import coding from "../assets/icons/laptop-code.svg"

// Export exp

interface Exp {
  year: string;
  company: string;
  position: string;
  department: string;
  icon: string;
}

export const exp:Exp[] = [
  {
    year: "6/2023 - present",
    company: "TechUp",
    position: "Full-Stack Developer Training",
    department: "Full-Time Bootcamp",
    icon: coding,
  },
  {
    year: "8/2015 - 5/2023",
    company: "SiPH",
    position: "Register Nurse",
    department: "Intensive Care Unit : Medical Nurse",
    icon: syringe,
  },
  {
    year: "2011 - 2015",
    company: "Education",
    position: "Khon Kaen University (KKU)",
    department: "Faculty of Nursing",
    icon: graduation,
  },
]