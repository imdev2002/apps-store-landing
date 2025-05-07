import { Button } from '@/components/common'
import Image from 'next/image'
import voucherData from '@/data/voucher.json'

export default function VoucherCard({
  data,
}: {
  data: (typeof voucherData.data)[number]
}) {
  return (
    <div
      className="flex flex-col border rounded-2xl py-4 px-[21px] bg-[#240500F7] gap-2"
      style={{
        borderImageSource:
          'linear-gradient(155.5deg, #C9C9C9 -0.69%, #000000 47.92%, #C9C9C9 100.69%)',
      }}
    >
      <Image
        src={data.image}
        alt="voucher"
        width={327}
        height={228}
        className="object-cover w-full"
      />
      <h3 className="font-bold text-xl">{data.title}</h3>
      <p className="font-inter font-light text-xl trackink-[0.8px]">
        {data.description}
      </p>
      <Button className="gap-x-2.5 flex justify-center">
        <span className="-tracking-[0.2px] line-through text-[#D2CACA]">
          ${data.price}
        </span>
        <span>${data['price-after-discount']}</span>
      </Button>
    </div>
  )
}
