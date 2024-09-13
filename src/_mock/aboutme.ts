import { birthDate } from "../config";

// ----------------------------------------------

function getAge() {
  const tempBirthDate = new Date(birthDate);
  const tempToday = new Date();
  let age = tempToday.getFullYear() - tempBirthDate.getFullYear();
  const month = tempToday.getMonth() - tempBirthDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && tempToday.getDate() < tempBirthDate.getDate())
  ) {
    age--;
  }
  return age;
}

export const aboutMe = {
  title: "Let me introduce them",
  details: [
    {
      id: 1,
      text: ` established by killer-avatar Ruhollah Khomeini, ${getAge()} years old Dictatorship. `,
      icon: "🧔🏻",
    },
    {
      id: 2,
      text: " The Islamic Republic of Iran was created shortly after the Islamic insurgency. ",
      icon: "🧑🏼‍🎓",
    },
    {
      id: 3,
      text: `
              it should have been called islamic republic of kill.
           `,
      icon: "🎯",
    },
    {
      id: 4,
      text: " on August 6, 2024 Reza Rasaei, a 34-year-old who supported his elderly mother and family through beekeeping, and member of the Kurdish and Yaresan minority communities, was executed in connection to the 2022 protests, without providing prior notice to him, his family or his lawyer, Amnesty International reported. ",
      icon: "💻",
    },
    {
      id: 5,
      text: `
              Executions in Iran deeply violate numerous international laws and standards—they are carried out without any semblance of due process and for crimes that do not meet international thresholds for capital punishment, and the convictions are routinely based on “confessions” extracted under torture.
           `,
      icon: "🔎",
    },
    {
      id: 6,
      text: `
              Since the 2022 “Women, Life, Freedom” protests that swept Iran, executions are now increasingly being used to target protesters and other critics of the state in blatantly unlawful and manufactured political prosecutions. ...
           `,
      icon: "💭",
    },
  ],
};
