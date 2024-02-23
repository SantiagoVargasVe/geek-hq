import React, { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import AddDebtForm from "@/components/forms/AddDebtForm";

interface AddDebtModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AddDebtModal: FC<AddDebtModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar deuda</DialogTitle>
          <DialogDescription>
            Ingresa los datos de la deuda que deseas agregar.
          </DialogDescription>
        </DialogHeader>

        <AddDebtForm />

        <DialogFooter className="flex">
          <Button variant="default">Agregar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddDebtModal;
