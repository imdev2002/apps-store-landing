'use client'
import { Button, Heading } from '@/components/common'
import { Accordion, AccordionItem } from '@/components/common/ui'
import { ShieldCheck } from '@/components/icons'
import { PricingPack } from '@/components/pricing'
import { VoucherCard } from '@/components/voucher'
import Image from 'next/image'
import pricingPackData from '@/data/pricing-pack.json'
import voucherData from '@/data/voucher.json'
import qnaData from '@/data/qna.json'

export default function Home() {
  return (
    <div className="mx-auto container">
      <div className="py-[124px] px-16 flex items-center justify-center">
        <div className="space-y-7 w-full">
          <p className="font-bold text-[64px] leading-10 text-grey-light -tracking-[0.3px]">
            Welcome to Apps Store
          </p>
          <div className="bg-red-dark rounded-[36px] relative p-8 w-full h-[268px]">
            <div className="space-y-3">
              <div className="text-grey-light">
                <p className="font-bold text-5xl leading-10 -tracking-[0.3px]">
                  Get +20% more!
                </p>
                <p className="text-xl leading-10">
                  Offer extra discount to players on Web Shop purchases.
                </p>
              </div>
              <div className="flex items-center gap-x-2 font-semibold text-xl leading-10 text-grey-light">
                <div className="flex items-center gap-x-1">
                  <ShieldCheck />
                  Official Store
                </div>
                <div className="flex items-center gap-x-1">
                  <ShieldCheck />
                  Secure Payments
                </div>
              </div>
              <Button className="rounded-lg uppercase w-[269px]">
                View Offers
              </Button>
            </div>
            <Image
              width={192.22}
              height={376}
              src="/images/spell.png"
              alt="spell"
              className="object-cover absolute -rotate-[12.97deg] right-[175px] top-0 -translate-y-[20%] h-[376px]"
            />
          </div>
        </div>
      </div>
      <div className="pb-[124px] flex flex-col gap-9" id="voucher">
        <Heading className="text-center">Voucher</Heading>
        <div
          className="flex items-center gap-x-2 bg-[linear-gradient(90deg,_#C71A04_0%,_#FF1E02_29.81%,_#C71A04_63.46%,_#FF1E02_100%)] py-4 px-5 border-2 rounded-2xl font-bold leading-10 text-white justify-center mx-auto w-[395px] h-16"
          style={{
            borderImageSource:
              'linear-gradient(91.32deg, #666666 -1.11%, #000000 49.45%, #666666 99.88%)',
          }}
        >
          <span className="text-xs leading-4 rounded-2xl py-1 px-2 bg-white text-[#333333]">
            +200%
          </span>
          <p>Triple the value of the first purchase!</p>
        </div>
        <div className="grid grid-cols-3 gap-x-6 px-[62.5px]">
          {voucherData.data.map((voucher, index) => (
            <VoucherCard key={index} data={voucher} />
          ))}
        </div>
      </div>
      <div className="pb-[124px] flex flex-col gap-9" id="direct-top-up">
        <Heading className="text-center">Direct Top-up</Heading>
        <div
          className="flex items-center gap-x-2 bg-[linear-gradient(90deg,_#C71A04_0%,_#FF1E02_29.81%,_#C71A04_63.46%,_#FF1E02_100%)] py-4 px-5 border-2 rounded-2xl font-bold leading-10 text-white justify-center mx-auto w-[395px] h-16"
          style={{
            borderImageSource:
              'linear-gradient(91.32deg, #666666 -1.11%, #000000 49.45%, #666666 99.88%)',
          }}
        >
          <span className="text-xs leading-4 rounded-2xl py-1 px-2 bg-white text-[#333333]">
            +200%
          </span>
          <p>Triple the value of the first purchase!</p>
        </div>
        <div className="grid grid-cols-4 gap-x-6 px-16">
          {pricingPackData.data.map((pricingPack, index) => (
            <PricingPack key={index} data={pricingPack} />
          ))}
        </div>
      </div>
      <div className="pb-[124px] flex flex-col gap-3 px-6">
        <Accordion>
          {qnaData.data.map((qna, index) => (
            <AccordionItem
              key={index}
              title={qna.question}
              isOpen={false}
              onClick={() => console.log('clicked')}
            >
              <p>{qna.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="pb-[124px] flex flex-col gap-2.5 px-16">
        <div
          className="bg-[linear-gradient(90deg,_#422B98_0%,_#6E48FE_100%)] rounded-4xl p-8 flex gap-x-8 justify-between items-center"
          style={{
            border: '1px solid',
            borderImageSource:
              'linear-gradient(96.75deg, #C9C9C9 -2.49%, #000000 51.75%, #C9C9C9 102.95%)',
          }}
        >
          <div className="space-y-[26px] w-[609px]">
            <span className="font-bold text-xl leading-10 text-white">
              Redeem code
            </span>
            <p className="font-bold text-[40px] leading-[53px] text-[#D9D9D9]">
              Grant discounts and in-game bonuses to your players
            </p>
            <div className="w-[324px] space-y-[14px]">
              <input
                type="text"
                className="w-full py-2.5 px-3 bg-[#F6F6F69E] outline-none border-[#CDCDCD] placeholder:text-[#727272] font-semibold text-black -tracking-[0.2px]"
              />
              <Button className="w-full">Redeem Code</Button>
            </div>
          </div>
          <div className="relative h-[308.02] w-[447px]">
            <Image
              src="/images/gift.png"
              alt="gift"
              width={237.17}
              height={237.46}
              className="object-cover absolute z-[1] left-[86.84px] top-0 -rotate-[-18.14deg]"
            />
            <Image
              src="/images/gift.png"
              alt="gift"
              width={168.8}
              height={167}
              className="object-cover absolute h-[167px] bottom-[17px] left-0 z-[2]"
            />
            <Image
              src="/images/gift.png"
              alt="gift"
              width={92.89}
              height={93}
              className="object-cover absolute bottom-0 z-[3] left-[120px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
