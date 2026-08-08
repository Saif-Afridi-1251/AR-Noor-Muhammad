import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import profile from "../../data/profile";

function ContactInfo() {
  return (
    <section id="contact-info" className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-700 bg-slate-950/90 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex-shrink-0 rounded-2xl bg-blue-600/20 p-4 text-blue-300">
              <FaPhone size={24} />
            </div>
            <div className="min-w-0">
              <p className="text-sm uppercase tracking-[2px] text-slate-400">
                Phone
              </p>
              <a
                href={`tel:${profile.phone}`}
                className="mt-3 block truncate text-2xl font-semibold text-white"
              >
                {profile.phone}
              </a>
              <p className="mt-2 text-slate-400">
                Call for project inquiries and consultations.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-slate-950/90 p-6 sm:p-8 text-white shadow-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex-shrink-0 rounded-2xl bg-cyan-500/20 p-4 text-cyan-300">
              <FaEnvelope size={24} />
            </div>
            <div className="min-w-0">
              <p className="text-sm uppercase tracking-[2px] text-slate-400">
                Email
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 block truncate text-2xl font-semibold text-white"
              >
                {profile.email}
              </a>
              <p className="mt-2 text-slate-400">
                Send a message for collaboration requests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
