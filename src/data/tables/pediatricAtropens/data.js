const ENUM_WEIGHT = "weight"
const ENUM_MILD = "mild"
const ENUM_MODERATE = "moderate"
const ENUM_SEVERE = "severe"

export const ENUMS = {
  WEIGHT: ENUM_WEIGHT,
  MILD: ENUM_MILD,
  MODERATE: ENUM_MODERATE,
  SEVERE: ENUM_SEVERE,
}

const data = [
  {
    ENUM_WEIGHT: "15-40lbs(7-18kg)",
    ENUM_MILD: "1 x 0.5mg Atropen",
    ENUM_MODERATE: "1 x 1mg Atropen",
    ENUM_SEVERE: "3 x 0.5mg Atropen",
  },
  {
    ENUM_WEIGHT: "40-90lbs(18-41kg)",
    ENUM_MILD: "1 x 1mg Atropen",
    ENUM_MODERATE: "1 x 2mg Atropen",
    ENUM_SEVERE: "3 x 1mg Atropen",
  },
  {
    ENUM_WEIGHT: ">90lbs(41kg)",
    ENUM_MILD: "1 x 2mg Atropen",
    ENUM_MODERATE: "2 x 2mg Atropen",
    ENUM_SEVERE: "3 x 2mg Atropen",
  },
]

export default data
