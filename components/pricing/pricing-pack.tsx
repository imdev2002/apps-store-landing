import { Button } from '@/components/common'
import { Globe } from '@/components/icons'
import Image from 'next/image'
import pricingPackData from '@/data/pricing-pack.json'

export default function PricingPack({
  data,
}: {
  data: (typeof pricingPackData.data)[number]
}) {
  return (
    <div
      className="bg-card rounded-2xl px-[21px] py-4 gap-2 flex flex-col"
      style={{
        border: '1px solid',
        borderImageSource:
          'linear-gradient(155.5deg, #C9C9C9 -0.69%, #000000 47.92%, #C9C9C9 100.69%)',
      }}
    >
      <Image
        src={data.image}
        alt="gem"
        width={228}
        height={228}
        className="object-cover mx-auto"
      />
      <h3 className="font-bold text-xl text-center text-grey-light leading-10">
        {data.title}
      </h3>
      <div className="flex justify-between items-center p-3 bg-[#482929] font-semibold">
        <div className="flex gap-x-2.5 items-center">
          <Image src="/images/ruby.png" alt="ruby" width={20} height={20} />
          <span>Gem</span>
        </div>
        <span>{data.quantity}</span>
      </div>
      <div className="flex items-center gap-x-2">
        <Button className="flex-1">${data.price}</Button>
        <Button>
          <Globe />
        </Button>
      </div>
    </div>
  )
}
