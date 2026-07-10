import img_starterpack_1 from "../assets/activity/sit_photo (16 of 139).jpg";
import img_starterpack_2 from "../assets/activity/sit_photo (18 of 139).jpg";
import img_starterpack_3 from "../assets/activity/sit_photo (22 of 139).jpg";
import img_helloworld_1 from "../assets/activity/Hello world (37 of 92).jpg";
import img_helloworld_2 from "../assets/activity/Hello_World-2026-14(1).jpg";
import img_helloworld_3 from "../assets/activity/Hello_World-2026-30.jpg";
import img_sportday_1 from "../assets/activity/Sportday-5.jpg";
import img_sportday_2 from "../assets/activity/Sportday-19.jpg";
import img_sportday_3 from "../assets/activity/Sportday-146.jpg";

const Activities = [
  {
    year: 2,
    semester: 1,
    name: "Speaker IT#31 Starter pack",
    detail:
      "ในกิจกกรรมนี้ผมได้รับหน้าที่ในการสอนวิชา Software Developmenet Tools ซึ่งเป็นการสอนน้องๆ ในเรื่อง git , github และมีการสอนการ Debugging เพื่อเป็นปูพื้นฐานไว้ให้น้องๆ ให้ไปปรับใช้ต่อทั้งการเรียนและการทำงานในอนาคต",
    photos: [img_starterpack_1, img_starterpack_2, img_starterpack_3],
  },

  {
    year: 2,
    semester: 1,
    name: "Head SIT Sport Day 2025",
    detail:
      "กิจกรรมนี้ถูกจัดขึ้นเพราะ คณะผมไม่ค่อยมีกิจกรรมเกี่ยวกับการกีฬาเลย ผมอยากให้ทั้งนักศึกษาและคณะอาจารย์ได้เล่นกีฬาร่วมกัน ถึงแม้ว่าอาจจะมีปัญหาในการจัดกิจกรรม แต่สุดท้ายก็ได้รับ Feedback ที่ดี และได้วางรากฐานให้น้องๆ ไปแก้ไขข้อผิดพลาดที่มีให้ดี",
    photos: [img_sportday_1, img_sportday_2, img_sportday_3],
  },

  {
    year: 2,
    semester: 2,
    name: "Head Speaker SIT Helloworld 2026",
    detail:
      "ในกิจกรรมนี้ผมเป็นหัวหน้าฝ่ายวิชาการในรายวิชา Frontend โดยผมได้วางเนื้อหาโดยทั้ง Git , HTML , CSS , Javascript นอกจากนี้ยังมีการสอนเรื่อง Fetch API และต่อยอดไปถึงการใช้ Framework อย่าง Vue.js และจบด้วยการทำ Project ใหญ่",
    photos: [img_helloworld_1, img_helloworld_2, img_helloworld_3],
  },
];

export const getAllActivities = [
  {
    name: "Venue For IT3K #19",
  },
  {
    name: "Venue For SIT Battleroyal",
  },
  {
    name: "Head Venue For SIT Origin #2",
  },
  {
    name: "Speaker For IT#31 Starter pack",
  },
  {
    name: "Venue For IT Sairahut",
  },
  {
    name: "Head SIT Sport day",
  },
  {
    name: "Photo For IT3k #20",
  },
  {
    name: "Head Speaker For SIT Helloworld 2026",
  },
  {
    name: "Frondend For SIT D-Day 2026"
  },
  {
    name: "Photo For SIT Camp 2026",
  },
  {
    name: "Head PR for IT#32 Starter Pack",
  },
  {
    name: "Head PR for SIT Intern",
  },
];

const getYearTwo = Activities.filter((y) => y.year === 2);

export const semesterOne = getYearTwo.filter((s) => s.semester === 1);
export const semesterTwo = getYearTwo.filter((s) => s.semester === 2);
