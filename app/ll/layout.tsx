import BottomBanner from "@/components/ll/BottomBanner"

export default function BottomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
        {children}
        <BottomBanner/>
    </div>
  )
}