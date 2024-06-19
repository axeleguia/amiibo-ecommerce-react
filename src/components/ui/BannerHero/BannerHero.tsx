import { FC } from "react";
import AmiiboBannerImg from "@/assets/amiibo-banner.png";

export const BannerHero: FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-300 flex flex-col wrap mb-4 md:flex-row">
      <div className="px-8 pt-8 grow">
        <h1 className="text-5xl mb-4 font-bold">amiibo</h1>
        <p className="text-lg mb-4">
          ¡Potencia tu juego! Descubre amiibo, una forma divertida y única de
          interactuar con tus personajes y juegos favoritos de Nintendo.
        </p>
      </div>
      <img
        src={AmiiboBannerImg}
        alt=""
        className="md:w-[400px] rounded-b-xl md:rounded-r-xl md:rounded-l-none"
      />
    </div>
  );
};
