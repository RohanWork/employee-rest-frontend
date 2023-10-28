import { Typography } from "@material-tailwind/react";
import empImage from './1emp.png';
import contact from './ContactForm'
import { useLocation } from "react-router-dom";

function Footer() {

  const location = useLocation();

  return (
    <footer className="w-full p-8 Nav-color">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img src={empImage} alt="logo-emp" className="w-13 h-13 rounded-full" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          {/* <li>
            <Typography
              as="a"
              href="contact"
              color="white"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              onClick={() => {
                window.location.href = contact; // Navigate to the ContactForm.jsx file
              }}
            >
              Contact Us
            </Typography>
          </li> */}
          {location.pathname !== "/" && ( // Check if the current route is not the login page
            <li>
              <Typography
                as="a"
                href="contact"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                onClick={() => {
                  window.location.href = contact;
                }}
              >
                Contact Us
              </Typography>
            </li>
          )}
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="white" className="text-center font-normal">
        &copy; 2023 Employee CRM Tool (Internal)
      </Typography>
    </footer>
  );
}

export default Footer;