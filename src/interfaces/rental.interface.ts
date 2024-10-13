import { TBike } from "./bike.interface";

export type TRental = {
  _id: string;
  userId: string;
  bikeId: string;
  startTime: string;
  returnTime: string | null;
  totalCost?: number | null;
  isReturned?: boolean;
  transactionId?: string;
  isAdvanced?: boolean;
  pricePerHour: number;
  bikeData?: TBike;
};
