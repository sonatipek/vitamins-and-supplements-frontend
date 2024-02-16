import { StarIcon } from "lucide-react";


export default function Rating({ className, rate }) {
  const starClassList = [1, 2, 3, 4, 5];

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {starClassList.map((value, index) => {
        if (value <= rate) {
          return <StarIcon color="#EF4444" fill="#EF4444" key={index} className={`size-5`} />;
        } else {
          return <StarIcon color="#fecaca" fill="#fecaca"  key={index} className={`size-5`} />;
        }
      })}
    </div>
  );
}
