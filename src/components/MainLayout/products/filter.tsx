import React, { useState } from "react";
import styles from "./product.module.css";
import Image from "next/image";

interface FilterProps {
  title: string[];
  brands: string[];
  price: string[];
  ram: string[];
  demand: string[];
  resolution: string[];
  scanFrequency: string[];
  storageCapacity: string[];
  chargingFeature: string[];
  specialFeatures: string[];
  typePhone: string[];
}

const Filter: React.FC<FilterProps> = ({
  title,
  brands,
  price,
  ram,
  demand,
  resolution,
  scanFrequency,
  storageCapacity,
  chargingFeature,
  specialFeatures,
  typePhone,
}) => {
  const [Open, setOpen] = useState<boolean>(false);

  const hanldAction = () => {
    setOpen(!Open);
  };

  const listItems = [
    price,
    typePhone,
    demand,
    ram,
    storageCapacity,
    resolution,
    scanFrequency,
    chargingFeature,
    specialFeatures,
  ];

  const [selected, setSelected] = useState(1);

  const handleActionSort = (index: any) => {
    setSelected(index);
  };

  const [selectedBands, setSelectedBands] = useState(1);

  const handleActionBands = (index: any) => {
    setSelectedBands(index);
  };
  //
  const [prices, setSelectedPrice] = useState(null);
  const [typePhones, setSelectedtypePhone] = useState(null);
  const [demands, setSelecteddemand] = useState(null);
  const [rams, setSelectedtyperam] = useState(null);
  const [storageCapacitys, setSelectedstorageCapacity] = useState(null);
  const [resolutions, setSelectedtyperesolution] = useState(null);
  const [scanFrequencys, setSelectedscanFrequency] = useState(null);

  // Hàm xử lý các sự kiện
  const handleActionPrices = (index: any) => {
    console.log(index);
    setSelectedPrice(index);
  };
  const handleActiontypePhone = (index: any) => setSelectedtypePhone(index);
  const handleActiondemand = (index: any) => setSelecteddemand(index);
  const handleActiontyperam = (index: any) => setSelectedtyperam(index);
  const handleActionPstorageCapacitys = (index: any) =>
    setSelectedstorageCapacity(index);
  const handleActiontyperesolution = (index: any) =>
    setSelectedtyperesolution(index);
  const handleActionscanFrequency = (index: any) =>
    setSelectedscanFrequency(index);

  return (
    <>
      <Image
        src={"/assets/imgs/86f32cfcf2771b2e97081bccb21c69d0.png"}
        alt={""}
        height={500}
        width={1170}
      />
      <div className={styles.filterAll}>
        <div className={styles.filter} onClick={hanldAction}>
          <Image
            src={"/assets/imgs/filter.png"}
            alt={""}
            height={20}
            width={20}
          ></Image>
          <p>Lọc</p>
        </div>

        {brands.map((dt, index) => (
          <div
            className={selectedBands === index ? styles.brands : styles.filter}
            key={index}
            onClick={() => handleActionBands(index)}
          >
            <Image
              src={"/assets/icons/icon-quick-link.png"}
              alt={dt}
              height={20}
              width={20}
            />
            <p>{dt}</p>
          </div>
        ))}
      </div>
      {Open && (
        <>
          <div className={styles.loc}>
            <div className={styles.dacquyen}>
              <p>
                <input type="checkbox" name="" id="" /> Đặc quyền tại LESSON
              </p>
              <p>
                <input type="checkbox" name="" id="" />
                Mẫu mới
              </p>
            </div>
            <div className={styles.filterPhone}>
              {title.map((title, index) => (
                <div key={index}>
                  <span>{title}</span>
                  <div className={styles.listmoc}>
                    <div className={styles.moc}>
                      {Array.isArray(listItems[index]) &&
                        listItems[index].map((value, stt) => (
                          <p
                            key={stt}
                            onClick={() => {
                              handleActionPrices(stt);
                              handleActiontypePhone(stt);
                            }}
                            className={
                              (prices === stt ? styles.selectedMoc : "") +
                              (typePhones === stt ? styles.selectedMoc : "")
                            }
                          >
                            {value}
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.btnFilter}>
              <button>Tìm kiếm</button>
              <button onClick={hanldAction}>Hủy bỏ</button>
            </div>
          </div>
        </>
      )}
      <div className={styles.sort}>
        <p>Sắp xếp theo:</p>
        <p
          className={selected === 0 ? styles.selected : ""}
          onClick={() => handleActionSort(0)}
        >
          Nổi bật
        </p>
        <p
          className={selected === 1 ? styles.selected : ""}
          onClick={() => handleActionSort(1)}
        >
          Bán chạy
        </p>
        <p
          className={selected === 2 ? styles.selected : ""}
          onClick={() => handleActionSort(2)}
        >
          Giảm giá
        </p>
        <p
          className={selected === 3 ? styles.selected : ""}
          onClick={() => handleActionSort(3)}
        >
          Mới
        </p>
        <p
          className={selected === 4 ? styles.selected : ""}
          onClick={() => handleActionSort(4)}
        >
          Giá
        </p>
      </div>
    </>
  );
};

export default Filter;
