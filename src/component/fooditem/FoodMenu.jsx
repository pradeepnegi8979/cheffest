import { IoIosArrowUp } from "react-icons/io";
import styles from "./foodmenu.module.css";
import images from "../../common/image";
const FoodMenu = () =>{
  return (
    <>
     <div className={styles.foodMenuOuter}>
       <div className="accordian">
         <div className="accordianList">
           <div className={styles.accorHeading}>
             <h4>Crazy Deal Combos (6) </h4>
             <IoIosArrowUp />
           </div>
           <div className={styles.accordianData}>
              <ul>
                <li>
                   <div className="itemLabel">
                   <label className={styles.vegIcon}></label>
                   <p className={styles.itemName}>Dal Makhni With 2 Butter Roti</p>
                   <p className={styles.itemPrice}>Rs 280</p>
                   </div>
                   <div className={styles.itemImage}>
                     <img src={images.parantha}/>
                     <button className={styles.addBtn}> ADD </button>
                   </div>
                </li>
                <li>
                   <div className="itemLabel">
                   <label className={styles.vegIcon}></label>
                   <p className={styles.itemName}>Dal Makhni With 2 Butter Roti</p>
                   <p className={styles.itemPrice}>Rs 280</p>
                   </div>
                   <div className={styles.itemImage}>
                     <img src={images.parantha}/>
                     <button className={styles.addBtn}> ADD </button>
                   </div>
                </li>
                <li>
                   <div className="itemLabel">
                   <label className={styles.vegIcon}></label>
                   <p className={styles.itemName}>Dal Makhni With 2 Butter Roti</p>
                   <p className={styles.itemPrice}>Rs 280</p>
                   </div>
                   <div className={styles.itemImage}>
                     <img src={images.parantha}/>
                     <button className={styles.addBtn}> ADD </button>
                   </div>
                </li>
                <li>
                   <div className="itemLabel">
                   <label className={styles.vegIcon}></label>
                   <p className={styles.itemName}>Dal Makhni With 2 Butter Roti</p>
                   <p className={styles.itemPrice}>Rs 280</p>
                   </div>
                   <div className={styles.itemImage}>
                     <img src={images.parantha}/>
                     <button className={styles.addBtn}> ADD </button>
                   </div>
                </li>
                <li>
                   <div className="itemLabel">
                   <label className={styles.vegIcon}></label>
                   <p className={styles.itemName}>Dal Makhni With 2 Butter Roti</p>
                   <p className={styles.itemPrice}>Rs 280</p>
                   </div>
                   <div className={styles.itemImage}>
                     <img src={images.parantha}/>
                     <button className={styles.addBtn}> ADD </button>
                   </div>
                </li>
                <li>
                   <div className="itemLabel">
                   <label className={styles.vegIcon}></label>
                   <p className={styles.itemName}>Dal Makhni With 2 Butter Roti</p>
                   <p className={styles.itemPrice}>Rs 280</p>
                   </div>
                   <div className={styles.itemImage}>
                     <img src={images.parantha}/>
                     <button className={styles.addBtn}> ADD </button>
                   </div>
                </li>
                <li>
                   <div className="itemLabel">
                   <label className={styles.vegIcon}></label>
                   <p className={styles.itemName}>Dal Makhni With 2 Butter Roti</p>
                   <p className={styles.itemPrice}>Rs 280</p>
                   </div>
                   <div className={styles.itemImage}>
                     <img src={images.parantha}/>
                     <button className={styles.addBtn}> ADD </button>
                   </div>
                </li>
              </ul>
           </div>
         </div>
       </div>
     </div>
    </>
  )
}
export default FoodMenu;