const data = [
  {
    picture: "/mask.png",
    icon: "/Social icon.png",
    name: "John Smith",
    posision: "CEO and Founder",
    experiance:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },

  {
    picture: "/mask1.png",
    icon: "/Social icon.png",
    name: "Jane Doe",
    posision: "Director of Operations",
    experiance:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },

  {
    picture: "/mask2.png",
    icon: "/Social icon.png",
    name: "Michael Brown",
    posision: "Senior SEO Specialist",
    experiance:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },

  {
    picture: "/mask3.png",
    icon: "/Social icon.png",
    name: "Emily Johnson",
    posision: "PPC Manager",
    experiance:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },

  {
    picture: "/mask4.png",
    icon: "/Social icon.png",
    name: "Brian Williams",
    posision: "Social Media Specialist",
    experiance:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },

  {
    picture: "/mask5.png",
    icon: "/Social icon.png",
    name: "Sarah Kim",
    posision: "Content Creator",
    experiance:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },

  {
    text: "See all team",
  },
];

const Card = (props) => {
  return (
    <div className="p-4 rounded-lg border" style={{ icon: props.a }}>
      <img src={props.img} />
      {props.name}
      {props.posision}
      <img src={props.a} />
      {props.experiance}
      {props.text}
    </div>
  );
};

export const TeamCard = () => {
  return (
    <div className="flex flex-wrap gap-4 container mx-auto">
      {data.map((item) => {
        return (
          <Card
            className="flex justify-center"
            img={item.picture}
            name={item.name}
            posision={item.posision}
            a={item.icon}
            experiance={item.experiance}
            text={item.text}
          />
        );
      })}
    </div>
  );
};
