'use client';

import React, { useState } from 'react';
import { Check, X, HelpCircle } from 'lucide-react';

export default function PricingPage() {
  const [period, setPeriod] = useState('monthly');
  const [currency, setCurrency] = useState('USD');

  const plans = [
    {
      id: 'bronze',
      name: 'Bronze',
      price: { monthly: 32.45, sixMonths: 162.25 },
      icon: 'https://VirHome.com/images/bronze_membership.png',
      popular: false,
    },
    {
      id: 'silver',
      name: 'Silver',
      price: { monthly: 69.99, sixMonths: 349.95 },
      icon: 'https://VirHome.com/images/silver_membership.png',
      popular: true,
    },
    {
      id: 'gold',
      name: 'Gold',
      price: { monthly: 174.99, sixMonths: 874.95 },
      icon: 'https://VirHome.com/images/gold_membership.png',
      popular: false,
    },
  ];

  const features = [
    { name: 'Personal study plan', all: true, tooltip: 'A step-by-step guide showing your performance in each lesson & which lesson to study next' },
    { name: 'Video lessons (80+)', all: true, tooltip: 'A wide range of video lessons on pronunciation, grammar, vocabulary, conversation, including listening & speaking exercises' },
    { name: 'Written material', all: true, tooltip: 'Written version of the video lessons with new example sentences to widen your range of vocabulary and expressions' },
    { name: 'Written exercises', all: true, tooltip: 'Hundreds of written exercises to assimilate the structures and the vocabulary in order to improve your writing skills' },
    { name: 'Oral exercises', all: true, tooltip: 'Voice recording of lessons and exercises to listen to and repeat in order to improve your spoken fluency' },
    { name: 'Speech recognition', all: true, tooltip: 'Voice recognition software so you can check the clarity of your own pronunciation' },
    { name: 'Progress tracking & feedback (tests)', all: true, tooltip: 'End-of-lesson tests to track your progress and show you which sections of the lesson you must revise' },
    { name: 'WhatsApp Conversation Practice Group', all: true, tooltip: 'Connect with your peers for regular conversation practice' },
    { name: 'Exclusive video lessons (45)', bronze: false, silver: true, gold: true, tooltip: 'Additional video lessons to review the more challenging grammar and pronunciation topics...' },
    { name: 'Offline study', bronze: false, silver: true, gold: true, tooltip: 'Option to download video lessons, audio recordings, and pdfs for offline access' },
    { name: 'Initial level test', bronze: false, silver: false, gold: true, tooltip: 'A 30-minute Zoom call with Minoo to discover your exact level...' },
  ];

  const getPrice = (plan) => {
    const amount = period === 'monthly' ? plan.price.monthly : plan.price.sixMonths;
    const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
    return `${symbol}${amount.toFixed(2)}`;
  };

  const getPeriodText = () => {
    return period === 'monthly' ? 'per month' : 'for 6 months';
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header Controls */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
          {/* Billing Period */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setPeriod('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                period === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPeriod('sixMonths')}
              className={`px-6 py-2 rounded-md text-sm font-semibold transition-all relative ${
                period === 'sixMonths'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              6 Months
              {period === 'sixMonths' && (
                <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  1 month free
                </span>
              )}
            </button>
          </div>

          {/* Currency */}
          <div className="flex bg-gray-100 p-1 rounded-lg">
            {['USD', 'EUR', 'GBP'].map((cur) => (
              <button
                key={cur}
                onClick={() => setCurrency(cur)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  currency === cur ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cur === 'USD' ? '$ USD' : cur === 'EUR' ? '€ EUR' : '£ GBP'}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              {/* Table Header */}
              <thead>
                <tr className="border-b">
                  <th className="p-6 font-bold text-4xl text-gray-800 ">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className={`p-6 text-center ${plan.bg}`}>
                      <img
                        src={plan.icon}
                        alt={plan.name}
                        className="w-30 h-30 mx-auto mb-3 object-contain "
                      />
                      {/* {plan.popular && (
                        <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                          Most popular
                        </span>
                      )} */}
                      <div className="text-3xl font-bold text-gray-800">
                        {getPrice(plan)}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{getPeriodText()}</p>
                      <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 rounded-md transition">
                        Select
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50 transition">
                    <td className="p-4 text-gray-700 font-medium flex items-center gap-2">
                      {feature.name}
                      {feature.tooltip && (
                        <div className="group relative inline-block">
                          <HelpCircle className="w-4 h-4 text-blue-500 cursor-help" />
                          <div className="absolute hidden group-hover:block z-20 bg-gray-800 text-white text-xs p-3 rounded-lg max-w-xs -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full whitespace-nowrap">
                            {feature.tooltip}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"></div>
                          </div>
                        </div>
                      )}
                    </td>
                    {plans.map((plan) => (
                      <td
                        key={plan.id}
                        className={`p-4 text-center ${plan.bg}`}
                      >
                        {feature.all || feature[plan.id] ? (
                          <Check className="w-6 h-6 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Hint */}
        <p className="text-center text-xs text-gray-500 mt-6 md:hidden">
          Swipe left/right to see all plans
        </p>
      </div>
    </div>
  );
} 