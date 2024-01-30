const exampleData = {
  personalInfo: {
    form: "personalInfo",
    fullName: "John Doe",
    email: "johndoe@mail.com",
    tel: "+555 5555 555",
    address: "New York, US",
  },
  education: [{
    form: "education",
    school: "Harvard Univeristy",
    degree: "Bachelors in Computer science",
    location: "Cambridge, US",
    startDate: "01/02/2019",
    endDate: "15/02/2022",
    id: crypto.randomUUID(),
  },
  ],
  experience: [
    {
      form: "experience",
      company: "FeatureRich Inc.",
      title: "Full stack Developer",
      location: "London, UK",
      startDate: "01/03/2023",
      endDate: "Current",
      description: "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
      id: crypto.randomUUID(),
    },
    {
      form: "experience",
      company: "StartUp Tech",
      title: "Junior Developer",
      location: "Oxford, UK",
      startDate: "01/03/2021",
      endDate: "12/13/2022",
      description: "Developing and improving new and existing features, working with web designers to improve and update client UI & UX",
      id: crypto.randomUUID(),
    },
  ],
};

export default exampleData;
