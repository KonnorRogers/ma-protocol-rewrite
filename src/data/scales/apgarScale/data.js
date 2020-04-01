const features = {
  activity: "Activity (Muscle Tone)",
  pulse: "Pulse",
  grimace: "Grimace (Irritability / Reflexes)",
  appearance: "Appearance (Skin Color)",
  respiration: "Respiration",
}

const twoPts = {
  activity: "Active Movement",
  pulse: "Over 100 bpm",
  grimace: "Cry, sneeze, cough, active movement",
  appearance: "Completely pink",
  respiration: "Vigorous cry, Full breaths",
}

const onePt = {
  activity: "Arms and legs flexed (Weak, some movement)",
  pulse: "Below 100bpm",
  grimace: "Grimace (some flexion of extremities)",
  appearance: "Body pink, extremities blue",
  respiration: "Slow, irregular, or gasping breaths, weak cry",
}

const zeroPts = {
  activity: "Limp or flaccid",
  pulse: "Absent",
  grimace: "No Reflexes",
  appearance: "Blue, pale",
  respiration: "Absent",
}

export const data = {
  features,
  twoPts,
  onePt,
  zeroPts,
}

export const headers = {
  feature: "Feature Evaluated",
  twoPts: "2 Points",
  onePt: "1 Point",
  zeroPts: "0 Points",
}
