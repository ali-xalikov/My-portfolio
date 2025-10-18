import { useEffect, useState } from "react";
import unload from "../../public/assets/icons/upload.png";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router";
import vector from "../../public/assets/icons/Vector.png";
import fast from "../../public/assets/icons/fast.png";
import pissa from "../../public/assets/icons/pissa.png";
import money from "../../public/assets/icons/money.png";

export default function Restaurants(props) {
  const { userId } = useParams();
  const [restaurants, setRestaurants] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://yemak.uz/api/user/restaurant")
      .then((res) => setRestaurants(res.data.data.restaurants))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://yemak.uz/api/user/restaurant/product?id=${userId}`)
      .then((res) => {
        const data = res.data.data.products;
        setProducts(data);
        if (data.length > 0) {
          setFilter(data[0].title);
        }
      })
      .finally(() => setLoading(false));
  }, [userId]);

  const selected = restaurants.find((item) => item.id === Number(userId));

  const addToCart = (item) => {
    setCart((oldCart) => {
      let newCart = [...oldCart];

      let foundProduct = null;
      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].id === item.id) {
          foundProduct = newCart[i];
          break;
        }
      }

      if (foundProduct) {
        newCart = newCart.map((p) => {
          if (p.id === item.id) {
            return { ...p, quantity: p.quantity + 1 };
          }
          return p;
        });
      } else {
        const newItem = {
          ...item,
          quantity: 1,
        };
        newCart.push(newItem);
      }

      return newCart;
    });
  };
  const changeQuantity = (id, type) => {
    setCart((oldCart) => {
      let newCart = [...oldCart];

      newCart = newCart.map((p) => {
        if (p.id === id) {
          if (type === "inc") {
            return { ...p, quantity: p.quantity + 1 };
          } else if (type === "dec") {
            return { ...p, quantity: p.quantity - 1 };
          } else {
            return {...p, quantity:p.quantity = 0}
          }
        }
        return p;
      });

      newCart = newCart.filter((p) => p.quantity > 0);

      return newCart;
    });
  };


  return (
    <div className="w-[1080px] mx-auto mt-[17px]">
      <div>
        <Link to="/projects/yemak">
          <h3 className="font-medium text-[18px] leading-[100%]">
            Asosiy sahifa › Restoranlar ›{" "}
            <span className="text-[#B0B7BA]">{selected?.name}</span>
          </h3>
        </Link>
      </div>

      <div className="mt-8 w-full p-5 relative text-white rounded-3xl bg-cover bg-center bg-no-repeat">
        {selected?.image ? (
          <div
            className="w-full rounded-3xl bg-cover bg-center bg-no-repeat p-5 relative"
            style={{
              backgroundImage: `linear-gradient(0deg,rgba(20,20,20,0.5) 4.61%,rgba(20,20,20,0.52) 34.9%,rgba(20,20,20,0.8) 100%,rgba(20,20,20,0.8) 100%,rgba(20,20,20,0.6) 100%), url(${selected?.image})`,
            }}
          >
            <div className="w-10 h-10 rounded-[12px] absolute right-5 items-center flex text-center bg-[#FFFFFF1A] justify-center border-white border">
              <Link to="/">
                <img src={unload} alt="" />
              </Link>
            </div>
            <div className="flex justify-between items-end mt-[61px]">
              <div>
                <h2 className="text-[32px]">{selected?.name}</h2>
                <p className="w-[500px]">{selected?.description}</p>
                <div className="flex mt-4 gap-3">
                  <div className="flex gap-2 rounded-[12px] w-[106px] items-center p-[6px] backdrop-blur-[10px]">
                    <img src={vector} alt="" />
                    <div>
                      <h4>4.5</h4>
                      <p>100+</p>
                    </div>
                  </div>
                  <div className="flex gap-2 rounded-[12px] w-[106px] items-center p-[6px] backdrop-blur-[10px]">
                    <img src={fast} alt="" />
                    <div>
                      <h4>{selected?.delivery_time / 60}</h4>
                      <p>daqiqa</p>
                    </div>
                  </div>
                  <div className="flex gap-2 rounded-[12px] w-[106px] items-center p-[6px] backdrop-blur-[10px]">
                    <img src={money} alt="" />
                    <div>
                      <h4>{selected?.delivery_price}</h4>
                      <p>UZS</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="backdrop-blur-2xl px-3 py-2 rounded-[12px]">
                  Время работы ({selected?.work_time.from}-
                  {selected?.work_time.to})
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-[250px] rounded-3xl p-5 bg-gray-300 animate-pulse">
            <div className="w-10 h-10 rounded-[12px] absolute right-10 bg-gray-400"></div>
            <div className="flex justify-between items-end mt-[61px]">
              <div>
                <div className="h-8 w-40 bg-gray-400 rounded mb-3"></div>
                <div className="h-5 w-[500px] bg-gray-400 rounded mb-4"></div>
                <div className="flex mt-4 gap-3">
                  <div className="w-[106px] h-[60px] bg-gray-400 rounded-[12px]"></div>
                  <div className="w-[106px] h-[60px] bg-gray-400 rounded-[12px]"></div>
                  <div className="w-[106px] h-[60px] bg-gray-400 rounded-[12px]"></div>
                </div>
              </div>
              <div className="h-8 w-32 bg-gray-400 rounded"></div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-start gap-6">
        <div className=" text-black mt-6">
          <div
            className="p-3 flex items-center max-w-[713px] overflow-x-auto rounded-[12px]"
            id="web"
          >
            <div className="flex items-center gap-3">
              {loading
                ? Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="py-2 px-4 min-w-[150px] h-10 bg-gray-300 rounded-[10px] animate-pulse"
                      ></div>
                    ))
                : products?.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => setFilter(item.title)}
                      className={`py-2 px-4 min-w-[150px] text-center rounded-[10px] cursor-pointer transition duration-300 
                    ${
                      filter === item.title
                        ? "bg-[#EDC843] text-white"
                        : "bg-gray-200 text-black hover:bg-[#d4af37] hover:text-white"
                    }`}
                    >
                      {item.title}
                    </div>
                  ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-4xl">{filter}</h2>
            <div className="w-[712px] flex flex-wrap gap-3 mt-10">
              {loading
                ? Array(8)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-[169px] h-[246px] bg-gray-300 rounded-2xl animate-pulse"
                      ></div>
                    ))
                : products
                    ?.filter((cat) => cat.title === filter)
                    ?.map((cat) =>
                      cat.products?.map((item) => (
                        <div
                          className="w-[169px] h-[246px] bg-white rounded-2xl border border-[#F0F0F0] cursor-pointer"
                          key={item.id}
                          onClick={() => addToCart(item)}
                        >
                          <img
                            className="w-full h-[159px] rounded-2xl mt-2"
                            src={item.photo}
                            alt=""
                          />
                          <p className="ml-3 font-semibold text-[14px] leading-[130%] mt-2">
                            {item.name}
                          </p>
                          <h3 className="ml-3 font-bold text-[20px] leading-[100%] mt-6">
                            {item.price} UZS
                          </h3>
                        </div>
                      ))
                    )}
            </div>
          </div>
        </div>

        <div className="p-5 bg-white mt-6 rounded-[20px] w-[330px]">
          <h2>Savatcha</h2>
          <div className=" flex justify-between w-[304px] p-2 mt-3 border border-[#F0F0F0] rounded-[12px]">
            {selected?.logotype ? (
              <img
                src={selected?.logotype}
                className="w-10 h-10 rounded-[10px]"
                alt=""
              />
            ) : (
              <div className="w-10 h-10 rounded-[10px] animate-pulse bg-gray-400"></div>
            )}
            <div>
              <p>Buyurtma qilinayotgan restoran</p>
              <h3 className="font-bold">{selected?.name}</h3>
            </div>
          </div>

          <div className="mt-3">
            {cart.length === 0 ? (
              <p>Maxsulotlarni tanlang</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className=" border border-[#F0F0F0] p-2  rounded-[12px] mt-3"
                >
                  <div className="relative">
                    <span
                      onClick={() => changeQuantity(item.id, "zero")}
                      className="absolute -right-3 bg-[#F0F0F0] w-6 h-6 -top-3 cursor-pointer rounded-[90px] justify-center flex items-center text-center"
                    >
                      &times;
                    </span>
                    <div className="flex ml-2 gap-2">
                      <img
                        src={item.photo}
                        alt=""
                        className="w-[50px] h-[50px] rounded-[8px] object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-[14px]">{item.name}</h3>
                        <p className="text-[#15CC69]">250 g</p>
                      </div>
                    </div>
                    <div className=" flex w-full justify-between mt-3">
                      <p className="text-[13px] text-gray-500">
                        {item.quantity} x {item.price} UZS
                      </p>
                      <h4 className="font-bold text-[14px]">
                        {item.quantity * item.price} UZS
                      </h4>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() => changeQuantity(item.id, "dec")}
                      className="w-15 h-10 border border-[#B0B7BA] rounded-[7.34px] hover:border-[#EDC843]"
                    >
                      -
                    </button>
                    <span className="w-[144px] text-center flex justify-center bg-[#F7F7F7] h-10 items-center rounded-[7.34px]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => changeQuantity(item.id, "inc")}
                      className="w-15 h-10 border border-[#B0B7BA] rounded-[7.34px] hover:border-[#EDC843]"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
