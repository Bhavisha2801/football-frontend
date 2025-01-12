"use client";

import React, { useEffect, useState } from "react";
import { useMatches } from "../../customHooks/useMatches";
import { useSelectedDate } from "../../context/SelectedDateContext"; // Use the context

type Match = {
  id: number;
  name: string;
  starting_at: string;
  localTeam: { name: string; logo: string; score: string };
  visitorTeam: { name: string; logo: string; score: string };
  score: { localteam: number; visitorteam: number };
  state: string; // live, scheduled, etc.
};

type MatchItem = {
  id: number;
  name: string;
  starting_at: string;
  leg: string;
  localteam_score: string;
  state_id: number;
}

const MatchSchedule: React.FC = () => {
  const { selectedDate } = useSelectedDate(); // Get selectedDate from the context
  const [matches, setMatches] = useState<Match[]>([]);
  const { data } = useMatches(selectedDate);

  useEffect(() => {
    if (data) {
      const formattedMatches = data?.data?.map((match: MatchItem) => ({
        id: match.id,
        name: match.name,
        starting_at: match.starting_at,
        localTeam: {
          name: match.name.split(" vs ")[0],
          score: match.leg.split("/")[0],
          // logo: match.localteam.logo,  // Assuming the API has a logo field for teams
        },
        visitorTeam: {
          name: match.name.split(" vs ")[1],
          score: match.leg.split("/")[1],
          // logo: match.visitorteam.logo,  // Assuming the API has a logo field for teams
        },
        score: {
          localteam: match.localteam_score,
          // visitorteam: match.visitorteam_score,
        },
        state: match.state_id === 1 ? "live" : "scheduled", // Adjust according to your API's data
      }));

      setMatches(formattedMatches);
    }
  }, [data]);

  return (
    <div className="p-6 rounded-lg shadow-lg w-full overflow-x-auto overflow-y-auto scrollbar-hide text-sm">
      <table className="min-w-full text-white rounded-xl shadow-lg">
        <thead>
          <tr className="bg-black">
            <th className="text-left py-2 px-4 col-span-2">Time - Match</th>
            <th className="text-left py-2 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {matches?.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-[#303030]" : "bg-[#222222]"} hover:bg-gray-600`}
            >
              <td className="py-2 px-4">
                {item.state === "live"
                  ? "Live"
                  : new Date(item.starting_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </td>
              <td className="py-2 px-4 flex items-center space-x-3">
                <div className="flex items-center space-x-2 sm:text-sm">
                  <span>{item.localTeam.name}</span>
                </div>
                <div className="text-lg sm:text-sm font-bold">{item.state === "live" ? `${item.localTeam.score} - ${item.visitorTeam.score}` : "-"}</div>
                <div className="flex items-center space-x-2 sm:text-sm">
                  <span>{item.visitorTeam.name}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchSchedule;
