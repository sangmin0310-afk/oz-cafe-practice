import { useMemo, useState } from "react";
import Item from "./Item";
import OrderModal from "./OrderModal";
import { useMenu } from "../context/menuContext"; // Correct import

function Menu({ cart, setCart }) {
  const { menu } = useMenu(); // Correct use of useMenu

  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);

  if (!menu)
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        메뉴 정보가 없어요!
      </div>
    );

  const categories = Object.keys(menu);
  return (
    <>
      {categories.map((category) => {
        return (
          <section key={category}>
            <h2>{category}</h2>
            <ul className="menu">
              {menu[category].map((item) => (
                <Item
                  key={item.name}
                  item={item}
                  clickHandler={() => {
                    setModalMenu(item);
                    setModalOn(true);
                  }}
                />
              ))}
            </ul>
          </section>
        );
      })}
      {modalOn ? (
        <OrderModal
          modalMenu={modalMenu}
          setModalOn={setModalOn}
          cart={cart}
          setCart={setCart}
        />
      ) : null}
    </>
  );
}

export default Menu;