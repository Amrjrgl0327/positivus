const data = [
  {
    backgroundColor: "green",
    text: "01 Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    icon: "/Plus1.png",
  },
  {
    backgroundColor: "gray",
    text: "02 Research and Strategy Development",
    icon: "/Plus.png",
  },

  {
    backgroundColor: "gray",
    text: " 03 Implementation",
    icon: "/Plus.png",
  },

  {
    backgroundColor: "gray",
    text: "04 Monitoring and Optimization",
    icon: "/Plus.png",
  },

  {
    backgroundColor: "gray",
    text: "05 Reporting and Communication",
    icon: "/Plus.png",
  },

  {
    backgroundColor: "gray",
    text: "06 Continual Improvement",
    icon: "/Plus.png",
  },
];

const Card = (props) => {
  return (
    <div className="p-4 rounded-lg border" style={{ backgroundColor: props.a }}>
      {props.text}
      {props.description}
      {props.icon}
    </div>
  );
};

export const Grid = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <div className="grid grid-cols-6 gap-4">
        {data.map((item) => {
          return (
            <Card
              key={item.text}
              text={item.text}
              a={item.backgroundColor}
              description={item.description}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};
