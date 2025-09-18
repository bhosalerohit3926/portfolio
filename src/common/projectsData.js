import driver from "../Assets/Driver.jpg";
import rider from "../Assets/Rider.jpg";
import lus from "../Assets/LUS.png";
import digiexam from "../Assets/Digiexam.png";
import DriverImageOne from "../Assets/Driver_Home_Page.png";
import Maps from "../Assets/Maps.png";
import Driver_Step_Three from "../Assets/Driver_Step_Three.png";
import Driver_Route from "../Assets/Driver_Route.png";
import SignalRImage from "../Assets/SignalR.png";
import Dar_Driver_Step4_Image from "../Assets/DAR-DRIVER4.png";
import Dar_Driver_Step8_Image from "../Assets/DAR_DRIVER8.png";
//==============================================
import RiderImageOne from "../Assets/DAR_Rider_Design.png";
import Rider_Maps from "../Assets/Rider_Maps.png";
import Rider_Booking_Page from "../Assets/Rider_Booking_Page.png";
import Rider_MyBooking_Page from "../Assets/Rider_MyBooking_Page.png";
import Rider_SignalR_Image from "../Assets/Rider_Step_Five.png";
import Dar_Rider_Step6_Image from "../Assets/DAR_RIDER6.png";
import Dar_Rider_Step7_Image from "../Assets/DAR_RIDER7.png";
import Dar_Rider_Step8_Image from "../Assets/DAR_RIDER8.png";
//=========================================================
import Lus_Step1_Image from "../Assets/LUS_STEP1.png";
import Lus_Step2_Image from "../Assets/LUS_STEP2.png";
import Lus_Step3_Image from "../Assets/LUS_STEP3.png";
import Lus_Step4_Image from "../Assets/LUS_STEP4.png";
import Lus_Step5_Image from "../Assets/LUS_STEP5.png";
import Lus_Step6_Image from "../Assets/LUS_STEP6.png";
//==========================================================
import Digi_Exam_Step1_Image from "../Assets/DIGI_EXAM1.png";
import Digi_Exam_Step2_Image from "../Assets/DIGI_EXAM2.png";
import Digi_Exam_Step3_Image from "../Assets/DIGI_EXAM3.png";
import Digi_Exam_Step4_Image from "../Assets/DIGI_EXAM4.png";
import Digi_Exam_Step5_Image from "../Assets/DIGI_EXAM5.png";
import Digi_Exam_Step6_Image from "../Assets/DIGI_EXAM6.png";
import Digi_Exam_Step7_Image from "../Assets/DIGI_EXAM7.png";
import Digi_Exam_Step8_Image from "../Assets/DIGI_EXAM8.png";

//=========================================================
import { FaAppStore, FaArrowRight } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
//=========================================================

const projects = [
  {
    id: 1,
    title: "Dial-a-Ride Driver",
    description:
      "Built a responsive cross mobile app to connect drivers and riders in a kerbside transport system for people with disabilities.",
    image: driver,
    App_Store_Link: "https://apps.apple.com/in/app/dar-driver/id6467397594",
    PlayStore_Link:
      "https://play.google.com/store/apps/details?id=com.dialaridedriver",
    App_Store_icon: <FaAppStore size={25} />,
    PlayStore_icon: <BiLogoPlayStore size={25} />,
    fullDetails:
      "Built a responsive cross mobile app to connect drivers and riders in a kerbside transport system for people with disabilities. Implemented features to allow drivers to manage a waybill with multiple pickups and drop-offs, ensured seamless real-time location sharing, and designed an intuitive UI with accessibility in mind. Developed the entire app lifecycle from requirement analysis to deployment.",
  },
  {
    id: 2,
    title: "Dial-a-Ride Rider",
    description:
      "Designed and developed a fully responsive cross mobile app for Dial-a-Ride, enabling people with disabilities to schedule kerbside transport.",
    image: rider,
    App_Store_Link: "https://apps.apple.com/in/app/dar-rider/id6738644046",
    PlayStore_Link:
      "https://play.google.com/store/apps/details?id=com.dialaridemobi",
    App_Store_icon: <FaAppStore size={25} />,
    PlayStore_icon: <BiLogoPlayStore size={25} />,
    fullDetails:
      "Designed and developed a fully responsive cross mobile app for Dial-a-Ride, enabling people with disabilities to schedule kerbside transport. Addressed key challenges such as real-time driver tracking, navigation, and system responsiveness using custom Native-Modules and map integration.",
  },
  {
    id: 3,
    title: "LUS - Land Use Scheme",
    description:
      "Built a cross mobile survey app to collect land data across district, provincial, municipal, and regional levels for agriculture, land reform, and rural development initiatives.",
    image: lus,
    App_Store_Link: null,
    PlayStore_Link: null,
    App_Store_icon: <FaAppStore size={25} />,
    PlayStore_icon: <BiLogoPlayStore size={25} />,
    fullDetails:
      "Built a cross mobile survey app to collect land data across district, provincial, municipal, and regional levels for agriculture, land reform, and rural development initiatives.",
  },
  {
    id: 4,
    title: "DigiExam",
    description:
      "Developed a mobile app that allows schools to create and distribute academic tests, and enables students to take exams online, view their scores, and track performance through interactive graphs.",
    image: digiexam,
    App_Store_Link: null,
    PlayStore_Link: null,
    App_Store_icon: <FaAppStore size={25} />,
    PlayStore_icon: <BiLogoPlayStore size={25} />,
    fullDetails:
      "Developed a mobile app that allows schools to create and distribute academic tests, and enables students to take exams online, view their scores, and track performance through interactive graphs. Led the end-to-end development process, ensuring a user-friendly and scalable solution.",
  },
];

const projectDetails = [
  {
    id: 1,
    Step_One:
      "I created this application from scratch, working on the design and development. My goal was to build a simple, modern, and easy-to-use app. I focused on clean design, smooth navigation, and a user-friendly experience. This project helped me improve my skills in both design and coding.",
    Step_two:
      "In this application, I integrated both Google Maps and NextBillion Maps, giving users the option to switch map based on their needs. This feature provides flexibility, better control, and an improved map experience for different use cases.",
    Step_Three:
      "This application is designed to manage pick-and-drop services for multiple people with disabilities. On the main page, a driver can see the assigned trip created by the VOC (Voice of Customer) role from the website. The system generates a waybill, and users’ routes are drawn on the map along with the driver’s route. The sequence of pickups and drop-offs is set by the VOC, and the driver can follow this sequence or update it as needed. This makes it easier to manage multiple bookings, ensure proper routing, and provide a smooth and organized travel experience.",
    Step_Four:
      "When the driver starts a waybill, all users linked to that trip receive a push notification with the waybill number through Firebase. As the driver approaches a user’s location, the rider gets a notification that the driver is nearby. Riders also receive notifications when they are picked up, dropped off, or if the driver cancels their trip. On the other hand, if the VOC adds or removes a rider from an ongoing waybill, rider from waybill cancel his trip, the driver gets notified instantly and the rider list updates in real-time.When driver drop off the Rider then ride cost auto deducted from rider wallet. This ensures smooth communication and coordination between drivers, riders, and VOC for a reliable transport experience.",
    Step_Five:
      "To enable live tracking, the app uses WebSockets with @microsoft/signalR, which connects the DAR Rider App and Driver App. The driver’s current location is continuously sent to the Rider App, allowing users to see the driver’s movement on the map in real time. This ensures smooth communication, accurate tracking, and an efficient trip experience for both drivers and riders.",
    Step_Six:
      "The routes used by the driver are also recorded, including where each rider was picked up or dropped off. All these updates are reflected in real time on the Waybill page for the VOC. This allows the VOC to see the complete trip route: where the driver started, the path taken, and where the trip ended. Every coordinate and status update is stored on the server, ensuring accurate trip history, monitoring, and reporting.",
    Step_Seven:
      "The Driver App includes additional advanced features to improve usability and trip management. A Picture-in-Picture (PIP) mode in android was implemented using custom Native Modules in android, allowing drivers to keep navigation or trip details visible while using other apps. Voice Navigation on Nextbillion Map is integrated to provide hands-free guidance during trips, ensuring safety and convenience. The app also supports background location tracking, so the driver’s location continues to update even when the app is minimized or the screen is off.",
    Step_Eight: null,
    Step_One_Image: DriverImageOne,
    Step_Two_Image: Maps,
    Step_Three_Image: Driver_Step_Three,
    Step_Four_Image: Dar_Driver_Step4_Image,
    Step_Five_Image: SignalRImage,
    Step_Six_Image: Driver_Route,
    Step_Seven_Image: Dar_Driver_Step8_Image,
  },
  {
    id: 2,
    Step_One:
      "I created this application from scratch, working on the design and development. My goal was to build a simple, modern, and easy-to-use app. I focused on clean design, smooth navigation, and a user-friendly experience. This project helped me improve my skills in both design and coding.",
    Step_two:
      "In this application, I integrated both Google Maps and NextBillion Maps, giving users the option to switch between the two based on their needs. This feature provides flexibility, better control, and an improved map experience for different use cases.",
    Step_Three:
      "In the Rider App, users can easily make bookings based on their needs, such as One-Way, Return, or Scheduled trips. Riders can choose their pickup and drop-off points in two ways—either by tapping directly on the map or by searching locations using the Google Places API. They can also select the desired date and time for their trip, making the booking process flexible and convenient. This feature ensures that users have full control over planning their rides according to their personal requirements.",
    Step_Four:
      "In the Rider App, users can view all their bookings on the Booking Page, including the trip status, selected locations, route, date, and time. Once the VOC (Voice of Customer) role confirms a booking from the website, the status changes to CONFIRM. At this point, users can also see the assigned driver’s details, such as the driver’s name and vehicle number. This gives riders full visibility of their bookings and ensures trust and transparency before the trip starts.",
    Step_Five:
      "To enable live tracking, the app uses WebSockets with @microsoft/signalR, which connects the DAR Rider App and Driver App. The driver’s current location is continuously get to the Rider App, allowing users to see the driver’s movement on the map in real time. This ensures smooth communication, accurate tracking, and an efficient trip experience for both drivers and riders.",
    Step_Six:
      "In the Rider App, users receive real-time notifications whenever the driver takes important actions during the trip. Notifications are sent when the driver starts the waybill, is near the pickup location, picks up or drops off the rider, or if the driver marks the trip as canceled or no-show. This ensures riders are always updated about their trip status and can track every action taken by the driver in real time.",
    Step_Seven:
      "The application includes PayFast payment gateway integration that allows users to securely add money to their in-app wallet. Riders can easily top up their balance through PayFast and then use the wallet to make bookings for One-Way, Return, or Scheduled trips, ensuring a smooth and cashless payment experience. Along with making payments, users can also view their wallet details, including money added, debited amounts for bookings, and their current wallet balance. This provides full transparency and convenience, making the booking process faster, safer, and more user-friendly.",
    Step_Eight:
      "The Rider App includes additional advanced features to improve usability and trip management. A Picture-in-Picture (PIP) mode was implemented using custom Native Modules in android.",
    Step_One_Image: RiderImageOne,
    Step_Two_Image: Rider_Maps,
    Step_Three_Image: Rider_Booking_Page,
    Step_Four_Image: Rider_MyBooking_Page,
    Step_Five_Image: Rider_SignalR_Image,
    Step_Six_Image: Dar_Rider_Step6_Image,
    Step_Eight_Image: Dar_Rider_Step8_Image,
    Step_Seven_Image: Dar_Rider_Step7_Image,
  },
  {
    id: 3,
    Step_One:
      "I created this application from scratch, working on the design and development. My goal was to build a simple, modern, and easy-to-use app. I focused on clean design, smooth navigation, and a user-friendly experience. This project helped me improve my skills in both design and coding.",
    Step_two:
      "I developed a mobile survey application designed to support spatial development planning and policy assessment across multiple administrative levels — National, Regional, Provincial, District, and Municipal. The tool enables government authorities, planners, and researchers to collect, analyze, and compare spatial data effectively.",
    Step_Three:
      "Users can view assessment lists categorized by administrative levels (National, Regional, Provincial, District, Municipal and LUS ). Users can create new assessments.",
    Step_Four:
      "Dynamically fetches survey questions from an API based on the administrative level (National, Regional, Provincial, District, Municipal and LUS). The app allows users to upload documents PDFs, images, etc. Add comments for each question, enabling comprehensive data collection and review.",
    Step_Five:
      "Users can view assessment lists categorized by administrative levels (National, Regional, Provincial, District, Municipal). Users can create new assessments, track their status Pending, Reopened, Completed. In a pending status user can resume them anytime from the exact point they left off. Before submission, the tool displays a complete review of all questions, answers, comments, and uploaded documents PDFs, images, etc. While also allowing users to revise specific responses for accuracy and completeness. In Reopened assessments by admin user can again able to edit assessments and previous data he can also edit or resubmit.",
    Step_Six:
      "The app also provides access to Completed Assessments, where users can view all their submitted answers, comments, and uploaded documents. In this mode, the responses are read-only, ensuring data integrity — users can review their work but cannot edit questions or modify their submitted answers.",
    Step_Seven: null,
    Step_Eight: null,
    Step_One_Image: Lus_Step1_Image,
    Step_Two_Image: Lus_Step2_Image,
    Step_Three_Image: Lus_Step3_Image,
    Step_Four_Image: Lus_Step4_Image,
    Step_Five_Image: Lus_Step5_Image,
    Step_Six_Image: Lus_Step6_Image,
  },
  {
    id: 4,
    Step_One:
      "I worked on enhancing and maintaining the project, ensuring better code structure, UI improvements, and exploring ways to migrate from class components toward modern functional components with React Hooks for scalability and maintainability.",
    Step_two:
      "Users can view a subject list based on their grade and analyze their performance through subject-wise bar charts. After selecting a subject, the app displays available years, along with year-wise performance insights presented in bar chart format. Once a year is chosen, students are guided with detailed paper instructions before beginning the exam. The app ensures a structured flow from subject selection to performance analysis, making exam preparation and tracking both simple and engaging.",
    Step_Three:
      "In DigiExam App, once the exam begins, a dynamic timer is displayed, fully managed from the API side to ensure accuracy and consistency. Users can attempt the questions, select their answers, and submit the exam at any time before the timer ends. If the allotted time runs out, the paper is automatically submitted, ensuring fairness and preventing delays. This feature creates a real exam-like environment by combining structured timing, controlled submissions, and a seamless user experience.",
    Step_Four:
      "The DigiExam App supports a variety of interactive question formats tailored to each subject, creating a more engaging and realistic test experience. Users can encounter multiple-choice questions, multiple-select answers, text entry questions, drag-and-drop tasks, and pair-matching exercises. This diversity in question types not only makes the exam process more dynamic but also allows for a more accurate assessment of students’ knowledge and problem-solving skills.",
    Step_Five:
      "After submitting an exam, users are presented with a detailed scorecard that highlights their overall performance, including percentage score, total marks, and a clear breakdown of right, wrong, and unattempted questions. The app also provides in-depth question analysis, allowing users to review each question along with their selected answer and the correct answer for better understanding. Additionally, users have the flexibility to reattempt the exam or explore the detailed analysis paper to identify areas of improvement and strengthen their preparation.",
    Step_Six:
      "The app also provides a comprehensive exam history section where users can track all their attempted papers organized by year. It displays the number of attempts made, scores achieved, and the average score for each subject, along with the time of every attempt. On the detailed history screen, users can revisit individual papers to review the questions, their submitted answers, and the correct answers. This feature helps learners monitor their progress over time and identify areas that require improvement.",
    Step_Seven:
      "The app enables users to track their academic performance based on grade and year, offering a clear picture of progress over time. On the dedicated report page, users can view subject-wise performance represented through yearly line charts, making it easier to identify trends, strengths, and areas that need improvement. This visual reporting system turns raw performance data into meaningful insights, helping students better plan their exam preparation.",
    Step_Eight:
      "The app also includes a subscription and profile management section, allowing users to view their active subscription details, including the start and end dates of their plan. Within the profile page, users can access and update their personal information to keep their account up to date. This ensures a personalized and seamless experience while maintaining transparency about subscription validity.",
    Step_One_Image: Digi_Exam_Step1_Image,
    Step_Two_Image: Digi_Exam_Step2_Image,
    Step_Three_Image: Digi_Exam_Step3_Image,
    Step_Four_Image: Digi_Exam_Step4_Image,
    Step_Five_Image: Digi_Exam_Step5_Image,
    Step_Six_Image: Digi_Exam_Step6_Image,
    Step_Seven_Image: Digi_Exam_Step7_Image,
    Step_Eight_Image: Digi_Exam_Step8_Image,
  },
];

export { projects, projectDetails };
