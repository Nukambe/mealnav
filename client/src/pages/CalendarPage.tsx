import React from 'react';
import Calendar from '../features/calendar/Calendar';
import Button from '../components/shared/Button/Button';
import clsx from 'clsx';

const meetings: any = [{}, {}];

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  return (
    <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
      <section className="mt-12 md:mt-0 md:pl-14">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Plan for{' '}
          <time
            dateTime={selectedDate?.toISOString() || new Date().toISOString()}
          >
            {selectedDate?.toLocaleDateString() || 'today'}
          </time>
        </h2>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {meetings.map((meeting: any) => (
            <li
              key={meeting.id}
              className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
            >
              <img
                src={meeting.imageUrl}
                alt=""
                className="h-10 w-10 flex-none rounded-full"
              />
              <div className="flex-auto">
                <p className="text-gray-900">{meeting.name}</p>
                <p className="mt-0.5">
                  <time dateTime={meeting.startDatetime}>{meeting.start}</time>{' '}
                  - <time dateTime={meeting.endDatetime}>{meeting.end}</time>
                </p>
              </div>
              <div className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
                <div>
                  <Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    {/* <EllipsisVerticalIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    /> */}
                    ...
                  </Button>
                </div>

                <ul className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <li>
                      <a
                        href="/"
                        className={clsx(
                          true ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        )}
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className={clsx(
                          true ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        )}
                      >
                        Cancel
                      </a>
                    </li>
                  </div>
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </div>
  );
}
