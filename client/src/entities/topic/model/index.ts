import { Card } from "@/entities/card";



export type Topic = {
    id: number;
    name: string;
    Cards: Card[];
    createdAt: Date;
    updatedAt: Date;
};

export type TopicList = Topic[];