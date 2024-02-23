"use client";
import React, { FC, useState } from "react";

import { Debt } from "database";

import AddCard from "../../components/AddCard";
import AddDebtModal from "../../components/AddDebtModal";

interface DebtsProps {
  debts: Debt[];
}

const Debts: FC<DebtsProps> = ({ debts }) => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  return (
    <div>
      There is data
      <AddCard
        title="Nada que deber"
        description="Agrega una deuda para comenzar a controlar tus finanzas."
        onClick={() => setIsOpenAddModal(true)}
      />
      {<AddDebtModal isOpen={isOpenAddModal} setIsOpen={setIsOpenAddModal} />}
    </div>
  );
};

export default Debts;
