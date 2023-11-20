import React from "react";
import { star } from "../assets/icons";
import Modal from "./Modal";
import { useState } from "react";

const PopularProductCard = ({ imgURL, name, price, detail }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img
                src={imgURL}
                alt={name}
                className="w-[280px] h-[280px] hover:scale-105 transition-transform"
                onClick={() => setShowModal(true)}
            />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">
                    (4.5)
                </p>
            </div>
            <h3 className="mt-2 text-xl leading-normal font-semibold font-palanquin">
                {name}
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-logitech-blue text-2xl leading-normal">
                {price}
            </p>
            {showModal && (
                <Modal
                    setShowModal={setShowModal}
                    name={name}
                    image={imgURL}
                    price={price}
                    detail={detail}
                />
            )}
        </div>
    );
};

export default PopularProductCard;
