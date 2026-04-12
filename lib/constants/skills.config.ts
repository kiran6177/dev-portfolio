export const statuses = {
  RUNNING: "RUNNING",
  BUILDING: "BUILDING",
  LISTENING: "LISTENING",
  DEPLOYING: "DEPLOYING",
  CONNECTED: "CONNECTED",
  STRICT: "STRICT",
} as const;

export const skills = [
  {
    title: "Node.js",
    status: statuses.RUNNING,
    imageURL: "/assets/logo/node.png",
  },
  {
    title: "TypeScript",
    status: statuses.STRICT,
    imageURL: "/assets/logo/typescript.png",
  },
  {
    title: "JavaScript",
    status: statuses.RUNNING,
    imageURL: "/assets/logo/javascript.png",
  },
  {
    title: "Docker",
    status: statuses.DEPLOYING,
    imageURL: "/assets/logo/docker.png",
  },
  {
    title: "MongoDB",
    status: statuses.RUNNING,
    imageURL: "/assets/logo/mongodb.png",
  },
  {
    title: "Sequelize",
    status: statuses.BUILDING,
    imageURL: "/assets/logo/sequelize.png",
  },
  {
    title: "PostgreSQL",
    status: statuses.RUNNING,
    imageURL: "/assets/logo/postgresql.png",
  },
  {
    title: "Framer",
    status: statuses.BUILDING,
    imageURL: "/assets/logo/framer.png",
  },
  {
    title: "React",
    status: statuses.RUNNING,
    imageURL: "/assets/logo/react.png",
  },
  {
    title: "Figma",
    status: statuses.BUILDING,
    imageURL: "/assets/logo/figma.png",
  },
  {
    title: "GCP",
    status: statuses.DEPLOYING,
    imageURL: "/assets/logo/gcp.png",
  },
  {
    title: "Next.js",
    status: statuses.RUNNING,
    imageURL: "/assets/logo/nextjs.png",
  },
  {
    title: "AWS",
    status: statuses.DEPLOYING,
    imageURL: "/assets/logo/aws.png",
  },
  {
    title: "ChatGPT",
    status: statuses.CONNECTED,
    imageURL: "/assets/logo/chatgpt.png",
  },
  {
    title: "Kubernetes",
    status: statuses.DEPLOYING,
    imageURL: "/assets/logo/kubernetes.png",
  },
  {
    title: "Kafka",
    status: statuses.LISTENING,
    imageURL: "/assets/logo/kafka.png",
  },
  {
    title: "Tailwind",
    status: statuses.BUILDING,
    imageURL: "/assets/logo/tailwind.png",
  },
  {
    title: "Postman",
    status: statuses.CONNECTED,
    imageURL: "/assets/logo/postman.webp",
  },
  {
    title: "Azure",
    status: statuses.DEPLOYING,
    imageURL: "/assets/logo/azure.webp",
  },
  {
    title: "GitHub",
    status: statuses.CONNECTED,
    imageURL: "/assets/logo/github.png",
  },
  {
    title: "Express",
    status: statuses.RUNNING,
    imageURL: "/assets/logo/express.png",
  },
];
