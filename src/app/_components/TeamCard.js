const data = [
  {
    picture: "/Mask.png",
    icon: "/Social.png",
    name: "John Smith",
    posision: "CEO and Founder",
    experiance:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
  },

  {
    picture: "/Mask1.png",
    icon: "/Social.png",
    name: "Jane Doe",
    posision: "Director of Operations",
    experiance:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
  },

  {
    picture: "/Mask2.png",
    icon: "/Social.png",
    name: "Michael Brown",
    posision: "Senior SEO Specialist",
    experiance:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
  },

  {
    picture: "/Mask3.png",
    icon: "/Social.png",
    name: "Emily Johnson",
    posision: "PPC Manager",
    experiance:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
  },

  {
    picture: "/Mask4.png",
    icon: "/Social.png",
    name: "Brian Williams",
    posision: "Social Media Specialist",
    experiance:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
  },

  {
    picture: "/Mask5.png",
    icon: "/Social.png",
    name: "Sarah Kim",
    posision: "Content Creator",
    experiance:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
  },
];

const Card = (props) => {
  return (
    <div
      className="w-[387] h-[331] p-4 rounded-[45] border"
      style={{ icon: props.a }}
    >
      <div className="flex gap-5">
        <img src={props.img} />
        <div className="flex flex-col">
          {props.name}
          {props.posision}
        </div>
        <img src={props.a} />
      </div>
      <div className="flex items-end gap-[28]">{props.experiance}</div>
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
          />
        );
      })}
    </div>
  );
};
