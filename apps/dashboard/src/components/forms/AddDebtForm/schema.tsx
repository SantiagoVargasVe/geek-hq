import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty(),
  amount: z.number().positive(),
  interestRate: z.number().positive(),
  minimumPayment: z.number().positive(),
  dueDate: z.date(),
});
