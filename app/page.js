"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Home, Hammer, DollarSign } from "lucide-react";

export default function RealEstateWizardLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 font-sans text-gray-800 p-6 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="flex justify-center mb-6">
          <img
            src="/logo-closing-concierge.png"
            alt="Closing Concierge Company Logo"
            width={180}
            height={180}
          />
        </div>

        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">
          🧙‍♂️ Sell Smarter with the Real Estate Wizard
        </h1>

        <p className="text-lg text-gray-700">
          Powered by <strong>Closing Concierge Company</strong><br />
          <em>Helping people build wealth through Real Estate since 2001.</em><br />
          <span className="text-sm">Brokered by <strong>eXp Realty LLC</strong></span>
        </p>
        <p className="text-lg">
          3 ways to sell your home. 1 trusted expert. 0 nonsense. I’ve helped 4,000+ buyers and sellers — now it’s your turn.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <Card className="relative group shadow-md hover:shadow-xl transition duration-300">
  <CardContent className="flex flex-col items-center p-6">
    <DollarSign className="h-10 w-10 mb-3 text-blue-600" />
    <h2 className="font-semibold text-xl">Cash Offer</h2>
    <p className="text-sm mt-2 text-gray-600">
      Need to sell fast? We have cash Buyers ready to act quickly!
    </p>
    <div className="absolute bottom-full mb-2 w-60 opacity-0 group-hover:opacity-100 transition-opacity bg-white border rounded-md text-sm text-gray-700 p-2 shadow-lg z-10">
      Perfect if you need a quick, hassle-free sale without repairs or showings.
    </div>
  </CardContent>
</Card>


          <Card className="relative group shadow-md hover:shadow-xl transition duration-300">
  <CardContent className="flex flex-col items-center p-6">
    <Hammer className="h-10 w-10 mb-3 text-emerald-600" />
    <h2 className="font-semibold text-xl">Renovate to Sell</h2>
    <p className="text-sm mt-2 text-gray-600">
      We front the cost of upgrades, so you can list your home for top dollar.
    </p>
    <div className="absolute bottom-full mb-2 w-60 opacity-0 group-hover:opacity-100 transition-opacity bg-white border rounded-md text-sm text-gray-700 p-2 shadow-lg z-10">
      Maximize your sale price by improving the home — with no upfront cost. We can also schedule all work to be completed and oversee all contractors for maximimum simplicity!
    </div>
  </CardContent>
</Card>


          <Card className="relative group shadow-md hover:shadow-xl transition duration-300">
  <CardContent className="flex flex-col items-center p-6">
    <Home className="h-10 w-10 mb-3 text-amber-500" />
    <h2 className="font-semibold text-xl">Traditional Sale</h2>
    <p className="text-sm mt-2 text-gray-600">
      Prefer to list? I’ll market it like a wizard and negotiate like a beast.
    </p>
    <div className="absolute bottom-full mb-2 w-60 opacity-0 group-hover:opacity-100 transition-opacity bg-white border rounded-md text-sm text-gray-700 p-2 shadow-lg z-10">
      I can put my 25 years of experience, in all types of markets, to work specially for you! 
    </div>
  </CardContent>
</Card>

        </div>

        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center mb-6">Let’s Talk About Your Options</h3>
          <div className="bg-white rounded-xl shadow-md p-6 max-w-xl mx-auto">
            <form
              action="https://formspree.io/f/mblyekpo"
              method="POST"
              className="grid gap-4"
            >
              <Input name="name" placeholder="Name" required />
              <Input name="email" placeholder="Email" type="email" required />
              <Input name="phone" placeholder="Phone Number" type="tel" required />
              <Textarea name="message" placeholder="Tell me about your situation..." required />
              <Button type="submit" className="mt-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                Request My Free Home Selling Plan
              </Button>
            </form>
          </div>
        </div>

        <div className="text-sm text-gray-500 mt-10 text-center border-t pt-6">
          ⚡ Trusted by thousands. Built on honesty. Proudly serving Colorado homeowners.<br />
          © {new Date().getFullYear()} Closing Concierge Company. All rights reserved.<br />
          Brokerage: <strong>eXp Realty LLC</strong><br />
          <span className="text-xs text-gray-400">
            Rick Stubblefield is a licensed real estate agent in the state of Colorado with eXp Realty LLC. All services provided comply with Colorado Division of Real Estate (DORA) advertising and licensing requirements.
          </span>
        </div>
      </div>
    </div>
  );
}
