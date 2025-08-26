"use client";

import { motion } from "framer-motion";
import { Card, Avatar } from "@nextui-org/react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTiktok,
  faInstagram,
  faYoutube,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faCode } from "@fortawesome/free-solid-svg-icons";
import avatarImg from "@/public/headshot.jpg";

const socialLinks = [
  {
    name: "TikTok",
    url: "https://tiktok.com/@mikxyg",
    icon: faTiktok,
    color: "from-pink-500 to-purple-600",
    bgColor: "bg-gradient-to-r from-pink-500/20 to-purple-600/20",
    borderColor: "border-pink-500/30",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/mikxyg",
    icon: faInstagram,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@mikeygeraghty",
    icon: faYoutube,
    color: "from-red-500 to-red-600",
    bgColor: "bg-gradient-to-r from-red-500/20 to-red-600/20",
    borderColor: "border-red-500/30",
  },
  {
    name: "Development",
    url: "/",
    icon: faCode,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    name: "GitHub",
    url: "https://github.com/IrishMikey",
    icon: faGithub,
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gradient-to-r from-gray-600/20 to-gray-800/20",
    borderColor: "border-gray-600/30",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/michaeldanielgeraghty/",
    icon: faLinkedin,
    color: "from-blue-600 to-blue-700",
    bgColor: "bg-gradient-to-r from-blue-600/20 to-blue-700/20",
    borderColor: "border-blue-600/30",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/mgwebs",
    icon: faTwitter,
    color: "from-blue-400 to-blue-500",
    bgColor: "bg-gradient-to-r from-blue-400/20 to-blue-500/20",
    borderColor: "border-blue-400/30",
  },
];

export default function LinksPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8">
      {/* Abstract background shapes */}
      <div className="abstract-shape"></div>
      <div className="abstract-shape"></div>
      <div className="abstract-shape"></div>

      <motion.div
        className="mx-auto w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Profile Section */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Avatar
            src={avatarImg.src}
            className="mx-auto mb-4 h-24 w-24 text-large"
          />
          <h1 className="text-responsive-xl mb-2 font-bold tracking-tight text-primary">
            Michael Geraghty
          </h1>
          <p className="text-muted text-responsive-sm">
            Web Developer & Content Creator
          </p>
        </motion.div>

        {/* Links Section */}
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <Card
                  className={`group relative cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 ${link.bgColor} border ${link.borderColor} backdrop-blur-sm`}
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                  }}
                >
                  <div className="flex items-center justify-between p-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`h-10 w-10 rounded-lg bg-gradient-to-r ${link.color} flex items-center justify-center text-white`}
                      >
                        <FontAwesomeIcon icon={link.icon} className="text-lg" />
                      </div>
                      <span className="text-responsive-sm font-medium text-primary">
                        {link.name}
                      </span>
                    </div>
                    <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <FontAwesomeIcon
                        icon={faGlobe}
                        className="text-muted text-sm"
                      />
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                  ></div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-muted text-responsive-xs">
            Thanks for visiting! 🍀
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
