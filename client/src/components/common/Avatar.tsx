"use client";

import { cls } from "@/utils/cls";
import Image from "next/image";

interface AvatarProps {
  image?: string | null;
  size?: "sm" | "lg";
}

const Avatar = ({ image, size = "lg" }: AvatarProps) => {
  return (
    <div className="rounded-full flex justify-center items-center">
      {image && (
        <Image
          className="rounded-full"
          src={image}
          width={45}
          height={45}
          alt="avatar"
          referrerPolicy="no-referrer"
          priority
        />
      )}
      {!image && (
        <div
          className={cls(
            `bg-gray-300 rounded-full flex justify-center items-center ${getImageSize(
              size
            )} `
          )}
        />
      )}
    </div>
  );
};

export default Avatar;

const getImageSize = (size: "sm" | "lg") => {
  switch (size) {
    case "sm":
      return "w-8 h-8";
    case "lg":
      return "w-12 h-12";
  }
};
