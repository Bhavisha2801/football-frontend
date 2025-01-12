"use client";

import { Button } from "../ui/button";
import { format, addDays, subDays } from "date-fns";
import { useSelectedDate } from "../../context/SelectedDateContext"; // Use the context

const DateFilter = () => {
  const { selectedDate, setSelectedDate } = useSelectedDate(); // Get the selectedDate and setSelectedDate from the context
  const today = new Date();
  const dates = [
    { label: format(subDays(today, 2), "EEEE dd MMM"), key: "2-days-ago" },
    { label: format(subDays(today, 1), "EEEE dd MMM"), key: "yesterday" },
    { label: "Today " + format(today, "dd MMM"), key: "today" },
    { label: format(addDays(today, 1), "EEEE dd MMM"), key: "tomorrow" },
    { label: format(addDays(today, 2), "EEEE dd MMM"), key: "2-days-later" },
    { label: format(addDays(today, 3), "EEEE dd MMM"), key: "3-days-later" },
  ];

  // Handle date click from the button
  const handleDateClick = (date: { label: string; key: string }) => {
    // Extract day, month, and year from the label
    const [dayName, day, month] = date.label.split(" ");

    // Get current year
    const year = new Date().getFullYear();

    // Convert month name to number
    const months: { [key: string]: number } = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };

    const monthIndex = months[month];

    // Build a valid Date object
    const selectedDate = new Date(Date.UTC(year, monthIndex, parseInt(day, 10)));

    // Format the date to yyyy-mm-dd
    const formattedDate = selectedDate.toISOString().split("T")[0];

    // Update state with the formatted date and close calendar
    setSelectedDate(formattedDate);
  };

  return (
    <div className="flex flex-col gap-4 items-start px-4 py-2 rounded-lg relative">
      {/* Date Buttons */}
      <div className="flex items-center flex-wrap gap-2 overflow-x-auto scrollbar-hide">
        {dates.map((date) => (
          <Button
            key={date.key}
            onClick={() => handleDateClick(date)}
            variant={"dateselected"}
            className={`${
              date.label === selectedDate
                ? "text-[#c3cc5a] font-semibold border-2 border-[#c3cc5a]"
                : "text-white"
            } px-4 py-2 rounded-md text-xs bg-[#303030]`}
          >
            {date.label}
          </Button>
        ))}
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="bg-gray-800 text-white text-sm px-4 py-2 rounded-md"
        />
      </div>
    </div>
  );
};

export default DateFilter;
