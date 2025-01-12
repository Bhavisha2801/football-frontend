"use client"
// components/MainSection.tsx
import { SearchForm } from "@/components/sidebar/search-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import DateFilter from "../components/date-filter/DateFilter";
import ScheduleMatch from "@/components/ScoreBoard.tsx/ScheduleMatch";
import { SelectedDateProvider } from "../context/SelectedDateContext";

const MainSection = () => {
  return (
    <SelectedDateProvider>
      <div className="flex flex-col items-center p-4 bg-[#222222] rounded-2xl">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="text-[#c3cc5a] bg-[#303030] opacity-15 text-center rounded-lg flex flex-row justify-center items-center w-20 px-4">
            <span className="font-bold">&#8226;</span>
            <p className="text-sm">Live</p>
          </div>
          <div className="w-full"><SearchForm /></div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Matches" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">All Matches</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div><DateFilter /></div>
        <ScheduleMatch />
      </div>
    </SelectedDateProvider>
  );
};

export default MainSection;
