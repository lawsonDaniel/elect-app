import {
    LuChevronRight,
    LuChevronLeft,
    LuPersonStanding,
    LuLaugh,
    LuFrown,
    LuAperture
  } from "react-icons/lu";
export const messagesData = [
    { name: "Daniel Lawson", message: "Afa you dey school", date: "Nov 02", messageNumber: "0", icon: LuPersonStanding },
    { name: "Lovely Johnson", message: "Hey, how's it going?", date: "Oct 31", messageNumber: "1", icon: LuLaugh },
    { name: "John Doe", message: "What's up?", date: "Nov 05", messageNumber: "3", icon: LuFrown},
    { name: "Emma Smith", message: "I miss you!", date: "Nov 01", messageNumber: "4", icon: LuAperture },
    { name: "Michael White", message: "How are you doing today?", date: "Nov 03", messageNumber: "5", icon: LuPersonStanding },
    { name: "Sophie Brown", message: "Let's catch up soon!", date: "Oct 30", messageNumber: "6", icon: LuLaugh },
    { name: "David Miller", message: "Happy to see you!", date: "Nov 04", messageNumber: "7", icon: LuFrown },
    { name: "Olivia Davis", message: "What's the plan for the weekend?", date: "Nov 02", messageNumber: "8", icon: LuAperture },
    { name: "William Taylor", message: "Long time no talk!", date: "Oct 29", messageNumber: "9", icon: LuPersonStanding },
    { name: "Emily Clark", message: "How's your day going?", date: "Nov 03", messageNumber: "0", icon: LuLaugh },
    { name: "Daniel Lawson", message: "Afa you dey school", date: "Nov 02", messageNumber: "11", icon: LuFrown },
    { name: "Alice Johnson", message: "Hey, how's it going?", date: "Oct 31", messageNumber: "12", icon: LuAperture },
    { name: "John Doe", message: "What's up?", date: "Nov 05", messageNumber: "13", icon: LuPersonStanding },
    { name: "Emma Smith", message: "I miss you!", date: "Nov 01", messageNumber: "14", icon: LuLaugh },
    { name: "Michael White", message: "How are you doing today?", date: "Nov 03", messageNumber: "15", icon: LuFrown },
    { name: "Sophie Brown", message: "Let's catch up soon!", date: "Oct 30", messageNumber: "16", icon: LuAperture },
    { name: "David Miller", message: "Happy to see you!", date: "Nov 04", messageNumber: "0", icon: LuPersonStanding },
    { name: "Olivia Davis", message: "What's the plan for the weekend?", date: "Nov 02", messageNumber: "18", icon: LuLaugh },
    { name: "William Taylor", message: "Long time no talk!", date: "Oct 29", messageNumber: "19", icon: LuFrown },
    { name: "Emily Clark", message: "How's your day going?", date: "Nov 03", messageNumber: "20", icon: LuAperture },
    { name: "Daniel Lawson", message: "Afa you dey school", date: "Nov 02", messageNumber: "21", icon: LuPersonStanding},
    { name: "Alice Johnson", message: "Hey, how's it going?", date: "Oct 31", messageNumber: "22", icon: LuLaugh },
    { name: "John Doe", message: "What's up?", date: "Nov 05", messageNumber: "23", icon: LuFrown },
    { name: "Emma Smith", message: "I miss you!", date: "Nov 01", messageNumber: "24", icon: LuAperture },
    { name: "Michael White", message: "How are you doing today?", date: "Nov 03", messageNumber: "25", icon: LuPersonStanding },
    { name: "Sophie Brown", message: "Let's catch up soon!", date: "Oct 30", messageNumber: "0", icon: LuLaugh },
    { name: "David Miller", message: "Happy to see you!", date: "Nov 04", messageNumber: "27", icon: LuFrown },
    { name: "Olivia Davis", message: "What's the plan for the weekend?", date: "Nov 02", messageNumber: "28", icon: LuAperture },
    { name: "William Taylor", message: "Long time no talk!", date: "Oct 29", messageNumber: "29", icon: LuPersonStanding },
    { name: "Emily Clark", message: "How's your day going?", date: "Nov 03", messageNumber: "30", icon: LuLaugh},
  ];
// Function to get the current time in HH:mm format
function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
const currentTime = getCurrentTime();
  export const dummyData = [
    { id: 1, timestamp: currentTime, user: true, message: "Hello there!", delivered: true },
    { id: 2, timestamp: currentTime, user: false, message: "Hi! How are you?", delivered: true },
    { id: 3, timestamp: currentTime, user: true, message: "I'm doing well, thanks!", delivered: true },
    { id: 4, timestamp: currentTime, user: true, message: "What's the weather like today?", delivered: true },
    { id: 5, timestamp: currentTime, user: false, message: "It's sunny and warm.", delivered: true },
    { id: 6, timestamp: currentTime, user: true, message: "Great! Let's catch up later.", delivered: true },
    { id: 7, timestamp: currentTime, user: true, message: "Sure thing!", delivered: true },
    { id: 8, timestamp: currentTime, user: false, message: "See you soon!", delivered: true },
    { id: 9, timestamp: currentTime, user: true, message: "Goodbye!", delivered: true },
    { id: 10, timestamp: currentTime, user: false, message: "Goodbye!", delivered: true },
    // Adding more dummy data as needed
  ];
  
  console.log(dummyData);
  