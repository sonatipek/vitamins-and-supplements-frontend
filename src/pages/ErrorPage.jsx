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
          <Title className="mt-12 text-center font-semibold" size="lg">
            Sanırım kayboldun! Aramak istediğin şeyi bulamadık.
          </Title>
          <img
            src={NotFound}
            alt="not found page"
            className="w-100 mx-auto mt-12 sm:w-3/4 md:w-2/4"
          />

          <Link
            href="/"
            icon={<HomeIcon />}
            type="button"
            className="mt-12 cursor-pointer"
          >
            Ana Sayfaya Dön
          </Link>
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
