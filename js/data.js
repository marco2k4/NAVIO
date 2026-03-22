/**
 * data.js — All static app data
 * Edit this file to update class schedules, buildings, instructors, etc.
 */

const BUILDINGS = {
  1: 'Heritage Hall',
  2: 'Aldred Centre',
  3: 'Senator Burns',
  4: 'Stan Grad',
  5: 'Student Centre',
  6: 'Sports Centre',
};

const DAYS = [
  { key: 'mon', label: 'Mon · Mar 23' },
  { key: 'tue', label: 'Tue · Mar 24' },
  { key: 'wed', label: 'Wed · Mar 25' },
  { key: 'thu', label: 'Thu · Mar 26' },
  { key: 'fri', label: 'Fri · Mar 27' },
];

/**
 * Schedule data per day.
 * Each class object:
 *  id         – unique number
 *  name       – full class name
 *  code       – course code
 *  time       – start time (display string)
 *  ampm       – 'AM' | 'PM'
 *  duration   – display string e.g. '1h 30m'
 *  room       – room label e.g. 'Rm 204'
 *  building   – building name string
 *  instructor – full instructor name
 *  type       – 'Lecture' | 'Lab' | 'Seminar'
 *  color      – 'blue' | 'teal' | 'purple' | 'amber' | 'rose'
 */
const SCHEDULE = {
  mon: [
    {
      id: 1,
      name: 'Database Systems',
      code: 'CPRG 307',
      time: '8:00', ampm: 'AM',
      duration: '1h 30m',
      room: 'Rm 204',
      building: 'Heritage Hall',
      instructor: 'Sarah Chen',
      type: 'Lecture',
      color: 'blue',
    },
    {
      id: 2,
      name: 'Web Development II',
      code: 'CPRG 213',
      time: '10:00', ampm: 'AM',
      duration: '1h 30m',
      room: 'Lab 112',
      building: 'Aldred Centre',
      instructor: 'James Park',
      type: 'Lab',
      color: 'teal',
    },
    {
      id: 3,
      name: 'Software Architecture',
      code: 'CPRG 311',
      time: '1:00', ampm: 'PM',
      duration: '1h 30m',
      room: 'Rm 318',
      building: 'Heritage Hall',
      instructor: 'Maya Patel',
      type: 'Lecture',
      color: 'purple',
    },
    {
      id: 4,
      name: 'Cybersecurity Fundamentals',
      code: 'CPRG 290',
      time: '3:00', ampm: 'PM',
      duration: '1h 00m',
      room: 'Rm 220',
      building: 'Senator Burns',
      instructor: 'David Kim',
      type: 'Seminar',
      color: 'amber',
    },
    {
      id: 5,
      name: 'Capstone Project',
      code: 'PROJ 400',
      time: '5:00', ampm: 'PM',
      duration: '2h 00m',
      room: 'Lab 105',
      building: 'Heritage Hall',
      instructor: 'Lisa Torres',
      type: 'Lab',
      color: 'rose',
    },
  ],
  tue: [
    {
      id: 6,
      name: 'Algorithms & Data Structures',
      code: 'CPRG 215',
      time: '9:00', ampm: 'AM',
      duration: '1h 30m',
      room: 'Rm 301',
      building: 'Heritage Hall',
      instructor: 'Alex Rivera',
      type: 'Lecture',
      color: 'blue',
    },
    {
      id: 7,
      name: 'Mobile Development',
      code: 'CPRG 280',
      time: '11:30', ampm: 'AM',
      duration: '1h 30m',
      room: 'Lab 210',
      building: 'Aldred Centre',
      instructor: 'Sarah Chen',
      type: 'Lab',
      color: 'teal',
    },
    {
      id: 8,
      name: 'Cloud Infrastructure',
      code: 'CPRG 305',
      time: '2:30', ampm: 'PM',
      duration: '1h 00m',
      room: 'Rm 115',
      building: 'Stan Grad',
      instructor: 'James Park',
      type: 'Seminar',
      color: 'purple',
    },
  ],
  wed: [
    {
      id: 9,
      name: 'Database Systems',
      code: 'CPRG 307',
      time: '8:00', ampm: 'AM',
      duration: '1h 30m',
      room: 'Rm 204',
      building: 'Heritage Hall',
      instructor: 'Sarah Chen',
      type: 'Lecture',
      color: 'blue',
    },
    {
      id: 10,
      name: 'Software Testing',
      code: 'CPRG 295',
      time: '10:30', ampm: 'AM',
      duration: '1h 00m',
      room: 'Lab 118',
      building: 'Aldred Centre',
      instructor: 'Maya Patel',
      type: 'Lab',
      color: 'amber',
    },
    {
      id: 11,
      name: 'Ethics in Tech',
      code: 'HUMN 202',
      time: '1:30', ampm: 'PM',
      duration: '1h 00m',
      room: 'Rm 220',
      building: 'Senator Burns',
      instructor: 'Dr. Liu',
      type: 'Seminar',
      color: 'rose',
    },
  ],
  thu: [
    {
      id: 12,
      name: 'Web Development II',
      code: 'CPRG 213',
      time: '9:30', ampm: 'AM',
      duration: '1h 30m',
      room: 'Lab 112',
      building: 'Aldred Centre',
      instructor: 'James Park',
      type: 'Lab',
      color: 'teal',
    },
    {
      id: 13,
      name: 'Software Architecture',
      code: 'CPRG 311',
      time: '12:00', ampm: 'PM',
      duration: '1h 30m',
      room: 'Rm 318',
      building: 'Heritage Hall',
      instructor: 'Maya Patel',
      type: 'Lecture',
      color: 'purple',
    },
    {
      id: 14,
      name: 'Capstone Project',
      code: 'PROJ 400',
      time: '4:00', ampm: 'PM',
      duration: '2h 00m',
      room: 'Lab 105',
      building: 'Heritage Hall',
      instructor: 'Lisa Torres',
      type: 'Lab',
      color: 'blue',
    },
  ],
  fri: [
    {
      id: 15,
      name: 'Algorithms & Data Structures',
      code: 'CPRG 215',
      time: '10:00', ampm: 'AM',
      duration: '1h 30m',
      room: 'Rm 301',
      building: 'Heritage Hall',
      instructor: 'Alex Rivera',
      type: 'Lecture',
      color: 'blue',
    },
    {
      id: 16,
      name: 'Cybersecurity Fundamentals',
      code: 'CPRG 290',
      time: '1:00', ampm: 'PM',
      duration: '1h 00m',
      room: 'Rm 220',
      building: 'Senator Burns',
      instructor: 'David Kim',
      type: 'Seminar',
      color: 'amber',
    },
  ],
};
