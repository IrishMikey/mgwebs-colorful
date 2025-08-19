"use client";
import { Input, Textarea, Link } from "@nextui-org/react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { toast, Toaster } from "@pheralb/toast";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="section-margin flex min-h-[35rem] w-full scroll-mt-[7rem] flex-col leading-8"
      viewport={{ once: true }}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="section-header text-center">
        <h3 className="text-responsive-xl mb-4 font-bold tracking-tight text-primary">
          Get In Touch
        </h3>
        <span className="text-responsive-base text-muted mx-auto max-w-[60ch] font-normal leading-relaxed">
          Connect with me for collaborations, questions, or just to say hello!
          I'm always excited to hear about new opportunities and interesting
          projects.
        </span>
      </div>

      <div className="mt-12 flex w-full flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center">
        {/* Social Links Section */}
        <motion.div
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-responsive-lg font-semibold tracking-wide text-secondary">
            Let's Connect
          </h4>
          <div className="flex gap-4">
            <Link
              className="glass hover:text-accent-light flex h-16 w-16 items-center justify-center rounded-xl text-2xl transition-all duration-300 hover:scale-110"
              href="mailto:mikeygeraghty@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} title="Send me an email" />
            </Link>
            <Link
              className="glass hover:text-accent-light flex h-16 w-16 items-center justify-center rounded-xl text-2xl transition-all duration-300 hover:scale-110"
              href="https://www.linkedin.com/in/michaeldanielgeraghty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} title="Connect on LinkedIn" />
            </Link>
            <Link
              className="glass hover:text-accent-light flex h-16 w-16 items-center justify-center rounded-xl text-2xl transition-all duration-300 hover:scale-110"
              href="https://twitter.com/MGWebss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faXTwitter}
                title="Follow on X (Twitter)"
              />
            </Link>
          </div>
          <p className="text-responsive-sm text-muted max-w-[40ch] text-center">
            Feel free to reach out through any of these platforms. I typically
            respond within 24 hours.
          </p>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          className="w-full max-w-[35rem]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 shadow-xl">
            <h4 className="text-responsive-lg mb-6 font-semibold tracking-wide text-secondary">
              Send a Message
            </h4>
            <form
              className="flex flex-col gap-6"
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                  toast.error({ text: "error" });
                  return;
                }

                toast.success({ text: "message sent" });
              }}
            >
              <div className="flex flex-col gap-2">
                <label className="text-responsive-sm font-medium text-secondary">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-14"
                  name="senderEmail"
                  variant="bordered"
                  radius="lg"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-responsive-sm font-medium text-secondary">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project or just say hello!"
                  name="message"
                  className="min-h-[120px]"
                  variant="bordered"
                  radius="lg"
                />
              </div>

              <SubmitBtn />
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
