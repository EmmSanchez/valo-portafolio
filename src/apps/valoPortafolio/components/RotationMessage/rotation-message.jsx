import CerrarIcon from "@/apps/foro4/assets/icons/CerrarIcon";
import LogoValoMark from "../../assets/logos/logo-valo-mark";
import SocialIcon from "../Buttons/social-icon";
import Whatsapp from "../../assets/icons/social-icons/whatsapp";
import Web from "../../assets/icons/social-icons/web";
import Calendar from "../../assets/icons/calendar";

export default function ValoRotationMessage() {
  return (
    <div className="flex flex-col w-full h-dvh p-[clamp(18.5px,3.255208vw,25px)] bg-valo/85">
      <div className="flex flex-col shrink-0">
        {/* Botón cerrar */}
        <button className="self-end w-fit h-fit p-[clamp(5.02px,0.885417vw,17px)] hover:cursor-pointer bg-valo">
          <CerrarIcon className="size-[clamp(13.31px,2.34375vw,45px)]" />
        </button>
        <LogoValoMark className="self-center w-[clamp(110.26px,19.401042vw,149px)] h-[clamp(31.08px,5.46875vw,42px)] text-valo" />
      </div>
      <div className="flex flex-col grow justify-center items-center gap-[clamp(29.58px,5.208333vw,40px)]">
        {/* Ícono de rotar */}
        <div className="size-[clamp(147.96px,26.02125vw,199px)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 199"
            fill="none"
          >
            <path
              d="M185.052 161.701C185.699 161.701 186.222 161.179 186.222 160.535V140.19C186.222 139.546 185.699 139.024 185.052 139.024C184.405 139.024 183.881 139.546 183.881 140.19V160.535C183.881 161.179 184.405 161.701 185.052 161.701Z"
              fill="#FEFCF3"
            />
            <path
              d="M199.843 116.454C199.843 108.333 193.207 101.725 185.052 101.725H42.0331C33.8776 101.725 27.2417 108.333 27.2417 116.454V184.271C27.2417 192.392 33.8776 199 42.0331 199H185.052C193.207 199 199.843 192.392 199.843 184.271V116.454ZM197.502 184.271C197.502 191.108 191.918 196.669 185.052 196.669H42.0331C35.1673 196.669 29.5828 191.108 29.5828 184.271V116.454C29.5828 109.617 35.1673 104.056 42.0331 104.056H185.052C191.918 104.056 197.502 109.617 197.502 116.454V184.271Z"
              fill="#FEFCF3"
            />
            <path
              d="M38.6278 15.8946H59.0591C59.7061 15.8946 60.2296 15.3732 60.2296 14.729C60.2296 14.0847 59.7061 13.5634 59.0591 13.5634H38.6278C37.9809 13.5634 37.4573 14.0847 37.4573 14.729C37.4573 15.3732 37.9809 15.8946 38.6278 15.8946Z"
              fill="#FEFCF3"
            />
            <path
              d="M96.5164 90.4931C97.1634 90.4931 97.6869 89.9717 97.6869 89.3275V14.729C97.6869 6.6079 91.051 0 82.8956 0H14.7914C6.6359 0 0 6.6079 0 14.729V157.144C0 165.265 6.6359 171.873 14.7914 171.873C15.4384 171.873 15.9619 171.352 15.9619 170.708C15.9619 170.063 15.4384 169.542 14.7914 169.542C7.92562 169.542 2.34108 163.981 2.34108 157.144V14.729C2.34108 7.89218 7.92562 2.3312 14.7914 2.3312H82.8956C89.7613 2.3312 95.3459 7.89218 95.3459 14.729V89.3275C95.3459 89.9717 95.8694 90.4931 96.5164 90.4931Z"
              fill="#FEFCF3"
            />
            <path
              d="M180.561 87.2845L189.585 72.9073C189.751 72.6445 189.802 72.3309 189.73 72.0257C189.687 71.8519 189.568 71.5213 189.21 71.3009C188.853 71.0763 188.508 71.1102 188.334 71.1526C188.023 71.2246 187.763 71.4069 187.597 71.6739L179.689 84.2751L178.931 78.019C175.334 48.3788 152.068 24.9057 122.353 20.93L117.088 20.2264L127.678 11.9866C128.185 11.5924 128.278 10.8549 127.878 10.3505C127.619 10.0157 127.278 9.93093 127.099 9.90973C126.789 9.87159 126.482 9.95636 126.235 10.1471L112.866 20.5485C112.866 20.5485 112.827 20.5782 112.81 20.5951L112.576 20.8494L112.504 20.9639C112.504 20.9639 112.483 21.0063 112.474 21.0275L112.453 21.0741C112.427 21.1377 112.41 21.1928 112.397 21.2479V21.2691C112.389 21.2902 112.385 21.3157 112.385 21.3369L112.372 21.5022L112.461 21.9472L112.644 22.2524L123.103 35.5826C123.486 36.0658 124.243 36.1718 124.746 35.7819C124.992 35.5911 125.146 35.3114 125.188 35.002C125.21 34.8239 125.21 34.4721 124.95 34.1458L115.803 22.4855L121.136 23.1213C135.306 24.8082 148.663 31.3483 158.747 41.5251C168.843 51.7146 175.228 65.1211 176.722 79.2694L177.199 83.8089L165.753 76.6839C165.561 76.5652 165.348 76.5059 165.136 76.5059C164.744 76.5059 164.361 76.7008 164.14 77.0569C163.799 77.5994 163.965 78.32 164.51 78.659L177.254 86.5894L177.428 86.7589C177.543 86.8734 177.692 86.9624 177.85 87.0217L178.075 87.1022L178.952 87.649C179.489 87.9838 180.233 87.8101 180.565 87.2803L180.561 87.2845Z"
              fill="#FEFCF3"
            />
          </svg>
        </div>

        {/* Texto */}
        <p className="font-lumarc uppercase text-center leading-none">
          <span className="text-card-lg font-bold">Rotate your screen to</span>
          <br />
          <span className="text-card-md">enjoy the experience</span>
        </p>
      </div>
      <div className="flex shrink-0 self-center gap-[clamp(11.83px,2.083333vw,16px)]">
        <SocialIcon
          icon={Whatsapp}
          href={"#"}
          className="text-white group-hover:text-valo"
          bgColor="bg-valo"
          hoverBgColor="hover:bg-white"
        />
        <SocialIcon
          icon={Web}
          href={"#"}
          className="text-white group-hover:text-valo"
          bgColor="bg-valo"
          hoverBgColor="hover:bg-white"
        />
        <SocialIcon
          icon={Calendar}
          href={"#"}
          className="text-white group-hover:text-valo"
          bgColor="bg-valo"
          hoverBgColor="hover:bg-white"
        />
      </div>
    </div>
  );
}
