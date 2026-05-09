"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { Card } from "@heroui/react";
import {
  MdEmail,
  MdEdit,
  MdVerified,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { FaRegCalendarAlt, FaUserShield } from "react-icons/fa";
import { UpdateUserModal } from "@/components/updateProfile/UpdateUserModal";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();
  const userData = data?.user;

  if (isPending) {
    return (
      <section className="min-h-[70vh] bg-[#fff7ed] px-4 py-20">
        <p className="text-center text-slate-500">Loading profile...</p>
      </section>
    );
  }

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#fff7ed] px-4 py-16">
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-orange-300/40 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-yellow-300/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Account Overview
          </p>
          <h1 className="mt-2 text-4xl font-black text-slate-950">
            My Profile
          </h1>
        </div>

        <Card className="overflow-hidden rounded-[2.2rem] border border-orange-100 bg-white/80 shadow-2xl shadow-orange-100 backdrop-blur-xl">
          <div className="relative h-56 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_35%)]" />

            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                <img
                  src={userData?.image}
                  alt={userData?.name}
                  className="h-32 w-32 rounded-3xl border-4 border-white object-cover shadow-xl"
                />

                <div>
                  <h2 className="text-4xl font-black text-white">
                    {userData?.name}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-white/85">
                    SunCart Premium Member
                  </p>
                </div>
              </div>

            <UpdateUserModal />
            </div>
          </div>

          <div className="grid gap-6 p-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-orange-100 bg-orange-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white">
                    <MdEmail />
                  </div>
                  <p className="text-sm font-bold text-slate-500">Email</p>
                  <p className="mt-1 break-all text-base font-bold text-slate-950">
                    {userData?.email}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-2xl text-white">
                    <MdVerified />
                  </div>
                  <p className="text-sm font-bold text-slate-500">
                    Email Status
                  </p>
                  <p className="mt-1 text-base font-bold text-slate-950">
                    {userData?.emailVerified ? "Verified" : "Not Verified"}
                  </p>
                </div>

                <div className="rounded-3xl border border-yellow-100 bg-yellow-50 p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500 text-2xl text-white">
                    <FaRegCalendarAlt />
                  </div>
                  <p className="text-sm font-bold text-slate-500">Joined</p>
                  <p className="mt-1 text-base font-bold text-slate-950">
                    {userData?.createdAt ? new Date(userData.createdAt).toLocaleDateString() : "N/A"}
                  </p>
                </div>

                <div className="rounded-3xl border border-orange-100 bg-white p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-orange-600">
                    <FaUserShield />
                  </div>
                  <p className="text-sm font-bold text-slate-500">User ID</p>
                  <p className="mt-1 break-all text-sm font-bold text-slate-950">
                    {userData?.id}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-slate-950 p-6 text-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-3xl">
                <MdOutlineShoppingBag />
              </div>

              <h3 className="mt-6 text-2xl font-black">Summer Shopper</h3>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Your SunCart profile is ready for browsing products, viewing
                protected product details, and managing account information.
              </p>

              <div className="mt-6 rounded-2xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">Account Type</p>
                <p className="mt-1 text-xl font-black text-orange-300">
                  Customer
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProfilePage;