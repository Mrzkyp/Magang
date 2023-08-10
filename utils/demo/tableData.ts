interface ITableData {
  avatar: string;
  id: string;
  name: string;
  time: string;
  email: string;
  loket:string;
  status: "success" | "danger" | "warning" | "neutral" | "primary" | undefined;
  date: string;
  sisaAntrian: string;
}

const tableData: ITableData[] = [
  {
    id: "01",
    avatar: "https://randomuser.me/api/portraits/men/72.jpg",
    name: "Chase Bahringer",
    email: "Dynamic Communications Designer",
    status: "danger",
    date: "Mon Nov 25 2019",
    sisaAntrian: "100",
    time: "10:00",
    loket: "umum",
  },
  {
    id: "02",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
    name: "Lucile Hansen",
    email: "Customer Usability Facilitator",
    status: "danger",
    date: "Sun Aug 25 2019",
    sisaAntrian: "100",
    time: "08:00",
    loket: "umum",
  },
  {
    id: "03",
    avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    name: "Mollie Heaney",
    email: "Forward Communications Director",
    status: "danger",
    date: "Mon Jul 22 2019",
    sisaAntrian: "100",
    time: "9:00",
    loket: "BPJS",
  },
  {
    id: "04",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Bennie Kuvalis",
    email: "Future Factors Agent",
    status: "danger",
    date: "Sat Feb 08 2020",
    sisaAntrian: "100",
    time: "11:00",
    loket: "umum",
  },
  {
    id: "05",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    name: "Jodie Luettgen",
    email: "Customer Implementation Associate",
    status: "danger",
    date: "Tue Jun 09 2020",
    sisaAntrian: "100",
    time: "13:00",
    loket: "BPJS",
  },
  {
    id: "06",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
    name: "Bethel Quitzon",
    email: "Dynamic Web Strategist",
    status: "danger",
    date: "Sun Dec 29 2019",
    sisaAntrian: "100",
    time: "14:00",
    loket: "BPJS",
  },
  {
    id: "07",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    name: "Jon Dietrich",
    email: "Legacy Creative Planner",
    status: "danger",
    date: "Sun Dec 29 2019",
    sisaAntrian: "100",
    time: "15:00",
    loket: "BPJS",
  },
  {
    id: "08",
    avatar: "https://randomuser.me/api/portraits/men/89.jpg",
    name: "Nakia Kihn",
    email: "Central Interactions Coordinator",
    status: "danger",
    date: "Sun Sep 15 2019",
    sisaAntrian: "100",
    time: "16:00",
    loket: "umum",
  },
  {
    id: "09",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Assunta Grady",
    email: "Investor Operations Specialist",
    status: "danger",
    date: "Tue Dec 17 2019",
    sisaAntrian: "100",
    time: "17.00",
    loket: "umum",
  },
  {
    id: "09",
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Lukas Klocko",
    email: "Human Usability Associate",
    status: "danger",
    date: "Mon Jun 15 2020",
    sisaAntrian: "100",
    time: "18:00",
    loket: "umum",
  },
];

export default tableData;
export type { ITableData };
