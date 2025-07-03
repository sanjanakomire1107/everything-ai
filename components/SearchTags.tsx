"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const tags = [
  "All",
  "Recruitment",
  "Youtube",
  "ApplicantTrackingSystem",
  "MachineLearning",
];

export default function SearchAndTags({
  onSearch,
  onTagSelect,
}: {
  onSearch?: (query: string) => void;
  onTagSelect?: (tag: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    onTagSelect?.(tag);
  };

  return (
    <div className="w-full max-w-[1330px] mx-auto px-4 mt-10">
      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search blog posts..."
          value={searchQuery}
          onChange={handleSearch}
          className="pl-10 text-sm"
        />
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Button
            key={tag}
            variant="outline"
            size="sm"
            className={`rounded-md border text-sm transition-all ${
              selectedTag === tag
                ? "border-purple-500 text-purple-600 bg-purple-50"
                : "text-purple-500 hover:bg-purple-100"
            }`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
}
