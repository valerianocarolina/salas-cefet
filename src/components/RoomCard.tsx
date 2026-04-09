import { DoorOpen } from "lucide-react";
import styles from "./styles.module.css";

export interface Room {
  name: string;
  status: "Livre";
}

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <article className={styles.roomCard}>
      <div className={styles.roomLabel}>
        <span>
          <DoorOpen className={styles.roomIcon} />
        </span>
        <strong>{room.name}</strong>
      </div>
      <span className={styles.roomStatus}>{room.status}</span>
    </article>
  );
}
