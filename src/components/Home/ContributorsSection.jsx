// UI Components
import Text from "../ui/Text";
import TitleWithDesc from "../ui/TitleWithDesc";

// Data
const contributors = [
  {
    name: "Eren Kahveci",
    img: "https://mir-s3-cdn-cf.behance.net/user/115/f1d5ea1120701863.65c4c5225975f.jpg",
    url: "https://www.linkedin.com/in/erenkahveci/",
    role: "UI/UX Designer",
  },
  {
    name: "Sonat İpek",
    img: "https://avatars.githubusercontent.com/u/80075444?v=4",
    url: "https://www.linkedin.com/in/sonatipek/",
    role: "Full Stack Developer",
  },
];

export default function ContributorsSection() {
  return (
    <div className="container mt-36 text-center">
      <TitleWithDesc
        title="Katkıda Bulunanlar"
        desc="Projede, büyük-küçük demeden herhangi bir şekilde emeği geçenler"
      />

      <div className="mt-6 flex items-center justify-center gap-3">
        {contributors.map((value, index) => (
          <a
            key={index}
            href={value.url}
            className="group flex items-center justify-start gap-3 rounded-lg border p-2"
          >
            <img
              className="size-11 rounded-full grayscale transition-all duration-500 group-hover:grayscale-0"
              src={value.img}
              alt={value.name}
            />
            <div className="text-start">
              <span className="text-lg font-medium text-mid transition-colors duration-500 group-hover:text-brand">
                {value.name}
              </span>
              <Text isSubtext className="text-mid">
                {value.role}
              </Text>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
