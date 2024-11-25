import "../css/AboutMe.css";
import bulb from "../../assets/logos/bulb desktop.png";
import puzzle from "../../assets/logos/puzzle desktop white.png";
import bgProfil from "../../assets/logos/Photo shadows.png";
import profil from "../../assets/image/hero character photo.png";
import spacer from "../../assets/logos/Vector.png";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();
  return (
    <main name="about" id="about" className="overall">
      <div className="container-me">
        <h1 className="over-sign">{t("aboutSection")}</h1>
        <span>{t("explain")}</span>
        <div className="container-explain">
          <div className="explain">
            <img src={bulb} alt="" />
            <span>{t("explain1")}</span>
          </div>
          <div className="explain">
            <img src={puzzle} alt="" />
            <span>{t("explain2")}</span>
          </div>
        </div>
      </div>
      <div className="profil-pic">
        <img src={bgProfil} className="bg-photo" />
        <img src={profil} alt="" />
      </div>
      <img className="spacer" src={spacer} alt="Spacer" />
    </main>
  );
}
