import { useEffect, useState } from 'react'
import logo from '../public/assets/icons/logo.png'
import footer_logo from '../public/assets/icons/footer-logo.png'

import buyurtma from "../public/assets/icons/buyurtma.png";
import image from "../public/assets/icons/image.png";
import phone from "../public/assets/icons/phone.png";
import email from "../public/assets/icons/email.png";
import Rout from './Router/router';
import { Link, useLocation } from 'react-router';


import media from "../public/assets/icons/medias.png";

import apple from "../public/assets/icons/apple.png";
import play from "../public/assets/icons/play.png";


import axios from 'axios';

import search from "../public/assets/icons/search_02.svg";
import Kirish from "../public/assets/icons/Kirish.svg";

import Group from "../public/assets/icons/Group.svg";



function App() {
  const [value, setValue] = useState("");
  const [kirish, setKirish] = useState(false);

    


  
  
  return (
    <>
      <div className='bg-[#fff]'>
        <div className="w-full mx-auto bg-[#fff] h-auto">
          <nav className="w-[1080px] mx-auto p-5 flex justify-between items-center bg-white">
            <div className="flex justify-between gap-6">
              <img src={logo} alt="" />
              <div className="flex items-center">
                <div className="p-[10px] bg-[#F7F7F7] flex items-center">
                  <img src={search} alt="" />
                  <input
                    className="w-[324px] outline-0 border-0 text-[#B0B7BA] px-[8px]"
                    type="text"
                    placeholder="Izlash"
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                  />
                </div>
                <button className="bg-[#EDC843] text-white py-[10px] px-[32px] rounded-r-[10px]">
                  Izlash
                </button>
              </div>
            </div>
            <div className="flex w-[375px] items-center justify-between">
              <div className="text-center flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-500 not-hover:scale-100">
                <img src={buyurtma} alt="" />
                <p>Buyurtmalar</p>
              </div>
              <hr className="border-0 w-[2px] h-[30px] bg-[#F0F0F0]" />
              <div className="text-center flex flex-col items-center cursor-pointer hover:scale-105 transition-all duration-500 not-hover:scale-100">
                <img src={Group} alt="" />
                <p>Savatcha</p>
              </div>
              <hr className="border-0 w-[2px] h-[30px] bg-[#F0F0F0]" />
              <button onClick={() => {setKirish(true)}} className="py-[9px] flex items-center px-6 bg-[#15CC69] text-white rounded-[10px]">
                <img src={Kirish} alt="" /> Kirish
              </button>
            </div>
          </nav>
        </div>

        <Rout value={value} />
        <div className="w-full bg-white mt-[96px]">
          <footer className="w-[1080px] mx-auto p-[24px]">
            <img src={footer_logo} alt="" />
            <div className="w-full items-end flex justify-between">
              <div>
                <ul className="flex justify-between w-[366px] mt-5 font-semibold text-[16px]">
                  <li>Biz haqimizda</li>
                  <li>Ommaviy oferta</li>
                  <li>Bog’lanish</li>
                </ul>
                <p className="w-[500px] text-[#5A696E] font-normal text-[14px] mt-3">
                  10 dan oshiq restoran, choyxona va kafelarni tanlab oson
                  buyurtma berishingiz mumkin. Bularning barchasini
                  telefoningizda turib bajarish mumkin
                </p>
              </div>
              <div className="flex justify-between w-auto gap-3">
                <div className="bg-[#F7F7F7] p-3 flex w-[160px] rounded-[12px] justify-between items-center">
                  <img src={apple} alt="" />
                  <div className="flex flex-col -gap-[2px] rounded-[12px]">
                    <p className="text-[#B0B7BA]">Yuklab oling</p>
                    <h3>App Store</h3>
                  </div>
                </div>
                <a href="https://play.google.com/store/apps/details?id=uz.yemak.app&hl=ru&pli=1">
                  <div className="bg-[#F7F7F7] p-3 flex w-[160px] rounded-[12px] justify-between items-center">
                    <img src={play} alt="" />
                    <div className="flex flex-col -gap-[2px] rounded-[12px]">
                      <p className="text-[#B0B7BA]">Yuklab oling</p>
                      <h3>Google Play</h3>
                    </div>
                  </div>
                </a>
                <div className="bg-[#F7F7F7] p-3 flex w-[160px] rounded-[12px] justify-between items-center">
                  <img src={apple} alt="" />
                  <div className="flex flex-col -gap-[2px] rounded-[12px]">
                    <p className="text-[#B0B7BA]">Yuklab oling</p>
                    <h3>App Store</h3>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border-[#F0F0F0] mt-[14px] w-full" />
            <div className="mt-4 flex w-full justify-between items-center text-[#12282F]">
              <p className="font-normal text-[10px] leading-[100%]">
                © Yemak Delivery 2022. Barcha huquqlar himoyalangan.
              </p>
              <img src={media} alt="" />
              <div className="flex items-center gap-6">
                <div className="flex text-[#12282F]">
                  <img src={phone} alt="" />
                  <h3>+998 71 200 70 07</h3>
                </div>
                <div className="flex text-[#12282F]">
                  <img src={email} alt="" />
                  <h3>info@yemak.uz</h3>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App
