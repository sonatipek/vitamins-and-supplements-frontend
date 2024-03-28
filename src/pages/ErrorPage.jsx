import { useRouteError } from "react-router-dom";
import NotFound from "../assets/not_found.svg";
import Title from "../components/ui/Title";
import Link from "../components/ui/Link";
import { HomeIcon } from "lucide-react";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      {error.status === 404 ? (
        <div className="flex flex-col items-center justify-center">
          <Title className="font-semibold text-center mt-12" size="lg">Sanırım kayboldun! Aramak istediğin şeyi bulamadık.</Title>
          <img src={NotFound} alt="not found page" className="w-100 sm:w-3/4 md:w-2/4 mx-auto mt-12" />
         
          <Link href="/" icon={<HomeIcon />} type="button" classname="cursor-pointer mt-12">Ana Sayfaya Dön</Link>
    
        </div>
      ) : (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <b>{error.status}</b>
            <i> {error.statusText || error.message}</i>
          </p>
        </div>
      )}
    </>
  );
}
