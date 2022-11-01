export const tasks: Task[] = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Two Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Three Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 4,
    text: 'Four Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
];

export interface Task {
  id?: number;
  text: string;
  day: string;
  reminder: boolean;
}
