const data = [
  {
    backgroundColor: "#B9FF66",
    number: "01",
    text: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    icon: "/plus1.png",
  },

  {
    backgroundColor: "#F3F3F3",
    number: "02",
    text: "Research and Strategy Development",
    icon: "/Plus.png",
  },

  {
    backgroundColor: "#F3F3F3",
    number: "03",
    text: "Implementation",
    icon: "/Plus.png",
  },

  {
    backgroundColor: "#F3F3F3",
    number: "04",
    text: "Monitoring and Optimization",
    icon: "/Plus.png",
  },

  {
    backgroundColor: "#F3F3F3",
    number: "05",
    text: "Reporting and Communication",
    icon: "/Plus.png",
  },

  {
    backgroundColor: "#F3F3F3",
    number: "06",
    text: "Continual Improvement",
    icon: "/Plus.png",
  },
];

const Card = (props) => {
  return (
    <div
      className="px-[25] py-[25] rounded-[45] border flex justify-between"
      style={{ backgroundColor: props.a }}
    >
      <div className="flex items-center gap-2.5 px-25 py-10 w-[1117] h-[77]">
        <div className="text-4xl">{props.number}</div>
        <div className="text-2xl">{props.text}</div>
      </div>
      {props.description}
      <img src={props.img} />
    </div>
  );
};

export const Grid = () => {
  return (
    <div className="flex flex-col gap-4 container mx-auto">
      {data.map((item) => {
        return (
          <Card
            key={item.text}
            number={item.number}
            text={item.text}
            a={item.backgroundColor}
            description={item.description}
            img={item.icon}
          />
        );
      })}
    </div>
  );
};
